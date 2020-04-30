import React from "react";
import RangeSlider from "./SliderComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RangeSlider
        min={0}
        max={50000}
        steps={100}
        stepUnit={"₹"}
        dotColor="blue"
        rangeColor="blue"
        outerColor="#c5c3c3"
        valueHandler={(e) => console.log(e)}
      />
    </div>
  );
}

export default App;
