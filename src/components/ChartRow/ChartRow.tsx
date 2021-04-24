import { Bucket, RenderRowFunc } from "../../types";
import { createChartRow } from "./ChartRowFactory";

interface ChartRowProps {
  index: number;
  width: number;
  start: number;
  end: number;
  rowData: Bucket;
  renderRow: RenderRowFunc;
}

export default function ChartRow({
  index,
  width,
  start,
  end,
  rowData,
  renderRow,
}: ChartRowProps) {
  const RowComponent = createChartRow(index, width, start, end);
  return <div key={index}>{renderRow(rowData, RowComponent)}</div>;
}
