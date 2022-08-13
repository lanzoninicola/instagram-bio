import { Outlet } from "@remix-run/react";
import Card from "~/components/card/card/card";

export default function YogaIndex() {
  return (
    <Card>
      <Outlet />
    </Card>
  );
}
