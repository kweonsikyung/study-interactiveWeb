const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; //제어할 숫자 값 0으로 초기화

//btnPlus버튼을 클릭할 때마다
btnPlus.addEventListener("click", ()=>{
    //num값을 1씩 증가
    num++;
    btnPlus.style.backgroundColor = "hotpink"
    console.log(num);
});

//btnMinus버튼을 클릭할 때마다
btnMinus.addEventListener("click", ()=>{
    //num값을 1씩 감소
    num--;
    console.log(num);
})

// git수정용