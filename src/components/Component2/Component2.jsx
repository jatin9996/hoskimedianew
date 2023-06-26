/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component2 = ({ property1, style, wordpressStyle, text = "WordPress" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "marker-on",
  });

  return (
    <div
      className={`component-2 property-1-0-${state.property1}`}
      style={style}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper" style={wordpressStyle}>
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "marker-on") {
    switch (action) {
      case "click":
        return {
          property1: "marker-off",
        };
    }
  }

  if (state.property1 === "marker-off") {
    switch (action) {
      case "click":
        return {
          property1: "marker-on",
        };
    }
  }

  return state;
}

Component2.propTypes = {
  property1: PropTypes.oneOf(["marker-off", "marker-on"]),
  text: PropTypes.string,
};
