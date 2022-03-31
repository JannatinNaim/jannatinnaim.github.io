export default function () {
  technologiesWheel();
  window.addEventListener("resize", technologiesWheel);
}

function technologiesWheel() {
  let theta = Math.PI / 4;
  let newTheta = 0;
  let newX = 0;
  let newY = 0;

  let wheelRadius = window.innerWidth >= 425 ? 180 : 120;

  const icons = document.querySelectorAll(
    ".technologies__banner__container:not(.technologies__banner__container--special):not(.technologies__banner__container--orientation)"
  );
  const orientation = document.querySelector(".technologies__banner__container--orientation");

  const center = {
    x: parseFloat(getComputedStyle(orientation).left),
    y: parseFloat(getComputedStyle(orientation).top),
  };

  icons.forEach((icon, index) => {
    newTheta = theta * index;
    newX = Math.cos(newTheta) * wheelRadius;
    newY = Math.sin(newTheta) * wheelRadius;

    icon.style.left = center.x + newX + "px";
    icon.style.top = center.y + -1 * newY + "px";
  });
}
