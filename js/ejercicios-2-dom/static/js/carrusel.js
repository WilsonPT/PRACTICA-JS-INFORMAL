const d = document;

export default function slider() {
  const $btnNext = d.querySelector(".next"),
    $btnPrev = d.querySelector(".prev"),
    $slides = d.querySelectorAll(".slider-slide");
  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }

    if (e.target === $btnNext) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}
