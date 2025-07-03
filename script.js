// Инициализация
let score = parseInt(localStorage.getItem('tyler-score')) || 0;
let perHour = parseInt(localStorage.getItem('tyler-per-hour')) || 0;
const scoreEl = document.getElementById("score");
const perHourEl = document.getElementById("per-hour");
const person = document.getElementById("person");

// Загрузка сохранений
function loadGame() {
  scoreEl.textContent = formatNumber(score);
  perHourEl.textContent = `${formatNumber(perHour)}/час`;
}

// Форматирование чисел
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Клик по персонажу
person.addEventListener("click", () => {
  score += 1;
  localStorage.setItem('tyler-score', score);
  scoreEl.textContent = formatNumber(score);
  
  // Анимация
  person.classList.remove("tap-animate");
  void person.offsetWidth;
  person.classList.add("tap-animate");
});

// Автокликер (имитация улучшений)
setInterval(() => {
  if (perHour > 0) {
    score += perHour / 3600;
    localStorage.setItem('tyler-score', Math.floor(score));
    scoreEl.textContent = formatNumber(Math.floor(score));
  }
}, 1000);

// Инициализация игры
loadGame();
