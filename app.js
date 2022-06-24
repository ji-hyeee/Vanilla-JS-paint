// #2.3 Changing Color 
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// path color
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = '#2c2c2c'
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
        // console.log("creating path in ", x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // console.log("creating line in ", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

// function onMouseDown(e) {
//     painting = true;
// }

// 색상변경 이벤트 함수
function changeColorClick(e) {
    // console.log(e.target.style);
    // 요소를 선택할 때마다 정보를 콘솔에서 확인할 수 있다
    // 그 많은 정보들 중 우리가 사용하고 싶은 건 
    // backgroundColor ~
    const color = e.target.style.backgroundColor;
    console.log(color);

    // 이제 context color 를 변경해야 한다
    // 지금은 검은색 비스무리한 걸로 default 값이 지정되어 있다
    // strokeStyle 을 override 하기 / 덮어쓰기
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// console.log(colors); // <<< HTML collection 이 나온다
// Array.from 메소드는 object로부터 array 를 만든다
// console.log(Array.from(colors));

// 배열의 요소에 이벤트 만들어주기
Array.from(colors).forEach(el => el.addEventListener("click", changeColorClick));

// 이번에 배운 것
// 배열을 만들고
// 그 배열에 이벤트를 만들고
// 이벤트 함수에서 색상 타겟을 가져오고
// 그 타켓을 context 에 연결해줬다
// wow