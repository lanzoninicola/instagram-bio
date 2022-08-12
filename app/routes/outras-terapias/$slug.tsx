import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Whatsapp } from "~/components/primitives/icons/icons";
import SecondaryButton from "~/components/primitives/secondary-button/secondary-button";
import WhatsappLink from "~/components/primitives/whatsapp-link/whatsapp-link";
import { getServiceBySlug } from "~/services/biz-services-manager.server";
import { LoaderResponse, Service } from "~/types";

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

export default function TherapyPage() {
  const serviceData: LoaderResponse<Service> = useLoaderData();

  const { status, payload: service } = serviceData;

  if (status > 400) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="card-inner flex flex-col relative">
      <img
        src={`/images/${service.image}.avif`}
        alt={`Imagem da ${service.name}`}
        className="w-full object-cover rounded-t-xl "
      />

      <div className="card-main flex flex-col px-8 pb-8 gap-8 -mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-titles text-2xl text-white uppercase tracking-wide relative z-0">
            {service.name}
          </h1>
          <p className="font-body ">{service.description}</p>
        </div>
        <div className="card-footer">
          <WhatsappLink label="Agende uma sessão" secondary />
        </div>
      </div>
    </div>
  );
}
