# 🎨 Vita Voice - Frontend (Next.js)

Modern, responsive frontend application for **Vita Voice**, built with **Next.js + TypeScript**, styled with **TailwindCSS**, animated with **Framer Motion**, and integrated with a **Strapi backend**.

---
## 🌐 Live URLs

- **Frontend Website:** https://vitavoice.pl
- **Backend API:** https://vita-voice-backend.onrender.com
- **CMS Admin (private):** Not public

---

## ✨ Features

✔️🎨 Elegant, responsive, accessible UI

✔️📝 Blog with dynamic routing

✔️🧾 Rich article content rendering

✔️🛍️ Services catalog

✔️⭐ Testimonials section

✔️📬 Contact form with email notifications

✔️🛡️ Frontend form validation (Formik + Yup)

✔️🧩 Modular component architecture

✔️🧾 SEO-friendly metadata and routing

✔️🌗 Light/Dark visual theme support (custom)

✔️🔥 Smooth animations with Framer Motion

---

## 🧰 Tech Stack

- **Framework**	Next.js 14 (App Router)
- **Language**	TypeScript
- **Styling**	TailwindCSS, Custom CSS Variables
- **Animations**	Framer Motion
- **Forms**	Formik + Yup
- **HTTP**	Axios
- **Backend**	Strapi CMS
- **Deployment**	Vercel
- **Node**	18.x

---

## 📦 Project Structure
```
/public
/src
  /app
    (pages, layouts, routing, globals.css)
  /components
    (UI components)
  /lib
    (api.ts, types.ts, utils.ts, filters.ts)
  ...
.env
next.config.js
tailwind.config.ts
package.json
  ...
```
---

## ⚙️ Environment Variables

Create `.env` in the project root:
```
NEXT_PUBLIC_API_URL=https://vita-voice-backend.onrender.com

# Optional
BOT_URL=
BOT_API_TOKEN=
```

For development:
```
cp .env.example .env
```
---

## 🚀 Getting Started (Local)
1. Clone the repository
```
git clone https://github.com/OlesiaKubska/vita-voice-coach-frontend.git
cd vita-voice-coach-frontend
```
2. Install dependencies
```
npm install
```
3. Create environment file
```
cp .env.example .env
```
4. Start development server
```
npm run dev
```
5. Open the app
```
http://localhost:3000
```
---

## 📡 API Integration

The app uses a typed Axios client (`src/lib/api.ts`).

Example request:
```
const posts = await getPosts();
```

Example response:
```
[
  {
    "id": 1,
    "title": "Article title",
    "slug": "article-title",
    "content": "...",
    "publishedAt": "2023-01-01T00:00:00"
  }
]
```
---

## ✉️ Contact Form Flow

- Validated with Yup
- Submits to /api/messages
- Saved in CMS
- Email notification sent via SMTP
- Accessible status alerts
**Success example:**
```
{ "ok": true, "id": 101 }
```
---

## 🧪 Scripts
```
npm run dev        # Start development
npm run build      # Build for production
npm run start      # Start production
npm run lint       # Run ESLint
```
---

## 🛡️ Performance & Accessibility

- Core Web Vitals optimized
- Lazy loaded content
- GPU accelerated animations
- Semantic HTML
- ARIA accessibility attributes
- Light/dark contrast compliant

---

## 📱 Responsiveness

Fully optimized for:
- Desktop
- Tablet
- Mobile
- High-DPI screens

---

## 🚢 Deployment
Hosted on Vercel

**Build:**
```
npm run build
```

**Start:**
```
npm run start
```

Environment variables must be configured in Vercel UI.

---

## 📈 Future Improvements

✔️🧵 Contact form rate-limiting

✔️🧪 Unit tests (Vitest / React Testing Library)

✔️🌍 i18n language support

✔️🚀 Static generation of blog

✔️🔐 Auth (login portal)

✔️💽 Client cache & offline mode

---

## 👩‍💻 Author

**Olesia Kubska**
Full-Stack Developer

🌐 https://vitavoice.pl

📧 info@vitavoice.pl

---

## 📄 License

Private.
Unauthorized use, distribution, or modification is prohibited.
