import Emitter from "./Emitter";
import gsap from "gsap";

class Raf {
  constructor() {
    this._init();
  }

  _init() {
    gsap.ticker.add(this._handleTick);
  }

  _handleTick = (time) => {
    Emitter.emit("raf", { time });
  };
}

export default new Raf();
