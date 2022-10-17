const canvas = document.getElementById("canvas2");
const context = canvas.getContext('2d');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

var x = 25;
var y = 30;
var vx = 1;
var vy = 2;
var radius = 20;

function render() {
    requestAnimationFrame(render);
 
        // It clears the specified pixels within
        // the given rectangle
        context.clearRect(0, 0, canvasWidth, canvasHeight);
 
        // Creating a circle
        context.beginPath();
        context.strokeStyle = "black";
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.stroke();
 
        // Conditions so that the ball bounces
        // from the edges
        if (radius + x > canvasWidth)
            vx = 0 - vx;
 
        if (x - radius <= 0)
            vx = 0 - vx;
 
        if (y + radius > canvasHeight)
            vy = 0 - vy;
 
        if (y - radius <= 0)
            vy = 0 - vy;
 
        x = x + vx;
        y = y + vy;
}

render();