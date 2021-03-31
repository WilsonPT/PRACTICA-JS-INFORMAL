import { moverBall, shortcuts } from "./teclado.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import testResponsive from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

/* import { hamburgerClick } from "./events.js";
const $btnHamburger = document.querySelector(".hamburger");
console.log($btnHamburger);
const $menuDark = document.getElementById("menu-dark");
hamburgerClick($btnHamburger, $menuDark);
 */
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", ".activar-reloj", ".desactivar-reloj");
  alarm(
    "static/media/sounds/alarma-guerra.mp3",
    ".activar-alarma",
    ".desactivar-alarma"
  );
  //contador("#cuenta-regresiva");
  countdown(
    "countdown",
    "Octubre 04, 2021 00:00:00",
    "Feliz cumpleaños Master 🎂🎉🍰🍬🍭🎈🎇🧨🎉🎊🎁"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href='https://www.youtube.com/watch?v=67RP2lL-fZo' target='_blank'>Travel beautiful Guatemala in 4K</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/67RP2lL-fZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href='https://www.google.es/maps/place/Antigua+Guatemala/@14.5539549,-90.7368302,16.25z/data=!4m5!3m4!1s0x85890e74b0250b15:0xf786ba2b2903723d!8m2!3d14.5572969!4d-90.7332233?hl=es' target='_blank'>Travel beautiful Antigua Guatemala</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6494.732008961356!2d-90.73683016819537!3d14.553954949978387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890e74b0250b15%3A0xf786ba2b2903723d!2sAntigua%20Guatemala!5e0!3m2!1ses!2sgt!4v1616618347830!5m2!1ses!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  testResponsive("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moverBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
