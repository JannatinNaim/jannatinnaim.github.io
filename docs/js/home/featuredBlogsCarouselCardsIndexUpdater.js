export default function carouselIndexUpdater() {
  const carouselNavigationButtons = document.querySelectorAll(".featured_blogs .carousel__navigation__button");

  carouselNavigationButtons.forEach((carouselNavigationButton) => {
    carouselNavigationButton.addEventListener("click", function () {
      const carouselCards = document.querySelector(".featured_blogs .carousel__cards");
      const currentCard = document.querySelector(".featured_blogs .carousel_card--active");
      const carouselIndexElement = document.querySelector(".featured_blogs .carousel__index");

      const currentCardIndex = [...carouselCards.children].indexOf(currentCard);

      carouselIndexElement
        .querySelector(".carousel__index__dot--active")
        .classList.remove("carousel__index__dot--active");

      [...carouselIndexElement.children][currentCardIndex].classList.add("carousel__index__dot--active");
    });
  });
}
