import { forwardRef } from "react";
import { ButtonProps } from "~/components/primitives/buttons/types";

const Button = forwardRef(
  (
    {
      label,
      icon,
      containerStyle = "",
      labelStyle = "",
      clazzName = "",
    }: ButtonProps,
    ref: any
  ) => {
    return (
      <div ref={ref} className={`btn ${containerStyle} ${clazzName}`}>
        <span className={`btn-label ${labelStyle}`}>{label}</span>
        {icon}
      </div>
    );
  }
);

export default Button;
