// Toggle Multiple Classlist at once
export function multiToggleClassList(element, ...args) {
  args.forEach((arg) => {
    element.classList.toggle(arg);
  });
}
// Calculate Yscroll Position
export function progressBarScroll(element) {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  element.style.width = scrolled + "%";
}
