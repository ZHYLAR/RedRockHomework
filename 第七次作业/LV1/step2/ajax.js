const btn = document.querySelector("button")
btn.addEventListener("click", async ()=>{



const res = await fetch("https://taskapi.chovrio.club/poetry?title=元日", {
  method: "get",
})
const data = await res.json();
console.log(data);


})