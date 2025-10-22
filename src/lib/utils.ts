const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

/** Makes a URL absolute (e.g., from Strapi) */
export function makeAbsolute(url?: string): string {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return API_URL.replace(/\/$/, "") + "/" + url.replace(/^\//, "");
  // return url.startsWith("http") ? url : `${API_URL}${url}`;
}

/** Format date */
export function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" });
}

/** Deletes Markdown */
export function stripMarkdown(markdown = ""): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")               
    .replace(/`[^`]*`/g, "")                      
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")         
    .replace(/\[[^\]]*]\([^)]*\)/g, (_, t) => t)  
    .replace(/[#>*_~\-]+/g, "")                   
    .replace(/\s{2,}/g, " ")                      
    .trim();
}

/** Creates a concise, neat excerpt from Markdown */
export function buildExcerpt(md = "", maxChars = 220): string {
  const plain = stripMarkdown(md);
  return plain.length > maxChars ? plain.slice(0, maxChars).trim() + "…" : plain;
}