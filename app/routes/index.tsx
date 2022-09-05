import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import ServicesList from "~/components/services-list/services-list";
import { getRandomAffirmations } from "~/server/entities/quotes.entities";
import { getAll as getAllCategories } from "~/server/entities/biz-services-category.entities";
import { getAll as getAllServices } from "~/server/entities/biz-services.entities";
import { Quotes } from "~/types/quotes";
import { ServiceAndCategory } from "~/types/services";

export interface HomePageLoaderData {
  services: ServiceAndCategory[];
  quotes: Quotes[];
}

export const loader: LoaderFunction = async () => {
  const allServices = [...getAllCategories(), ...getAllServices()];

  const quotes = getRandomAffirmations(3);

  return json({
    services: allServices || [],
    quotes: quotes || [],
  });
};

export default function Index() {
  const data: HomePageLoaderData = useLoaderData();

  return (
    <>
      <div className="md:max-w-md">
        <Header />

        <main className="flex flex-col gap-8 px-4 pb-8 bg-green-400 w-full">
          <ServicesList services={data.services} />
          <div className="flex flex-col gap-4 px-4 pb-8">
            <h1 className="font-titles  text-yellow-400 text-md leading-tight uppercase">
              Yoga, massoterapia e terapias holisticas pelo tratamento das
              doenças emocionais
            </h1>
            <p className="font-body text-yellow-400 text-lg leading-tight text-justify">
              Olá! Meu nome é Dioni Mara. Entendo a importância do autocuidado,
              do bem-estar. Yoga, Massoterapia e Terapias Holísticas são as
              minhas ferramentas para ajudá-lo a alcançar seus objetivos de
              saúde, tanto a curto quanto a longo prazo. Venha e veja por si
              mesmo o valor que a massagem terapêutica tem em seu corpo, mente e
              espírito. Convido você a vivenciar uma experiência única,
              terapêutica e relaxante, para garantir o benefício das técnicas de
              massoterapia!
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
