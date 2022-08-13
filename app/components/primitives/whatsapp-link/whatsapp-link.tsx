import Button from "../buttons/button/button";
import ExternalLink from "../external-link/external-link";
import { WhatsappIcon } from "../icons/icons";

interface WhatsAppLinkProps {
  label: string;
  variant: "outline" | "filled";
  color: "yellow" | "green";
  message?: string;
}

const WHATSAPP_NUMBER = "5546991364002";

export default function WhatsappLink({
  label,
  variant,
  color,
  message,
}: WhatsAppLinkProps) {
  const whatsappLink = message
    ? `https://wa.me/send?phone=${WHATSAPP_NUMBER}&text=${message}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <ExternalLink
      to={whatsappLink}
      ariaLabel={`${label} com WhatsApp`}
      className="w-full"
    >
      <Button
        label={label}
        color={color}
        variant={variant}
        icon={
          <WhatsappIcon
            size={24}
            color={color === "yellow" ? "black" : "white"}
          />
        }
      />
    </ExternalLink>
  );
}
