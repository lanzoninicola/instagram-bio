import Avatar from "~/commons/components/avatar/avatar";
import Logo from "~/commons/components/logo/logo";
import Button from "~/commons/components/primitives/button";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-black-400">
        Hello world!
      </h1>
      <div className="flex flex-col gap-8 mx-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar />
          <Logo />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button
            text="agende horário"
            onClick={() => alert("clicked")}
            ariaLabel="button"
          />
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
        </div>
      </div>
    </>
  );
}
