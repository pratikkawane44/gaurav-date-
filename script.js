# FULL FINAL CODE — script.js

```javascript
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

/* NO BUTTON TEXTS */

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

  mainScreen.classList.remove("hidden");

});

/* RUNNING NO BUTTON */

noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * 250 - 125;

  const y = Math.random() * 200 - 100;

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

  successScreen.classList.remove("hidden");

  confetti({
    particleCount:250,
    spread:120,
    origin:{
      y:0.6
    }
  });

});
```
