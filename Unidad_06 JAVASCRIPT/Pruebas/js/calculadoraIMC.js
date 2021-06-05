window.onload = inicio();

function inicio() {
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clicBtnCalcular);
}

function clicBtnCalcular() {
    try {
        let txtPeso = document.getElementById("txtPeso").value;
        let txtAltura = document.getElementById("txtAltura").value;
        let imc = Math.round(parseFloat(txtPeso) / (parseFloat(txtAltura) * (parseFloat(txtAltura))) * 100) / 100;
        let msg = `
                Tu peso es  ${txtPeso}
                Tu altura es ${txtAltura}
                Ti IMC es ${imc}
                `;
        (isNaN(parseFloat(txtPeso)) || isNaN(parseFloat(txtAltura))) ? alert("incorrecto"): alert(msg);

    } catch (error) {
        alert(error);
    }
}