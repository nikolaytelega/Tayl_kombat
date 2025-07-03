let score = parseInt(localStorage.getItem('score')) || 0;
const scoreEl = document.getElementById("score");
const person = document.getElementById("person");

scoreEl.textContent = score;

person.addEventListener("click", () => {
  score += 1;
  scoreEl.textContent = score;
  localStorage.setItem('score', score);

  // Анимация
  person.classList.remove("tap-animate");
  void person.offsetWidth; // перезапуск анимации
  person.classList.add("tap-animate");
});
