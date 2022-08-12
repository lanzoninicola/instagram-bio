export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-4 bg-green-400">
      <h3
        className="text-yellow-400 font-titles font-bold uppercase tracking-widest"
        aria-label="Frase do dia"
      >
        Frase do dia
      </h3>
      <q className="text-yellow-400 font-accent">
        Passamos a ser realmente felizes quando entendemos que a felicidade não
        é constante.... Frase de tumblr.
      </q>
    </footer>
  );
}
