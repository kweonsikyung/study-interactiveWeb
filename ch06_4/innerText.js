const list = document.querySelectorAll(".list li");

for(let el of list){
  el.addEventListener("click", e=>{
    e.preventDefault();
    console.log(e.currentTarget.innerText);
  })
}

const select = document.querySelector("#con")
select.addEventListener("click", ()=>{
  select.innerHTML = "클릭했습니다";
  select.style.backgroundColor = "hotpink"
})