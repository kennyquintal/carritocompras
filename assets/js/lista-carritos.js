let body = document.querySelector('body')
body.onload = function () {
    fetch('http://10.99.99.92:5500/assets/json/estados-municipios.json')
    .then(function (respuesta) {return respuesta.json()})
    .then(function (data) {
        console.log(data)
    })
}
/**
 * Evento de teclado en el campo donde va la cantidad de productos a elegir
 */
let txtCantida= document.querySelectorAll("#txt-cantidad")
let lbEnvio = document.getElementById("lb-envio").innerHTML
let lbTotal = document.getElementById("lb-total")
let total = 0
let cantidad
txtCantida.forEach(inputsText =>{
    inputsText.addEventListener('keyup', function (e) {
        //let contenedor = document.getElementById("contenedor")
        let elemento = this.parentElement.parentElement
        console.log(elemento.children[2].children[0].children[0].innerHTML)
        let lbPrecioUnitario = elemento.children[2].children[0].children[0].innerHTML
        //lbTotal.innerHTML =""
        cantidad = inputsText.value
        //console.log(cantidad)
        if(!cantidad ==""){
            total = total + calcularTotal(parseInt(cantidad),parseInt(lbPrecioUnitario),parseInt(lbEnvio ))
            lbTotal.innerText = total
            console.log(total)
        } else {
            console.log(total - calcularTotal(parseInt(cantidad),parseInt(lbPrecioUnitario),parseInt(lbEnvio )))
            lbTotal.innerText = total
        }

            
        //console.log(inputsText.parentElement)
        //obtener un valor de un tag en html
        //let lbPrecioUnitario = document.getElementById("lb-precion-unitario").innerHTML
        //let lbEnvio = document.getElementById("lb-envio").innerHTML
        //let lbTotal = document.getElementById("lb-total")
        //console.log(lbEnvio)
        /*if (!cantidad=="") {
            let total = calcularTotal(parseInt(cantidad),parseInt(lbPrecioUnitario),parseInt(lbEnvio ))
            lbTotal.innerText = total
        } else{
            lbTotal.innerText = ""
        }*/
    })
})
/*txtCantida.onkeyup = (e)=> {
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
}*/

/**
 * 
 * @param {*} cantidad cantidad de productos
 * @param {*} precioUnitario precio unitario del producto
 * @param {*} precioEnvio precio del envio de paqueteria del producto
 * @returns total de la compra
 */
function calcularTotal(cantidad, precioUnitario, precioEnvio) {
    cantidad = cantidad
    let total = 0
    total = total + ((cantidad*precioUnitario)+precioEnvio)   
    return total;
}