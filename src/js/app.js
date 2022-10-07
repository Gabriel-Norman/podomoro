import "vite/modulepreload-polyfill";
import "../styles/style.scss";

// Important to initialize the Global Events
import { Emitter } from "./events";

import "./cookie.js";
// import "./navigation.js";

class App {
  constructor() {
    this._init();
  }

  _init() {
    console.log("podomoro 🍅");
  }
}

new App();
