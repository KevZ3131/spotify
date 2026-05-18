# Spotify Clone
Demo (Backend is not deployed): (https://spotify-zeta-three.vercel.app/)
A Spotify-inspired music streaming web app built with Next.js.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth & Database:** Supabase (Auth + Postgres)
- **Storage:** Supabase Storage (song files + images)
- **UI:** Radix UI (Dialog/Modal), React Icons
- **Forms & UX:** React Hook Form, React Hot Toast
- **Audio:** use-sound

## Features

- User authentication (email magic link + GitHub OAuth)
- Browse and play songs
- Playback controls (play/pause, next/previous, volume, mute)
- Like/unlike songs and view a dedicated **Liked Songs** page
- Upload songs (MP3) with cover images
- Responsive layout with sidebar navigation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
