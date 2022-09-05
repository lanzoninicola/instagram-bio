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
      clazzName = "",
    }: ButtonProps,
    ref: any
  ) => {
    let btnVariant = "";

    if (variant === "outline" && color === "yellow") {
      btnVariant = "btn-yellow-outline";
    }

    if (variant === "outline" && color === "green") {
      btnVariant = "btn-green-outline";
    }

    if (variant === "filled" && color === "yellow") {
      btnVariant = "btn-yellow-filled";
    }

    if (variant === "filled" && color === "green") {
      btnVariant = "btn-green-filled";
    }

    return (
      <div
        ref={ref}
        className={`btn ${btnVariant} ${containerStyle} ${clazzName}`}
      >
        <span className={`btn-label ${labelStyle}`}>{label}</span>
        {icon}
      </div>
    );
  }
);

export default Button;
