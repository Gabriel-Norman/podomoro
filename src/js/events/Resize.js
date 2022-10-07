import Emitter from "./Emitter";
import { throttle } from "lodash";

import store from "../../store/AppStore";

class Resize {
  constructor() {
    this._init();
  }

  _init() {
    this._getViewportSize();
    this._setCSSVariables();
    window.addEventListener("resize", throttle(this._handleResize, 250));
  }

  _getViewportSize() {
    const { viewport } = store;

    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;
  }

  _setCSSVariables() {
    const { viewport } = store;

    document.documentElement.style.setProperty(
      "--vh",
      `${viewport.height / 100}px`
    );
  }

  _handleResize = () => {
    this._getViewportSize();
    this._setCSSVariables();
    Emitter.emit("resize", {});
  };
}

export default new Resize();
