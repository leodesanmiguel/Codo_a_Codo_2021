/****************************************************************
 * 1- Ingresá en el siguiente cuadro el código HTML 
 * y Javascript correspondiente para la creación de 
 * una página web que posea el siguiente aspecto y 
 * cumpla con los siguientes requisitos:  
 * 
 * Posea un script en javascript que declare:
 * 
 *   una variable llamada primera con un valor numérico = 40
 *   una variable llamada segunda con un valor numérico = 16
 *   una variable llamada sumatotal con un valor numérico 
 *   de la suma de las dos variables anteriores.
 * 
 * y una salida por pantalla en HTML que muestre 
 * un mensaje y el valor de sumatotal:
 ****************************************************************/
var primera = 40;
var segunda = 16;
var sumaTotal = primera + segunda;
const rta0 = `
El resultado de la suma de las dos variables es 
<span class="rta">${sumaTotal} </span>`;
const rta = ` <hr> <h3>RESULTADOS:</h3>
    <p> la variable primera.. = <span class="rtas">${primera} </span></p>
    <p> la variable segunda.. = <span class="rtas">${segunda} </span></p>
    <p> la variable sumaTotal = <span class="rtas">${[primera  + segunda]} </span></p>`;

document.getElementById("resultado").innerHTML = rta
    //console.log(rta);

function sumar() {
    let primera = parseInt(document.getElementById("primera"));
    let segunda = parseInt(document.getElementById("secunda"));
    let rta1 = `  <hr><h3>RESULTADOS de la función:</h3>
    <p> la variable primera ---> <span class="rtas">${primera}</span></p>
    <p> la variable segunda ---> <span class="rtas">${segunda}</span></p>
    <p> la suma de las dos es -> <span class="rtas">${primera  + segunda}</span></p>
    <p> la variable sumaTotal -> <span class="rtas">${sumaTotal}</span></p> `;
    console.log(rta1);
    document.getElementById("resultado").innerHTML = rta + rta1;
    console.log(document.getElementById("resultado").innerHTML);

}