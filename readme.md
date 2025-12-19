# MindLap Architects Website

A minimal, modern, and intelligent single-page website for MindLap Architects featuring portfolio showcases and contact form integration.

## Features

- Single-screen, non-scrolling homepage with stunning animations
- Portfolio system with 3 main projects and detailed photo galleries
- Masonry-style image layouts with rounded corners
- Contact form with email integration via Resend API
- Google Maps integration
- Social media links (Instagram & LinkedIn)
- Fully responsive design
- Black/white color scheme with coral pink (#F89FA3) accents

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Resend API

1. Sign up for a free account at [Resend.com](https://resend.com/)
2. Verify your domain or use their test domain
3. Get your API key from the Resend dashboard

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Update Email Recipients

Edit `/api/send-email.js` and update:

- Line 40: Change `from` email to your verified domain
- Line 41: Change `to` email to your contact email address

```javascript
from: 'MindLap Website <noreply@yourdomain.com>', // Update this
to: ['info@mindlaparchitects.com'], // Update this
```

### 5. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option B: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variable `RESEND_API_KEY` in the Vercel project settings
6. Deploy

### 6. Test the Contact Form

Once deployed, the contact form will automatically send emails via Resend when users submit the form.

## Project Structure

```
ML/
├── mindlap-homepage.html    # Main website file
├── logo.png                 # MindLap logo
├── project/                 # Project images
│   ├── project-1/          # Residential Haven (5 images)
│   ├── project-2/          # Modern Interiors (5 images)
│   └── project-3/          # Commercial Space (4 images)
├── api/
│   └── send-email.js       # Serverless function for email
├── package.json
└── README.md
```

## Local Development

To test the serverless function locally:

```bash
npm run dev
```

This will start a local development server with the Vercel environment.

## Color Palette

- **Primary Background**: `#FFFFFF` (White)
- **Primary Text**: `#000000` (Black)
- **Accent Color**: `#F89FA3` (Coral Pink)
- **Secondary Text**: `#666666` (Grey)

## Credits

**MindLap Architects**
- Ar. Chella Priyanka
- Ar. Ponkavi

Design & Development: 2024
