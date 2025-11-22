// Selectors
const navbar = document.getElementById("navbar");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Navigation Toggle
const navSlide = () => {
  if (burger) {
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });

      // Burger Animation
      burger.classList.toggle("toggle");
    });
  }
};

navSlide();

// Close Menu when a link is clicked (for Mobile)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    // Smooth Scroll logic
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close Mobile Menu if open
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach((link) => {
          link.style.animation = "";
      });
    }
  });
});