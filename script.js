document.addEventListener("DOMContentLoaded", () => {
  // Année dynamique
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Surbrillance du menu selon la section
  const sections = ["home", "cv", "talks"];
  const navLinks = document.querySelectorAll(".top-nav-links a");

  function onScroll() {
    let current = "home";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = id;
      }
    });

    navLinks.forEach((link) => {
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
