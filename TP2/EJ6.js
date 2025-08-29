// Ejercicio 6: Calcular estadísticas de red
// Dado un objeto con estadísticas de tráfico de red por hora, calcula el total de
// datos transferidos y la hora con mayor tráfico.

const traficoRed = {
    "08:00": 1250, // MB transferidos
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700,
    "15:00": 2200,
    "16:00": 1800,
    "17:00": 1500
};
// Calcula el total de datos transferidos
// Encuentra la hora con mayor tráfico
let totalTransferido = 0;
for (let hora in traficoRed) {
    totalTransferido += traficoRed[hora];
}
console.log("Total transferido:", totalTransferido, "MB");

let horaMax = "";
let maxValor = 0;

for (let hora in traficoRed) {
    if (traficoRed[hora] > maxValor) {
        maxValor = traficoRed[hora];
        horaMax = hora;
    }
}

console.log("El mayor trafico de datos es a la hora", horaMax, "con un total de", maxValor, "MB");