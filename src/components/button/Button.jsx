// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button className={props.className}>{props.buttonName}</button>
    </div>
  );
};

export default Button;
