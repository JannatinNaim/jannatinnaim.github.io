function togglePageHeaderNavigationToggle() {
  const pageHeaderNavigationToggleButton = document.querySelector(".page_header .navigation_toggle");
  const pageHeaderResponsiveNavigation = document.querySelector(".page_header .responsive_navigation");

  let isNavigationMenuShown = false;

  pageHeaderNavigationToggleButton.addEventListener("click", () => {
    if (isNavigationMenuShown) {
      pageHeaderResponsiveNavigation.style.height = "0";
      isNavigationMenuShown = false;
    } else {
      pageHeaderResponsiveNavigation.style.height = "100vh";
      isNavigationMenuShown = true;
    }
  });

  window.addEventListener("resize", () => {
    const viewport = document.body.clientWidth;

    if (viewport >= 768) {
      pageHeaderResponsiveNavigation.style.height = "100%";
      isNavigationMenuShown = true;
    } else {
      pageHeaderResponsiveNavigation.style.height = "0";
      isNavigationMenuShown = false;
    }
  });
}

togglePageHeaderNavigationToggle();
