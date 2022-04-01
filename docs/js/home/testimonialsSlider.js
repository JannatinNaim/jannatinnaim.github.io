export default function () {
  const testimonialSliderNavigationButtons = document.querySelectorAll(
    ".testimonials .testimonials_slider__navigation_button"
  );
  const testimonials = document.querySelectorAll(".testimonials .testimonials_slider .testimonial");

  testimonialSliderNavigationButtons.forEach((testimonialSliderNavigationButton) => {
    testimonialSliderNavigationButton.addEventListener("click", () => {
      const direction = testimonialSliderNavigationButton.dataset.direction;
      const currentTestimonial = [...testimonials].find((e) => e.classList.contains("testimonial--active"));
      const currentIndex = [...testimonials].indexOf(currentTestimonial);

      let offset = direction === "next" ? 1 : -1;
      let nextIndex = currentIndex + offset;
      if (nextIndex > [...testimonials].length - 1) nextIndex = 0;
      if (nextIndex < 0) nextIndex = [...testimonials].length - 1;

      currentTestimonial.classList.remove("testimonial--active");
      const nextTestimonial = [...testimonials][nextIndex];
      nextTestimonial.classList.add("testimonial--active");
    });
  });
}
