import ExternalLink from "../primitives/external-link/external-link";

interface WhatsappExternalLinkProps {
  ariaLabel: string;
  message?: string;
  children: React.ReactNode;
}

const WHATSAPP_NUMBER = "5546991364002";

export default function WhatsappExternalLink({
  ariaLabel,
  message,
  children,
}: WhatsappExternalLinkProps) {
  const whatsappLink = message
    ? `https://wa.me/send?phone=${WHATSAPP_NUMBER}&text=${message}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <ExternalLink
      to={whatsappLink}
      ariaLabel={`${ariaLabel} com WhatsApp`}
      className="relative w-full"
    >
      {children}
    </ExternalLink>
  );
}
