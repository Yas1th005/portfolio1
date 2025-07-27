# Personal Website

A modern, fast, and responsive personal website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Fast & Modern**: Built with Next.js 15 and App Router
- 🎨 **Beautiful Design**: Tailwind CSS with custom animations
- 📱 **Responsive**: Works perfectly on all devices
- 🌙 **Dark Mode**: Automatic theme switching
- 📊 **Analytics**: Privacy-friendly Umami analytics
- 🎵 **Spotify Integration**: Shows currently playing music
- 📈 **GitHub Integration**: Displays contribution graph
- ⏱️ **WakaTime Integration**: Coding time statistics
- 🔍 **SEO Optimized**: Meta tags, sitemap, and robots.txt
- 🚀 **Performance**: Optimized images, caching, and code splitting

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **Content**: MDX for blog posts
- **Analytics**: Vercel Analytics & Umami
- **Deployment**: Vercel

## Quick Start

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd personal-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/personal-site)

1. **One-click deploy**: Click the button above
2. **Set environment variables**: Add your API keys in Vercel dashboard
3. **Custom domain**: Configure your domain in project settings

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Environment Variables

All environment variables are optional. See `.env.example` for the complete list and setup instructions.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── public/             # Static assets
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js and deployed on Vercel.
