import { mapTimeToPos } from "../../utils/dimension";

interface RulersProps {
  totalWidth: number;
  maxRulerWidth: number;
  start: number;
  end: number;
  interval: number;
  formatLabel: (time: number) => string;
}

export default function Rulers({
  totalWidth,
  maxRulerWidth,
  start,
  end,
  interval,
  formatLabel,
}: RulersProps) {
  const _renderRuler = (time: number, index: number) => (
    <span
      key={index}
      className="absolute h-full flex flex-col justify-start pointer-events-none"
      style={{
        left: mapTimeToPos(time, start, end, totalWidth),
        maxWidth: maxRulerWidth,
      }}
    >
      <span className="w-px h-full bg-gray-200"></span>
      <span className="h-0 transform -translate-x-1/2 max-w-sm">
        {formatLabel(time)}
      </span>
    </span>
  );

  return <>{getRulerTimes(start, end, interval).map(_renderRuler)}</>;
}

function getNextRulerTime(time: number, interval: number) {
  return Math.ceil(time / interval) * interval;
};

function getRulerTimes(
  start: number,
  end: number,
  interval: number
): number[] {
  const first = getNextRulerTime(start, interval);
  let rulerTimes = [];
  for (let curr = first; curr < end; curr += interval) {
    rulerTimes.push(curr);
  }
  return rulerTimes;
};