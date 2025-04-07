let swiperCards = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const button = document.querySelector('.button');
const cards = document.querySelectorAll('.card-item');

  button.addEventListener('mouseenter', () => {
    cards.forEach(card => {
      card.classList.add('hovered-by-button');
    });
  });

  button.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.classList.remove('hovered-by-button');
    });
  });

  const buttons = document.querySelectorAll('.card-button');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.closest('.card-item').classList.add('hovered');
    });
  
    button.addEventListener('mouseleave', () => {
      button.closest('.card-item').classList.remove('hovered');
    });
  });


  let timeLeft = 10 * 60; 

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerDisplay = document.getElementById("timer");

    timerDisplay.textContent = 
      `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    if (timeLeft > 0) {
      timeLeft--;
      setTimeout(updateTimer, 1000);
    }
  }

  updateTimer();