let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

let mouseX = 0, mouseY = 0;
let isDrawing = false;

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


document.querySelectorAll('.colorArea .color').forEach
    (color => {
        color.addEventListener('click', colorClickEvent);
    })

function colorClickEvent(e) {

    let color = e.target.getAttribute('data-color');

    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');

}

function mouseDownEvent(e) {
    isDrawing = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    //maybe an out of bound event to stop line calculation
    if (isDrawing) {

        Draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
    }

}

function mouseUpEvent(e) {

    isDrawing = false;
}

function Draw(x, y) {

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = x;
    mouseY = y;
}