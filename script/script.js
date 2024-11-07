import { multiToggleClassList, progressBarScroll } from "./helper.js";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

// Sticky Progress Bar
const progressBar = document.getElementById("progress-bar");
window.onscroll = function () {
  progressBarScroll(progressBar);
};

// Text Animations
const heroHeader = document.getElementById("hero-header-text");
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

tlHero.add(blinkCaret().repeat(-1)).add(heroTextAnimation(), "=-.3");

// Terminal Animation
function TerminalDetails() {
  let tl = gsap.timeline();
  tl.from("#terminal__statement--1 .input-statement", {
    text: { value: "", opacity: 0, duration: 1 },
  })
    .set("#terminal__statement--1 .output-statement", { opacity: 1 })
    .from("#terminal__statement--2 .input-statement", {
      text: { value: "", opacity: 0, duration: 4 },
    })
    .set("#terminal__statement--2 .output-statement", { opacity: 1 })
    .from("#terminal__statement--3 .input-statement", {
      text: { value: "", opacity: 0, duration: 2 },
    })
    .set("#terminal__statement--3 .output-statement", { opacity: 1 })
    .from("#terminal__statement--4 .input-statement", {
      text: { value: "", opacity: 0, duration: 1 },
    })
    .set("#terminal__statement--4 .output-statement", { opacity: 1 })
    .from("#terminal__statement--5 .input-statement", {
      text: { value: "", opacity: 0, duration: 1 },
    })
    .set("#terminal__statement--5 .output-statement", { opacity: 1 })
    .to("#terminal__statement--6 .input-statement", { opacity: 1 });

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

// PROJECT CARD ANIMATION
let projectCard = gsap.utils.toArray(".project-card");
projectCard.forEach((card) => {
  console.log(card);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom bottom",
      },
    })
    .from(card, {
      duration: 0.5,
      opacity: 0,
      yPercent: 100,
      ease: "power4",
    });
});

// Force Load on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
