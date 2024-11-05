// For Typing Effect
var text = document.getElementById("typing-effect");
var words = [
    "Frontend Developer",
    "Web Developer",
    "UI/UX Designer",
    "Next.JS Developer",
];
var wordIndex = 0;
var charIndex = 0;
var isdeleting = false; //to control typing/deleting state
var typeEffect = function () {
    var currentWord = words[wordIndex];
    var currentChar = currentWord.substring(0, charIndex);
    text ? (text.textContent = currentChar) : "";
    // it'll move towards the next character of the same word
    if (!isdeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    }
    else if (isdeleting && charIndex > 0) {
        // it'll remove characters when the word is completed
        charIndex--;
        setTimeout(typeEffect, 90);
    }
    else {
        // ager word finish ho gia hai to dusre word pe chale jaye ga
        isdeleting = !isdeleting; //Automatically switches between typing and deleting when reaching word boundaries
        setTimeout(typeEffect, 1000);
        wordIndex = !isdeleting ? (wordIndex + 1) % words.length : wordIndex;
    }
};
typeEffect();
// For Drop Down Menu
var menuIcon = document.getElementById("menu-icon");
var navbar = document.querySelector(".navbar");
menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.addEventListener("click", function () {
    console.log("event listener triggered");
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.classList.toggle("bx-x");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
});
