import { useOnDraw } from "./Hooks";

const Canvas = ({ width, height }) => {
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#000000", 5);
  }

  const deleteDrawing = () => {
    try {
      var canvas = document.getElementById("my-canvas");
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      var w = canvas.width;
      canvas.width = 1;
      canvas.width = w;
    } catch (e) {
      console.log("Could not delete.", e);
    }
  };

  const downloadCanvasAsImage = () => {
    try {
      let downloadLink = document.createElement("a");
      downloadLink.setAttribute("download", "CanvasAsImage.png");
      var canvas = document.getElementById("my-canvas");
      let dataURL = canvas.toDataURL("image/png");
      let url = dataURL.replace(
        /^data:image\/png/,
        "data:application/octet-stream"
      );
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    } catch (e) {
      console.log("Could not download the photo", e);
    }
  };

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div>
      <canvas
        id="my-canvas"
        width={width}
        height={height}
        onMouseDown={onCanvasMouseDown}
        style={canvasStyle}
        ref={setCanvasRef}
      />
      <div className="d-flex justify-content-around">
        <button onClick={() => deleteDrawing()} className="brand-button ">
          Delete
        </button>

        <button
          onClick={() => downloadCanvasAsImage()}
          className="brand-button "
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
};
