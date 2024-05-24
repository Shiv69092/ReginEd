// eslint-disable-next-line no-unused-vars
import React from "react";

const Description = (props) => {
  return (
    <div className={`description ${props.className}`}>
      <p>{props.description}</p>
    </div>
  );
};

export default Description;
