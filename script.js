// Система счёта
let score = parseInt(localStorage.getItem('score')) || 0;
const scoreEl = document.getElementById("score");
const person = document.getElementById("person");

scoreEl.textContent = score;

// Анимация персонажа
person.addEventListener("click", () => {
  score += 1;
  scoreEl.textContent = score;
  localStorage.setItem('score', score);

  person.classList.remove("tap-animate");
  void person.offsetWidth;
  person.classList.add("tap-animate");
});

// Анимация иконок
document.querySelectorAll('.nav-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    icon.style.transform = "scale(0.9)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 100);
  });
});
