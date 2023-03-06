const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
  e.preventDefault(); /*이벤트 기본 기능 막기*/
  console.log("링크를 클릭했습니다.");
});