import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 1,
      }}
      type="Oval"
    />
  );
};

export default Spinner;
