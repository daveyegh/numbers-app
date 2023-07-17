import React from "react";

import "./index.css";

const Header = ({ onAddNumClick, onSortNumsClick }) => {
  return (
    <header className="header">
      <button className="header-button" onClick={onAddNumClick}>
        Add Num
      </button>
      <button className="header-button" onClick={onSortNumsClick}>
        Sort Nums
      </button>
    </header>
  );
};

export default Header;
