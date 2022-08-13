import { Children } from "react";

import CardFooter from "../card-footer/card-footer";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-400 md:items-center md:justify-center">
      <div className="md:max-w-md ">
        {children}
        <CardFooter />
      </div>
    </div>
  );
}
