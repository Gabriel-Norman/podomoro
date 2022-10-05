import gsap from "gsap";

const bisBar = document.getElementById("biscuits");
const btn = document.getElementById("biscuits-btn");
let tl = gsap.timeline({ paused: true, reversed: true });
const name = "setCookie";
const cookie = localStorage.getItem(name);

if (bisBar) {
  tl.to(
    bisBar,
    { autoAlpha: 1, duration: 0.65, ease: "expo.inOut" },
    "same"
  ).to(bisBar, { rotate: 0, duration: 0.4, ease: "expo.inOut" }, "same");

  if (cookie == null) {
    tl.play();
  }

  btn.addEventListener("click", () => {
    tl.reverse();
    if (cookie == null) {
      localStorage.setItem(name, 1);
    }
  });
}
