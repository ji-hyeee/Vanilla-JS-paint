// #2.6 Saving the Image 
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
// save 버튼 이벤트를 만들어보자 ~
const saveBtn = document.getElementById("jsSave")

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// 이미지를 그리면 이미지 배경이 투명(transparent)으로 저장이 된다
// canvas 배경색을 저장하지 않아서 / HTML 만 저장했다
// 캔버스 배경색 지정
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
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
    ctx.fillStyle = color;
}

function handleRangeChange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(e) {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(e) {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(e) {
    console.log(e);
    // 우클릭 방지
    e.preventDefault();
}

function handleSaveClick(e) {
    // canvas 의 데이터를 image 처럼 얻기
    // HTMLCanvasElement.toDataURL()
    // 기본적으로 PNG로 설정된 타입 파라미터에 의해 이미지 표현을 포함한 url 을 반환
    const image = canvas.toDataURL() // "image/jpeg"
    console.log(image); // 그림을 그리고 save 버튼을 눌렀을 때 콘솔에서 url 확인

    // 존재하지 않는 링크를 만들자
    const link = document.createElement("a");
    // download 는 a 태그의 attribute (속성)
    // href 대신 쓸 수 있다 
    // 링크로 이동하는 대신 URL 을 다운로드 하는 것 !
    // href 가 링크를 가지고 / download 는 이름을 가져야 한다!
    link.href = image;
    link.download = "쟈쟈쟌👍";
    // console.log(link);
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    // 캔버스에서 우클릭을 하면 메뉴가 주루루 나온다 >>> context menu
    // 이벤트함수로 지정해줄 수 있다
    canvas.addEventListener("contextmenu", handleCM);
}


Array.from(colors).forEach(el => el.addEventListener("click", changeColorClick));

if (range) {
    range.addEventListener("input", handleRangeChange)
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

// save 버튼 이벤트를 만들어보자 ~
if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}


