import axios, { AxiosError } from "axios";
import { 
  StrapiListResponse,
  StrapiSingleResponse,
  Post,
  Service,
  Testimonial,
  Message,
  MessageData,
} from "@/lib/types";

const RAW_URL = (process.env.NEXT_PUBLIC_API_URL ?? "");

if (!RAW_URL) {
  throw new Error("Configuration Error: NEXT_PUBLIC_API_URL is not set.");
}

const API_URL = RAW_URL
  .replace(/\/$/, "");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 45000,
});

function normalizeAxiosError(err: unknown): Error {
  if (err instanceof AxiosError) {
    const status = err.response?.status;
    const msg =
      err.response?.data?.error?.message ||
      err.message ||
      "Network/Server error";
    return new Error(status ? `[${status}] ${msg}` : msg);
  }
  return new Error(String(err));
}


// Posts
export async function getPosts(): Promise<Post[]> {
  try {
  const res = await api.get<StrapiListResponse<Post>>(`/api/posts?fields=title,slug,content,publishedAt,createdAt,updatedAt&populate=coverImage&sort=publishedAt:desc`);

    return res.data.data ?? [];
  } catch (error) {
    throw normalizeAxiosError(error);
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
  const query = new URLSearchParams({
    'filters[slug][$eq]': slug,
    populate: '*',
    'pagination[limit]': '1',
  }).toString();

  const res = await api.get<StrapiListResponse<Post>>(`/api/posts?${query}`);

  return res.data.data?.[0] ?? null;

  } catch (error) {
    throw normalizeAxiosError(error);
  }
}

// Services
export async function getServices(): Promise<Service[]> {
  try {
    const res = await api.get<StrapiListResponse<Service>>(`/api/services?fields=title,slug,shortDescription,description,icon,category,highlight,publishedAt,createdAt,updatedAt&populate=image&sort=title:asc`);
    return res.data.data ?? [];
  } catch (error) {
    throw normalizeAxiosError(error);
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const query = new URLSearchParams({
    'filters[slug][$eq]': slug,
    populate: 'image',
    'pagination[limit]': '1',
  }).toString();

  const res = await api.get<StrapiListResponse<Service>>(`/api/services?${query}`);
  return res.data.data?.[0] ?? null;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
  const res = await api.get<StrapiListResponse<Testimonial>>(`/api/testimonials?populate=photo&sort=publishedAt:desc`);
  return res.data.data ?? [];
  } catch (error) {
    throw normalizeAxiosError(error);
  }
}

// Message sending
export async function sendMessage(payload: MessageData): Promise<boolean> {
  try {
    const res = await api.post<StrapiSingleResponse<Message>>(`/api/messages`, { data: {
    name: payload.name,
    email: payload.email,
    message: payload.message,
  },
});
    // console.log(JSON.stringify({ data: payload }, null, 2));
    return Boolean(res.data.data);
  } catch (error) {
    throw normalizeAxiosError(error);
  }
}