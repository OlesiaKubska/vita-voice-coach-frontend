export interface StrapiResponse<T> {
  data: T[];
}

export interface PostAttributes {
  title: string;
  slug: string;
  content: string;
  coverImage?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
  slug: string;
  coverImage?: { url: string } | string; 
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
}

export interface ServiceAttributes {
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon?: string;
  image?: string;
}