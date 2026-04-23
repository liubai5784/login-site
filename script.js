const API = "https://ceshi03.2750018830.workers.dev";

async function register(){

  console.log("点击注册");

  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();

  if(!u || !p){
    alert("用户名和密码不能为空");
    return;
  }

  try{
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

  } catch(e){
    console.log("错误:", e);
    alert("请求失败");
  }
}

async function login(){

  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();

  if(!u || !p){
    alert("用户名和密码不能为空");
    return;
  }

  try{
    const res = await fetch(API + "/login", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ user:u, pass:p })
    });

    const data = await res.json();

    if(data.ok){

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);

      alert("登录成功");
    }
    } else {
      alert("登录失败");
    }

  } catch(e){
    console.log("错误:", e);
    alert("请求失败");
  }
}
window.onload = async () => {

  const token = localStorage.getItem("token");

  if(!token) return;

  const res = await fetch(API + "/me", {
    headers: { "Authorization": token }
  });

  const data = await res.json();

  if(data.ok){
    document.body.innerHTML = "欢迎回来：" + data.user;
  } else {
    localStorage.removeItem("token");
  }
}
