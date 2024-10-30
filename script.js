gsap.registerPlugin(TextPlugin);

// Hamburget Animation + Mobile nav animation
const hamburger = document.getElementById("hamburger");
let showNavAnimation = gsap.timeline({paused: true});

showNavAnimation.to("#mobile-nav", {duration : 0.2, left: "0"});
showNavAnimation.to("#mobile-nav__list li", {stagger: 0.1, x: "0%", opacity: "1"},"-=0.25");
showNavAnimation.to("#theme-symbol", {duration: 0.2, opacity: 1},"-=0.30");

let isActive = false;
hamburger.addEventListener("click", () => {
  if (!isActive) {
    showNavAnimation.restart();
    isActive = true;
  } else {
    showNavAnimation.reverse(2);
    isActive = false;
  }
  hamburger.classList.toggle("is-active");
});

// For Theme Switching

function toggle(element, ...args) {
  args.forEach((arg) => {
    element.classList.toggle(arg);
  })

}

const themeButtons = document.querySelectorAll(".theme-button");
themeButtons.forEach((themeButton) =>  {
  // Toggle dark theme or light theme 
  themeButton.addEventListener("click",() => {
    themeButton.dataset.theme == "dark" ? document.documentElement.classList.toggle("light-theme") : document.documentElement.classList.toggle("dark-theme");
    themeButton.dataset.theme == "dark" ? "light" : "dark";
    // Change the appearance of theme Icon to its corresponding theme
    const themeIcon = themeButton.childNodes[0];
    toggle(themeIcon, "fa-moon", "fa-sun");
    
  });
})

// Text Animations
const heroHeader = document.getElementById("hero-header");
const caret = document.getElementById("caret");


function blinkCaret() {
  let tl = gsap.timeline();
  tl.set(caret, {opacity: 1});
  tl.to(caret, {opacity: 1, duration: 0.9});
  tl.set(caret, {opacity: 0});
  tl.to(caret, {opacity: 0, duration: .45});
  return tl
}

function heroTextAnimation() {
  let tl = gsap.timeline();
   tl.to(heroHeader, 
    {text: {
      value: "Mark Dechavez",
      duration: 1,
    }
  })
  return tl;
}


let tlHero = gsap.timeline();



tlHero
  .add(blinkCaret().repeat(-1))
  .add(heroTextAnimation(), "=-.3")


