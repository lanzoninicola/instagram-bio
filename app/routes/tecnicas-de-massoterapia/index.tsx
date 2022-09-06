import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ButtonLink } from "~/components/primitives/buttons";
import { getServicesByCategorySlug } from "~/server/entities/biz-services.entities";
import { ServiceModelWithSEO } from "~/types/services";

interface LoaderResponse {
  ok: boolean;
  status: number;
  payload?: ServiceModelWithSEO[];
}

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);

  // remove initial slash from pathname
  let pathname = url.pathname.slice(1);

  const services = getServicesByCategorySlug(pathname);

  if (!services) {
    return json({ ok: false, status: 404 });
  }

  return json({ ok: true, status: 200, payload: services });
};

export default function MassoterapyTecniquesPageIndex() {
  const data: LoaderResponse = useLoaderData();

  const { status, payload: services } = data;

  if (status > 400) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <main>
      <ul className="flex flex-col gap-4 w-full">
        {services &&
          services.map((s) => (
            <li key={s.id}>
              <ButtonLink
                key={s.slug}
                label={s.name}
                title={`Detalhes sobre ${s.name}`}
                to={`/${s.categorySlug}/${s.slug}`}
                clazzName={`bg-yellow-400`}
              />
            </li>
          ))}
      </ul>
    </main>
  );
}
