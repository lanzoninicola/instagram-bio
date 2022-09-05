export interface ServiceCategory {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  slug: CategorySlug;
  categorySlug: CategorySlug | null;
  emoji?: string;
  /** Level of visibility on the homepage */
  homepageLeafLevel: number;
}

export type Service = ServiceModel & LayoutProps;

export type ServiceAndCategory = Service & ServiceCategory;

export interface ServiceModel {
  id: number;
  name: string;
  description: string | null;
  content: Content[];
  image: string | null;
  slug: string;
  categorySlug: CategorySlug;
  emoji?: string;
}

export type ServiceFaq = Record<CategorySlug, string[]>;

interface Content {
  title: string;
  description: string;
  status?: "draft" | "public";
}

export interface ServiceModelWithSEO extends Service {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

interface LayoutProps {
  homepageLeafLevel: number;
}

export type CategorySlug = string;
