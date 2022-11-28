const btn = document.querySelector("button")
btn.addEventListener("click", async ()=>{
  /*
    const xhr = new XMLHttpRequest();
xhr.open("get","https://taskapi.chovrio.club/", true);
//xhr.setRequestHeader("", "");// 设置请求头
xhr.send(JSON.stringify({
}));//发送请求，可携带参数
xhr.onreadystatechange = () => {
// 返回存有 XMLHttpRequest 的状态。
// 从 0 到 4 发生变化。0 未连接 1 打开连接 2 发送请求 3 交互 4 完成交互
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {//返回状态码
      var data = xhr.response;
      console.log(data);
      return data;
    }
  }
}*/
//var token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsInVzZXJuYW1lIjoia2siLCJhdmF0YXIiOiIiLCJpYXQiOjE2Njk2NDU4NzIsImV4cCI6MTY3MjIzNzg3Mn0.hlt_LXXta_qXoIogXqNDmj76eqhcQMrNEi_H1rtHyKs"
const res = await fetch("https://taskapi.chovrio.club/chatroom", {
  method: "get",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjcsInVzZXJuYW1lIjoi5Li65LuA5LmI56ys5LiA5qyh5YGa55qE5pe25YCZ5rKh5L-d5a2Y5Luj56CB5ZO85ZO85ZO85ZO85ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWK5ZWKIiwiYXZhdGFyIjoiIiwiaWF0IjoxNjY5NjUwNjEyLCJleHAiOjE2NzIyNDI2MTJ9.keSSfI48OTsVAMtS0JpP1YVvwaSz8IKCYzMU-xuWHRs",
  },
  
})
const data = await res.json();
console.log(data);

})