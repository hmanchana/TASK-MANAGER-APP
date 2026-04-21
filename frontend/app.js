const API = "https://d3kb4k6oyqodnr.cloudfront.net/api";

async function login() {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);

  window.location.href = "/dashboard.html";
}

async function getTasks() {
  const res = await fetch(`${API}/tasks`, {
    headers: { Authorization: localStorage.getItem("token") }
  });

  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `${t.title} 
      <button onclick="completeTask(${t.id})">✔</button>
      <button onclick="deleteTask(${t.id})">❌</button>`;
    list.appendChild(li);
  });
}

async function addTask() {
  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({ title: taskInput.value })
  });

  getTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
    headers: { Authorization: localStorage.getItem("token") }
  });

  getTasks();
}

async function completeTask(id) {
  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: { Authorization: localStorage.getItem("token") }
  });

  getTasks();
}

if (window.location.pathname.includes("dashboard")) {
  getTasks();
}

/*
It communicates with the backend (API calls) and 
controls navigation between pages (routing)
📡 API calls
👉 Sending/receiving data from server
🔀 Routing
👉 Moving between pages
*/