const lines = document.createElement("div");
lines.className = "lines";
document.body.appendChild(lines);

let scrollPos = 0;
window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  lines.style.backgroundPositionX = `${scrollPos}px`;
});