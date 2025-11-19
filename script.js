document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const sections = ["home", "cv", "talks"];
  const navLinks = document.querySelectorAll(".top-nav-links a");

  function onScroll() {
    let current = "home";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) current = id;
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
