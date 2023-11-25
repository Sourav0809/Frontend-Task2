import React from "react";

const Card = (props) => {
  return (
    <div className=" min-[1400px]:w-[1400px] w-[90%] m-auto mt-20  font-custom font-medium">
      {props.children}
    </div>
  );
};

export default Card;
