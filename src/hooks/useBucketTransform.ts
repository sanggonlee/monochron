import { useRef, useCallback, useState } from "react";
import _ from "lodash";
import { RootBucket, Bucket } from "../types";

export interface Interval {
  start: number;
  end: number;
}

export interface SubscriptionState {
  rows: Bucket[];
  startTime: number;
  time: number;
}

export interface SubscriptionUpdaters {
  setTimeframeStart: Function;
  addBucket: Function;
  reset: Function;
}

export default function useBucketTransform(): [
  SubscriptionState,
  SubscriptionUpdaters
] {
  const startTime = useRef(0);
  const [timeframeStart, setTimeframeStart] = useState(0);
  const [time, setTime] = useState(0);
  const [buckets, setBuckets]: [Bucket[], Function] = useState([]);

  const getActiveBuckets = useCallback(transformBuckets(timeframeStart), [
    timeframeStart,
  ]);

  const addBucket = useCallback(
    (bucket: RootBucket) => {
      if (bucket === undefined) {
        return;
      }

      let { t_start, t_end, entries } = bucket;
      const start = new Date(t_start).getTime();
      const end = new Date(t_end).getTime();

      const mergeBuckets = getActiveBuckets({ start, end });

      if (!startTime.current) {
        startTime.current = start;
        setTimeframeStart(start);
      }

      setTime(end);
      setBuckets(mergeBuckets(entries));
    },
    [getActiveBuckets, setTime, setBuckets, setTimeframeStart]
  );

  const reset = useCallback(() => {
    startTime.current = 0;
    setTimeframeStart(0);
    setTime(0);
  }, [setTimeframeStart, setTime]);

  const rows = buckets.sort((bucket1, bucket2) =>
    bucket1.key < bucket2.key ? -1 : 1
  );

  return [
    {
      rows,
      time,
      startTime: startTime.current,
    },
    {
      addBucket,
      setTimeframeStart,
      reset,
    },
  ];
}

const transformBuckets = _.curry(
  (
    timeframeStart: number,
    interval: Interval,
    newBuckets: Bucket[],
    prevBuckets: Bucket[]
  ): Bucket[] => {
    const prevBucketsByKey = _.keyBy(prevBuckets, "key");
    const overlappingKeys = new Set(
      _.intersection(
        newBuckets.map((b) => b.key),
        prevBuckets.map((b) => b.key)
      )
    );

    const newMergedBuckets = newBuckets.map((newBucket) => {
      const prevBucket = prevBucketsByKey[newBucket.key];
      return !overlappingKeys.has(newBucket.key)
        ? // Newly entered
          withTimeBoundaries(interval, newBucket)
        : // Continuum
          mergeOldAndNewBuckets(
            timeframeStart,
            interval,
            newBucket,
            prevBucket
          );
    });

    return [
      ...newMergedBuckets,
      ...prevBuckets
        .filter((bucket) => !overlappingKeys.has(bucket.key)) // Remove duplicates with new buckets
        .filter((bucket) => bucket.end > timeframeStart), // No need to render the ones out of timeframe
    ].sort((b1: Bucket, b2: Bucket) => (b1.key < b2.key ? -1 : 1));
  }
);

const mergeOldAndNewBuckets = (
  timeframeStart: number,
  { start, end }: Interval,
  newBucket: Bucket,
  prevBucket: Bucket
): Bucket => ({
  key: newBucket.key,
  start: prevBucket.start,
  end,
  data: newBucket.data,
  buckets: transformBuckets(
    timeframeStart,
    { start, end },
    newBucket.buckets ?? [],
    prevBucket.buckets ?? []
  ),
});

const withTimeBoundaries = _.curry(
  ({ start, end }: Interval, bucket: Bucket): Bucket => ({
    ...bucket,
    start: start || bucket.start, // Start time of the top level bucket
    end: end || bucket.end, // End time of the top level bucket
    buckets: (bucket.buckets ?? []).map(withTimeBoundaries({ start, end })),
  })
);
