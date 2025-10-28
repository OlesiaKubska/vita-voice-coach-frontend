export type ISODateString = string;

/*  Upload / Media  */

export interface UploadFormat {
  url: string;
  width?: number;
  height?: number;
  size?: number;
  mime?: string;
}
export interface UploadFileAttributes {
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  mime?: string | null;
  formats?: Record<string, UploadFormat> | null;
}
export type UploadFile = { id: number } & UploadFileAttributes;

/* wrappers for Strapi  */

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export interface MediaRef {
  data: { id: number; attributes: UploadFileAttributes } | null;
}

export interface StrapiListResponse<T> {
  data: T[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}
export interface StrapiSingleResponse<T> {
  data: T | null;
}

/* Post */

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  coverImage?: UploadFile | null;
  publishedAt: ISODateString;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

/* Service */

export type ServiceIcon =
  | 'FaMicrophone' | 'FaMicrophoneAlt' | 'FaMusic' | 'FaUsers' | 'FaChalkboardTeacher'
  | 'FaHeadphones' | 'FaStar' | 'FaComments' | 'FaBuilding' | 'FaVideo' | 'FaHeart'
  | 'FaFemale' | 'FaPodcast' | 'FaLaptop' | 'FaUserGraduate' | 'FaLandmark';

export type ServiceCategory =
  | 'Lekcje' | 'Rozwój osobisty' | 'Wystąpienia' | 'Kursy online' | 'Nagrania' | 'Warsztaty';

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description?: string | null;
  slug: string;
  icon: ServiceIcon;
  image?: UploadFile | null;
  category: ServiceCategory;
  highlight: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  publishedAt?: ISODateString | null;
}

/* Testimonial */
export interface Testimonial {
  id: number;
  author: string;
  text: string;
  rating: number;
  photo?: UploadFile | null;
  publishedAt: ISODateString;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

/* Message */
export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  ip?: string | null;
  userAgent?: string | null;
  read: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  publishedAt?: ISODateString | null;
}