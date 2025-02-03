
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
// const fadeButton1 = document.getElementById("GithubButton");
// const fadeButton2 = document.getElementById("LinkedInButton");
const coverButtons = document.querySelectorAll(".coverbtn");

typewriter = () => {
    typewriterElement.innerHTML = messageArray[0].substring(0, textPosition) + "<span class='blinking'>\u25ae</span>";

    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);}
    else {
        setTimeout(fadeInNextItems, 500);
    }
}
function fadeInNextItems() {
    fadeElement.innerHTML = nextMessage[0]; // Set the next message
    fadeElement.style.opacity = 1;

    // fadeButton1.style.opacity = 1;
    // fadeButton2.style.opacity = 1;

    // fadeButton1.style.pointerEvents = "auto";
    // fadeButton2.style.pointerEvents = "auto";
    coverButtons.forEach((button) => {
        button.style.opacity = 1;
        button.style.pointerEvents = "auto";
    });
}
window.addEventListener("load", typewriter);


const resumebutton = document.querySelector("#resume-button")
function openResume() {
    window.open('resume.pdf', '_blank');
  }

const navbartexts = document.querySelectorAll('.navbartext');

function handleScrollColor(){
    navbartexts.forEach(navbar => {
        if (window.scrollY > 1600) {
            navbar.classList.add('scrolled');
            //navbar.style.color = '#937DAF';
        } else {
            navbar.classList.remove('scrolled');
            //navbar.style.color = 'white';
        }
    });
}

window.addEventListener('scroll', handleScrollColor);


// Change page title when a button is clicked
coverButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.title = `Visiting ${button.href}`;
    });
});