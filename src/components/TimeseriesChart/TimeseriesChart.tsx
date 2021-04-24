import { MouseEvent, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import RealtimeChart from "../RealtimeChart";
import useBucketTransform from "../../hooks/useBucketTransform";
import {
  RenderRowFunc,
  RootBucket,
  Timeframe,
  TimeseriesChartOptions,
} from "../../types";

const emptyObject = {};
const defaultFormatTime = (time: number) => new Date(time).toLocaleTimeString();
const defaultRenderNoDataFallback = () => <div>Waiting for data...</div>;

interface TimeseriesChartProps {
  width?: number | string;
  options: TimeseriesChartOptions;
  newBucket?: RootBucket;
  onClick?: (evt: MouseEvent, mappedTime: number) => void;
  onTimeframeChange?: (newStartTime: number) => void;
  renderRow: RenderRowFunc;
  renderNoDataFallback?: Function;
  containerClass?: string;
  containerStyle?: Record<string, any>;
}

TimeseriesChart.propTypes = {
  renderRow: PropTypes.func.isRequired,
};

export default function TimeseriesChart({
  width,
  options = emptyObject,
  newBucket,
  onClick,
  onTimeframeChange,
  renderRow,
  renderNoDataFallback = defaultRenderNoDataFallback,
  containerClass = "",
  containerStyle = emptyObject,
}: TimeseriesChartProps) {
  const {
    frameCycle,
    rulerInterval,
    hideRuler,
    hideSeeker,
    hideTracker,
    hideTrackerTooltip,
    formatTime = defaultFormatTime,
  } = options;

  const [
    { rows, startTime, time },
    { addBucket, setTimeframeStart, reset },
  ] = useBucketTransform();

  useEffect(() => {
    return () => {
      reset();
    }
  }, []);

  useEffect(() => {
    addBucket(newBucket);
  }, [newBucket]);

  const _setTimeframeStart = useCallback(
    (timeframe: Timeframe) => {
      setTimeframeStart(timeframe.start);
      if (onTimeframeChange) {
        onTimeframeChange(timeframe.start);
      }
    },
    [setTimeframeStart, onTimeframeChange]
  );

  if (!newBucket) {
    return renderNoDataFallback();
  }

  return (
    <RealtimeChart
      width={width}
      startTime={startTime}
      currentTime={time}
      options={{
        frameCycle,
        hideRuler,
        hideSeeker,
        hideTracker,
        hideTrackerTooltip,
        rulerInterval,
        formatRulerLabel: formatTime,
      }}
      containerClass={containerClass}
      containerStyle={containerStyle}
      rows={rows}
      onClick={onClick}
      onFrameChange={_setTimeframeStart}
      renderRow={renderRow}
    />
  );
}
