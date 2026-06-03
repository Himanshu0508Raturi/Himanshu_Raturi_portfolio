// ========================================
// Portfolio Website JavaScript
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // Navbar Scroll Effect
  // ========================================
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 0";
      navbar.style.background = "rgba(33, 37, 41, 0.95)";
    } else {
      navbar.style.padding = "1rem 0";
      navbar.style.background = "#212529";
    }
  });

  // ========================================
  // Active Navigation Link on Scroll
  // ========================================
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ========================================
  // Smooth Scroll for Navigation Links
  // ========================================
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // If the link is to a different page file (contains .html), allow normal navigation
      if (href.includes(".html")) {
        return; // Allow default link behavior
      }

      // For anchor links (same page sections), prevent default and smooth scroll
      e.preventDefault();
      const targetId = href;
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // ========================================
  // Back to Top Button
  // ========================================
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ========================================
  // Skill Progress Bar Animation
  // ========================================
  const skillSection = document.querySelector(".skills-section");
  let skillsAnimated = false;

  const animateSkills = () => {
    if (!skillsAnimated) {
      const progressBars = document.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      skillsAnimated = true;
    }
  };

  // Check if skills section is in viewport
  const checkSkillsPosition = () => {
    if (skillSection) {
      const skillsSectionTop = skillSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (skillsSectionTop < windowHeight * 0.75) {
        animateSkills();
      }
    }
  };

  window.addEventListener("scroll", checkSkillsPosition);
  checkSkillsPosition(); // Check on load

  // ========================================
  // Animate Elements on Scroll (Fade In)
  // ========================================
  const animateOnScroll = () => {
    const elementsToAnimate = document.querySelectorAll(
      ".project-card, .certificate-card, .education-card",
    );

    elementsToAnimate.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.85) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const setInitialAnimationState = () => {
    const elementsToAnimate = document.querySelectorAll(
      ".project-card, .certificate-card, .education-card",
    );
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
  };

  setInitialAnimationState();
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Check on load

  // ========================================
  // Typing Effect for Home Section (Optional Enhancement)
  // ========================================
  const typingEffect = () => {
    const textElement = document.querySelector(".home-content h2");
    if (!textElement) return;

    const text = textElement.textContent;
    textElement.textContent = "";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    setTimeout(type, 1000);
  };

  // Uncomment to enable typing effect
  // typingEffect();

  // ========================================
  // Dynamic Copyright Year
  // ========================================
  const updateCopyrightYear = () => {
    const footerText = document.querySelector(".footer p");
    if (footerText) {
      const currentYear = new Date().getFullYear();
      footerText.innerHTML = `&copy; ${currentYear} Himanshu Raturi. All Rights Reserved.`;
    }
  };

  updateCopyrightYear();

  // ========================================
  // Preloader (Optional)
  // ========================================
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
    console.log("Portfolio website loaded successfully!");
  });

  // ========================================
  // Mobile Menu Close on Link Click
  // ========================================
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }

  // ========================================
  // Project Card Click Effects
  // ========================================
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Add your custom click behavior here
      // For example, opening a modal or navigating to project details
      if (!e.target.closest(".btn")) {
        console.log("Project card clicked");
      }
    });
  });

  // ========================================
  // Form Validation
  // ========================================
  const formInputs = document.querySelectorAll(".form-control");
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "" && this.hasAttribute("required")) {
        this.classList.add("is-invalid");
      } else {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
      }
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("is-invalid")) {
        if (this.value.trim() !== "") {
          this.classList.remove("is-invalid");
          this.classList.add("is-valid");
        }
      }
    });
  });

  // ========================================
  // Console Welcome Message
  // ========================================
  console.log(
    "%c Welcome to My Portfolio! ",
    "background: #667eea; color: white; font-size: 20px; padding: 10px;",
  );
  console.log(
    "%c Designed by Himanshu Raturi ",
    "background: #764ba2; color: white; font-size: 14px; padding: 5px;",
  );
});

// ========================================
// Utility Functions
// ========================================

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Debounce function for performance optimization
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
