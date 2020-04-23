document
  .getElementById("sidebarCollapse")
  .addEventListener("click", toggleActive);

function toggleActive() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("sidebarCollapse").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("icon").classList.toggle("fa-bars");
  document.getElementById("icon").classList.toggle("fa-window-close");
}
