export interface ButtonProps {
  variant: "outline" | "filled" | "text";
  color: "yellow" | "green";
  label?: string;
  icon?: React.ReactElement;
  containerStyle?: string;
  labelStyle?: string;
  clazzName?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export interface ButtonLinkProps extends ButtonProps {
  to: string;
  title: string;
}

export interface ButtonFloatProps extends ButtonProps {
  floatX?: "left" | "right";
}
