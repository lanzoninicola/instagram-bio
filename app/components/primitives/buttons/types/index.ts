export interface ButtonProps {
  label?: string;
  icon?: React.ReactElement;
  containerStyle?: string;
  labelStyle?: string;
  clazzName?: React.HTMLAttributes<any>["className"];
}

export interface ButtonLinkProps extends ButtonProps {
  to: string;
  title: string;
}

export interface ButtonFloatProps extends ButtonProps {
  floatX?: "left" | "right";
}
