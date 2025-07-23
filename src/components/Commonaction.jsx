import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Commonaction = ({
  subtitle,
  title,
  className,
  subtitleStyle,
  titleStyle,
}) => {
  return (
    <div className={className}>
      <p
        className={`text-secondary font-vollkorn text-[18px]  ${subtitleStyle}`}
      >
        <span className="text-3xl inline-block align-middle	 mr-2 ">
          {<MdArrowRightAlt />}
        </span>

        {subtitle}
      </p>

      <h2
        className={` font-vollkorn text-[50px] text-primary  mt-3 inline-block font-medium leading-[60px]  ${titleStyle}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Commonaction;
