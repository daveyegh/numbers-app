import React from "react";

import "./index.css";

const NumCard = ({ num, onRemoveClick }) => {
  return (
    <div className="num-card">
      <div className="num-card-top">
        <button type="button" onClick={onRemoveClick}>
          X
        </button>
      </div>
      <div className="num-card-body">{num}</div>
    </div>
  );
};

export default NumCard;
