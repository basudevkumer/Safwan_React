import React from "react";

const List = ({ text, className }) => {
  return (
    <li
      className={`list-none hover:text-secondary cursor-pointer text-primary font-[18px] inline-block font-jost font-normal ${className}`}
    >
      {text}
    </li>
  );
};

export default List;
