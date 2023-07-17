import React from "react";

import "./index.css";

const Instructions = () => {
  return (
    <div className="instructions">
      <p>
        Press the "add card" button to add new card
        <br />
        Use the "sort cards" button to sort cards by the increase
        <br />
        Press X button to in the top right to delete them.
      </p>
    </div>
  );
};

export default Instructions;
