export interface RealtimeChartOptions {
  frameCycle?: number;
  hideRuler?: boolean;
  hideSeeker?: boolean;
  hideTracker?: boolean;
  hideTrackerTooltip?: boolean;
  rulerInterval?: number;
  formatRulerLabel?: (time: number) => string;
}

export interface TimeseriesChartOptions {
  frameCycle?: number;
  hideRuler?: boolean;
  hideSeeker?: boolean;
  hideTracker?: boolean;
  hideTrackerTooltip?: boolean;
  rulerInterval?: number;
  formatTime?: (time: number) => string;
}
