import { forwardRef } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  ariaLabel: string;
}

// button with forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, text, ariaLabel }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="bg-yellow-400 hover:bg-yellow-700  text-black-400 hover:text-white font-titles font-bold tracking-widest uppercase rounded-xl py-2 w-full"
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
);

export default Button;
