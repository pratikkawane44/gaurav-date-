

const startBtn =
document.getElementById("startBtn");

const introScreen =
document.getElementById("introScreen");

const mainScreen =
document.getElementById("mainScreen");

const successScreen =
document.getElementById("successScreen");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

/* =========================
   INITIAL STATE
========================= */

mainScreen.style.display = "none";

successScreen.style.display = "none";

/* =========================
   NO BUTTON TEXTS
========================= */

const noTexts = [
  "No",
  "Really?",
  "Think again",
  "Impossible",
  "Try YES ❤️"
];

let index = 0;

/* =========================
   CONTINUE BUTTON
========================= */

startBtn.onclick = function(){

  introScreen.style.display = "none";

  mainScreen.style.display = "flex";

};

/* =========================
   RUNNING NO BUTTON
========================= */

noBtn.onmouseover = function(){

  const x =
    Math.random() * 250 - 125;

  const y =
    Math.random() * 200 - 100;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

  if(index < noTexts.length - 1){

    index++;

    noBtn.innerText =
      noTexts[index];

  }

};

/* =========================
   YES BUTTON
========================= */

yesBtn.onclick = function(){

  mainScreen.style.display = "none";

  successScreen.style.display = "flex";

  confetti({

    particleCount:250,

    spread:120,

    origin:{
      y:0.6
    }

  });

};
```
