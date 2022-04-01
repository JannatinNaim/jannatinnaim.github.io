import featuredBlogsCarouselCardsIndexUpdater from "./featuredBlogsCarouselCardsIndexUpdater.js";

export default function () {
  const carouselIndex = document.querySelector(".featured_blogs .carousel__index");
  const carouselCards = document.querySelector(".featured_blogs .carousel__cards");

  [...carouselIndex.children].forEach(function (carouselIndexElement) {
    carouselIndexElement.addEventListener("click", function () {
      const clickedIndex = [...carouselIndex.children].indexOf(carouselIndexElement);

      carouselCards.querySelector(".carousel_card--active").classList.remove("carousel_card--active");
      [...carouselCards.children][clickedIndex].classList.add("carousel_card--active");

      carouselIndex.querySelector(".carousel__index__dot--active").classList.remove("carousel__index__dot--active");
      carouselIndexElement.classList.add("carousel__index__dot--active");
    });
  });

  featuredBlogsCarouselCardsIndexUpdater();
}
