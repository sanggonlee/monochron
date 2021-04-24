import { RowProps } from "../../types";
import { mapTimeToPos } from "../../utils/dimension";

export const createChartRow = (
  index: number,
  width: number,
  start: number,
  end: number
) => {
  return function Row({
    start: rowStart,
    end: rowEnd,
    containerClassName = "",
    containerStyle,
    children,
  }: RowProps) {
    const left = mapTimeToPos(rowStart, start, end, width);
    const right = mapTimeToPos(rowEnd, start, end, width);
    return (
      <div
        key={index}
        className={`relative mx-0 px-0 flex flex-col border ${containerClassName}`}
        style={{ ...containerStyle, left, width: right - left }}
      >
        {children}
      </div>
    );
  };
};
