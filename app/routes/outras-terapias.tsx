import { Outlet } from "@remix-run/react";
import Card from "~/components/card/card";

export default function OtherTherapiesIndex() {
  return (
    <Card>
      <Outlet />
    </Card>
  );
}
