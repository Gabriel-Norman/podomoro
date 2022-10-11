import Emitter from "./Emitter";

import { MediaQueries, DeviceState } from "../../data/MediaQueries";

class MqTracker {
  constructor() {
    this.deviceState = DeviceState;
    this.mediaQueries = MediaQueries;
    this.queryListMatches = [];

    this.currentIndex = 0;
    this.currentStateName = "";

    this._debugger();
    this._init();
  }

  _debugger() {
    const debugWrapper = document.createElement("div");
    debugWrapper.className = "mq-debugger";
    Object.assign(debugWrapper.style, {
      position: "fixed",
      bottom: 0,
      left: 0,
      padding: "3px 7px 3px 5px",
      borderTopRightRadius: "5px",
      backgroundColor: "red",
    });

    const debugText = document.createElement("p");
    debugText.className = "mq-debugger__text";
    Object.assign(debugText.style, {
      margin: 0,
      fontFamily: "sans-serif",
      fontSize: "12px",
      color: "white",
    });

    debugWrapper.appendChild(debugText);
    document.body.appendChild(debugWrapper);
  }

  _updateDebugger(name) {
    const debugText = document.querySelector(".mq-debugger__text");
    if (debugText) debugText.innerHTML = name;
  }

  _init() {
    this.deviceStateNames = Object.keys(this.deviceState).filter((key) =>
      isNaN(parseInt(key, 10))
    );

    this.queryList = this.deviceStateNames.map((stateName) => {
      const mediaQuery = this.mediaQueries[stateName];

      if (!mediaQuery) {
        throw new Error(
          `[MqTracker] DeviceState ${stateName} not found in the mediaQueries array.`
        );
      }
      return window.matchMedia(mediaQuery);
    });

    this.queryList.forEach((mql) => {
      this.queryListMatches.push(mql.matches);
    });
    this._updateFromMatchMedia();

    Emitter.on("resize", this._handleResize);
  }

  _updateFromMatchMedia() {
    const numQueries = this.queryListMatches.length;

    for (let i = 0; i < numQueries; i += 1) {
      const index = numQueries - 1 - i;

      if (this.queryListMatches[index]) {
        this.currentIndex = index;
        this.currentStateName = this.deviceStateNames[index];

        Emitter.emit("mq:update", {
          index: this.currentIndex,
          stateName: this.currentStateName,
        });

        this._updateDebugger(this.currentStateName);

        break;
      }
    }
  }

  _handleResize = () => {
    this.queryList.forEach((mql, index) => {
      if (mql.matches !== this.queryListMatches[index]) {
        this.queryListMatches[index] = mql.matches;
        this._updateFromMatchMedia();
      }
    });
  };
}

export default new MqTracker();
