# 🎓 Dnyan Shakti Portal

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-teal.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Modern Educational Institution Portal for Lilabai Tulshiramji Dhokane Senior College**

*"Dnyan Parm Balam" - Knowledge is Supreme Strength*

[🚀 Live Demo](https://dnyan-shakti-portal.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/Abhiatole/dnyan-shakti-portal/issues) • [💡 Request Feature](https://github.com/Abhiatole/dnyan-shakti-portal/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🏫 Overview

Dnyan Shakti Portal is a comprehensive digital platform designed for Lilabai Tulshiramji Dhokane Senior College, located in Asalgaon, Maharashtra. This modern web application serves as the primary digital gateway for students, faculty, and administration, providing seamless access to academic resources, administrative services, and institutional information.

### 🎯 Mission
To digitally transform the educational experience by providing a unified, accessible, and user-friendly platform that enhances learning, streamlines administration, and strengthens the college community.

### 🌟 Key Highlights
- **NAAC A+ Grade** accredited institution
- **5000+** active students across multiple programs
- **150+** qualified faculty members
- **25+** academic programs from undergraduate to postgraduate
- **Digital-first** approach to education management

## ✨ Features

### 🎨 User Interface & Experience
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Academic Design System**: Professional color palette with Deep Navy (#0C2D48) and Academic Gold (#D4AF37)
- **Smooth Animations**: Micro-interactions with 0.3s-0.8s ease timing
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios
- **Progressive Web App**: Offline support and app-like experience

### 👥 Multi-Role Dashboard System
- **Student Portal**: Academic records, assignments, results, and course materials
- **Teacher Dashboard**: Class management, attendance tracking, and grade submission
- **Admin Panel**: Comprehensive institution management and analytics
- **Guest Interface**: Public information and admission inquiries

### 📚 Academic Management
- **Course Catalog**: Comprehensive program listings with detailed curricula
- **Digital Library**: Online resources and research materials
- **Event Management**: Campus events, notifications, and announcements
- **Gallery System**: Visual showcase of campus life and achievements
- **Contact Integration**: Multi-channel communication system

### 🔐 Security & Performance
- **Authentication System**: Role-based access control
- **Data Protection**: Secure handling of sensitive academic information
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Enhanced**: Structured data and meta optimization

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern component-based architecture
- **TypeScript 5.5.4** - Type-safe development with enhanced IDE support
- **Vite 5.4.19** - Lightning-fast build tool with HMR

### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, customizable SVG icons
- **Custom Design System** - Academic-focused component library

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **React Router** - Client-side routing with nested layouts
- **React Helmet** - Document head management for SEO

### Performance & Optimization
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - Dynamic imports for improved performance
- **Image Optimization** - WebP support with fallbacks
- **Lighthouse Score** - 90+ performance metrics

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** (≥ 18.0.0) - [Download](https://nodejs.org/)
- **npm** (≥ 9.0.0) or **yarn** (≥ 1.22.0)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhiatole/dnyan-shakti-portal.git
   cd dnyan-shakti-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080) to view the application.

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check

# Format code
npm run format
```

## 📁 Project Structure

```
dnyan-shakti-portal/
├── public/                     # Static assets
│   ├── College*.jpeg          # Institution images
│   ├── gallery-*.jpg          # Gallery assets
│   ├── logo.png               # College logo
│   └── favicon.ico            # Site favicon
├── src/
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── card.tsx      # Card component
│   │   │   ├── button.tsx    # Button variants
│   │   │   ├── lightbox.tsx  # Image lightbox
│   │   │   └── ...           # Other UI components
│   │   └── site/             # Site-specific components
│   │       ├── Navbar.tsx    # Navigation component
│   │       └── Footer.tsx    # Footer component
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx    # Mobile detection
│   │   ├── use-toast.ts      # Toast notifications
│   │   └── use-scroll-animation.tsx # Scroll animations
│   ├── lib/                  # Utility libraries
│   │   └── utils.ts          # Helper functions
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Homepage
│   │   ├── About.tsx         # About page
│   │   ├── Admissions.tsx    # Admissions info
│   │   ├── DashboardAdmin.tsx    # Admin dashboard
│   │   ├── DashboardStudent.tsx  # Student portal
│   │   ├── DashboardTeacher.tsx  # Teacher dashboard
│   │   ├── Events.tsx        # Events page
│   │   ├── Gallery.tsx       # Photo gallery
│   │   └── Contact.tsx       # Contact page
│   ├── assets/               # Source assets
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles
│   └── vite-env.d.ts         # Vite type definitions
├── docs/                     # Documentation
│   ├── ACADEMIC_DESIGN_SYSTEM.md    # Design guidelines
│   ├── BUTTON_ENHANCEMENTS.md       # UI component docs
│   ├── COLLEGE_IMAGES_INTEGRATION.md # Asset management
│   ├── COLOR_CONTRAST_FIXES.md      # Accessibility guide
│   └── LATEST_UPDATES_FIXES.md      # Maintenance log
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🎨 Design System

### Color Palette

Our academic design system is built around institutional colors that reflect professionalism and educational excellence:

```css
/* Primary Colors */
--color-deep-navy: #0C2D48      /* Primary brand color */
--color-academic-gold: #D4AF37   /* Accent and highlights */
--color-light-beige: #F8F5F0     /* Background and subtle accents */
--color-dark-gold: #B5942D       /* Darker gold variant */

/* Usage */
.btn-primary { @apply bg-[#D4AF37] hover:bg-[#B5942D] text-[#0C2D48]; }
.bg-primary { @apply bg-[#0C2D48]; }
.bg-secondary { @apply bg-[#F8F5F0]; }
```

### Typography

```css
/* Font Hierarchy */
.text-heading-1 { @apply text-5xl md:text-6xl font-bold; }
.text-heading-2 { @apply text-4xl font-bold; }
.text-heading-3 { @apply text-2xl font-semibold; }
.text-body { @apply text-lg leading-relaxed; }
.text-caption { @apply text-sm text-gray-600; }
```

### Animation Standards

```css
/* Transition Timing */
.transition-standard { @apply transition-all duration-300 ease-in-out; }
.transition-smooth { @apply transition-all duration-500 ease-in-out; }
.transition-quick { @apply transition-all duration-150 ease-in-out; }

/* Hover Effects */
.hover-lift { @apply hover:-translate-y-2 hover:shadow-xl; }
.hover-scale { @apply hover:scale-105; }
.hover-glow { @apply hover:shadow-lg hover:shadow-[#D4AF37]/20; }
```

### Component Guidelines

#### Buttons
- **Primary**: Academic Gold background with Deep Navy text
- **Secondary**: Light Beige background with border
- **Outline**: Transparent with colored border
- **Hover States**: Consistent lift and color transitions

#### Cards
- **Academic Cards**: White background with subtle gold border
- **Feature Cards**: Enhanced shadows with hover animations
- **Dashboard Cards**: Clean layout with proper spacing

#### Navigation
- **Navbar**: Deep Navy background with gold accents
- **Footer**: Complementary styling with contact information
- **Breadcrumbs**: Clear hierarchy with academic colors

## 🔗 API Integration

### Authentication Endpoints
```typescript
// User authentication
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/register
GET  /api/auth/profile

// Role-based access
GET  /api/auth/student-profile
GET  /api/auth/teacher-profile
GET  /api/auth/admin-profile
```

### Academic Data Endpoints
```typescript
// Course management
GET    /api/courses
GET    /api/courses/:id
POST   /api/courses (Admin only)
PUT    /api/courses/:id (Admin/Teacher)
DELETE /api/courses/:id (Admin only)

// Student records
GET    /api/students
GET    /api/students/:id
POST   /api/students/enroll
GET    /api/students/:id/grades
```

### Content Management
```typescript
// Events and announcements
GET    /api/events
POST   /api/events (Admin only)
PUT    /api/events/:id (Admin only)
DELETE /api/events/:id (Admin only)

// Gallery management
GET    /api/gallery
POST   /api/gallery/upload (Admin only)
DELETE /api/gallery/:id (Admin only)
```

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
# Environment variables: Configure in Netlify dashboard
```

#### Traditional Hosting
```bash
# Upload dist/ folder contents to your web server
# Configure web server to serve index.html for all routes
```

### Environment Variables

```bash
# Production environment variables
VITE_API_BASE_URL=https://api.dnyanshakti.edu.in
VITE_APP_NAME="Dnyan Shakti Portal"
VITE_COLLEGE_EMAIL=info@ltdhokane.edu.in
VITE_COLLEGE_PHONE=+91-XXXXX-XXXXX
```

### Performance Optimization

- **Bundle Analysis**: Use `npm run build --analyze` to analyze bundle size
- **Image Optimization**: Implement WebP format with fallbacks
- **CDN Integration**: Serve static assets via CDN
- **Caching Strategy**: Configure proper HTTP caching headers
- **Lighthouse Audit**: Maintain 90+ performance score

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines before getting started.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Support

### College Information
- **Institution**: Lilabai Tulshiramji Dhokane Senior College
- **Location**: Asalgaon, Jalgaon, Buldhana, Maharashtra 443402
- **Email**: info@ltdhokane.edu.in
- **Phone**: +91-XXXXX-XXXXX
- **Website**: [College Official Website]

### Technical Support
- **Issues**: [GitHub Issues](https://github.com/Abhiatole/dnyan-shakti-portal/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Abhiatole/dnyan-shakti-portal/discussions)
- **Email**: abhiatole@example.com

### Useful Links
- [Design System Documentation](docs/ACADEMIC_DESIGN_SYSTEM.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

<div align="center">

**Built with ❤️ by the Dnyan Shakti Development Team**

*Empowering Education Through Technology*

[![GitHub stars](https://img.shields.io/github/stars/Abhiatole/dnyan-shakti-portal?style=social)](https://github.com/Abhiatole/dnyan-shakti-portal)
[![GitHub forks](https://img.shields.io/github/forks/Abhiatole/dnyan-shakti-portal?style=social)](https://github.com/Abhiatole/dnyan-shakti-portal)
[![GitHub watchers](https://img.shields.io/github/watchers/Abhiatole/dnyan-shakti-portal?style=social)](https://github.com/Abhiatole/dnyan-shakti-portal)

</div>
