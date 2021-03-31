const d = document;

export default function searchFilters(input, card) {
  d.addEventListener("keyup", (e) => {
    if (e.key === "Escape") e.target.value = "";
    if (e.target.matches(input)) {
      d.querySelectorAll(card).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
