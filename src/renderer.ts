const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

function fitCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.onresize = fitCanvas;

fitCanvas();
