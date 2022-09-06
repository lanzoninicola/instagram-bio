import { Service, ServiceCategory } from "~/types";

import { ButtonLink } from "../primitives/buttons";

interface ServicesListProps {
  services: Service[] | ServiceCategory[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="flex flex-col gap-4">
      {services.map((s, idx) => {
        const linkto = s.categorySlug
          ? `/${s.categorySlug}/${s.slug}`
          : `/${s.slug}`;

        if (s.homepageLeafLevel === 0) {
          return (
            <ButtonLink
              key={idx}
              label={s.name}
              title={`Detalhes sobre ${s.name}`}
              to={linkto}
              clazzName={`bg-yellow-400`}
              icon={<span>{s.emoji}</span>}
            />
          );
        }
      })}
    </div>
  );
}
