// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     document.querySelectorAll('section').forEach(section => {
//       section.classList.toggle('dark-mode');
//     });
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     // Newsletter form submission simulation
//     document.querySelector(".newsletter form")?.addEventListener("submit", e => {
//       e.preventDefault();
//       alert("Thank you for subscribing!");
//     });
  
//     // Contact form submission simulation
//     document.querySelector(".contact form")?.addEventListener("submit", e => {
//       e.preventDefault();
//       alert("Message sent successfully!");
//     });
//   });
  


// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.querySelector(".toggle-mode");
//   const icon = document.createElement("span");
//   icon.id = "mode-icon";
//   icon.textContent = "🌙"; // Default: light mode
//   toggleBtn.textContent = "";
//   toggleBtn.appendChild(icon);

//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     document.querySelectorAll("section").forEach(section => {
//       section.classList.toggle("dark-mode");
//     });

//     const isDark = document.body.classList.contains("dark-mode");
//     icon.textContent = isDark ? "☀" : "🌙"; // Toggle icon
//   });

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    const revealOnScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('show');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // for when page is already scrolled on load
  });
  

  // Newsletter form
  document.querySelector(".newsletter form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  });

  // Contact form
  document.querySelector(".contact form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
// });
  
  document.addEventListener("DOMContentLoaded", function () {
    const slideUps = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal"); // Remove when out of view
        }
      });
    }, {
      threshold: 0.2, // triggers when 20% of the element is visible
    });

    slideUps.forEach(el => observer.observe(el));
  });
