import { useLoaderData } from "@remix-run/react";
import React from "react";
import { HomePageLoaderData } from "~/routes";

export default function Quotes() {
  const data: HomePageLoaderData = useLoaderData();
  const { quotes } = data;

  const [affirmation, setAffirmation] = React.useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAffirmation(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 7000);
    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="flex flex-col bg-yellow-400 rounded-xl p-2 gap-2">
      <h3
        className="text-black font-titles font-bold uppercase tracking-widest"
        aria-label="Frase do dia"
      >
        Frases do dia
      </h3>
      <p className="text-black font-accent">
        {`${affirmation.text} - ${affirmation.author}`}
      </p>
    </div>
  );
}
