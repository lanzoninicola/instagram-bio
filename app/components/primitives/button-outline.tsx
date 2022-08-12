import { forwardRef } from "react";

interface ButtonOutlineProps {
  onClick: () => void;
  text: string;
  ariaLabel: string;
}

const ButtonOutline = forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ onClick, text, ariaLabel }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="border-yellow-400 border-2 text-white font-titles tracking-widest uppercase rounded-3xl py-2 w-full hover:bg-yellow-700 hover:text-black-400"
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
);

export default ButtonOutline;
