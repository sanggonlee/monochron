import { ReactElement, ReactNode } from "react";
import { Bucket } from "./bucket";

export interface RowProps {
  start: number;
  end: number;
  containerClassName?: string;
  containerStyle?: Object;

  children: ReactNode;
}

export type RenderRowFunc = (
  value: Bucket,
  RowComponent: (props: RowProps) => ReactElement
) => ReactNode;
