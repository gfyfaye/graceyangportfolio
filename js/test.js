
//stars twinkling

var stars = document.querySelectorAll('.star');

function twinkle(star) {
    // random opacity to twinkle
    star.style.opacity = Math.random() * 0.5 + 0.5;
    // random timeout btw opacity changes
    setTimeout(() => twinkle(star), Math.random() * 600 + 100);
}

function startTwinkling() {
    stars.forEach((star) => {
        twinkle(star); // Start individual twinkling
    });
}

startTwinkling();




//typewriter animation

var messageArray = ["Grace Yang"];
var nextMessage = ["Software Engineer"]
var textPosition = 0;
var speed = 150;
const typewriterElement = document.querySelector("#typewriter");
const fadeElement = document.querySelector("#fadeElement");

typewriter = () => {
    typewriterElement.innerHTML = messageArray[0].substring(0, textPosition) + "<span class='blinking'>\u25ae</span>";

    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);}
    else {
        setTimeout(fadeInNextMessage, 500);
    }
}
function fadeInNextMessage() {
    fadeElement.innerHTML = nextMessage[0]; // Set the next message
    fadeElement.style.opacity = 1; // Trigger the CSS transition
}
window.addEventListener("load", typewriter);

