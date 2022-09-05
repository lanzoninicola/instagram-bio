import { Quotes } from "~/types/quotes";
import OPTMISTIC_AFFIRMATIONS from "../data/optmistic-quotes";

export function getAll(): Quotes[] {
  return OPTMISTIC_AFFIRMATIONS;
}

export function getRandomAffirmations(maxAffirmation: number = 20): Quotes[] {
  const quotes = getAll();
  const randomIndexes: number[] = [];

  while (randomIndexes.length < maxAffirmation) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes.map((index) => quotes[index]);
}
