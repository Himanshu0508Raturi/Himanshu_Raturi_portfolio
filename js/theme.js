const themeKey = "portfolio-theme";

export function initializeTheme() {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  let explicitChoice = null;
  try {
    explicitChoice = localStorage.getItem(themeKey);
  } catch {
    /* Private storage can be unavailable. */
  }
  if (!["light", "dark"].includes(explicitChoice)) explicitChoice = null;

  function apply(theme) {
    const dark = theme === "dark";
    root.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(dark));
    button.title = `Switch to ${dark ? "light" : "dark"} mode`;
    document.querySelector('meta[name="theme-color"]').content = dark
      ? "#171914"
      : "#f4f2eb";
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  apply(explicitChoice || "dark");
  button.addEventListener("click", () => {
    explicitChoice = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(themeKey, explicitChoice);
    } catch {
      /* Still switch for this page. */
    }
    apply(explicitChoice);
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== themeKey && event.key !== null) return;
    explicitChoice = ["light", "dark"].includes(event.newValue)
      ? event.newValue
      : null;
    apply(explicitChoice || "dark");
  });
}
