import { MouseEvent, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ChartRow from "../ChartRow";
import Rulers from "../Rulers";
import useComputeParentWidth from "../../hooks/useComputeParentWidth";
import useMousePositionWithin from "../../hooks/useMousePositionWithin";
import {
  Bucket,
  RealtimeChartOptions,
  RenderRowFunc,
  Timeframe,
} from "../../types";
import {
  mapPosToTime,
  mapTimeToPos,
  parseCssDimension,
} from "../../utils/dimension";

const emptyObject = {};
const emptyFunction = () => {};
const defaultWidth = '100%';
const defaultFrameCycle = 60 * 1000; // 1 minute
const defaultRulerInterval = 5 * 1000; // 5 seconds
const defaultStartTime = 0;
const defaultFormatTime = (pos: number) => "" + pos;

interface RealtimeChartProps {
  width?: number | string;
  startTime?: number;
  currentTime: number;
  options: RealtimeChartOptions;
  rows: Bucket[];
  onClick?: (evt: MouseEvent, mappedTime: number) => void;
  onFrameChange?: (timeframe: Timeframe) => void;
  renderRow: RenderRowFunc;
  containerClass?: string;
  containerStyle?: Record<string, any>;
}

RealtimeChart.propTypes = {
  currentTime: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderRow: PropTypes.func.isRequired,
};

export default function RealtimeChart({
  width = defaultWidth,
  startTime = defaultStartTime,
  options = emptyObject,
  currentTime,
  rows,
  onClick = emptyFunction,
  onFrameChange = emptyFunction,
  renderRow,
  containerClass = "",
  containerStyle = emptyObject,
}: RealtimeChartProps) {
  const {
    frameCycle = defaultFrameCycle,
    rulerInterval = defaultRulerInterval,
    hideRuler = false,
    hideSeeker = false,
    hideTracker = false,
    hideTrackerTooltip = false,
    formatRulerLabel = defaultFormatTime,
  } = options;

  const timeframe = useRef({
    start: startTime,
    end: startTime + frameCycle,
  } as Timeframe);

  const [parentRef, parentWidth] = useComputeParentWidth();
  const numericWidth = parseCssDimension(width, parentWidth);
  const { start, end } = timeframe.current;
  const currentPos = mapTimeToPos(currentTime, start, end, numericWidth);
  const rulerMaxWidth = numericWidth * (rulerInterval / frameCycle) - 1;
  const [mousePos, isMouseWithin] = useMousePositionWithin(parentRef);

  useEffect(() => {
    // Reposition frame.
    if (currentPos > numericWidth) {
      const newStart = start + (end - start) / 2;
      const newTimeframe: Timeframe = {
        start: newStart,
        end: newStart + frameCycle,
      };
      timeframe.current = newTimeframe;
      onFrameChange(newTimeframe);
    }
  }, [start, end, currentPos, numericWidth, frameCycle, onFrameChange]);

  useEffect(() => {
    // Initialize timeframe.
    const newTimeframe: Timeframe = {
      start: startTime,
      end: startTime + frameCycle,
    };
    timeframe.current = newTimeframe;
  }, [startTime, frameCycle]);

  const _renderChartRow = (rowData: Bucket, index: number) => (
    <ChartRow
      index={index}
      key={index}
      width={numericWidth}
      start={start}
      end={end}
      rowData={rowData}
      renderRow={renderRow}
    />
  );

  return (
    <div
      className={`relative m-10 ${containerClass}`}
      style={containerStyle}
      ref={parentRef}
    >
      <div
        className="relative cursor-pointer"
        style={{ width: numericWidth }}
        onClick={(evt) =>
          onClick(evt, mapPosToTime(mousePos.left, start, end, numericWidth))
        }
      >
        {!hideSeeker && (
          <span
            className="absolute h-full border border-blue-400 z-40"
            style={{
              left: currentPos,
            }}
          ></span>
        )}
        {!hideRuler && (
          <Rulers
            totalWidth={numericWidth}
            maxRulerWidth={rulerMaxWidth}
            start={start}
            end={end}
            interval={rulerInterval}
            formatLabel={formatRulerLabel}
          />
        )}
        {!hideTracker && isMouseWithin && (
          <span
            className="absolute w-px h-full border border-blue-400 z-50"
            style={{
              left: mousePos.left,
            }}
          ></span>
        )}
        {!hideTrackerTooltip && isMouseWithin && (
          <span
            className="absolute m-1 p-1 rounded bg-black bg-opacity-75 text-white z-60"
            style={{
              left: mousePos.left,
              bottom: -45,
            }}
          >
            {formatRulerLabel(
              mapPosToTime(mousePos.left, start, end, numericWidth)
            )}
          </span>
        )}
        <div className="overflow-y-auto">{rows.map(_renderChartRow)}</div>
      </div>
    </div>
  );
}
