import WhatsappExternalLink from "~/components/whatsapp-external-link/whatsapp-external-link";

import Button from "../primitives/buttons/button/button";
import { WhatsappIcon } from "../primitives/icons/icons";

interface WhatsappButtonLinkProps {
  label: string;
  variant: "outline" | "filled";
  color: "yellow" | "green";
  /** The message to send with whatsapp */
  message?: string;
}

export default function WhatsappButtonLink({
  label,
  variant,
  color,
  message,
}: WhatsappButtonLinkProps) {
  return (
    <WhatsappExternalLink ariaLabel={`${label} com WhatsApp`} message={message}>
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
    </WhatsappExternalLink>
  );
}
