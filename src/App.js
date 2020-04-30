import React from "react";
// import RangeSlider from "./SliderComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <h1>
          Mateen Gowhar Raina
          <span>&nbsp;</span>
        </h1>
      </div>
      <div
        style={{
          margin: "50px 0px 0px",
          textAlign: "center",
          color: "#d7b94c",
          width: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          Find me on <span>&nbsp;</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "10px auto",
          justifyContent: "space-evenly",
        }}
      >
        <div class="wrapper">
          <h1>
            <a
              style={{ textDecoration: "none", color: "#d7b94c" }}
              href="https://twitter.com/mateen_raina"
            >
              Twitter
            </a>
            <span>&nbsp;</span>
          </h1>
        </div>
        <div class="wrapper">
          <h1>
            <a
              style={{ textDecoration: "none", color: "#d7b94c" }}
              href="https://www.instagram.com/mateen_raina/"
            >
              Instagram
            </a>
            <span>&nbsp;</span>
          </h1>
        </div>
      </div>
      {/* <div className="topText" style={{ marginBottom: "30px" }}>
        Hi, this is a Range Slider Component. Hope you like it :)
      </div>
      <RangeSlider
        min={0}
        max={50}
        steps={1}
        stepUnit={"₹"}
        dotColor="blue"
        rangeColor="blue"
        outerColor="#c5c3c3"
        valueHandler={(e) => console.log(e)}
      />
      <div className="bottomText" style={{ marginTop: "30px" }}>
        made by react developer {" (murtaz25raina)"}.
      </div> */}
    </div>
  );
}

export default App;
