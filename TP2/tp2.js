// Ejercicio 1: Crear un objeto literal para un dispositivo de red
// Crea un objeto literal que represente un router con las siguientes propiedades:
// modelo, marca, puertos, velocidad (en Mbps), y soportaWifi.

const router = {
    modelo: "Messi",
    marca: "Personal",
    puertos: 4,
    velocidad: 300,
    soportaWifi: true
};
console.log(router);


// Ejercicio 2: Array de dispositivos de red
// Crea un array con 5 dispositivos de red (routers, switches, firewalls, etc.) donde
// cada uno sea un objeto literal con propiedades como tipo, marca, modelo y
// precio.

const dispositivosRed = [
    { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
    { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
    { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
    { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
    { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];

console.log(dispositivosRed);

// Ejercicio 3: Filtrar dispositivos por marca
// Dado un array de dispositivos de red, utiliza el método filter() para obtener solo los
// dispositivos de una marca específica.

const filtrarCisco = dispositivosRed.filter(dispositivo => dispositivo.marca === "Cisco")

console.log(filtrarCisco)

// Ejercicio 4: Mapear direcciones IP
// Dado un array de servidores con direcciones IP, utiliza el método map() para crear
// un nuevo array que contenga solo las direcciones IP.

const servidores = [
    { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
    { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
    { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
    { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
    { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

const MapeoIP = servidores.map(ips => ips.ip)
console.log(MapeoIP)

// Ejercicio 5: Filtrar y ordenar paquetes de datos
// Dado un array de paquetes de datos, filtra aquellos que tengan un tamaño mayor
// a 1000 bytes y ordénalos de mayor a menor según su prioridad.

const paquetesDatos = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const OrdenarFiltrar = paquetesDatos.filter(paquete => paquete.tamaño > 1000)
    .toSorted()
console.log(OrdenarFiltrar)

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

// Ejercicio 7: Analizar conexiones de red
// Dado un array de conexiones de red, agrupa las conexiones por protocolo y
// cuenta cuántas hay de cada tipo.

const conexiones = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
    { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
    { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
    { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

// Crea un objeto para contar las conexiones por protocolo

// Tu código aquí (recorre el array y cuenta las conexiones)

const conexionesPorProtocolo = conexiones.reduce((acum, conexion) => {
    acum[conexion.protocolo] = (acum[conexion.protocolo] || 0) + 1;
    return acum;
}, {});

console.log("Conexiones por protocolo:", conexionesPorProtocolo);

// Ejercicio 8: Filtrar y transformar alertas de seguridad
// Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y
// transfórmalas en mensajes para el administrador.

const dispositivos = [

    { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
    { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
    { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
    { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
    { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
    { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
    { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

// Crea un informe que combine la información de dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
    const origen = dispositivos.find(dispositivo => dispositivo.ip === conexion.origen);
    const destino = dispositivos.find(dispositivo => dispositivo.ip === conexion.destino);
    return {
        origen: origen.nombre,
        destino: destino.nombre,
        protocolo: conexion.protocolo,
        bytes: conexion.bytes
    };
});
console.log("Informe de actividad de red:", informeActividad);

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


// Ejercicio 10: Analizar y optimizar topología de red
// Dado un objeto que representa una topología de red, encuentra los nodos con
// más conexiones y sugiere optimizaciones.
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

const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => conexionesPorNodo[nodo.id] = 0);

topologiaRed.conexiones.forEach(con => {
  conexionesPorNodo[con.origen]++;
  conexionesPorNodo[con.destino]++;
});

const nodosOrdenados = Object.entries(conexionesPorNodo)
  .sort((a, b) => b[1] - a[1]);

const sugerencias = nodosOrdenados
  .filter(([_, cant]) => cant > 2)
  .map(([nodo]) => `El nodo ${nodo} debería tener mayor ancho de banda.`);

console.log("Ejercicio 10 - Conexiones por nodo:", conexionesPorNodo);
console.log("Ejercicio 10 - Nodos ordenados:", nodosOrdenados);
console.log("Ejercicio 10 - Sugerencias:", sugerencias);
