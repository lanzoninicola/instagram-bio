import React from "react";
import { Service, ServiceCategory } from "~/types";
import { ButtonLink, Button } from "../primitives/buttons";

interface ServicesListProps {
  services: Service[] | ServiceCategory[];
}

export default function ServicesList({ services }: ServicesListProps) {
  const [currentSlugOpen, setCurrentSlugOpen] = React.useState<string | null>(
    null
  );

  function hasChildren(service: Service | ServiceCategory) {
    return services.filter((s) => s.categorySlug === service.slug).length > 0;
  }

  function onServiceToggle(e: any) {
    if (e.target.getAttribute("open") === "true") {
      setCurrentSlugOpen(null);
    } else {
      setCurrentSlugOpen(e.target.getAttribute("data-slug"));
    }
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
              to={`/${s.categorySlug}/${s.slug}`}
              containerStyle="transition-all"
              clazzName={`bg-yellow-400`}
              icon={<span>{s.emoji}</span>}
            />
          );
        }

        return (
          s.homepageLeafLevel === 0 && (
            <details
              key={idx}
              onToggle={onServiceToggle}
              data-slug={s.slug}
              open={currentSlugOpen === s.slug}
            >
              <summary className="list-none md:cursor-pointer">
                <Button
                  label={s.name}
                  clazzName={`bg-yellow-400`}
                  icon={<span>{s.emoji}</span>}
                />
              </summary>
              <div className="flex flex-col gap-4 mt-4 transition-all">
                {services
                  .filter((parent) => parent.categorySlug === s.slug)
                  .map((children, idx) => {
                    return (
                      <ButtonLink
                        key={idx}
                        label={children.name}
                        to={`/${children.categorySlug}/${children.slug}`}
                        // icon={<span>{children.emoji}</span>}
                        title={`Detalhes sobre ${children.name}`}
                        clazzName={`border-yellow-400 border-2 text-yellow-400`}
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
