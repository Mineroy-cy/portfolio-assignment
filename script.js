// ===== Page Load =====
document.addEventListener("DOMContentLoaded", () => {
  fadeInPage();
  highlightActiveLink();
  trackPageVisits();
  initTyping();
  initTheme();
  animateSkills();
});

// ===== Fade In =====
function fadeInPage() {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => document.body.style.opacity = 1, 100);
}

// ===== Active Nav =====
function highlightActiveLink() {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#22c55e";
      link.style.borderBottom = "2px solid #22c55e";
    }
  });
}

// ===== Typing Animation (Homepage) =====
function initTyping() {
  const el = document.getElementById("typingText");
  if (!el) return;

  const text = "Welcome to My Life Journey";
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      // Typing
      el.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        setTimeout(() => isDeleting = true, 1500); // pause before deleting
      }
    } else {
      // Deleting
      el.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        isDeleting = false;
      }
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

// ===== Scroll Progress Bar =====
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  const bar = document.getElementById("scrollProgress");
  if (bar) {
    bar.style.width = progress + "%";
  }
});

// ===== Theme Toggle =====
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
      }
    });
  }
}

// ===== Skill Bar Animation =====
function animateSkills() {
  const fills = document.querySelectorAll(".fill");

  fills.forEach(fill => {
    const value = fill.getAttribute("data-skill");
    setTimeout(() => {
      fill.style.width = value + "%";
    }, 400);
  });
}

// ===== Visits (Console Only) =====
function trackPageVisits() {
  let visits = localStorage.getItem("siteVisits");
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem("siteVisits", visits);
  console.log("Visits:", visits);
}

// ===== Welcome Button =====
function showWelcome() {
  alert("Welcome to my personal portfolio! Enjoy exploring my journey.");
}

// ===== Form Validation =====
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Thank you! Your message has been sent.");
  return false;
}

// ===== Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});

// ===== Timeline Animation =====
function animateTimeline() {
  const events = document.querySelectorAll(".event");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  events.forEach(event => observer.observe(event));
}

animateTimeline();

// ===== Lightbox =====
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (lightbox && img) {
    img.src = src;
    lightbox.style.display = "flex";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}
