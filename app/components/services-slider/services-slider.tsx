interface ServicesSliderProps {
  title?: string;
  services?: any[];
}

export default function ServicesSlider({
  title,
  services,
}: ServicesSliderProps) {
  return (
    <>
      <div>
        <h2 className="font-titles text-yellow-400 text-lg mb-2">
          Técnicas de Massoterapia
        </h2>
        <div className="w-full overflow-x-scroll ">
          <div className="flex flex-row gap-2">
            <img src="/images/quick-massage.png" alt="Imagem de perfil" />
            <img src="/images/ventosa-terapia.png" alt="Imagem de perfil" />
            <img src="/images/drenagem-linfatica.png" alt="Imagem de perfil" />
            <img src="/images/pedras-quentes.png" alt="Imagem de perfil" />
            <img src="/images/bambu-terapia.png" alt="Imagem de perfil" />
          </div>
        </div>
      </div>
    </>
  );
}
