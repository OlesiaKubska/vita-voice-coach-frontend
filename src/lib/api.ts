import axios from "axios";
import { StrapiResponse, Post, Service, Testimonial } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Posts
export async function getPosts(): Promise<Post[]> {
  const res = await axios.get<StrapiResponse<Post>>(`${API_URL}/api/posts?populate=*`);

  return res.data.data;
}

// Services
export async function getServices(): Promise<Service[]> {
  const res = await axios.get<StrapiResponse<Service>>(`${API_URL}/api/services?populate=*`);

  return res.data.data;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await axios.get<StrapiResponse<Testimonial>>(`${API_URL}/api/testimonials?populate=photo`);
  
  return res.data.data;
}