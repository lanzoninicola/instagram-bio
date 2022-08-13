import { ButtonLink } from "~/components/primitives/buttons";
import WhatsappLink from "~/components/primitives/whatsapp-link/whatsapp-link";

export default function CardFooter() {
  return (
    <div className="card-footer flex flex-col gap-4 mx-8">
      <WhatsappLink label="Agende uma sessão" variant="filled" color="green" />
      <ButtonLink to="/" variant="text" color="green" label="voltar" />
    </div>
  );
}
