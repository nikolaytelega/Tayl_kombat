let score = 100;
const scoreEl = document.getElementById("score");
const person = document.getElementById("person");
const container = document.querySelector(".circle-container");

container.addEventListener("click", () => {
  // Увеличение и обратно
  container.style.transform = "scale(1.1)";
  setTimeout(() => {
    container.style.transform = "scale(1)";
  }, 150);

  // Увеличиваем очки
  score += 1;
  scoreEl.textContent = score;
});
