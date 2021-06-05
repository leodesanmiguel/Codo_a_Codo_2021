const nombreAlumnos = ['Juan', 'Chintia', 'Esteban', 'Joe'];
const nombreMaterias = [
    'PRÁCTICAS DEL LENGUAJE',
    'INGLÉS',
    'MATEMÁTICA',
    'CIENCIAS SOCIALES',
    'CIENCIAS NATURALES',
    'EDUCACIÓN FÍSICA',
    'EDUCACIÓN ARTÍSTICA',
    'BIOLOGÍA',
    'INTRODUCCIÓN A LA FISICA',
    'HISTORIA',
    'CONSTRUCCIÓN DE CIUDADANÍA',
    'LITERATURA',
    'GEOGRAFÍA',
    'FRANCÉS',
    'PORTUGUES',
    'NTICX',
    'SALUD Y ADOLESCENCIA'
];

const opcionesMaterias = [];
const opcionParte = ["<option value='", "'>", "</option>"]

function AplicarNombre() {
    let nombre = document.getElementById('nombreAlumno').value
    let esAlumno = false;
    for (let i = 0; i < nombreAlumnos.length; i++) {
        if (nombre === nombreAlumnos[i]) {
            esAlumno = true;
            break;
        }
    }
    if (esAlumno) {
        cargarMateria();
    } else {
        alert(`
            El nombre ${nombre} no 
            No está registrado en la base. `);
        document.getElementById('nombreAlumno').value = '';
    }
}


function cargarMateria() {
    document.getElementById("opcionesMateria").disabled = false;
    document.getElementById("nota1").disabled = false;
    document.getElementById("nota2").disabled = false;
    document.getElementById("nota3").disabled = false;
    document.getElementById("btnPromedio").disabled = false;

    let opcion = '';
    for (let i = 0; i < nombreMaterias.length; i++) {
        opcion += opcionParte[0] + 'materia' + i;
        opcion += opcionParte[1] + nombreMaterias[i];
        opcion += opcionParte[2];
    }
    console.log(opcion);
    document.getElementById("opcionesMateria").innerHTML = opcion;


}

function calcularPromedio() {
    let suma = 0;
    suma += parseInt(document.getElementById("nota1").value);
    suma += parseInt(document.getElementById("nota2").value);
    suma += parseInt(document.getElementById("nota3").value);
    console.log(suma / 3);
}

const getValueInput = () => {
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("inputValue").innerHTML = inputValue;
}