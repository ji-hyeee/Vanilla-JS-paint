// #2.2 Recap! 
const canvas = document.getElementById("jsCanvas");

const ctx = canvas.getContext("2d");
// 캔버스에 사이즈 주기
// 2개의 사이즈가 필요하다 css 사이즈 + pixel manipulating 사이즈 <<< 이걸 지정해주기
canvas.width = 700; // 실제 픽셀 사이즈 ~~~ !
canvas.height = 700;

// context 색깔
ctx.strokeStyle = '#2c2c2c'

// context 선 굵기
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

// 마우스는 항상 움직이고 있고 안 보이는 상태로 path를 만들고 있는 것 !
function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (!painting) {
        // path === line
        console.log("creating path in ", x, y); // 확인용 콘솔
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        console.log("creating line in ", x, y); // 확인용 콘솔
        // 마우스를 움직이다가 마우스를 클릭하고 이어서 움직이면
        // 화면에서 path 의 시작점부터 선이 생기기 시작해
        ctx.lineTo(x, y);
        // stroke 으로 진짜 화면에 보일것이다 
        ctx.stroke();
    }
};

function onMouseDown(e) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}