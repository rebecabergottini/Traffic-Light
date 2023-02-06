import React, { useState } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [purple, setPurple] = useState(false);
  let next;

  if (color === "red") next = purple ? "purple" : "green";
  else if (color === "orange") next = "red";
  else if (color === "green") next = "orange";
  else if (color === "purple") next = "green";

  function handleToggle() {
    setPurple(!purple);
    setColor(!purple ? "purple" : "red");
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="traffic-stick"></div>
      <div className="traffic-body">
        <div
          className={
            "traffic-light red-off " + (color === "red" ? "red-on" : "")
          }
          onClick={() => setColor("red")}
        ></div>
        <div
          className={
            "traffic-light orange-off " +
            (color === "orange" ? "orange-on" : "")
          }
          onClick={() => setColor("orange")}
        ></div>
        <div
          className={
            "traffic-light green-off " + (color === "green" ? "green-on" : "")
          }
          onClick={() => setColor("green")}
        ></div>
        {purple && (
          <div
            className={
              "traffic-light purple-off " +
              (color === "purple" ? "purple-on" : "")
            }
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>
      <button
        className="button-17 mt-4"
        role="button"
        onClick={() => setColor(next)}
      >
        Switch
      </button>
      <button
        className="button-17 mt-4"
        role="button"
        onClick={() => handleToggle()}
      >
        Extra color
      </button>
    </div>
  );
}

export default TrafficLight;
