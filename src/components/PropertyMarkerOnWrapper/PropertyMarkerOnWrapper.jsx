/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyMarkerOnWrapper = ({ property1, style, wordpressStyle, text = "WordPress" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "marker-on",
  });

  return (
    <div
      className={`property-marker-on-wrapper ${state.property1}`}
      style={style}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="wordpress" style={wordpressStyle}>
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

PropertyMarkerOnWrapper.propTypes = {
  property1: PropTypes.oneOf(["marker-off", "marker-on"]),
  text: PropTypes.string,
};
