import React, { useState, useEffect } from "react";

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="progress">
      <span style={{ color: `${value < 45 ? "black" : "white"}` }}>
        {value?.toFixed()} %
      </span>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        // style={{ width: `${value}%` }}
        style={{ transform: `scaleX(${value}%)`, transformOrigin: "left" }}
      />
    </div>
  );
};

export default ProgressBar;
