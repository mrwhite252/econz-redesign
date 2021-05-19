// page transition animation

window.onload = () => {
  const transitionElement = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a");

  setTimeout(() => {
    transitionElement.classList.remove("is-active");
  }, 1000);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      let target = anchor.href;

      transitionElement.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 1000);
    });
  }
};

// mobile view navbar toggle

const openNavOne = document.querySelector(".nav-bar-1");
const openNavTwo = document.querySelector(".nav-bar-2");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".first-line", 0.2, { rotate: "45", y: 13 });
    gsap.to(".second-line", 0.2, { x: 50 });
    gsap.to(".third-line", 0.2, { rotate: "-45", y: -13 });
    gsap.to(".nav-content-container", 0.5, {
      clipPath: "circle(2500px at 100% -20%)",
    });
  } else {
    e.target.classList.remove("active");
    gsap.to(".first-line", 0.2, { rotate: "0", y: 0 });
    gsap.to(".second-line", 0.2, { x: 0 });
    gsap.to(".third-line", 0.2, { rotate: "0", y: 0 });
    gsap.to(".nav-content-container", 0.5, {
      clipPath: "circle(50px at 100% -20%)",
    });
  }
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".first-line", 0.2, { rotate: "45", y: 13 });
    gsap.to(".second-line", 0.2, { x: 50 });
    gsap.to(".third-line", 0.2, { rotate: "-45", y: -13 });
    gsap.to(".nav-content-container", 0.5, {
      clipPath: "circle(2500px at 100% -20%)",
    });
  } else {
    e.target.classList.remove("active");
    gsap.to(".first-line", 0.2, { rotate: "0", y: 0 });
    gsap.to(".second-line", 0.2, { x: 0 });
    gsap.to(".third-line", 0.2, { rotate: "0", y: 0 });
    gsap.to(".nav-content-container", 0.5, {
      clipPath: "circle(50px at 100% -20%)",
    });
  }
}

// event listeners
openNavOne.addEventListener("click", navToggle);
openNavTwo.addEventListener("click", navToggle);

// nav bar fix position while scrolling

const nav = document.querySelector(".scroll-nav");

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 150) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
});
