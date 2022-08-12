import ExternalLink from "../external-link/external-link";
import { Whatsapp } from "../icons/icons";

interface WhatsAppLinkProps {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  message?: string;
}

const WHATSAPP_NUMBER = "5546991364002";

export default function WhatsappLink({
  label,
  primary,
  secondary,
  message,
}: WhatsAppLinkProps) {
  const commonStyle =
    "font-titles font-bold tracking-widest uppercase rounded-3xl py-2 w-full";

  const primaryStyle = `bg-yellow-400 hover:bg-yellow-700 text-black-400 hover:text-white ${commonStyle}`;

  const secondaryStyle = `bg-green-400 hover:bg-green-700 text-white hover:text-white ${commonStyle}`;

  const whatsappLink = message
    ? `https://wa.me/send?phone=${WHATSAPP_NUMBER}&text=${message}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <ExternalLink to={whatsappLink} ariaLabel="Envia uma mensagem via WhatsApp">
      <div
        className={`bg-green-400 flex flex-row gap-4 justify-center items-center ${
          primary ? primaryStyle : secondary ? secondaryStyle : commonStyle
        }`}
      >
        <span className="font-titles text-xs">{label}</span>
        <Whatsapp size={24} color="white" />
      </div>
    </ExternalLink>
  );
}
