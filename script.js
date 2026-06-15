 
const continueBtn =
document.getElementById("continueBtn");

const introSection =
document.getElementById("introSection");

const mainSection =
document.getElementById("mainSection");

const successSection =
document.getElementById("successSection");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

/* CONTINUE BUTTON */

continueBtn.addEventListener("click", () => {

  introSection.classList.add("hidden");

  mainSection.classList.remove("hidden");

});

/* NO BUTTON */

const texts = [
  "No",
  "Really?",
  "Think again",
  "Impossible",
  "Try YES ❤️"
];

let index = 0;

noBtn.addEventListener("mouseover", () => {

  const x =
    Math.random() * 250 - 125;

  const y =
    Math.random() * 200 - 100;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

  if(index < texts.length - 1){

    index++;

    noBtn.innerText =
      texts[index];

  }

});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

  mainSection.classList.add("hidden");

  successSection.classList.remove("hidden");

  confetti({
    particleCount:250,
    spread:120,
    origin:{
      y:0.6
    }
  });

});
```
