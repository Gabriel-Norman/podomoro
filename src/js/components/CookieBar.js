import gsap from "gsap";

export default class {
  constructor() {
    this._selectors = {
      bisBar: document.getElementById("biscuits"),
      btn: document.getElementById("biscuits-btn"),
    };

    this._name = "setCookie";
    this._cookie = localStorage.getItem(this._name);

    this._init();
  }

  _init() {
    const { bisBar, btn } = this._selectors;
    const tl = gsap.timeline({ paused: true, reversed: true });

    if (bisBar) {
      tl.to(
        bisBar,
        { autoAlpha: 1, duration: 0.65, ease: "expo.inOut" },
        "same"
      ).to(bisBar, { rotate: 0, duration: 0.4, ease: "expo.inOut" }, "same");

      if (this._cookie == null) {
        tl.play();
      }

      btn.addEventListener("click", () => {
        tl.reverse();
        if (this._cookie == null) {
          localStorage.setItem(this._name, 1);
        }
      });
    }
  }
}
