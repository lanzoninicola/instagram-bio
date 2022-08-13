interface CardImageProps {
  serviceName: string;
  serviceImageFilename: string | null;
}

export default function CardImage({
  serviceName,
  serviceImageFilename,
}: CardImageProps) {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-33vh"
      aria-label={`Imagem da ${serviceName}`}
      style={{
        backgroundImage: `url(${`/images/${serviceImageFilename}.avif`})`,
      }}
    ></div>
  );
}
