let animationRunning = false;
let lastScrollDirection = "up";

document.addEventListener("wheel", (event) => {
  if (
    event.wheelDelta > 0 &&
    lastScrollDirection !== "up" &&
    !animationRunning
  ) {
    //scroll up
    //set variables for preventing user restarting the animation midway
    animationRunning = true;
    lastScrollDirection = "up";

    //stars
    reverse = true;
    playAnimationFor(500);

    //sliding animation
    homesc.classList.remove("slide-up-out");
    aisc.classList.remove("slide-up-in");
    resetAnimation(aisc, homesc);
  } else if (
    event.wheelDelta < 0 &&
    lastScrollDirection !== "down" &&
    !animationRunning
  ) {
    //scroll down
    //set variables for preventing user restarting the animation midway
    animationRunning = true;
    lastScrollDirection = "down";

    //stars
    reverse = false;
    playAnimationFor(500);

    //sliding animation
    aisc.classList.add("slide-up-in");
    homesc.classList.add("slide-up-out");
    resetAnimation(aisc, homesc);
  }
});
