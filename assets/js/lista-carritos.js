/**
 * Evento de teclado en el campo donde va la cantidad de productos a elegir
 */
let txtCantida= document.getElementById("txt-cantidad");
txtCantida.onkeyup = (e)=> {
    let cantidad = txtCantida.value
    //obtener un valor de un tag en html
    let lbPrecioUnitario = document.getElementById("lb-precion-unitario").innerHTML
    let lbEnvio = document.getElementById("lb-envio").innerHTML
    let lbTotal = document.getElementById("lb-total")
    if (!cantidad=="") {
        let total = calcularTotal(parseInt(cantidad),parseInt(lbPrecioUnitario),parseInt(lbEnvio ))
        lbTotal.innerText = total
    } else{
        lbTotal.innerText = ""
    }
}

/**
 * 
 * @param {*} cantidad cantidad de productos
 * @param {*} precioUnitario precio unitario del producto
 * @param {*} precioEnvio precio del envio de paqueteria del producto
 * @returns 
 */
function calcularTotal(cantidad, precioUnitario, precioEnvio) {
    let total = (cantidad*precioUnitario)+precioEnvio;
    return total;
}