import { Service, ServiceCategory } from "~/types";
import { ButtonLink, Button } from "../primitives/buttons";

interface ServicesListProps {
  services: Service[] | ServiceCategory[];
}

export default function ServicesList({ services }: ServicesListProps) {
  function hasChildren(service: Service | ServiceCategory) {
    return services.filter((s) => s.categorySlug === service.slug).length > 0;
  }

  return (
    <div className="flex flex-col gap-4">
      {services.map((s, idx) => {
        if (!hasChildren(s) && s.homepageLeafLevel === 0) {
          return (
            <ButtonLink
              key={idx}
              label={s.name}
              title={`Detalhes sobre ${s.name}`}
              variant="filled"
              color="yellow"
              to={`/${s.categorySlug}/${s.slug}`}
              containerStyle="transition-all"
            />
          );
        }

        return (
          s.homepageLeafLevel === 0 && (
            <details key={idx}>
              <summary className="list-none md:cursor-pointer">
                <Button label={s.name} variant="filled" color="yellow" />
              </summary>
              <div className="flex flex-col gap-4 mt-4 transition-all">
                {services
                  .filter((parent) => parent.categorySlug === s.slug)
                  .map((children, idx) => {
                    return (
                      <ButtonLink
                        key={idx}
                        label={children.name}
                        variant="outline"
                        color="yellow"
                        to={`/${children.categorySlug}/${children.slug}`}
                        title={`Detalhes sobre ${children.name}`}
                      />
                    );
                  })}
              </div>
            </details>
          )
        );
      })}
    </div>
  );
}
