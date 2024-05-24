import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <h1 className={props.className}>{props.title}</h1>
    </div>
  );
};

export default Title;
