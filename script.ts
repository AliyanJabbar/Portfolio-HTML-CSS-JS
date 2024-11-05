let text = document.getElementById("typing-effect")

const words = ["Frontend Developer", "Web Developer", "UI/UX Designer", "Next.JS Developer"]

let wordIndex = 0
let charIndex = 0
let isdeleting = false //to control typing/deleting state
const typeEffect= ()=>{
    let currentWord = words[wordIndex]
    let currentChar = currentWord.substring(0,charIndex)
    text ? text.textContent = currentChar : ""
    // it'll move towards the next character of the same word
    if(!isdeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,150);
    }else if(isdeleting && charIndex > 0){
        // it'll remove characters when the word is completed
        charIndex--;
        setTimeout(typeEffect,90);
    }else{
        // ager word finish ho gia hai to dusre word pe chale jaye ga
        isdeleting = !isdeleting //Automatically switches between typing and deleting when reaching word boundaries
        setTimeout(typeEffect,1000)
        wordIndex = !isdeleting ?(wordIndex +1) % words.length : wordIndex
    }
}

typeEffect()
