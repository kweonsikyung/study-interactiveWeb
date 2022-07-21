// const myName = "홍길동";
// console.log("내 이름은 myName입니다.");

/* 문자 안에 변수 삽입하기*/
const test = document.querySelector("#test")
test.addEventListener("click", ()=>{
    const myName = "홍길동";
    test.innerText = `내이름은 ${myName}입니다.`
    console.log("test success!");
})
// const myName = "홍길동";
// console.log(`내이름은 ${myName}입니다.`);
