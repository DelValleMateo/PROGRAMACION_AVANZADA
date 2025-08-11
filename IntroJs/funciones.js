//function declaration

function saludar(nombre) {
    console.log("Bienvenido," + nombre + "!");
}

saludar("mateo")

//fuction expression

const cliente = function (nombreCliente, edadCliente) {
    console.log("Mostrando datos del Cliente:" + nombreCliente + edadCliente);
}

cliente("Juan", "20")

function actividad(nombre = "Walter White", nombreActividad = "Profesor de quimica") {
    console.log("El cliente " + nombre + " está realizando la actividad: " + nombreActividad);
}

actividad("Juan", "compra");
actividad("Mateo", "Corre");
actividad();