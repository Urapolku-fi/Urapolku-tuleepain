let aisc = document.querySelector("#screen-ai");
let homesc = document.querySelector("#screen-home");

function resetAnimation(elem1, elem2) {
  elem1.style.animationPlayState = "running";
  elem2.style.animationPlayState = "running";
  elem1.style.animationName = "fade-in-up";
  elem2.style.animationName = "fade-out-up";
  setTimeout(() => {
    elem1.style.animationName = "none";
    elem2.style.animationName = "none";
    animationRunning = false;
  }, 700);
}
