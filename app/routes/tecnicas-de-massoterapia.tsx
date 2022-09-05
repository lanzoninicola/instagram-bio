import { json, LoaderFunction } from "@remix-run/node";
import TherapyPage from "~/components/therapy-page/therapy-page";
import { getServiceBySlug } from "~/server/entities/biz-services.entities";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    return json({ ok: false, status: 500 });
  }

  const serviceData = getServiceBySlug(params.slug);

  if (!serviceData) {
    return json({ ok: false, status: 404 });
  }

  return json({ ok: true, status: 200, payload: serviceData });
};

export default function MassoterapyTecniqueIndex() {
  return <TherapyPage />;
}
