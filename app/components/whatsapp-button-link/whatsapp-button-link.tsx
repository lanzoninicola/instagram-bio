import WhatsappExternalLink from "~/components/whatsapp-external-link/whatsapp-external-link";

import Button from "../primitives/buttons/button/button";
import { WhatsappIcon } from "../primitives/icons/icons";

interface WhatsappButtonLinkProps {
  label: string;
  iconColor?: string;
  /** The message to send with whatsapp */
  message?: string;
  clazzName?: React.HTMLAttributes<any>["className"];
}

export default function WhatsappButtonLink({
  label,
  message,
  clazzName,
  iconColor = "white",
}: WhatsappButtonLinkProps) {
  return (
    <WhatsappExternalLink ariaLabel={`${label} com WhatsApp`} message={message}>
      <Button
        label={label}
        icon={<WhatsappIcon size={24} color={iconColor} />}
        clazzName={clazzName}
      />
    </WhatsappExternalLink>
  );
}
