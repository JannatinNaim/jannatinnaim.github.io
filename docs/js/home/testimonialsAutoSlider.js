export default function () {
  setInterval(() => {
    const testimonials = document.querySelectorAll(".testimonials_slider .testimonial");

    const currentTestimonial = [...testimonials].find((e) => e.classList.contains("testimonial--active"));
    const currentIndex = [...testimonials].indexOf(currentTestimonial);

    let offset = 1;
    let nextIndex = currentIndex + offset;
    if (nextIndex > [...testimonials].length - 1) nextIndex = 0;
    if (nextIndex < 0) nextIndex = [...testimonials].length - 1;

    currentTestimonial.classList.remove("testimonial--active");
    const nextTestimonial = [...testimonials][nextIndex];
    nextTestimonial.classList.add("testimonial--active");
  }, 9000);
}
