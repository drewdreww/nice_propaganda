# NICE PROPAGANDA | Promotional Website

> 🚧 **Note:** This project was created as a **personal design practice** exercise to refine front-end development skills and explore modern UI aesthetics.

## 🎯 Purpose & Goals
This website serves as a practical application of web design principles, focusing on:
* **Visual Storytelling:** Translating a streetwear brand's gritty aesthetic into code.
* **Responsive Design:** Mastering mobile-first layouts and media queries.
* **CSS Mastery:** Utilizing Flexbox and Grid for complex layouts without relying on frameworks like Bootstrap or Tailwind.

## 📖 Project Description
**Nice Propaganda** is a modern, high-impact single-page promotional website designed for a streetwear clothing brand.

The design philosophy centers around the brand's tagline: *"Visual Noise."* It utilizes a stark **dark-mode aesthetic**, bold **Oswald typography**, and immersive **parallax scrolling** to create an unapologetic and gritty user experience typical of street culture.

## ✨ Key Features

* **Immersive Hero Section:** Features a full-screen background with a parallax scrolling effect and a "hollow text" typographic overlay.
* **Latest Drop Feature:** A dedicated spotlight section ("Fresh Off The Rack") to highlight specific new releases with a large feature image.
* **Visual Catalog:** A clean, 2-column (mobile) to multi-column (desktop) grid displaying the full t-shirt collection without text clutter.
* **Lifestyle Lookbook:** A masonry-style gallery showcasing models and lifestyle shots to establish the brand vibe.
* **Fully Responsive:**
    * Includes a custom animated **Hamburger Menu** for mobile navigation.
    * Optimized grids that switch from 1-column to 2-columns on mobile to reduce scrolling fatigue.
    * Fixes for common mobile browser bugs (like the iOS background attachment bug).

## 🛠️ Technologies Used

* **HTML5:** Semantic structure for SEO and accessibility.
* **CSS3:**
    * CSS Grid & Flexbox for layout.
    * CSS Variables (`:root`) for easy color theming.
    * Media Queries for responsive mobile design.
    * Keyframe animations for text and menu fade-ins.
* **JavaScript (Vanilla):**
    * DOM manipulation for the mobile navigation toggle.
    * Smooth scrolling behaviors.
    * Sticky navigation bar effects on scroll.

## 📂 File Structure

To ensure the website loads correctly, your project folder should look like this:

```text
/nice-propaganda-site
│
├── index.html          # The main website structure
├── styles.css          # All visual styling and responsive rules
├── script.js           # Javascript for menu and scroll effects
├── README.md           # Project documentation
│
└── assets/             # FOLDER containing all images
    ├── nclogo.jpg      # Logo
    ├── hero2.png       # Background
    ├── latest.jpg      # New Arrival Portrait
    ├── cloth1.jpg      # Product images (1-6)
    ├── ...
    └── model1.jpg      # Lifestyle images (1-10)