import Avatar from "../avatar/avatar";
import Logo from "../logo/logo";
import Button from "../primitives/button";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pb-8 bg-green-400">
      <Avatar />
      <div
        className="absolute flex flex-col gap-4 items-center w-absolute-m-2 mx-8"
        style={{ top: "270px" }}
      >
        <Logo />
        <Button
          text="agende horário"
          onClick={() => alert("clicked")}
          ariaLabel="button"
          CSSclass="animate-cta1"
        />
      </div>
    </header>
  );
}
