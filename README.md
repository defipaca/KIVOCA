# KIVOCA - Luxury Fractional Ownership in Japan

A high-end, modern, luxury real-estate lead-generation website built with Next.js, React, and TailwindCSS.

## Features

- **Hero Section**: Fullscreen banner with luxury property imagery
- **Featured Properties**: Grid display of 6 premium Japanese properties
- **About Section**: Clean, minimal company description
- **Waitlist Form**: Email capture with name (optional)
- **Responsive Design**: Mobile-first, fully responsive layout
- **Premium Aesthetic**: Inspired by pacaso.com and kessaku.com

## Design System

- **Colors**: White, Charcoal (#1A1A1A), Gold/Beige accents
- **Typography**: 
  - Headers: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Spacing**: Clean, minimal spacing similar to premium real estate sites

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
KIVOCA/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/
│   ├── HeroSection.tsx   # Hero banner component
│   ├── PropertyCard.tsx  # Individual property card
│   ├── PropertyGrid.tsx  # Grid of properties
│   ├── AboutSection.tsx  # About section
│   ├── WaitlistForm.tsx # Waitlist button (links to external form)
│   └── Footer.tsx        # Footer component
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Components

All components are reusable and follow a consistent design pattern:
- Clean, minimal styling
- Smooth hover transitions
- Mobile-responsive
- Accessible markup

## Form Setup

The waitlist button links to an external form (Tally or Google Forms).

### Setup Instructions

1. **Create your form**:
   - Create a form on [Tally](https://tally.so) or [Google Forms](https://forms.google.com)
   - Copy the form URL

2. **Configure the form URL**:
   - Option 1: Update the `formUrl` variable in `components/WaitlistForm.tsx`
   - Option 2: Create a `.env.local` file and add:
     ```
     NEXT_PUBLIC_FORM_URL=https://your-form-url-here
     ```

## Next Steps

- Add property detail pages
- Implement image optimization
- Add loading states and animations
- Integrate with CMS for dynamic property data

