import { Link } from "@remix-run/react";
import { Service, ServiceCategory } from "~/types";

interface ServicesListProps {
  services: Service[] | ServiceCategory[];
}

export default function ServicesList({ services }: ServicesListProps) {
  const parentStyle =
    "bg-yellow-400 hover:bg-yellow-700  text-black-400 hover:text-white font-titles font-bold tracking-widest uppercase rounded-3xl py-2 w-full text-center ";

  const childStyle =
    "border-yellow-400 border-2 text-white font-titles tracking-widest uppercase rounded-3xl py-2 w-full hover:bg-yellow-700 hover:text-black-400 text-center";

  function hasChildren(service: Service | ServiceCategory) {
    return services.filter((s) => s.categorySlug === service.slug).length > 0;
  }

  return (
    <div className="flex flex-col gap-4">
      {services.map((s, idx) => {
        if (!hasChildren(s) && s.homepageLeafLevel === 0) {
          return (
            <Link
              key={idx}
              className={`${parentStyle} list-none transition-all `}
              to={`/${s.categorySlug}/${s.slug}`}
            >
              {s.name}
            </Link>
          );
        }

        return (
          s.homepageLeafLevel === 0 && (
            <details key={idx}>
              <summary className={`${parentStyle} list-none transition-all `}>
                <h2>{s.name}</h2>
              </summary>
              <div className="flex flex-col gap-4 mt-4">
                {services
                  .filter((parent) => parent.categorySlug === s.slug)
                  .map((children, idx) => {
                    return (
                      <Link
                        key={idx}
                        className={`${childStyle} list-none transition-all `}
                        to={`/${children.categorySlug}/${children.slug}`}
                      >
                        {children.name}
                      </Link>
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
