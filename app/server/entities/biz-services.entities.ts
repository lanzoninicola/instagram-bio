import BIZ_SERVICES from "~/server/data/biz-services.server";
import BIZ_SERVICES_WHATSAPP_REQUESTS from "../data/biz-services-whatsapp-requests.server";

export function getAll() {
  return BIZ_SERVICES;
}

export function getServiceBySlug(slug: string) {
  const services = getAll();
  return services.find((service) => service.slug === slug);
}

export function getAllServicesWhatsappRequests() {
  return BIZ_SERVICES_WHATSAPP_REQUESTS;
}

export function getServicesWARequestsByCategorySlug(categorySlug: string) {
  const requests = getAllServicesWhatsappRequests();
  return requests[categorySlug as keyof typeof requests];
}
