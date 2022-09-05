import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/images/logo.svg"
        alt="Dioni Mara Yoga & Terapia Logo"
        width={200}
      />
    </Link>
  );
}
