import { useEffect, useRef, useState, MutableRefObject } from "react";

export default function useComputeParentWidth(): [
  MutableRefObject<null>,
  number
] {
  const parentRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      setWidth(entry.contentRect.width);
    });
    resizeObserver.observe(parentRef.current!);

    setWidth((parentRef.current! as Element).getBoundingClientRect().width);
  }, []);

  return [parentRef, width];
}
