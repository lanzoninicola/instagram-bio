import { Link } from "@remix-run/react";
import { ButtonLink } from "~/components/primitives/buttons";
import ButtonFloat from "~/components/primitives/buttons/button-float/button-float";
import { CleanHands, WhatsappIcon } from "~/components/primitives/icons/icons";

export default function ServiceSingleFooter() {
  return (
    <div className="card-footer flex flex-col gap-4 mx-8 py-16 mb-24">
      <Link
        to="/cuidados-e-higene"
        title="Saiba mais sobre os cuidados e higene em nosso consultório"
      >
        <div className="flex flex-row gap-4 bg-green-300 p-2 rounded-xl">
          <CleanHands size={48} color={"black"} />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h4 className="font-titles text-black ">
                Tratamentos cuidadosos
              </h4>
              <p className="font-body text-sm  text-black">
                Veja como a higene e segurança são levadas a sério na sala de
                atendimento.
              </p>
            </div>
            <p className="font-body text-sm font-bold underline text-black">
              Clique aqui
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-8">
        <ButtonFloat
          label="Pedir informações"
          variant="filled"
          color="green"
          floatX="right"
          icon={<WhatsappIcon size={16} color={"white"} />}
        />

        <ButtonLink
          to="/"
          variant="outline"
          color="green"
          label="voltar"
          labelStyle="text-green-400"
          title="voltar"
        />
      </div>
    </div>
  );
}
