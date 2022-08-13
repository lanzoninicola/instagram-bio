import { Link } from "@remix-run/react";
import { ButtonLinkProps } from "~/components/primitives/buttons/types";
import Button from "../button/button";

export default function ButtonLink({ ...props }: ButtonLinkProps) {
  return (
    <Link to={props.to}>
      <Button {...props} />
    </Link>
  );
}
