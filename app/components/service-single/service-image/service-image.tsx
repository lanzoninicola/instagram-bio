interface CardImageProps {
  serviceName: string;
  serviceImageFilename: string | null;
  withOverlay?: boolean;
  style?: string;
  children?: React.ReactNode;
}

export default function ServiceImage({
  serviceName,
  serviceImageFilename,
  withOverlay = true,
  style,
  children,
}: CardImageProps) {
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover h-33vh relative ${style}`}
      aria-label={`Imagem da ${serviceName}`}
      style={{
        backgroundImage: `url(${`/images/${serviceImageFilename}.avif`})`,
      }}
    >
      {withOverlay && (
        <div className="absolute inset-0 bg-service-image-overlay"></div>
      )}
      {children}
    </div>
  );
}
