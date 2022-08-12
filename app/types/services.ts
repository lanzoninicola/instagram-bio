export interface ServiceCategory {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  slug: CategorySlug;
  categorySlug: CategorySlug | null;
  /** Level of visibility on the homepage */
  homepageLeafLevel: number;
}

export interface Service {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  slug: string;
  categorySlug: CategorySlug;
  homepageLeafLevel: number;
}

export type CategorySlug = string;
