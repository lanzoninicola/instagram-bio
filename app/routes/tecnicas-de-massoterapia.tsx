import { LoaderFunction, json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import TherapyPage from "~/components/therapy-page/therapy-page";
import { getServiceBySlug } from "~/server/entities/biz-services.entities";

export default function MassoterapyTecniquesPage() {
  return (
    <div className="py-8 bg-green-300 px-4 min-h-screen md:max-w-md">
      <header className="mb-8">
        <h1 className="font-titles text-2xl">Tecnicas de Massoterapia</h1>
        <h2>A cura por meio da massage</h2>
        <p>Confira </p>
      </header>
      <Outlet />
    </div>
  );
}
