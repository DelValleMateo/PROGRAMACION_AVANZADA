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