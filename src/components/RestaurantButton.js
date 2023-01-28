import React from "react";

const RestauranButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      ADD
    </button>
  );
};

export default RestauranButton;
