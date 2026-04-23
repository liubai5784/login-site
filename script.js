const API = "https://ceshi03.2750018830.workers.dev";

async function register(){
  const res = await fetch(API + "/register", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      user: document.getElementById("user").value,
      pass: document.getElementById("pass").value
    })
  });

  const data = await res.json();
  alert(data.ok ? "注册成功" : "失败");
}

async function login(){
  const res = await fetch(API + "/login", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      user: document.getElementById("user").value,
      pass: document.getElementById("pass").value
    })
  });

  const data = await res.json();
  alert(data.ok ? "登录成功" : "失败");
}
