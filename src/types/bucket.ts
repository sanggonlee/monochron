export interface RootBucket {
  t_start: string;
  t_end: string;
  entries: Bucket[];
}

export interface Bucket {
  key: string;
  start: number;
  end: number;
  data: unknown;
  buckets?: Bucket[];
}
