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


// EVENTOS
