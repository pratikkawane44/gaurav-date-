const startBtn = document.getElementById("startBtn");

const introScreen = document.getElementById("introScreen");

const mainScreen = document.getElementById("mainScreen");

const successScreen = document.getElementById("successScreen");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const noTexts = [
  "No",
  "Really?",
  "Think again",
  "Impossible",
  "Try YES ❤️"
];

let index = 0;

/* CONTINUE BUTTON */

startBtn.addEventListener("click", () => {

  introScreen.classList.add("hidden");

  setTimeout(() => {

    mainScreen.classList.remove("hidden");

  }, 600);

});

/* RUNNING NO BUTTON */

noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * 300 - 150;

  const y = Math.random() * 220 - 110;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

  if(index < noTexts.length - 1){

    index++;

    noBtn.innerText =
      noTexts[index];

  }

});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

  mainScreen.classList.add("hidden");

  setTimeout(() => {

    successScreen.classList.remove("hidden");

  }, 700);

  confetti({
    particleCount:250,
    spread:120,
    origin:{
      y:0.6
    }
  });

});
