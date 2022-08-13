import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import ServicesList from "~/components/services-list/services-list";
import { getAll } from "~/services/biz-services-manager.server";
import { Service } from "~/types";

export const loader: LoaderFunction = async () => {
  return json(getAll());
};

export default function Index() {
  const data: Service[] = useLoaderData();

  return (
    <>
      <div className="md:max-w-md">
        <Header />

        <main className="flex flex-col px-4 pb-8 bg-green-400 w-full">
          <div className="px-4 pb-8">
            <p className="font-body text-yellow-400 text-lg leading-tight text-justify">
              Olá! meu nome é Dioni Mara. Yoga e as terapias holisticas são as
              minhas ferramentas para ajudar a aliviar os efeitos das doenças
              emocionais (ansia, estresse etc.) e acelerar o crescimento. Aqui
              você encontra todos meus serviços.
            </p>
          </div>
          <ServicesList services={data} />
        </main>
        <Footer />
      </div>
    </>
  );
}
