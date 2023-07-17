import { memo } from "react";

import NumCard from "../NumCard";

import "./index.css";

const NumCards = ({ nums, onNumRemoveClick }) => {
  return (
    <div className="num-cards">
      {nums.map((num) => {
        return (
          <NumCard
            key={num}
            num={num}
            onRemoveClick={() => onNumRemoveClick(num)}
          />
        );
      })}
    </div>
  );
};

export default memo(NumCards);
