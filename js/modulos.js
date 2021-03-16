import saludar, { PI, usuario } from "./constantes.js";
import { aritmetica as calculo} from "./aritmetica.js";
console.log("Archivo modulos.js");

console.log(PI, usuario);
console.log(calculo.sumar(4, 6), calculo.restar(4, 6));
//funcion exportada por default
saludar();
