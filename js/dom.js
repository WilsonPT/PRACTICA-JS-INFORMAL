/* console.log(window);
console.log(document); */
/* let texto =
  "HOLA YULISSA Y YULEYMI SOY EL NUMERO UNO. LES HABLA LA COMPUTADORA";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
 */
/* console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 7000);
document.write("<h2>HOLA MUNDO DESDE EL DOM</h2>"); */
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

//DOM ATTRIBUTES - DATA-ATTRIBUTES
/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-GT");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute(
  "href",
  "https://es.stackoverflow.com/users/99941/wilsonpt"
);
console.log($linkDOM);
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); */

// Data attributes
/* console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset);
$linkDOM.dataset.description =
  "Mi usuario de StackOverflow. Para contrataciones escribirme al DM";
console.log($linkDOM.dataset);
console.log($linkDOM.hasAttribute("data-id")); */

//DOM - ESTILOS Y VARIABLES CSS
/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.style.color);
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.padding = "1rem";
$linkDOM.style.margin = "0 auto";
$linkDOM.style.borderRadius = "1rem";
console.log($linkDOM.getAttribute("style"));
//variables css - custom properties css
const $html = document.documentElement,
  $body = document.body;

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varYellowColor);
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor);
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
$body.style.setProperty("--dark-color", "#000");
varDarkColor = $body.style.getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor); */

//CLASES CSS
/* const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("card"));
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
 */

//DOM - TEXTO Y HTML
/* const $whatIsDOM = document.getElementById("que-es");
console.log($whatIsDOM);
let text = `
<p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.
</p>
<p>
  Éste provee una representacion estructural del documento, permitiendo modificar su contenido y presentación visual mediante JS.
</p>
<p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
</p>
`;
// $whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
// outerHTML reemplaza el nodo
$whatIsDOM.outerHTML = text;
console.log($whatIsDOM);
// $whatIsDOM.innerHTML = text;  // no va a realizar nada porque ya no existe la etiqueta con ID que-es
 */

//DOM -Traversing: recorriendo el DOM
/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
//console.log($cards.firstChild);
console.log($cards.firstElementChild);
//console.log($cards.lastChild);
console.log($cards.lastElementChild);
//console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
 */

//DOM - Creando Elementos y Fragmentos
//uno por uno
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figCaption = document.createElement("figcaption"),
  $figCaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");
$figure.classList.add("card");
$figCaption.appendChild($figCaptionText);
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.appendChild($img);
$figure.appendChild($figCaption);
$cards.appendChild($figure);
console.log($cards); */
// otra forma - no recomendada - no es un nodo y por lo tanto no se puede usar los metodos del nodo
/* const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="Peope">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);
 */
// crear dinamicamente
/* const estaciones = ["Primavera", "Verano", "Otoño", "Verano"],
  $ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach((item) => {
  const $li = document.createElement("li");
  $li.textContent = item;
  $ul.appendChild($li);
}); */
// segunda forma
/* const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");
document.write("<h3>Contintentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((item) => ($ul2.innerHTML += `<li>${item}</li>`)); */
// aumentar rendimiento con fragmentos - evitar inserciones iterativas al DOM, insertar al fragmento para posteriormente hacer solo una insercion al DOM. - No se le pide tanta demanda de recurso al navegador.
/* const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();
meses.forEach((item) => {
  const $li = document.createElement("li");
  $li.textContent = item;
  $fragment.appendChild($li);
});
$ul3.appendChild($fragment);
document.write("<h3>Meses del año</h3>");
document.body.appendChild($ul3);
 */

// TEMPLATES HTML
// Templates , modelo a seguir, el cual tu estructura es el contenido HTML que quieras para que se convierta en dinámico y es otra forma de poder interactuar con el DOM

// a partir de un template se generan los elemenots

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  // retorna una copia de un nodo. true permite obtener los decendientes del nodo
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment); */

// DOM: Modificando Elementos (A LA FORMA ANTIGUA)
/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); */

// para ahorar tiempo no se va a crear nuevos nodos elementos para img y figcaption
/* $newCard.innerHTML = `
<img src= "https://placeimg.com/200/200/any" alt="Any"> 
<figcaption>Any</figcaption>`;
$newCard.classList.add("card"); */
// Reemplazar nodo
// $cards.replaceChild($newCard, $cards.children[2]);

// Insertar antes de un elemento
//$cards.insertBefore($newCard, $cards.children[0]); // $cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar
// $cards.removeChild($cards.lastElementChild)

// Clonar
// document.body.appendChild($cloneCards);

// DOM: Modificando Elementos (A LA FORMA MODERNA)
/* 
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

  Posiciones:
   'beforebegin': Antes que el propio elemento.
   'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
   'beforeend': Justo dentro del elemento, después de su último elemento hijo.
   'afterend': Después del propio elemento.
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $newCard2 = document.createElement("figure");

let $contentCard = `
<img src= "https://placeimg.com/200/200/any" alt="Any"> 
<figcaption></figcaption>`;
$newCard.classList.add("card");
let $contentCard2 = `
<img src= "https://placeimg.com/200/200/any" alt="Any"> 
<figcaption></figcaption>`;
$newCard2.classList.add("card"); */
// Interface Element
// insertar tipo html
// $newCard.insertAdjacentHTML("afterbegin", $contentCard);
// $newCard2.insertAdjacentHTML("afterbegin", $contentCard);
// insertar tipo text
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); // $newCard.lastElementChild.insertAdjacentText("afterbegin", 'Any');
// $newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// insertar tipo elemento
// $cards.insertAdjacentElement("afterbegin", $newCard);
// Adicionalmente, a continuación, otra manera de realizarlo
// Interface ParentNode, contiene métodos que son particulares para objetos Node, implementado por objetos Element, Document, y DocumentFragment
// Estos métodos anteriormente solo los tenía JQuery
// .prepend() = inserta nodos antes del primer hijo de nodo, mientras reemplaza cadenas en nodos con nodos de texto equivalentes.
// $cards.prepend($newCard);
// .append() = inserta nodos después del último hijo de nodo, mientras reemplaza cadenas en nodos con nodos de texto equivalentes.
// $cards.append($newCard);

// Interface ChildNode, esta interfaz contiene métodos que son particulares para‎‎ objetos node que pueden tener un elemento primario.
// $cards.before($newCard);
// $cards.after($newCard2);

// EVENTOS - EVENTS
// https://developer.mozilla.org/es/docs/Web/Events
// Manejadores de eventos - cuando una funcion se convierte en un manejador de eventos, podremos acceder a un nuevo objeto Event
/* function holaMundo() {
  alert("Hola mundo!");
  console.log(event);
}
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  console.log("hola mundo manejador de eventos semántico");
  console.log(e);
  console.log(event);
}; */

// manejador multiple
/* const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
$eventoMultiple.addEventListener("click", holaMundo); */
// la funcion manejadora no puede resivir parametros, unicamente Event
// Eventos con parámetros y remover eventos
/* function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
} */
// la funcion saludar es la manejadora y por lo tanto el parametro nombre va tomar el valor de Event y no "Desconocid@"
/* $eventoMultiple.addEventListener("click", saludar); */
// la arrow function es la manejadora y por lo tanto el parametro nombre va tomar el valor de "Desconocid@
/* $eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Wilson");
}); */
//remover evento
/* const removerDblClick = (e) => {
  alert(`Removiendo el evento ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDblClick);
};
const $eventoRemover = document.getElementById("evento-remover");
$eventoRemover.addEventListener("dblclick", removerDblClick);
 */

//DOM: Flujo de Eventos (Burbuja y Captura)

/* function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos); */
// burbuja: del mas interno al mas externo
// $divsEventos.forEach((div) => div.addEventListener("click", flujoEventos));
// $divsEventos.forEach((div) => div.addEventListener("click", flujoEventos, false));
/* $divsEventos.forEach((div) =>
  div.addEventListener("click", flujoEventos, {
    capture: false,
  })
); */
// captura: del mas externo al mas interno
/* $divsEventos.forEach((div) =>
  div.addEventListener("click", flujoEventos, true)
); */
/* $divsEventos.forEach((div) =>
  div.addEventListener("click", flujoEventos, {
    capture: true,
  })
); */
// ejecutar una sola vez
/* $divsEventos.forEach((div) =>
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  })
); */

//DOM: stopPropagation & preventDefault
// $divsEventos.forEach((div) => div.addEventListener("click", flujoEventos));
// deterpropagacion con e.stopPropagation()
// evitar el comportamiento por defaul del evento con e.preventDefault()
/* const $link = document.querySelector(".eventos-flujo a");
$link.addEventListener("click", (e) => {
  alert("hola papu que crack sos, segui asi o mejor papu");
  e.preventDefault();
  e.stopPropagation();
}); */

//DOM: Delegación de Eventos
/* document.addEventListener("click", (e) => {
  console.log("Click en ", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert(`Hola crack manitas el hijo de wputul`);
    e.preventDefault();
  }
});
 */

//BOM: Propiedades y Eventos
/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("-------- Evento Resize ---------");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("-------- Evento Scroll ---------");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
}); */
/* window.addEventListener("load", (e) => {
  console.log("-------- Evento Load ---------");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("-------- Evento DOMContentLoaded ---------");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
 */

//BOM: Métodos
/* window.alert("Alertaaa");
window.confirm("confirme"); //retorna true (OK) o false (CANCEL)
window.prompt("Ingrese algo:"); */
/* const $abrirVentana = document.getElementById("abrir-ventana"),
  $cerrarVentana = document.getElementById("cerrar-ventana"),
  $imprimirVentana = document.getElementById("imprimir-ventana");

let ventana; */
// abrir ventana
/* $abrirVentana.addEventListener("click", (e) => {
  ventana = window.open("https://es.stackoverflow.com/users/99941/wilsonpt");
}); */
// cerrar ventana
/* $cerrarVentana.addEventListener("click", (e) => {
  ventana.close(ventana);
}); */
// imprimir
/* $imprimirVentana.addEventListener("click", (e) => {
  window.print();
});
 */

//BOM: Objetos: URL, Historial y Navegador
//location - url
/* console.log("**** Objeto URL (location) ****");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);
console.log(location.port);
console.log(location.pathname);
 */ // almacena lo que se pasa como #ejemplo en la url (un ancla)
//console.log(location.hash);
// almacena lo que se pasa como parametro
// console.log(location.search);
//location.reload();

//history
/* console.log("**** Objeto Historial (history) ****");
console.log(history);
console.log(history.length); */
//navegar entre paginas
//console.log(history.back(1));
//console.log(history.forward(2));
// ir n páginas hacia adelante (+n) o ir n páginas hacia atras (-n)
/* console.log(history.go(1)); */
// navigator
/* console.log("**** Objeto Navegador (navigator) ****");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
 */
