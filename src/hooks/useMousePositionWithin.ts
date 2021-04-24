import {
  MouseEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface Position {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const defaultThrottleInterval = 50;

export default function useMousePositionWithin(
  ref: MutableRefObject<any>,
  throttleInterval: number = defaultThrottleInterval
): [Position, boolean] {
  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const [isWithin, setIsWithin] = useState(false);

  const _onMouseMove = useCallback(
    (evt: MouseEvent) => {
      const parentElem = evt.currentTarget.getBoundingClientRect();
      setIsWithin(
        isIn(evt.clientX, parentElem.left, parentElem.right) &&
          isIn(evt.clientY, parentElem.top, parentElem.bottom)
      );
      setMousePos({
        left: evt.clientX - parentElem.left,
        top: evt.clientY - parentElem.top,
        right: parentElem.right - evt.clientX,
        bottom: parentElem.bottom - evt.clientY,
      });
    },
    [setIsWithin, setMousePos]
  );

  const _throttledMouseMove = useCallback(
    (interval: number) => {
      let waiting = false;
      return function (evt: MouseEvent) {
        if (!waiting) {
          _onMouseMove(evt);
          waiting = true;
          setTimeout(function () {
            waiting = false;
          }, interval);
        }
      };
    },
    [_onMouseMove]
  );

  useEffect(() => {
    const domRef = ref.current;

    if (!domRef) {
      return;
    }

    domRef.addEventListener("mousemove", _throttledMouseMove(throttleInterval));

    return () => {
      if (!domRef) {
        return;
      }

      domRef.removeEventListener(
        "mousemove",
        _throttledMouseMove(throttleInterval)
      );
    };
  }, [ref, throttleInterval, _throttledMouseMove]);

  return [mousePos, isWithin];
}

function isIn(pos: number, lower: number, upper: number): boolean {
  return pos >= lower && pos <= upper;
}
