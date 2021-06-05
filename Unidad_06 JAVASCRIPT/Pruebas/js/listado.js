window.onload = inicio();
var Lista = [];

function inicio() {
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", btnAgregarLista);

}

function btnAgregarLista() {
    try {
        let registro = [
            document.getElementById("txtNombre").value,
            document.getElementById("txtAddress").value,
            document.getElementById("txtTelefono").value,
            document.getElementById("txtCumple").value,
        ];
        Lista.push(registro);
        console.log(registro);
        mostrarTabla();

    } catch (error) {
        alert("Algo está mal con ... ");
    }

}

function mostrarTabla() {
    try {

        let tblInicio = '<table id="t01">';
        let tbFinal = '</table>';
        let titulos = ["Nombre", "Dirección", "Teléfono", "Cumpleaños"];
        let dato1 = dato2 = dato3 = dato4 = "datos";

        let tbTitulos = `<tr><th>${titulos[0]}</th><th>${titulos[1]}</th><th> ${titulos[2]}</th><th>${titulos[3]}</th></tr>`;
        let tbLinea = `<tr><td>${dato1}</td><td> ${dato2}</td><td>${dato3}</td><td>${dato4}</td></tr>`;

        let tblHTML = tblInicio + tbTitulos + tbLinea + tbFinal;

        document.getElementById("resulta").innerHTML = tblHTML;

        console.log(tblHTML);
        let rta = document.input("presione para continuar");

    } catch (error) {
        alert(`No se quiere mostrar la tabla porque...
              ${error}`);
    }

}