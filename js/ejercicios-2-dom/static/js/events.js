export function hamburgerClick($btnHamburger, $menu) {
  $menu.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (e) => {
      $menu.classList.remove("menu-dark");
      $menu.classList.add("hide");
      $btnHamburger.classList.remove("is-active");
      console.log(location.hash);
    });
  });
  $btnHamburger.addEventListener("click", (e) => {
    let isActive = $btnHamburger.classList.contains("is-active");
    if (isActive) {
      $menu.classList.add("menu-dark");
      $menu.classList.remove("hide");
    } else {
      $menu.classList.add("hide");
      $menu.classList.remove("menu-dark");
    }
    console.log($menu.classList);
  });
}
