import { Children } from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen mx-8 ">
      <div className="mx-auto my-auto rounded-xl bg-yellow-400 w-full h-max">
        {children}
      </div>
    </div>
  );
}
