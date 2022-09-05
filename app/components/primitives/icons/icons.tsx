interface IconProps {
  size?: number;
  color?: string;
}

export function WhatsappIcon({ size = 24, color = "white" }: IconProps) {
  return (
    <img
      src={`/images/icons/whatsapp-${size}-${color}.svg`}
      alt="ícone whatsapp"
      width={size}
      height={size}
    />
  );
}

export function CleanHands({ size = 24, color = "white" }: IconProps) {
  return (
    <img
      src={`/images/icons/clean-hands-${size}-${color}.svg`}
      alt="ícone whatsapp"
      width={size}
      height={size}
    />
  );
}

export function Room({ size = 24, color = "white" }: IconProps) {
  return (
    <img
      src={`/images/icons/room-${size}-${color}.svg`}
      alt="ícone whatsapp"
      width={size}
      height={size}
    />
  );
}

export function MassageEquipment({ size = 24, color = "white" }: IconProps) {
  return (
    <img
      src={`/images/icons/massage-equipment-${size}-${color}.svg`}
      alt="ícone whatsapp"
      width={size}
      height={size}
    />
  );
}

export function ClinicForm({ size = 24, color = "white" }: IconProps) {
  return (
    <img
      src={`/images/icons/clinic-form-${size}-${color}.svg`}
      alt="ícone whatsapp"
      width={size}
      height={size}
    />
  );
}
