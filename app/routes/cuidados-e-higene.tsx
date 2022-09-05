import Logo from "~/components/logo/logo";
import { ButtonLink } from "~/components/primitives/buttons";
import {
  CleanHands,
  ClinicForm,
  MassageEquipment,
  Room,
} from "~/components/primitives/icons/icons";
import HeadingOne from "~/components/typography/headings/HeadingOne";
import HeadingThree from "~/components/typography/headings/HeadingThree";
import HeadingTwo from "~/components/typography/headings/HeadingTwo";

export default function CuidadosEHigeneIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-green-300 md:items-center md:justify-center md:max-w-md">
      <header className="flex flex-col gap-4 w-full py-8 px-4">
        <div className="flex justify-center items-center mb-4">
          <Logo />
        </div>
        <HeadingOne>Cuidados e higene</HeadingOne>
        <p className="font-body text-base">
          A saude dos clientes é uma prioridade, por isso temos cuidados
          especiais com a higene e protocolos de segurança para evitar a
          transmissão de microrganismos.
        </p>
      </header>
      <article className="flex flex-col gap-8 px-4">
        <article>
          <div className="flex flex-row gap-2 items-center">
            <ClinicForm size={48} color={"black"} />
            <HeadingThree>Triagem</HeadingThree>
          </div>
          <p className="font-body text-base">
            Antes de começar o serviço, é feito uma triagem para identificar
            possíveis problemas de saúde.
          </p>
        </article>
        <article>
          <div className="flex flex-row gap-2 items-center">
            <CleanHands size={48} color={"black"} />
            <HeadingThree>Limpeza das mãos</HeadingThree>
          </div>

          <p className="font-body text-base">
            Para prevenir a transmissão de microrganismos e sujeiras que ficam
            nas mãos a limpeza das mãos é feita com água e sabão. A higienização
            com álcool de 70o, antes e depois de cada serviço.
          </p>
        </article>
        <article>
          <div className="flex flex-row gap-2 items-center">
            <MassageEquipment size={48} color={"black"} />
            <HeadingThree>Equipamentos</HeadingThree>
          </div>
          <p className="font-body text-base">
            A limpeza da maca é feita entre cada atendimento com álcool de 70o.
            São utilizados lenços descartaveis para acobertar a maca. Os
            serviços são feitos com máscaras e luvas quando necessario.
          </p>
        </article>
        <article>
          <div className="flex flex-row gap-2 items-center">
            <Room size={48} color={"black"} />
            <HeadingThree>Ambiente</HeadingThree>
          </div>
          <p className="font-body text-base">
            O ambiente é arejado antes e depois de cada serviço. Os cobertores e
            toalhas são trocados a cada serviço e lavados a 60ºC após cada uso
            com detergente neutro, amaciante e disinfetante de roupas para
            evitar alergias e irritações na pele dos clientes.
          </p>
        </article>
      </article>
      <footer className="px-4 my-16">
        <ButtonLink
          to="/"
          variant="outline"
          color="yellow"
          label="voltar"
          labelStyle="text-yellow-400"
          title="voltar"
        />
      </footer>
    </main>
  );
}
