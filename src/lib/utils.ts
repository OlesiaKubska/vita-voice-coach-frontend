import type { UploadFile } from "@/lib/types";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

/** Makes a URL absolute (e.g., from Strapi) */
export function makeAbsolute(url?: string): string {
  if (!url) return "";
  if (/^(?:https?:)?\/\//i.test(url)) return url;           
  if (/^(?:data|blob|mailto|tel):/i.test(url)) return url;
  const right = url.startsWith("/") ? url : `/${url}`;
  return `${API_URL}${right}`;
}

/** Format date (ISO -> pl-PL) */
export function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const d = new Date(dateString);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" });
}

/** Strip Markdown to plain text (keep link text) */
export function stripMarkdown(markdown = ""): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")               
    .replace(/`[^`]*`/g, "")                      
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")         
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")  
    .replace(/[#>*_~\-]+/g, "")                   
    .replace(/\s{2,}/g, " ")                      
    .trim();
}

/** Neat excerpt from Markdown */
export function buildExcerpt(md = "", maxChars = 220): string {
  const plain = stripMarkdown(md);
  return plain.length > maxChars ? plain.slice(0, maxChars).trim() + "…" : plain;
}

/** Best image URL from Strapi Media */
export function pickImageUrl(file?: UploadFile | null, fallbackAlt?: string) {
  if (!file?.url) return null;

  const fm = file.formats ?? undefined;
  const candidate =
    fm?.medium?.url || fm?.small?.url || fm?.thumbnail?.url || file.url;

  const url = /^(?:https?:)?\/\//i.test(candidate) ? candidate : makeAbsolute(candidate);
  const alt = file.alternativeText ?? fallbackAlt ?? "Image";
  return { url, alt };
}

/** Strip HTML to text */
export function stripHtml(html = ""): string {
  if (!html) return "";
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Excerpt from HTML content */
export function makeExcerptFromHtml(html = "", max = 220): string {
  const text = stripHtml(html);
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}