import ServiceSingleFooter from "../service-single-footer/service-single-footer";

interface CardProps {
  children: React.ReactNode;
}

export default function ServiceSingleWrapper({ children }: CardProps) {
  return (
    <article className="flex flex-col min-h-screen bg-yellow-400 md:items-center md:justify-center md:max-w-md">
      {children}
    </article>
  );
}
