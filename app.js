// #2.4 Brush Size
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

// 선 굵기 변경하기
const range = document.getElementById("jsRange");

// fill 버튼을 누르면 text 가 paint 로 바뀌도록 
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = '#2c2c2c'
ctx.lineWidth = 2.5;

let painting = false;

// 캔버스를 fill 할 변수 선언
let filling = false;

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
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

function changeColorClick(e) {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(e) {
    // console.log(e)
    // input 의 여러 정보 중 value 값을 얻자
    // console.log(e.target.value)
    // path 에 적용하기
    const size = e.target.value;
    ctx.lineWidth = size;
}

// 버튼을 click 하면 text 가 바뀌는 이벤트함수
function handleModeClick(e) {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


Array.from(colors).forEach(el => el.addEventListener("click", changeColorClick));

if (range) {
    range.addEventListener("input", handleRangeChange)
}

// fill 버튼도 활성화해보자
// 색상을 선택하고 컨버스를 누르면 그 색깔로 다 채워지게끔

if (mode) {
    mode.addEventListener("click", handleModeClick);
}