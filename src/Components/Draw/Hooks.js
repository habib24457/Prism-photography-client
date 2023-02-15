import { useEffect, useRef } from "react";

export function useOnDraw(onDraw) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const prevPointRef = useRef(null);

  const mouseMoveListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  const setCanvasRef = (ref) => {
    canvasRef.current = ref;
  };

  const onCanvasMouseDown = () => {
    isDrawingRef.current = true;
  };

  useEffect(() => {
    const computePointInCanvas = (clientX, clientY) => {
      if (canvasRef.current) {
        const boundingRect = canvasRef.current.getBoundingClientRect();
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top,
        };
      } else {
        return null;
      }
    };
    const initMouseMoveListener = () => {
      const mouseMoveListener = (e) => {
        if (isDrawingRef.current && canvasRef.current) {
          const point = computePointInCanvas(e.clientX, e.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw) onDraw(ctx, point, prevPointRef.current);
          prevPointRef.current = point;
          console.log(point);
        }
      };
      mouseMoveListenerRef.current = mouseMoveListener;
      window.addEventListener("mousemove", mouseMoveListener);
    };

    const initMouseUpListener = () => {
      const listener = () => {
        isDrawingRef.current = false;
        prevPointRef.current = null;
      };
      mouseUpListenerRef.current = listener;
      window.addEventListener("mouseup", listener);
    };

    const cleanup = () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };

    initMouseMoveListener();
    initMouseUpListener();
    return () => cleanup();
  }, [onDraw]);

  return {
    setCanvasRef,
    onCanvasMouseDown,
  };
}
