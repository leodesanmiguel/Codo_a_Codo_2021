window.onload = iniciar();
var lista = [];

function iniciar() {
    var btnAgregar = document.getElementById("idcargaPalabra");
    btnAgregar.addEventListener("click", cargaPalabra2());
    console.log(btnAgregar);
}

function myFunction() {
    //var x = document.getElementById("myP").innerHTML;
    var x = "Esta es una prueba inicial"
    document.getElementById("demo").innerHTML = x;
}

function cargaPalabra() {
    let x = document.getElementById("txtPalabra").value;

    lista += `<br>${x}</br>`;
    document.getElementById("demo").innerHTML = lista;
    console.log(lista);
}

function cargaPalabra2() {
    let x = document.getElementById("txtPalabra2");
    let xx = x;

    lista += `<br>${x}</br>`;
    document.getElementById("demo").innerHTML = lista;
    console.log(lista);
}

function myFunction2() {
    var x = document.getElementById("myList").innerHTML;
    document.getElementById("demo").innerHTML = x;
}