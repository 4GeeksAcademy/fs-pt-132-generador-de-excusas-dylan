import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// creamos las diferentes arrays para generar la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
 const excusas =[];
// la funcion para crear un numero del array que le pidamos
const generatorRandorNumber =  (array)=> Math.floor( Math.random() *array.length);
// la funcion para que nos saque el valor del numero random creado en la anterior funcion 
const generatorValueRandom = (array)=>  array[generatorRandorNumber (array)];

// Queremos que nos de un valor random  ahora queremos concatenarlo

const generatorFrase = () =>{
let frasegenerada = ` ${generatorValueRandom(who)}  ${generatorValueRandom(action)}  ${generatorValueRandom(what)}  ${generatorValueRandom(when)} `;
// creamos un push al array generador arriba denominado excusas
excusas.push(frasegenerada);
return  frasegenerada
}
// Cuidado si no colocas () no llamas a la funcion solo le dices que tiene la funcion no que hace 

console.log(generatorFrase ());
console.log(excusas);


// creamos un boton en el que al darle nos genera la excusa y lo asociamos con el boton creado en HTML con el ID

const button= document.getElementById("btn-excuse");


// Asociamos  el boton a la funcion que llamara a la funcion generadora de excusas creando  la frase de excusas 
// colocamos en esta funcion el ruido que queremos que haga el boton  y luego () sin cerrarlo porque queremos que al hacer click llame a la funcion genere la frase no antes 
button.addEventListener("click",() =>{

const frase=generatorFrase(); // se crea la excusa tras darle al boton

//ahora queremos que la frase creada la enviemos al id que hemos puesto en el HTML
document.getElementById("excuse").textContent = frase;

});
// ) cierra la llamada a addEventListener





