// Set dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Highlight nav link on scroll (like a simple table of contents)
  const sectionIds = ["about", "experience", "talks", "training", "skills", "contact"];
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    let current = "about";
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === "#" + current) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
