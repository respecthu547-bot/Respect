# Amruth — Natural Mineral Water Website

A modern, responsive single-page website for **Amruth**, a natural mineral water brand.
Built with plain HTML, CSS, and vanilla JavaScript — no build step required.

## ✨ Features

- **Hero section** with an animated CSS water bottle and floating bubbles
- **Feature highlights** (spring sourced, lab tested, eco bottles, home delivery)
- **About** section telling the brand story
- **Products** grid with four bottle sizes and pricing
- **Process** timeline — "From Spring to Sip" (7 steps)
- **Testimonials** from customers
- **Contact / order form** with client-side validation
- Sticky glassmorphic navbar, mobile hamburger menu
- Scroll-reveal animations and fully responsive layout

## 🚀 Running locally

No dependencies needed — just open the file in a browser:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
```

Or serve it with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📁 Structure

```
.
├── index.html   # Markup & content
├── styles.css   # Styling, layout, animations
└── script.js    # Nav, scroll reveal, form handling
```

## 🎨 Customising

- **Colors** live in CSS variables at the top of `styles.css` (`:root`).
- **Products & prices** are in the `#products` section of `index.html`.
- **Contact details** are in the `#contact` section.
