document.getElementById("msjBienvenida").innerHTML = "Bienvenido a DOM";
document.getElementById("msjBienvenida").style.backgroundColor = "lightblue";

function crearNota() {
    document.getElementById("nota").innerHTML = "Nota creada";
    document.getElementById("btnNota").value = "Eliminar Nota";
    
}

var listElem = document.getElementsByClassName("textoAzul");
console.log(listElem);


/** EVENTOS 
    suceso que ocurre en la ventada del navegador
*/
const btn = document.getElementById('btnEvento');
btn.onclick = function () {
    document.body.style.backgroundColor = "blue";
}

btn.onmouseover = function () {
    document.body.style.backgroundColor = "red";
}

btn.onmouseleave = function () {
    document.body.style.backgroundColor = "green";
}

