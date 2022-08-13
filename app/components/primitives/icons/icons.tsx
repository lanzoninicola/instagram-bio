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
