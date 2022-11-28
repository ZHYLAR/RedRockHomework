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

const res = await fetch("https://taskapi.chovrio.club/users/register", {
  method: "post",
  body: JSON.stringify( {
    username: "为什么第一次做的时候没保存代码哼哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
    password: "123"
    // 请求传递的参数
  })
})
const data = await res.json();
console.log(data);

})