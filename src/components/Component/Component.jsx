/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, style, CTAStyle, text = "CTA" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "main",
  });

  return (
    <div
      className={`component ${state.property1}`}
      style={style}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="CTA" style={CTAStyle}>
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hocer",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "main",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["main", "hocer", "press"]),
  text: PropTypes.string,
};
