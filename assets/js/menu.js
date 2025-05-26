document.addEventListener("DOMContentLoaded", function () {
  // Get menu elements
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("menu-panel");
  const menuOverlay = document.getElementById("menu-overlay");

  // Function to open menu - animate from left to right
  function openMenu() {
    // Show overlay first
    menuOverlay.classList.remove("hidden");
    // Trigger fade in animation
    setTimeout(() => {
      menuOverlay.classList.remove("opacity-0");
      menuOverlay.classList.add("opacity-100");
    }, 10);

    // Show menu with animation from left to right
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");

    // Prevent body scrolling
    document.body.style.overflow = "hidden";
  }

  // Function to close menu - animate from right to left
  function closeMenu() {
    // Hide menu with animation from right to left
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");

    // Fade out overlay
    menuOverlay.classList.remove("opacity-100");
    menuOverlay.classList.add("opacity-0");

    // Hide overlay after animation completes
    setTimeout(() => {
      menuOverlay.classList.add("hidden");
    }, 300);

    // Re-enable body scrolling
    document.body.style.overflow = "";
  }

  // Open menu on button click
  menuButton.addEventListener("click", openMenu);

  // Close menu on close button click
  closeButton.addEventListener("click", closeMenu);

  // Close menu when clicking overlay
  menuOverlay.addEventListener("click", closeMenu);

  // Close menu with Escape key
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      mobileMenu.classList.contains("translate-x-0")
    ) {
      closeMenu();
    }
  });
});
