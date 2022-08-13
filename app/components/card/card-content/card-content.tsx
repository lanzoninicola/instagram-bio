interface CardContentProps {
  serviceName: string;
  serviceDescription: string | null;
}

export default function CardContent({
  serviceName,
  serviceDescription,
}: CardContentProps) {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="font-titles text-2xl text-black-400 uppercase tracking-wide relative z-0">
        {serviceName}
      </h1>
      <p className="font-body text-xl text-black-400">{serviceDescription}</p>
    </div>
  );
}
