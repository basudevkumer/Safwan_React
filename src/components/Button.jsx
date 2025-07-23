import React from "react";

const Button = ({ width, height, className, text }) => {
  return (
    <button
      style={{ width, height }}
      className={`flex justify-center items-center  bg-secondary text-fourthcolor relative after:absolute  after:content-[""] after:top-[5px] after:left-[7.2px]  after:border after:border-fourthcolor after:w-[184px] after:h-[54px] text-lg font-jost font-medium leading-3 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
