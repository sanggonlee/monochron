export const mapTimeToPos = (
  time: number,
  start: number,
  end: number,
  totalWidth: number
): number => {
  return (totalWidth * Math.max(time - start, 0)) / (end - start);
};

export const mapPosToTime = (
  pos: number,
  start: number,
  end: number,
  totalWidth: number
): number => {
  return (pos / totalWidth) * (end - start) + start;
};

export const parseCssDimension = (
  val: number | string,
  outOf: number
): number => {
  if (typeof val === "number") {
    return val as number;
  }

  const sval = val as string;
  // Support % value
  if (sval.substring(val.length - 1) === "%") {
    const numericPart = sval.substring(0, sval.length - 1);
    if (!Number.isNaN(Number(numericPart))) {
      return (Number(numericPart) / 100) * outOf;
    }
  }

  console.error(`Cannot parse ${val} as a css dimension`);
  return -1;
};
