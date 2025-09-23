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

// Testimonial Types
export interface Media {
  url: string;
}

export interface TestimonialAttributes {
  author: string;
  text: string;
  rating: number;
  photo: {
    data?: {
      attributes: {
        url: string;
      };
    } | null;
  };
  publishedAt: string;
}

export interface Testimonial {
id: number;
  author: string;
  text: string;
  rating: number;
  photo?: {
    url: string;
  };
  publishedAt: string;
}