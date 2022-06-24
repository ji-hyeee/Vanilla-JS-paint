// #2.0 Canvas Events

const canvas = document.getElementById("jsCanvas");
let painting = false;

// 마우스를 뗄 때, 컨버스 밖으로 나갈 때 사용하는 함수 / 반복해서 코드를 쓰므로 그냥 함수로 만들어버리자
function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    // console.log(e) 
    const x = e.offsetX;
    const y = e.offsetY;
    // console.log(x, y)
};
// console.log(e) 로 console 에서 확인하면 너무 많은 정보가 찍힌다
// 여기서 확인하고 싶은 건 'offset' 부분 <<< 캔버스 부분과 관련있는 값 (캔버스내의 좌표)
// client 부분은 윈도우 좌표이다 / 만약 캔버스사이즈 === 윈도우사이즈 면 둘 중 아무거나 써도 상관없음

function onMouseDown(e) {
    // console.log(e)
    // 마우스로 캔버스를 클릭했을 때 boolean 값이 바뀌는 painting 변수
    painting = true;
}

function onMouseUp(e) {
    // 실제로 그림을 그려야 하므로 새로운 코드가 추가될거니까 함수로 만들어주기 !
    stopPainting();
}

if (canvas) {
    // 캔버스 위에서 마우스를 움직일 때의 이벤트 === mousemove
    canvas.addEventListener("mousemove", onMouseMove);

    // 마우스가 캔버스를 클릭하는 순간에 그림 그리기를 시작하고 싶어
    // 캔버스 위에서 마우스를 클릭했을 때 이벤트 === mousedown
    canvas.addEventListener("mousedown", onMouseDown);

    // 마우스를 캔버스에서 떼기 전까지는 그림을 그릴거고
    // 마우스를 떼면 painting 이 다시 false 가 된다 / 그림을 안 그린다는 뜻
    canvas.addEventListener("mouseup", onMouseUp);

    // 마우스가 컨버스 밖으로 나가면 또 그림을 안 그릴거야 / 종료되므로 그냥 바로 이벤트 리스너에서 종료
    canvas.addEventListener("mouseleave", stopPainting);
}




