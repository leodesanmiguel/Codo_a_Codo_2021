var lista = [];

function inicio() {
    try {
        var btnAgregar = document.getElementById("btnAgregar");
        btnAgregar.addEventListener("click", btnAgregarLista);

    } catch (error) {
        console.error(error);
    }

}

function btnAgregarLista() {
    try {

        let registro = document.getElementById("txtNombre").value;
        lista.push(registro);
        console.log(registro);
        console.log(lista);
        mostrarTabla();

    } catch (error) {
        console.error(error);
    }

}

function mostrarTabla() {
    try {
        document.getElementById("resulta").innerHTML = "sfdsdfsdfsd";

    } catch (error) {
        console.error(error)
    }


}