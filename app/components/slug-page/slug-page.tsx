import { Service } from "~/types";
import {
  ServiceImage,
  ServiceSingleHeader,
  ServiceContent,
} from "../service-single";

export default function SlugPage({ service }: { service: Service }) {
  return (
    <>
      <ServiceImage
        serviceImageFilename={service.image}
        serviceName={service.name}
      >
        <ServiceSingleHeader style="absolute px-8 top-56">
          {service.name}
        </ServiceSingleHeader>
      </ServiceImage>

      <article className="flex flex-col gap-4 mt-16">
        {service.content.map((content, index) => {
          if (content.status !== "draft") {
            return (
              <ServiceContent
                key={index}
                title={content.title}
                content={content.description}
              />
            );
          }
        })}
      </article>
    </>
  );
}
