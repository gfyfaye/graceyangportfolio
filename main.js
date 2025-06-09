
document.addEventListener("DOMContentLoaded", () => {
  fetch("src/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});