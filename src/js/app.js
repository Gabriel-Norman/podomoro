// import "./navigation.js";
import "vite/modulepreload-polyfill";
import "../styles/style.scss";

import { debounce } from "lodash";
import store from "../store/AppStore";

import "./cookie.js";

class App {
  constructor() {
    this._setupEventListeners();
    this._handleResize();

    this._init();
  }

  _init() {
    console.log("podomoro 🍅");
  }

  _setupEventListeners() {
    window.addEventListener(
      "resize",
      debounce(this._handleResize.bind(this), 250)
    );
  }

  _handleResize() {
    store.viewport.width = window.innerWidth;
    store.viewport.height = window.innerHeight;
  }
}

new App();
