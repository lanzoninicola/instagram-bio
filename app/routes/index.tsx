import Avatar from "~/commons/components/avatar/avatar";
import Logo from "~/commons/components/logo/logo";
import Button from "~/commons/components/primitives/button";
import ServicesSlider from "~/commons/components/services-slider/services-slider";

export default function Index() {
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 mb-8 ">
        <div
          className="w-screen -ml-24"
          style={{
            background: 'url("/images/avatar-2xl.png") right no-repeat',
            height: "500px",
          }}
        ></div>
      </header>
      <main className="flex flex-col  gap-8 mx-4 mb-8 ">
        <Button
          text="agende horário"
          onClick={() => alert("clicked")}
          ariaLabel="button"
        />
        <ServicesSlider />
        <ServicesSlider />

        {/* <div className="flex flex-col gap-4 justify-center items-center">
          <Button
            text="TÉCNICAS DE MASSOTERAPIA"
            onClick={() => alert("clicked")}
            ariaLabel="button"
          />
          <Button
            text="calatonia"
            onClick={() => alert("clicked")}
            ariaLabel="button"
          />
          <Button
            text="reflexoterapia"
            onClick={() => alert("clicked")}
            ariaLabel="button"
          />
          <Button
            text="yoga"
            onClick={() => alert("clicked")}
            ariaLabel="button"
          />
        </div> */}
      </main>
      <footer className="flex flex-col gap-2 mx-4">
        <h3
          className="text-yellow-400 font-titles font-bold uppercase tracking-widest"
          aria-label="Frase do dia"
        >
          Frase do dia
        </h3>
        <q className="text-yellow-400 font-accent">
          Passamos a ser realmente felizes quando entendemos que a felicidade
          não é constante.... Frase de tumblr.
        </q>
      </footer>
    </>
  );
}
