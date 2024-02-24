// TYPING ANIMATION
function runText() {
  const text = "I am Manuel Gatchalian.";
  const textContainer = document.querySelector(".content h1");
  const delay = 100;

  typeText(text, textContainer, delay);
}

function typeText(text, textContainer, delay) {
  const googleColors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437']; // Google colors: Blue, Green, Yellow, Red

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      const span = document.createElement('span');
      span.textContent = text.charAt(i);
      span.style.color = googleColors[i % googleColors.length]; // Assign a Google color to each letter
      textContainer.appendChild(span);
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
