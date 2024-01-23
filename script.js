// TYPING ANIMATION
function runText() {
    const text = "I am Manuel Gatchalian.";
    const textContainer = document.querySelector(".content h1");
    const delay = 100;

    typeText(text, textContainer, delay);
}

function typeText(text, textContainer, delay) {
    for(let i = 0; i < text.length; i++) {
        setTimeout(() => {
            textContainer.textContent += text.charAt(i);
        }, delay * i);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        runText();
    }, 1000);
});



// STARS GENERATOR
document.addEventListener('DOMContentLoaded', function () {

    const starsContainer = document.querySelector('.stars');
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      starsContainer.appendChild(star);
    }
  });

// MOON AND SUN TOGGLE

const sunMoonBtn = document.querySelector(".toggle-theme")

sunMoonBtn.addEventListener('click', function() {
    const moon = document.querySelector('.moon');
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about');
    const contact = document.querySelector(".contact");
    const projects = document.querySelector(".projects");

    moon.classList.toggle('sun');
    hero.classList.toggle("light");
    about.classList.toggle("light");
    contact.classList.toggle("light");
    projects.classList.toggle("light");
})


// PARALLAX EFFECT FOR MOON AND SUN
document.addEventListener("DOMContentLoaded", function () {
  const moon = document.querySelector(".moon");

  const parallaxSensitivity = 0.5;

  window.addEventListener("scroll", function () {
    const scrolledHeight = window.scrollY;
    const parallaxValue = scrolledHeight * parallaxSensitivity;

    moon.style.transform = `translateY(${parallaxValue}px)`;
  });
});


