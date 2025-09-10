// Smooth scroll for navigation links
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Highlight active navigation link while scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

// Form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("⚠️ Please fill out all fields before submitting.");
    } else {
      alert("✅ Thank you! Your message has been sent.");
    }
  });
}
