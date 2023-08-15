// import "./game";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { rotateShowElement } from "./animation";
import "./App.scss";
function App() {
  useLayoutEffect(() => {
    //
    // rotateShowElement("#game");
    // gsap.to("#game", { x: 200, duration: 1 });
  }, []);
  return <div id="game"></div>;
}

export default App;
