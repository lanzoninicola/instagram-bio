import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import ServicesList from "~/components/services-list/services-list";
import { getAll } from "~/server/services/biz-services-manager.server";
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

        <main className="flex flex-col gap-8 px-4 pb-8 bg-green-400 w-full">
          <ServicesList services={data} />
          <div className="flex flex-col gap-4 px-4 pb-8">
            <h1 className="font-titles  text-yellow-400 text-md leading-tight uppercase">
              Yoga e terapias holisticas pelo tratamento das doenças emocionais
            </h1>
            <p className="font-body text-yellow-400 text-lg leading-tight text-justify">
              Olá! meu nome é Dioni Mara. Yoga e terapias holisticas são as
              minhas ferramentas para ajudar a aliviar os efeitos das doenças
              emocionais (ansia, estresse etc.) e acelerar o crescimento. Aqui
              você encontra todos meus serviços.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
