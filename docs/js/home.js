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

function rotateFeaturedBlogsCarousel() {
  const featuredBlogsCarouselNavigationButtons = document.querySelectorAll(
    ".featured_blogs .carousel .carousel__button"
  );

  featuredBlogsCarouselNavigationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const blogPosts = document.querySelector(".featured_blogs .blogs");
      const activeBlog = document.querySelector(".featured_blogs .blogs .blog.blog--active");

      let currentIndex = [...blogPosts.children].indexOf(activeBlog);

      if (button.classList.contains("carousel__button--next")) {
        currentIndex += 1;
      }

      if (button.classList.contains("carousel__button--prev")) {
        currentIndex -= 1;
      }

      if (currentIndex === blogPosts.children.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = blogPosts.children.length - 1;

      blogPosts.children[currentIndex].classList.add("blog--active");
      activeBlog.classList.remove("blog--active");
    });
  });
}

rotateFeaturedBlogsCarousel();
