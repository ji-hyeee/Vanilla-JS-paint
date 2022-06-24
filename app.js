// #2.1 2D Context

const canvas = document.getElementById("jsCanvas");

// JS 에서 캔버스 호출하기
const ctx = canvas.getContext("2d");

// context default color
ctx.strokeStyle = '#2c2c2c'
// context default pixel
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // path 가 시작되어 선을 맹글어준다
        ctx.lineTo(x, y);
        // path 가 화면에 보이도록
        ctx.stroke();
    }
};

function onMouseDown(e) {
    painting = true;
}

// line logic 은 onMouseDown 함수에서 다룰 것이므로 onMouseUp 함수는 굳이 필요없다
// function onMouseUp(e) {
//     stopPainting();
// }

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// MDN canvas
// 캔버스는 HTML 요소 + Context 를 갖는다
// Context 는 요소 안에서 픽셀에 접근할 수 있다
// context 는 변수로 간단하게 만들 수 있다

// Path >>> 기본적인 선
// 움직이거나 색으로 채울 수 있고, 닫을 수 있음 등등
// Path 를 만드는 건 기본적으로 선(line)의 시작점을 만드는 것
// 마우스가 캔버스 위에서 움직이면 선이 그려지고 클릭할 때 선이 끝나는


