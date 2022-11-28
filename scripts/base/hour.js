const date = document.getElementById("date");

setInterval(() => {
  date.textContent = new Date().toLocaleTimeString("fr", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}, 1000);
