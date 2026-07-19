// Simple typewriter effect for the hero terminal.
// Skips straight to full text if the user prefers reduced motion.

function typeLine(el, text, speed = 28) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !el) {
    if (el) el.textContent = text;
    return;
  }
  let i = 0;
  el.textContent = "";
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-typewriter]");
  if (target) {
    const fullText = target.getAttribute("data-typewriter");
    typeLine(target, fullText);
  }
});
