import { ServiceCategory } from "~/types";

const BIZ_SERVICES_CATEGORY: ServiceCategory[] = [
  {
    id: 2,
    name: "Yoga",
    description: null,
    image: null,
    slug: "yoga",
    categorySlug: null,
    homepageLeafLevel: 0,
  },
  {
    id: 3,
    name: "Técnicas de Massoterapia",
    description: null,
    image: null,
    slug: "tecnicas-de-massoterapia",
    categorySlug: "terapias",
    homepageLeafLevel: 0,
  },
  {
    id: 4,
    name: "Outras terapias",
    description: null,
    image: null,
    slug: "outras-terapias",
    categorySlug: "terapias",
    homepageLeafLevel: -1,
  },
];

export default BIZ_SERVICES_CATEGORY;
