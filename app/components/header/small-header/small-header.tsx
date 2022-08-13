import Avatar from "~/components/avatar/avatar";
import Logo from "~/components/logo/logo";
import WhatsappLink from "~/components/primitives/whatsapp-link/whatsapp-link";

export default function SmallHeader() {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pb-8 bg-green-400">
      <Avatar />
      <div
        className="absolute flex flex-col gap-4 items-center w-absolute-m-2 mx-8"
        style={{ top: "270px" }}
      >
        <Logo />
        <WhatsappLink label="agende horário" color="yellow" variant="filled" />
      </div>
    </header>
  );
}
