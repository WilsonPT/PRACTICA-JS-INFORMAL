const d = document,
  w = window;

export default function testResponsive(idForm) {
  const $form = d.getElementById(idForm);
  let pagina;
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    pagina = w.open(
      $form.url.value,
      "_blank",
      `width=${$form.width.value}, height=${$form.height.value}`
    );
  });
  $form.addEventListener("reset", (e) => {
    e.preventDefault();
    pagina.close();
  });
}
