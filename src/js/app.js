import "vite/modulepreload-polyfill";
import "../styles/style.scss";

// Important to initialize the Global Events
import { Emitter } from "./events";

// import CookieBar from "./components/CookieBar";
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
