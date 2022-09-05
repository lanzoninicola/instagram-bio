import WhatsappExternalLink from "~/components/whatsapp-external-link/whatsapp-external-link";
import ButtonFloat from "../primitives/buttons/button-float/button-float";
import { WhatsappIcon } from "../primitives/icons/icons";

interface WhatsappFloatButtonLinkProps {
  label: string;
  variant: "outline" | "filled";
  color: "yellow" | "green";
  /** The message to send with whatsapp */
  message?: string;
  floatX?: "left" | "right";
}

export default function WhatsappFloatButtonLink({
  label,
  variant,
  color,
  message,
  floatX = "right",
}: WhatsappFloatButtonLinkProps) {
  return (
    <WhatsappExternalLink ariaLabel={`${label} com WhatsApp`} message={message}>
      <ButtonFloat
        label={label}
        color={color}
        variant={variant}
        floatX={floatX}
        icon={
          <WhatsappIcon
            size={16}
            color={color === "yellow" ? "black" : "white"}
          />
        }
      />
    </WhatsappExternalLink>
  );
}
