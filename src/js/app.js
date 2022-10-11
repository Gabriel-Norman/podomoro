import "vite/modulepreload-polyfill";
import "../styles/style.scss";

// Important to initialize the Global Events
import { Emitter } from "./events";

// import CookieBar from "./components/CookieBar";

class App {
  constructor() {
    this._init();
  }

  _init() {
    console.log("podomoro 🍅");
  }
}

new App();
