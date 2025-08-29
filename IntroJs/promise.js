// Promises
// Resolve => Ejecuta el llamado al Promise cuando se cumple
// Reject => Maneja el error en caso de que algo falle
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true
        if (descuento) {
            resolve("Descuento aplicado");
        } else {
            reject("No se pudo aplicar el descuento");
        }
    }, 3000);
})

// console.log(aplicarDescuento);

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log('Hubo un error en la Consulta' + error);
});
