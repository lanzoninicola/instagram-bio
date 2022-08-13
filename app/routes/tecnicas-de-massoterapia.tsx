import { Outlet } from "@remix-run/react";
import Card from "~/components/card/card/card";

export default function MassoterapyTecniqueIndex() {
  return (
    <Card>
      <Outlet />
    </Card>
  );
}
