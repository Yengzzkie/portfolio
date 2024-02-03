// TYPING ANIMATION
function runText() {
  const text = "I am Manuel Gatchalian.";
  const textContainer = document.querySelector(".content h1");
  const delay = 100;

  typeText(text, textContainer, delay);
}

function typeText(text, textContainer, delay) {
  for (let i = 0; i < text.length; i++) {
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

// THEME TOGGLE

const switchTheme = document.getElementById("darkModeToggle");

switchTheme.addEventListener('click', function() {
 document.body.classList.toggle('dark');
})
