# SIET Panchkula Website

A comprehensive, modern, and highly interactive institutional website for **Shaheed Ishwar Singh Institute of Engineering & Technology (SIET)**, Panchkula, Haryana.

## 🌟 Features Implemented

### Core Features
- ✅ **Bilingual Institute Name**: Prominently displays institute name in both English and Hindi
- ✅ **Institute Logo**: Strong branding with logo in header
- ✅ **Fully Responsive**: Mobile-first design optimized for all devices
- ✅ **Clean Navigation**: Sticky header with smooth scrolling navigation

### Advanced Features

#### 1. 🌐 Smart Bilingual System
- Language toggle button (English ↔ Hindi)
- Dynamic content translation without page reload
- Persistent language preference using localStorage
- Complete translations for all UI elements

#### 2. 🤖 AI Assistant (Chatbot)
- Floating chat UI with smooth animations
- Contextual answers about admissions, courses, faculty, campus
- Bilingual support (English/Hindi)
- Predefined knowledge base with intelligent keyword matching
- Modern glassmorphism design

#### 3. 📢 Dynamic Notice & Announcement System
- Auto-updating notice board
- Scrolling ticker with continuous animation
- Filter notices by category (exam, admission, events)
- Urgent notice highlighting
- Responsive card-based layout

#### 4. 👤 Personalized Dashboard
- Student view: courses, timetable, notices
- Faculty view: schedule, announcements, classes
- Realistic login UI with smooth transitions
- Role-based content display

#### 5. 🎨 Advanced UI/UX
- Modern design with glassmorphism effects
- Framer Motion animations throughout
- Smooth hover effects and micro-interactions
- Loading skeletons for better UX
- Animated background particles
- Custom scrollbar styling

#### 6. 📊 Interactive Data Visualization
- Animated counters using Intersection Observer
- Real-time stats display (students, placements, companies, alumni)
- Smooth number counting animations
- Gradient backgrounds with patterns

#### 7. 🔍 Search & Filter System
- Global search bar with autocomplete
- Instant search suggestions
- Search across courses, faculty, notices, facilities
- Smart keyword matching
- Category-based filtering

#### 8. 📸 Media & Engagement
- Image gallery with grid layout
- Lightbox view for images
- Campus virtual tour video section
- Testimonials carousel with navigation
- Star ratings and role display
- Auto-playing carousel with manual controls

#### 9. ♿ Accessibility Features
- **Dark Mode**: Toggle with persistent preference
- **Font Size Adjuster**: Increase/decrease font size (80%-150%)
- **High Contrast Mode**: Enhanced visibility
- **Language Toggle**: Easy language switching
- **Keyboard Navigation**: Full keyboard support
- Floating accessibility panel

#### 10. 📍 Map & Contact Enhancements
- Integrated Google Maps
- Smart contact form with validation
- Email, phone quick actions
- Animated contact cards
- Hover effects on contact information

#### 11. ⚡ Performance Optimization
- **Lazy Loading**: Code splitting with React.lazy
- **Image Optimization**: Lazy loading images
- **Code Splitting**: Separate chunks for components
- **SEO Optimization**:
  - Complete meta tags
  - Open Graph tags
  - Twitter Card tags
  - Semantic HTML structure
  - Proper heading hierarchy

## 🛠️ Technology Stack

### Frontend
- **React** 19.2.0 - Modern UI library
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **Framer Motion** - Advanced animations library
- **React Icons** - Comprehensive icon library

### Build Tools
- **Vite** 7.2.4 - Lightning-fast build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting

## 📁 Project Structure

```
sietcompition/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── AccessibilityPanel.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Gallery.jsx
│   │   ├── NoticeBoard.jsx
│   │   ├── SearchBar.jsx
│   │   └── Stats.jsx
│   ├── contexts/        # React contexts
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/            # Data and content
│   │   ├── chatbot.js
│   │   ├── content.js
│   │   └── translations.js
│   ├── hooks/           # Custom React hooks
│   │   └── useAnimations.js
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template with SEO tags
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🚀 Getting Started

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

## 🎯 Key Features Breakdown

### Bilingual System
- Complete English and Hindi translations
- Automatic language detection
- Persistent user preference
- Context-aware content switching

### Chatbot Intelligence
- Knowledge base covers:
  - Admissions and eligibility
  - Programs and courses
  - Faculty information
  - Placement statistics
  - Campus facilities
  - Fee structure
  - Location and directions
- Keyword-based response matching
- Bilingual responses

### Accessibility Panel
Located at top-right with:
- Dark/Light mode toggle
- Font size controls (A-, A+)
- High contrast mode
- Language switcher
- All settings persist across sessions

### Performance Features
- Code splitting for all major components
- Lazy loading with Suspense
- Optimized bundle size
- Fast initial load
- Smooth animations without jank

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Hamburger menu navigation
- Touch-optimized interactions
- Responsive grid layouts
- Optimized font sizes
- Mobile-first approach

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#1e3a8a)
- **Secondary**: Light Blue (#3b82f6)
- **Accent**: Orange (#f59e0b)
- **Dark**: Gray scale for dark mode

### Typography
- System font stack
- Responsive font sizes
- Font size adjuster (80%-150%)

### Effects
- Glassmorphism
- Gradient backgrounds
- Smooth transitions
- Hover animations
- Micro-interactions

## 🔧 Customization

### Update Content
Edit data files in `src/data/`:
- `translations.js` - All text content
- `content.js` - Notices, testimonials, stats
- `chatbot.js` - Chatbot responses

### Modify Colors
Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ...
    }
  }
}
```

### Add New Languages
1. Add translations to `src/data/translations.js`
2. Update LanguageContext if needed
3. Add language toggle option

## 🌐 SEO Optimization

### Implemented
- ✅ Meta descriptions
- ✅ Keywords meta tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Descriptive link text
- ✅ Mobile-friendly
- ✅ Fast loading

## 🎯 Future Enhancements

Optional features for further development:
- Backend integration with Node.js/Express
- Database (MongoDB/Firebase) for dynamic content
- Admin panel for content management
- Real-time chat with WebSocket
- Advanced analytics dashboard
- Newsletter subscription
- Event registration system
- Student portal with authentication

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is created for SIET Panchkula.

## 🏢 About SIET

**Shaheed Ishwar Singh Institute of Engineering & Technology** is a premier engineering institution located in Panchkula, Haryana. Established in 2008, SIET is affiliated with Kurukshetra University and approved by AICTE.

**Website**: [sietpanchkula.ac.in](https://sietpanchkula.ac.in)

### Offered Programs
- Computer Science & Engineering
- Electronics & Communication Engineering
- Mechanical Engineering
- Electrical Engineering
- Civil Engineering
- Information Technology

### Contact
- **Address**: Sector 28, Panchkula, Haryana - 134108
- **Phone**: +91-172-2590290, 2590291
- **Email**: info@sietpanchkula.ac.in

---

## 🙏 Acknowledgments

Built with modern web technologies:
- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons

**Production Ready** ✨
