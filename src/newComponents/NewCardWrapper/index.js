import React from "react";
import "./index.css";

const NewCardWrapper = ({ children, height, border }) => {
  return (
    <div className="card-wrapper" style={{ height: height, border: border }}>
      {children}
    </div>
  );
};

export default NewCardWrapper;
