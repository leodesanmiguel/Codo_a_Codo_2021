function nuevosalario() {
    let xsalario = parseFloat(ejercicio3.salario.value);
    let xPorcen = parseInt(ejercicio3.porcentaje.value);
    let nSalario = xsalario * ((100 - xPorcen) / 100);
    console.log(`
             Salario      = ${xsalario}
             Descuento    = ${((100 - xPorcen)/100)} = (100 - ${xPorcen})/100
             nuevo slario = ${nSalario}`);
    //let xdesc = xsalario * 0.2
    //document.getElementById('sueldo').value = xsalario - xdesc;
    document.getElementById('sueldo').value = nSalario;
}