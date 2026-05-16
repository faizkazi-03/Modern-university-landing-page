# UniVerse - Modern University Landing Page

A premium, modern university landing page built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism cards, gradient backgrounds, and floating animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for interactive experiences
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Fast Performance**: Optimized for speed with Next.js
- **Easy Deployment**: Ready for Vercel deployment

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
project/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── pages/              # Next.js pages
│   ├── index.js
│   ├── _app.js
│   └── _document.js
├── data/               # Content data
│   └── content.js
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
│   └── images/
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        blue: '#2563EB',
        navy: '#0F172A',
        purple: '#7C3AED',
        light: '#F8FAFC',
      },
    },
  },
}
```

### Content

Edit `data/content.js` to update website content, including:
- Navbar links
- Hero section
- About section
- Programs
- Features
- Testimonials
- Footer links

## 🚢 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your website will be live in seconds!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

- **Navbar**: Sticky navigation with mobile menu
- **Hero**: Split layout with animated cards
- **About**: University information with statistics
- **Programs**: Course offerings with hover effects
- **Why Choose Us**: Features and benefits
- **Testimonials**: Student reviews
- **CTA**: Call-to-action section
- **Footer**: Links, contact info, and newsletter

## 🎯 Key Features

- Glassmorphism design
- Gradient backgrounds
- Floating animations
- Counter animations
- Hover effects
- Smooth scrolling
- Mobile-responsive
- SEO optimized
- Fast loading

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
