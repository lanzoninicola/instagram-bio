import Logo from "~/components/logo/logo";
import WhatsappButtonLink from "~/components/whatsapp-button-link/whatsapp-button-link";

export default function MediumHeader() {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pb-16 bg-green-400 px-4 pt-8 w-full">
      <div className="bg-avatar-round bg-no-repeat bg-center h-40 w-40"></div>
      <Logo />
      <WhatsappButtonLink
        label="agende horário"
        color="yellow"
        variant="filled"
      />
    </header>
  );
}
