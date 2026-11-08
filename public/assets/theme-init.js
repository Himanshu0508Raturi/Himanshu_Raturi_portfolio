// Resolve the palette before the stylesheet paints to avoid a light/dark flash.
(() => {
  let choice;
  try {
    choice = localStorage.getItem("portfolio-theme");
  } catch {
    /* Storage may be disabled. */
  }
  const theme = choice === "light" || choice === "dark" ? choice : "dark";
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content =
    theme === "dark" ? "#171914" : "#f4f2eb";
})();
