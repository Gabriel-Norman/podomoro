import Emitter from "./Emitter";
import gsap from "gsap";

class Raf {
  constructor() {
    this._init();
  }

  _init() {
    gsap.ticker.add(this._handleTick);
  }

  _handleTick = (time, deltaTime) => {
    Emitter.emit("raf", { time, delta: deltaTime });
  };
}

export default new Raf();
