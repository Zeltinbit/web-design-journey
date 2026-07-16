const words = [
    "Software Engineering Student",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeWord() {

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(eraseWord, 1500);

    }

}

function eraseWord() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseWord, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(typeWord, 300);

    }

}

typeWord();