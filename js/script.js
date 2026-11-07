import { createNeuralSculpture } from "./neural.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function setMenu(open, restoreFocus = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("is-open", open);
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  )
    setMenu(false, true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

const filters = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");
filters.forEach((button) =>
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.setAttribute("aria-pressed", String(active));
      filter.classList.toggle("is-active", active);
    });
    let count = 0;
    projects.forEach((project) => {
      project.hidden =
        category !== "all" && project.dataset.category !== category;
      if (!project.hidden) count++;
    });
    document.querySelector(".project-count").textContent = `${count} projects`;
  }),
);

let previousFocus = null;
const dialogs = document.querySelectorAll(".case-dialog");
function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  previousFocus = document.activeElement;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = "hidden";
  dialog.querySelector(".dialog-close").focus({ preventScroll: true });
}
document.querySelectorAll("[data-case-open]").forEach((link) =>
  link.addEventListener("click", (event) => {
    const dialog = document.getElementById(link.dataset.caseOpen);
    if (typeof dialog?.showModal !== "function") return;
    event.preventDefault();
    openDialog(dialog);
  }),
);
dialogs.forEach((dialog) => {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
    previousFocus?.focus({ preventScroll: true });
  });
});

document
  .querySelector("[data-copy-email]")
  .addEventListener("click", async (event) => {
    const email = event.currentTarget.dataset.copyEmail;
    const status = document.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "Email copied. Let’s make something happen.";
    } catch {
      status.textContent = `Copy unavailable. Email me at ${email}`;
    }
  });

const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  const fields = form.querySelectorAll("[required]");
  fields.forEach((field) =>
    field.setCustomValidity(
      field.value.trim() ? "" : "Please complete this field.",
    ),
  );
  if (!form.reportValidity()) {
    event.preventDefault();
    return;
  }
  form.querySelector(".form-status").textContent =
    "Continuing to FormSubmit… If the service is unavailable, use the email link above.";
});
form
  .querySelectorAll("[required]")
  .forEach((field) =>
    field.addEventListener("input", () => field.setCustomValidity("")),
  );

const clock = document.querySelector("#india-time");
function updateClock() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent =
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now) + " IST";
}
updateClock();
setInterval(updateClock, 60000);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!reducedMotion.matches) entry.target.classList.add("reveal");
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".project, .about-grid, .timeline-item, .curiosity-note")
    .forEach((element) => revealObserver.observe(element));
  const navObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll("a").forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }),
    { rootMargin: "-15% 0px -55% 0px" },
  );
  document
    .querySelectorAll("main>section[id]")
    .forEach((section) => navObserver.observe(section));
}

const cursor = document.querySelector(".cursor-marker");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      if (reducedMotion.matches) return;
      cursor.style.transform = `translate(${event.clientX + 100}px,${event.clientY + 100}px) translate(-50%,-50%)`;
      cursor.style.opacity = ".7";
      cursor.classList.toggle(
        "is-hovering",
        Boolean(event.target.closest("a, button, summary")),
      );
    },
    { passive: true },
  );
  document.addEventListener("pointerleave", () => {
    cursor.style.opacity = "0";
  });
}

createNeuralSculpture(
  document.querySelector("#neural-canvas"),
  document.querySelector(".motion-toggle"),
  reducedMotion,
);

function navigateEntry() {
  const hash = window.location.hash.slice(1);
  const legacyAnchors = {
    home: "top",
    projects: "work",
    academics: "journey",
    certificates: "credentials",
  };
  if (hash.startsWith("case-")) {
    openDialog(document.getElementById(hash));
    return;
  }
  const section =
    legacyAnchors[hash] || (!hash && document.body.dataset.entrySection);
  if (section) {
    history.replaceState(null, "", `${window.location.pathname}#${section}`);
    document.getElementById(section)?.scrollIntoView({ behavior: "instant" });
  }
}
// Wait for font metrics before honoring the old multi-page entry points.
document.fonts.ready.then(navigateEntry);
window.addEventListener("hashchange", navigateEntry);
