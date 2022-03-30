export default function () {
  setInterval(() => {
    const carouselCards = document.querySelector(".featured_blogs .carousel__cards");
    const currentCard = document.querySelector(".featured_blogs .carousel_card.carousel_card--active");

    const currentIndex = [...carouselCards.children].indexOf(currentCard);

    let nextIndex = currentIndex + 1;

    if (nextIndex > carouselCards.children.length - 1) nextIndex = 0;
    if (nextIndex < 0) nextIndex = carouselCards.children.length - 1;

    const nextCard = carouselCards.children[nextIndex];

    currentCard.classList.remove("carousel_card--active");
    nextCard.classList.add("carousel_card--active");

    const carouselIndexElement = document.querySelector(".featured_blogs .carousel__index");
    const currentCardIndex = [...carouselCards.children].indexOf(nextCard);

    carouselIndexElement
      .querySelector(".carousel__index__dot--active")
      .classList.remove("carousel__index__dot--active");

    [...carouselIndexElement.children][currentCardIndex].classList.add("carousel__index__dot--active");
  }, 5000);
}
