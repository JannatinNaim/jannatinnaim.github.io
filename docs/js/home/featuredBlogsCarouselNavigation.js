export default function () {
  const carouselNavigationButtons = document.querySelectorAll(".featured_blogs .carousel__navigation__button");
  const carouselCards = document.querySelector(".featured_blogs .carousel__cards");

  carouselNavigationButtons.forEach((carouselNavigationButton) => {
    carouselNavigationButton.addEventListener("click", () => {
      const button = carouselNavigationButton.closest(".carousel__navigation__button");
      const direction = button.dataset.direction;

      const currentCard = document.querySelector(".featured_blogs .carousel_card.carousel_card--active");
      const currentIndex = [...carouselCards.children].indexOf(currentCard);

      let offset = direction === "next" ? 1 : -1;

      let nextIndex = currentIndex + offset;

      if (nextIndex > carouselCards.children.length - 1) nextIndex = 0;
      if (nextIndex < 0) nextIndex = carouselCards.children.length - 1;

      const nextCard = carouselCards.children[nextIndex];

      currentCard.classList.remove("carousel_card--active");
      nextCard.classList.add("carousel_card--active");
    });
  });
}
