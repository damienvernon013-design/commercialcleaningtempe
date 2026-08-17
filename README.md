# Tempe Commercial Cleaning Microsite

A professional, high-converting microsite for Tempe Commercial Cleaning—deployed via Vercel.

**Live:** https://commercialcleaningtempe.com  
**Status:** Production Ready ✅

---

## Overview

This is a static HTML microsite with serverless form handling. Built for conversions with:

- **21+ Pages** covering services, locations, pricing, and resources
- **Smart Quote Forms** with UTM tracking and email integration
- **SEO Optimized** with structured data, canonicals, and sitemaps
- **Mobile Responsive** design across all devices
- **Fast Deployment** via Vercel (git-connected)

---

## Quick Start

### For Local Development

```bash
# Clone the repository
git clone https://github.com/<org>/commercialcleaningtempe.git
cd commercialcleaningtempe

# No build step needed—just open in your browser
# Using a local server is recommended for testing forms:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Environment Variables

Create `.env.local` for local development:

```bash
CONTACT_EMAIL=ops@thequotemasters.com
NEXT_PUBLIC_SITE_URL=https://commercialcleaningtempe.com
```

For Vercel, set these in the **Project Settings** → **Environment Variables**.

---

## Project Structure

```
commercialcleaningtempe/
├── api/
│   └── submit-quote.js       # Vercel serverless form handler
├── index.html                # Homepage
├── styles.css                # Global styles (no CSS framework)
├── robots.txt                # SEO: search engine crawling rules
├── sitemap.xml               # SEO: page index
├── vercel.json               # Vercel deployment config
├── CLAUDE.md                 # Project notes for Claude Code
├── HANDSOFF.md               # Launch checklist (READY TO LAUNCH)
├── README.md                 # This file
├── .env.example              # Environment variable template
└── [pages]/
    ├── about/
    ├── contact/
    ├── faq/
    ├── insured-and-bonded/
    ├── our-process/
    ├── pricing/
    ├── request-a-quote/
    ├── services/
    ├── service-areas/
    ├── resources/
    └── why-choose-us/
```

---

## Features

### Quote Forms

Two locations for quote requests:
- `/request-a-quote/` — Dedicated quote page
- `/contact/` — Contact page with quote form

**Form Fields:**
- name (required)
- email (required)
- phone (required)
- facility (optional)
- sqft (optional)
- notes (optional)

**Form Behavior:**
- Client-side HTML5 validation
- Server-side validation in `/api/submit-quote.js`
- UTM parameters captured (utm_source, utm_medium, utm_campaign, utm_content)
- Submission logged (see Vercel Functions logs)
- User receives success confirmation

### UTM Tracking

Automatically captures UTM parameters from URL and form submissions:

```
https://commercialcleaningtempe.com/request-a-quote/?utm_source=google&utm_medium=cpc&utm_campaign=tempe_service
```

Parameters are:
1. Read from URL query string
2. Stored in localStorage for cross-page tracking
3. Included in form submissions
4. Logged with quote requests for attribution

### SEO

- **Title Tags** — Unique per page
- **Meta Descriptions** — Written copy, not auto-generated
- **Canonical URLs** — Prevent duplicate content issues
- **Open Graph Tags** — og:title, og:description, og:image, og:url
- **Schema.org LocalBusiness** — Structured data for local search
- **robots.txt** — Controls crawler indexing
- **sitemap.xml** — 30+ pages indexed

### Security

- No hardcoded API keys or secrets
- Form validation on client and server
- HTTPS enforced via Vercel
- CORS disabled (same-origin only)
- CSP headers configured

---

## Deployment

### Connected to Vercel

This repository is git-connected to Vercel. Any push to `main` automatically deploys.

```bash
# Make changes locally
git add .
git commit -m "Update copy on homepage"
git push origin main

# Vercel automatically builds and deploys
# Preview URL: [auto-generated]
# Production: https://commercialcleaningtempe.com
```

### Environment Variables Required

Set these in Vercel dashboard (**Settings** → **Environment Variables**):

```
CONTACT_EMAIL=ops@thequotemasters.com
NEXT_PUBLIC_SITE_URL=https://commercialcleaningtempe.com
```

### Custom Domain

Domain is already configured in Vercel:
- Primary: `commercialcleaningtempe.com`
- DNS configured via Vercel's nameservers

---

## Form Submission Flow

```
User Fills Form
        ↓
Client validates (HTML5)
        ↓
POST to /api/submit-quote
        ↓
Server validates (Node.js)
        ↓
Log submission (Vercel Functions logs)
        ↓
Return success/error JSON
        ↓
User sees confirmation or error message
```

### Email Integration

Currently, form submissions are **logged to Vercel Functions** (see logs in Vercel dashboard).

To integrate with email/CRM, update `api/submit-quote.js`:

```javascript
// Example: SendGrid integration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `New Quote Request from ${name}`,
  html: emailBody
});
```

Supported integrations:
- **SendGrid** — Email delivery
- **Mailgun** — Email delivery
- **Slack** — Instant notifications
- **Pipedrive** — CRM sync
- **HubSpot** — CRM sync
- **Zapier** — No-code automation

---

## Performance

### Page Load Speed

- **LCP:** < 2.5s
- **INP:** < 200ms
- **CLS:** < 0.1
- **JavaScript:** Minimal (forms only)
- **CSS:** Uncompiled but tree-shaken (~12kb)
- **Images:** None (no image assets required)

### Bundle

- **Total:** ~15kb (HTML + CSS + JS for forms)
- **No external dependencies** (no npm packages)
- **Static delivery** via Vercel Edge

---

## Testing

### Manual Testing Checklist

- [ ] All 21 pages load without errors
- [ ] Navigation works across all pages
- [ ] Quote form submits and shows success
- [ ] Form validation works (try submitting empty)
- [ ] Links to phone/email work
- [ ] Mobile view is responsive
- [ ] No console errors
- [ ] No 404 errors

### Vercel Preview URLs

Before pushing to main, test via Vercel preview:

```bash
git push origin your-branch
# Vercel generates a preview URL
# Test forms, links, and mobile responsiveness
# Push to main when confident
```

---

## Monitoring & Maintenance

### Daily
- Check quote form submissions in Vercel logs
- Monitor for errors

### Weekly
- Review Core Web Vitals in Vercel Analytics
- Check for broken links (crawl with Screaming Frog or similar)

### Monthly
- Audit SEO (Google Search Console)
- Review referral sources (UTM attribution)
- Check for missing pages or broken navigation

---

## Common Tasks

### Add a New Page

1. Create `new-page/index.html`
2. Copy header/footer from existing page
3. Update nav active state
4. Add to sitemap.xml
5. Commit and push

### Update Contact Information

Search for these strings and update:
- Phone: `(866) 958-8773`
- Email: `ops@thequotemasters.com`
- Hours: `Mon–Fri 8:30am–5:00pm`

### Redirect Old URLs

Add to `vercel.json`:

```json
"redirects": [
  {
    "source": "/old-page",
    "destination": "/new-page/",
    "permanent": true
  }
]
```

### Integrate Email Service

Update `api/submit-quote.js` to send emails via SendGrid, Mailgun, Resend, etc.

See comments in the function for examples.

---

## Troubleshooting

### Form Not Submitting

1. Check browser console for errors
2. Verify `/api/submit-quote` endpoint is reachable
3. Check Vercel Functions logs
4. Ensure CONTACT_EMAIL is set in Vercel environment

### Page Not Deploying

1. Verify git push succeeded: `git log`
2. Check Vercel dashboard for build logs
3. Ensure no build errors in `vercel.json`

### UTM Tracking Not Working

1. Verify query params are in URL
2. Check browser localStorage
3. Inspect form hidden fields (dev tools)
4. Check Vercel Function logs for utm_* values

---

## Support & Questions

- **Code Issues:** Check git history via `git log --oneline`
- **Business Questions:** Contact ops@thequotemasters.com
- **Vercel Issues:** https://vercel.com/docs

---

## License

© 2025 Tempe Commercial Cleaning. All rights reserved.

---

**Last Updated:** 2026-08-17  
**Version:** 1.0.0  
**Status:** Production Ready ✅
