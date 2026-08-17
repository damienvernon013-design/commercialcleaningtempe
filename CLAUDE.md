# Tempe Commercial Cleaning Microsite

## Project Overview

A static HTML microsite for Tempe Commercial Cleaning with quote form integration. Deployed via Vercel.

**Tech Stack:**
- Static HTML/CSS (no framework)
- Vercel Functions (Node.js) for form submissions
- Environmental configuration via Vercel secrets
- UTM tracking for analytics

**Key Contacts:**
- Email: ops@thequotemasters.com
- Phone: (866) 958-8773
- Business Hours: Mon–Fri 8:30am–5:00pm

## Project Structure

```
/
├── index.html                 # Homepage
├── styles.css                 # Global styles
├── robots.txt                 # Search engine crawling
├── sitemap.xml               # Sitemap for SEO
├── api/                      # Vercel serverless functions
│   └── submit-quote.js       # Contact form handler
├── about/                    # About Us page
├── contact/                  # Contact page
├── faq/                      # FAQ
├── insured-and-bonded/       # Trust badge page
├── our-process/              # Process page
├── pricing/                  # Pricing page
├── request-a-quote/          # Quote form page
├── services/                 # Service pages
├── service-areas/            # Service area pages
├── resources/                # Blog/resource pages
└── why-choose-us/           # Why us page
```

## Key Features

- **Multi-page site** covering services, service areas, resources
- **Quote form** with field validation and email integration
- **SEO-optimized** with canonical tags, structured data, sitemaps
- **Mobile-responsive** design
- **UTM tracking** for campaign attribution

## Deployment

**Platform:** Vercel (Git-connected)
**Branch:** main
**Domain:** commercialcleaningtempe.com

### Environment Variables (Required for Vercel)

```
CONTACT_EMAIL=ops@thequotemasters.com
CONTACT_FORM_API_KEY=<secret>
NEXT_PUBLIC_UTM_SOURCE=web
NEXT_PUBLIC_SITE_URL=https://commercialcleaningtempe.com
```

## Form API

**Endpoint:** `/api/submit-quote`
**Method:** POST
**Handler:** api/submit-quote.js

Submits quote requests to CRM (via email or API integration).

### Form Fields

- name (required)
- email (required)
- phone (required)
- facility (optional)
- sqft (optional)
- notes (optional)
- utm_source, utm_medium, utm_campaign, utm_content (captured from query params)

## Checklist

### Pre-Launch

- [x] Site content complete and reviewed
- [x] All pages have proper SEO metadata
- [x] Structured data (LocalBusiness schema) present
- [ ] Quote form API endpoint configured
- [ ] Email notifications working
- [ ] UTM parameter tracking active
- [ ] Analytics/tracking code added
- [ ] No placeholder values or test content
- [ ] All links validated
- [ ] Mobile responsiveness verified
- [ ] Performance optimized (CLS, LCP, INP)
- [ ] Vercel deployment verified

### Post-Launch Monitoring

- Monitor form submissions
- Track page performance via Vercel Analytics
- Monitor UTM parameter attribution
- Check for broken links monthly
- Review 404s in Vercel logs

## Important Notes

- **No testing CRM:** Form submissions will be sent via email initially.
- **Vercel Deployment:** Connected via git. Pushes to main automatically deploy.
- **Static HTML:** No build process required. Deploy immediately.
- **Form Handling:** Requires serverless function for email submission (created via `/api/submit-quote.js`).

## Contact & Support

For changes or questions:
1. Create a branch
2. Make changes
3. Test locally or via Vercel preview
4. Push to main (auto-deploys)
5. Monitor form submissions

---

**Created:** 2026-08-17  
**Status:** Setup Phase
