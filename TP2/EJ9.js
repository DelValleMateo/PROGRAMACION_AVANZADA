// Ejercicio 9: Combinar datos de dispositivos y conexiones
// Combina información de dispositivos y conexiones para crear un informe
// detallado de la actividad de red.

const topologiaRed = {
    nodos: [
        { id: "A", tipo: "Router", ubicacion: "Planta 1" },
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
        { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
        { id: "E", tipo: "Router", ubicacion: "Planta 3" }
    ],
    conexiones: [
        { origen: "A", destino: "B", ancho_banda: 1000 },
        { origen: "A", destino: "C", ancho_banda: 1000 },
        { origen: "B", destino: "C", ancho_banda: 100 },
        { origen: "B", destino: "D", ancho_banda: 100 },
        { origen: "C", destino: "D", ancho_banda: 100 },
        { origen: "C", destino: "E", ancho_banda: 1000 },
        { origen: "D", destino: "E", ancho_banda: 1000 }
    ]
};

// Cuenta el número de conexiones por nodo
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
    conexionesPorNodo[nodo.id] = 0;
});

// Tu código aquí para contar las conexiones (bidireccional: origen y destino suman)
topologiaRed.conexiones.forEach(({ origen, destino }) => {
    conexionesPorNodo[origen]++;
    conexionesPorNodo[destino]++;
});

// Encuentra los nodos con más conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
    .sort((a, b) => b[1] - a[1]); // de mayor a menor por cantidad de conexiones

// Sugiere optimizaciones
// Regla simple: si un nodo tiene más de 2 conexiones, sugerir mayor ancho de banda.
// Además, si un nodo “cargado” tiene enlaces de 100 Mbps, sugerir subirlos.
const sugerencias = [];
const nodosCargados = new Set(
    nodosOrdenados.filter(([_, cant]) => cant > 2).map(([n]) => n)
);

topologiaRed.conexiones.forEach(({ origen, destino, ancho_banda }) => {
    if (nodosCargados.has(origen) || nodosCargados.has(destino)) {
        if (ancho_banda < 1000) {
            sugerencias.push(
                `Considerar aumentar el enlace ${origen}-${destino} (actual ${ancho_banda} Mbps) por alta conectividad en ${nodosCargados.has(origen) ? origen : destino}.`
            );
        }
    }
});

// Si no hubo enlaces lentos, al menos sugerir upgrade general a los nodos cargados
if (sugerencias.length === 0 && nodosCargados.size > 0) {
    nodosCargados.forEach(n =>
        sugerencias.push(`El nodo ${n} tiene alta conectividad (>2); evaluar mayor ancho de banda.`)
    );
}

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);
