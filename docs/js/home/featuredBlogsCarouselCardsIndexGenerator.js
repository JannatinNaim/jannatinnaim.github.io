export default function featuredBlogsCarouselCardsIndexGenerator() {
  const carouselCards = document.querySelector(".featured_blogs .carousel__cards");
  const currentCard = document.querySelector(".featured_blogs .carousel_card--active");
  const carouselIndexElement = document.querySelector(".featured_blogs .carousel__index");

  const currentCardIndex = [...carouselCards.children].indexOf(currentCard);

  const cardCount = carouselCards.children.length;

  const cardIndexDotElements = [];

  for (let i = 0; i < cardCount; i++) {
    const cardDotElement = document.createElement("span");

    cardDotElement.classList.add("carousel__index__dot");
    if (i === currentCardIndex) cardDotElement.classList.add("carousel__index__dot--active");

    cardIndexDotElements.push(cardDotElement);
  }

  cardIndexDotElements.forEach((dotElement) => carouselIndexElement.appendChild(dotElement));
}
