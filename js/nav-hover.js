// Remember hover state across page navigations
document.addEventListener("click", (e) => {
  const link = e.target.closest(".nav-links a");
  if (link) {
    sessionStorage.setItem("isHovering", "true");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("isHovering") === "true") {
    const activeLink = document.querySelector(".nav-links a.active");
    if (activeLink) {
      activeLink.classList.add("force-hover");

      function cleanupHover() {
        activeLink.classList.remove("force-hover");
        sessionStorage.removeItem("isHovering");
      }

      window.addEventListener("mousemove", cleanupHover, { once: true });
    }
  }
});
