import React from "react";
import Header from "../../pages/header";
const Layouts = (props) => {
  return (
    <div>
      <Header text={props.textP}/>
      {props.children}
    </div>
  );
};
export default Layouts;
