// import React, { useState, useEffect } from "react";
import "../src/component/App.css"

import ProgressBar from "../src/function/progressBar.jsx"

export default function App() {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
    // const interval = setInterval(() => {
    //   setValue(oldValue => {
    //     const newValue = oldValue + 10;

    //     if (newValue === 100) {
    //       clearInterval(interval);
    //     }

    //     return newValue;
    //   });
    // }, 1000);
  // }, []);
  return (
    <ProgressBar color={"#34dbf4"} width={"150px"} value={75} max={100} />
  );
}
