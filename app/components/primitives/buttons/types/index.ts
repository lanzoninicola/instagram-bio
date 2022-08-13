export interface ButtonProps {
  variant: "outline" | "filled" | "text";
  color: "yellow" | "green";
  label: string;
  icon?: React.ReactElement;
  containerStyle?: string;
  labelStyle?: string;
}

export interface ButtonLinkProps extends ButtonProps {
  to: string;
}
