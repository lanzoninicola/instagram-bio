import BIZ_SERVICES_CATEGORY from "~/server/data/biz-service-categories.server";
import BIZ_SERVICES from "~/server/data/biz-services.server";

export function getAllCategories() {
  return BIZ_SERVICES_CATEGORY;
}

export function getAllServices() {
  return BIZ_SERVICES;
}

export function getAll() {
  return [...getAllCategories(), ...getAllServices()];
}

export function getServiceBySlug(slug: string) {
  const services = getAllServices();

  return services.find((service) => service.slug === slug);
}
