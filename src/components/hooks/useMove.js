import { useEffect, useRef } from "react";

export function useMove(ref, onMove, { threshold } = { threshold: 100 }) {
  const elemRef = useRef(ref);
  const startTouchY = useRef(null);
  const wheelHandler = (event) => {
    const direction = event.wheelDeltaY > 0 ? "UP" : "DOWN";
    if (typeof onMove === "function") onMove(direction);
    else console.warn("onMove is not a function");
  };

  const touchStartHandler = (event) => {
    if (event.changedTouches[0]) {
      const clientY = event.changedTouches[0].clientY;
      startTouchY.current = clientY;
    }
  };

  const touchEndHandler = (event) => {
    if (event.changedTouches[0]) {
      const eClientY = event.changedTouches[0].clientY;
      const direction = startTouchY.current < eClientY ? "UP" : "DOWN";

      if (typeof onMove === "function") {
        if (Math.abs(eClientY - startTouchY.current) >= threshold)
          onMove(direction);
      } else console.warn("onMove is not a function");
    }
  };

  useEffect(() => {
    elemRef.current = ref.current;
    if (elemRef && elemRef.current) {
      elemRef.current.addEventListener("wheel", wheelHandler);
      elemRef.current.addEventListener("touchstart", touchStartHandler);
      elemRef.current.addEventListener("touchend", touchEndHandler);
    }

    return () => {
      elemRef.current.removeEventListener("wheel", wheelHandler);
      elemRef.current.removeEventListener("touchstart", touchStartHandler);
      elemRef.current.removeEventListener("touchend", touchEndHandler);
    };
  }, []);
}
