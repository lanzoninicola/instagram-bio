import { forwardRef } from "react";
import { Whatsapp } from "../icons/icons";

interface ButtonProps {
  onClick: () => void;
  text: string;
  ariaLabel: string;
  CSSclass?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

// button with forwardRef
const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, text, ariaLabel, CSSclass, leftIcon, rightIcon }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`bg-green-400 hover:bg-green-700  text-white hover:text-white font-titles font-bold tracking-widest uppercase rounded-3xl py-2 w-full ${CSSclass}`}
      aria-label={ariaLabel}
    >
      <span className="flex flex-row gap-4 justify-center items-center">
        {leftIcon && leftIcon}
        {text}
        {rightIcon && rightIcon}
      </span>
    </button>
  )
);

export default SecondaryButton;
