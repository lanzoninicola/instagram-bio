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

export type Service = ServiceModel & SEOProps & LayoutProps;
export interface ServiceModel {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  slug: string;
  categorySlug: CategorySlug;
}

interface SEOProps {
  cardSubHeader: string;
  keywords?: string[];
}

interface LayoutProps {
  homepageLeafLevel: number;
}

export type CategorySlug = string;
