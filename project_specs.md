# Project Specifications: The Portal Door Landing Page

## What the App Does
This is a promotional landing page for the book "The Portal Door - The Time of Remembering". It showcases the book to English-speaking audiences worldwide, aiming for planetary visibility. The page includes the book title, a brief description, and calls to action for purchasing or learning more.

## Who Uses It
- Primary audience: Readers interested in fantasy, sci-fi, or inspirational books
- Secondary: Book enthusiasts, potential buyers on platforms like Amazon
- Global reach: English-speaking users from all countries

## Tech Stack
- **Language:** TypeScript
- **Framework:** Next.js@latest (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Other:** No backend needed; static page with possible future Supabase for analytics if required

## Pages and User Flows
- **Public Page:** Single landing page (/)
  - Hero section with book title and cover image
  - Brief synopsis
  - Author info (if provided)
  - Purchase links (Amazon, etc.)
  - Contact or social links
- No authentication required; fully public

## Data Models and Storage
- No database needed; all content is static
- Images: Book cover hosted on Vercel or external CDN
- If analytics added later: Supabase for tracking visits

## Third-Party Services
- None currently; potential for Stripe if selling directly, but start with external links

## What "Done" Looks Like
- Responsive landing page deployed on Vercel
- Matches the look and feel of the example (blue theme instead of orange)
- Color palette extracted from book cover (blues, whites, etc.)
- Fast loading, SEO optimized for book promotion
- Approval from user before final deployment</content>
<parameter name="filePath">/Users/goddess/Documents/Higgsfield Demo/project_specs.md