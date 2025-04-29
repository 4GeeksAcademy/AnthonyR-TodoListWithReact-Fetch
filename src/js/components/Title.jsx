import React from "react";

//create your first component
const Title = (props) => {
  return (
    <>
      <h1 className="text-center" style={props.titleStyle}>
        {props.title}
      </h1>
    </>
  );
};

export default Title;