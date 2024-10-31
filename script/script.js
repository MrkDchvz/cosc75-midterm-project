import { multiToggleClassList } from "./helper.js";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const themeButtons = document.querySelectorAll(".theme-button");
themeButtons.forEach((themeButton) => {
  // Toggle dark theme or light theme
  themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    // Change the appearance of theme Icon to its corresponding theme
    const themeIcon = document.querySelector(".theme-symbol");
    multiToggleClassList(themeIcon, "fa-moon", "fa-sun");
  });
});
// Loading Screen
function loadScreen() {
  let tl = gsap.timeline();
  tl.from("#loading-letter", {
    duration: 1.5,
    opacity: 0,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1,
  })
    .to("#loading-letter", {
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        gsap.set("#loading-letter", { display: "none" });
      },
    })
    .to(
      "#loading-screen--left",
      {
        y: "-100%",
        duration: 0.2,
        onComplete: () => {
          gsap.set("#loading-screen--left", { display: "none" });
        },
      },
      "parralel2",
    )
    .to(
      "#loading-screen--right",
      {
        y: "100%",
        duration: 0.2,
        onComplete: () => {
          gsap.set("#loading-screen--right", { display: "none" });
          document.body.classList.toggle("overflow-hidden");
        },
      },
      "parralel2",
    );
  return tl;
}

// Text Animations
const heroHeader = document.getElementById("hero-header");
const caret = document.getElementById("caret");

function blinkCaret() {
  let tl = gsap.timeline();
  tl.set(caret, { opacity: 1 });
  tl.to(caret, { opacity: 1, duration: 0.9 });
  tl.set(caret, { opacity: 0 });
  tl.to(caret, { opacity: 0, duration: 0.45 });
  return tl;
}

function heroTextAnimation() {
  let tl = gsap.timeline();
  tl.to(heroHeader, {
    text: {
      value: "Mark Dechavez",
      duration: 1,
    },
  });
  return tl;
}

let tlHero = gsap.timeline();

tlHero
  .add(loadScreen())
  .add(blinkCaret().repeat(-1))
  .add(heroTextAnimation(), "=-.3");

// Terminal Animation
function TerminalDetails() {
  let tl = gsap.timeline();
  tl.from("#terminal__statement--1 .input-statement", {
    text: { value: "", duration: 1 },
  })
    .set("#terminal__statement--1 .output-statement", { opacity: 1 })
    .from("#terminal__statement--2 .input-statement", {
      text: { value: "", duration: 4 },
    })
    .set("#terminal__statement--2 .output-statement", { opacity: 1 })
    .from("#terminal__statement--3 .input-statement", {
      text: { value: "", duration: 2 },
    })
    .set("#terminal__statement--3 .output-statement", { opacity: 1 })
    .from("#terminal__statement--4 .input-statement", {
      text: { value: "", duration: 1 },
    })
    .set("#terminal__statement--4 .output-statement", { opacity: 1 })
    .to("#terminal__statement--5 .input-statement", { opacity: 1 });

  return tl;
}

let tlTerminal = gsap.timeline({
  scrollTrigger: {
    trigger: "#terminal",
    start: "center center",
    end: "bottom bottom",
  },
});

tlTerminal.add(TerminalDetails());

// Force Load on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// const railItems = document.querySelectorAll(".rail-item");
// const loop = horizontalLoop(railItems, { reversed: true, default: 5});
