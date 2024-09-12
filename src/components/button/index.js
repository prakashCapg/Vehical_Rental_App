import React from "react";

// primary,secondary, disable, tertiary
// radius 

function Button({ type='', label, radius }) {
  return (
    <button type="button" style={ 
        { 
            backgroundColor: `${type === 'primary' ? 'orange' : 'black'}`,
            borderRadius: `{${radius}}`
        }}
    >{label}</button>
  );
}

export default Button;
