Marinos: bilingual website for a construction & renovations company (client project)
Next.js · React · TypeScript · CSS Modules · Resend · Vercel· Redis

Built a bilingual (EN/EL) site with locale-prefixed routes, a proxy-based redirect from the browser language, JSON dictionaries and a language switcher.
Implemented a contact form with a Server Action: validation, honeypot spam protection, basic in-memory IP rate limiting and email delivery through Resend.
Built a responsive, accessible navigation and an image-optimized services page rendered from dictionary data.
Developed the translation feature on a separate branch and merged it, with Git/GitHub version control.

## Known limitations
- Contact emails are sent through Resend in test mode, so they currently only reach the owner's account until the client's domain is verified.
- **The rate limiter is in-memory.** It allows 3 messages per 10 minutes per IP, but the counters live in each serverless instance's memory, so the limit is per instance and resets on cold starts and redeploys. A shared store such as Redis would be needed for a strict limit.

**Status:** Complete and deployed on Vercel. Awaiting the client's domain and launch.
**Demo:** https://marinos-phi.vercel.app

