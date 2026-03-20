# SIET Panchkula Website

A comprehensive, responsive, and informative website for **Shaheed Ishwar Singh Institute of Engineering & Technology (SIET)**, Panchkula, Haryana.

## Features

### ✨ Key Highlights

- **Bilingual Institute Name**: Prominently displays institute name in both English and Hindi
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **User-Friendly Navigation**: Sticky header and mobile hamburger menu
- **Comprehensive Sections**:
  - Hero/Banner with call-to-action buttons
  - About section with key statistics
  - Programs/Courses offered
  - Facilities and amenities
  - Contact information and form
  - Footer with quick links

### 🎨 Design Elements

- Professional color scheme based on institute branding
- Gradient backgrounds and modern card designs
- Hover effects and smooth animations
- Mobile-responsive navigation menu
- Institute logo display with fallback handling
- Hindi language support for accessibility

### 📱 Responsive Breakpoints

- **Desktop**: Full layout with side-by-side sections
- **Tablet** (≤768px): Adjusted layouts and collapsible navigation
- **Mobile** (≤480px): Single-column layout, optimized touch targets

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development

The development server will start at `http://localhost:5173/`

```bash
npm run dev
```

## Technology Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling with modern features

## Project Structure

```
sietcompition/
├── public/           # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # Component styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
└── package.json     # Project dependencies
```

## Website Sections

1. **Header**: Institute name (English & Hindi), logo, and navigation toggle
2. **Navigation**: Responsive menu with smooth scrolling
3. **Hero**: Welcome banner with key information and CTAs
4. **About**: Institute overview with highlights (years, faculty, alumni, placement)
5. **Programs**: Engineering courses offered with descriptions
6. **Facilities**: Campus amenities and infrastructure
7. **Contact**: Address, phone, email, and contact form
8. **Footer**: Quick links and institute information

## Customization

To customize the website:

1. **Colors**: Update CSS variables in `src/App.css` (`:root` section)
2. **Content**: Modify text and data in `src/App.jsx`
3. **Logo**: Add institute logo as `/public/siet-logo.png`
4. **Styling**: Adjust styles in `src/App.css`

## SEO Optimization

The website includes:
- Meta descriptions and keywords
- Semantic HTML structure
- Descriptive alt text for images
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for SIET Panchkula.

## About SIET

**Shaheed Ishwar Singh Institute of Engineering & Technology** is a premier engineering institution located in Panchkula, Haryana. Established in 2008, SIET is affiliated with Kurukshetra University and approved by AICTE.

**Website**: [sietpanchkula.ac.in](https://sietpanchkula.ac.in)

---

Built with React + Vite
