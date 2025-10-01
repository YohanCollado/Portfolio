// ===== Fade-in sections on scroll =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// ===== Back-to-top button =====
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

// Show button after scrolling down
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll smoothly to top
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Smooth scroll for nav links =====
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Optional: Typing effect on hero header =====
const heroText = document.querySelector("header h1");
const fullText = heroText.textContent;
heroText.textContent = "";
let index = 0;

function typeEffect() {
    if (index < fullText.length) {
        heroText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

setTimeout(typeEffect, 500);
