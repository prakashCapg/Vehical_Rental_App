import React from "react";
import "./index.css";

const NewButton = ({ label, type = "", onClick }) => {
  const buttonClass = `N_btn N_${type}  } `;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default NewButton;
