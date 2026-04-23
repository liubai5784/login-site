const API = "https://ceshi03.2750018830.workers.dev";

async function register(){

  const u = user.value.trim();
  const p = pass.value.trim();

  if(!u || !p){
    alert("用户名和密码不能为空");
    return;
  }

  const res = await fetch(API + "/register", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ user:u, pass:p })
  });

  const data = await res.json();
  if(data.ok){
    alert("注册成功");
  } else {
    alert(data.msg || "注册失败");
}

async function login(){

  const u = user.value.trim();
  const p = pass.value.trim();

  if(!u || !p){
    alert("用户名和密码不能为空");
    return;
  }

  const res = await fetch(API + "/login", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ user:u, pass:p })
  });

  const data = await res.json();
  alert(data.ok ? "登录成功" : "失败");
}
