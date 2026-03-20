# Backend Development Guide — iraguzov.com

## Current State
The site is currently a static portfolio with no backend logic. This guide covers future backend needs.

## Architecture
- **Next.js API Routes** (`src/app/api/`) for any server-side logic
- **Server Components** are default in App Router — use them for data fetching

## Planned Backend Features

### 1. Contact Form API (`/api/contact`)
- POST endpoint to receive contact form submissions
- Options for handling:
  - **Email forwarding** via Resend, SendGrid, or Nodemailer
  - **Webhook** to Telegram bot for instant notifications
  - **Database** storage (optional, Supabase or similar)
- Input validation with Zod
- Rate limiting to prevent spam

### 2. Resume/CV Download (`/api/resume`)
- Serve the latest PDF resume
- Track download count (optional analytics)

### 3. Analytics (Optional)
- Consider Plausible or Umami for privacy-friendly analytics
- Avoid Google Analytics

## Deployment
- **Target:** Vercel (optimal for Next.js)
- **Domain:** iraguzov.com
- **Environment Variables:**
  - `CONTACT_EMAIL` — Email for form submissions
  - `RESEND_API_KEY` — For email sending (if used)
  - `TELEGRAM_BOT_TOKEN` — For Telegram notifications (if used)

## API Route Template
```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Validate input
  // Process submission
  // Return response

  return NextResponse.json({ success: true });
}
```

## Security Considerations
- Validate all inputs on the server side
- Use CORS headers appropriately
- Implement rate limiting on contact form
- Never expose API keys in client-side code
- Use environment variables for all secrets
