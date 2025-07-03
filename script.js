let score = 100;
const scoreEl = document.getElementById("score");
const person = document.getElementById("person");
const container = document.querySelector(".circle-container");

container.addEventListener("click", () => {
  // Анимация нажатия
  container.style.transform = "scale(0.95)";
  person.style.transform = "scale(1.1)";
  
  setTimeout(() => {
    container.style.transform = "scale(1)";
    person.style.transform = "scale(1)";
  }, 150);

  // Увеличиваем очки с небольшим рандомом
  score += Math.floor(Math.random() * 3) + 1;
  scoreEl.textContent = score;
  
  // Анимация текста
  scoreEl.style.transform = "scale(1.2)";
  setTimeout(() => {
    scoreEl.style.transform = "scale(1)";
  }, 150);
});

// Добавим обработчики для иконок
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); // Чтобы не срабатывал клик по контейнеру
    icon.style.transform = "scale(0.9)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 150);
  });
});
