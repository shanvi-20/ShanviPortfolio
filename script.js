
// Words for typing animation

const words = [
    "Computer Engineering Student",
    "Aspiring Software Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


// Typing animation function

function typeEffect() {

    const typingElement =
        document.getElementById("typing");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, speed);

}


// Start animation after page loads

document.addEventListener(
    "DOMContentLoaded",
    function () {

        typeEffect();

        console.log(
            "Welcome to Shanvi's Portfolio!"
        );

    }
);
