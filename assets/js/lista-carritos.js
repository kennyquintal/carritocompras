let body = document.querySelector('body')
body.onload = function () {
    agregarProductos()
    mostrarProductosStorage()
    //localStorage.clear()
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
    })
})

function agregarProductos() {
    //let productos = localStorage.getItem("productos")
    //productos = JSON.parse(producto)
    let producto = JSON.stringify({
            ID    : "1234",
            Cantidad : "2",
			Descripcion  : "Tenis para mujer" ,
			Modelo : "Nike 2.0" ,
			cantidad : "1200"
    })

     let producto2 = JSON.stringify([
        { ID    : "1234",
        Cantidad : "2",
        Descripcion  : "Tenis para mujer" ,
        Modelo : "Nike 2.0" ,
        cantidad : "1200"},{
            ID    : "1234",
            Cantidad : "2",
			Descripcion  : "Tenis para mujer" ,
			Modelo : "Nike 2.0" ,
			cantidad : "1200"
        },{
            ID    : "1234",
            Cantidad : "2",
			Descripcion  : "Tenis para mujer" ,
			Modelo : "Nike 2.0" ,
			cantidad : "1200"
        }
    ])
    
    let x =[]
    for (let i = 0; i < 5; i++) {
       x.push(producto)
    }
    //console.log(x)
        //producto
        localStorage.setItem("producto",x)
        //localStorage.setItem("productos", producto2)

}
function mostrarProductosStorage() {
    //console.log(JSON.parse(localStorage.getItem("productos")))
    console.log(localStorage.getItem("producto"))
    console.log(JSON.parse("["+localStorage.getItem("producto")+"]"))
}


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