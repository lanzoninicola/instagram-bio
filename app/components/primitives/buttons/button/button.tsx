import { forwardRef } from "react";
import { ButtonProps } from "~/components/primitives/buttons/types";

const Button = forwardRef(
  (
    {
      variant,
      color,
      label,
      icon,
      containerStyle = "",
      labelStyle = "",
    }: ButtonProps,
    ref: any
  ) => {
    let style = "";

    if (variant === "outline" && color === "yellow") {
      style = "btn-yellow-outline";
    }

    if (variant === "outline" && color === "green") {
      style = "btn-green-outline";
    }

    if (variant === "filled" && color === "yellow") {
      style = "btn-yellow-filled";
    }

    if (variant === "filled" && color === "green") {
      style = "btn-green-filled";
    }

    return (
      <div ref={ref} className={`btn ${style} ${containerStyle}`}>
        <span className={`btn-label ${labelStyle}`}>{label}</span>
        {icon}
      </div>
    );
  }
);

export default Button;
