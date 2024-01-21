function runText() {
    const text = "I am Manuel Gatchalian.";
    const textContainer = document.querySelector(".hero h1");
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

window.addEventListener("DOMContentLoaded", runText);