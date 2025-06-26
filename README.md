# Building Portfolio Website

A modern, professional portfolio website for building and construction services built with React, Tailwind CSS, and Framer Motion. Designed to be simple, elegant, and highly functional with excellent SEO optimization.

## 🏗️ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized images, code splitting, and lazy loading
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Interactive Gallery**: Filterable project portfolio with high-quality images
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Framer Motion animations throughout the site

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/elliottjhannaford/building-portfolio.git
   cd building-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
building-portfolio/
├── public/
│   ├── images/           # Project images go here
│   └── vite.svg         # Site favicon
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/          # Main pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

## 📸 Adding Your Photos

### Step 1: Prepare Your Images

1. **Resize your images** to appropriate dimensions:
   - Hero images: 1200x900px (4:3 ratio)
   - Project thumbnails: 800x600px (4:3 ratio)
   - Detail images: 1200x900px or larger

2. **Optimize image sizes** (aim for under 500KB per image):
   - Use JPG for photos
   - Use PNG for images with transparency
   - Consider using WebP for better compression

3. **Name your images** descriptively:
   - `hero-image.jpg`
   - `project-1.jpg`, `project-1-2.jpg`, etc.
   - `about-hero.jpg`
   - `about-story.jpg`

### Step 2: Add Images to Your Project

1. **Copy your images** to the `public/images/` folder:
   ```bash
   cp ~/Downloads/*.jpg public/images/
   ```

2. **Required images** for the current design:
   - `hero-image.jpg` - Main homepage hero image
   - `about-hero.jpg` - About page hero image
   - `about-story.jpg` - About page story section
   - `project-1.jpg` through `project-6.jpg` - Project thumbnails
   - `residential-service.jpg` - Services page
   - `commercial-service.jpg` - Services page
   - `renovation-service.jpg` - Services page
   - `carpentry-service.jpg` - Services page

### Step 3: Update Image References

If you use different file names, update the image paths in:
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Projects.jsx`
- `src/pages/Services.jsx`

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. **Create a new repository** on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `building-portfolio`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Add your repository as remote**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/elliottjhannaford/building-portfolio.git
   git push -u origin main
   ```

### Step 2: Configure GitHub Pages

1. **Install gh-pages package** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

4. **Your site will be live at**:
   `https://elliottjhannaford.github.io/building-portfolio/`

### Step 3: Future Updates

To update your live site:
```bash
npm run build
npm run deploy
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Customization

#### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors here
  }
}
```

#### Content
Update text content in the page components:
- Company name: Search for "BuildCraft" and replace
- Contact information: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Services: Modify in `src/pages/Services.jsx`
- About content: Update in `src/pages/About.jsx`

#### SEO
Update SEO information in `index.html`:
- Title tags
- Meta descriptions
- Structured data

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Fast loading on mobile connections

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**:
   - Check file paths in `public/images/`
   - Ensure image files exist
   - Check file extensions (case sensitive)

2. **Deployment issues**:
   - Verify GitHub repository is public
   - Check GitHub Pages settings
   - Ensure `homepage` in package.json is correct

3. **Build errors**:
   - Run `npm install` to ensure all dependencies
   - Check for syntax errors in components
   - Verify import paths

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all image files are in the correct location
3. Ensure all dependencies are installed
4. Check GitHub Actions for deployment errors

## 📄 License

This project is for personal/commercial use. Feel free to customize and modify as needed for your business.

## 🤝 Support

For questions or support with this website:
- Check this README for common solutions
- Review the code comments for guidance
- Test changes locally before deploying

---

**Built with React + Vite + Tailwind CSS + Framer Motion** 