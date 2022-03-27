export default function () {
  const mobileNavigationToggle = document.getElementById("page_header_mobile_navigation_toggle");
  const mobileNavigation = document.getElementById("page_header_mobile_navigation");

  mobileNavigationToggle.addEventListener("click", function () {
    const height = mobileNavigation.style.height;

    let isNavigationOn = height === "0px" || !height ? false : true;

    if (isNavigationOn) {
      mobileNavigation.style.height = "0px";
    } else {
      mobileNavigation.style.height = "100%";
    }

    window.addEventListener(
      "resize",
      function () {
        mobileNavigation.style.height = "0px";
      },
      { once: true }
    );

    mobileNavigation.addEventListener(
      "click",
      function () {
        mobileNavigation.style.height = "0px";
      },
      { once: true }
    );
  });
}
