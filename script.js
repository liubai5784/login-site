async function register() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({ user, pass })
  });

  document.getElementById("msg").innerText = "注册成功";
}

async function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ user, pass })
  });

  const data = await res.json();

  if (data.ok) {
    document.getElementById("msg").innerText = "登录成功";
  } else {
    document.getElementById("msg").innerText = "失败";
  }
}
