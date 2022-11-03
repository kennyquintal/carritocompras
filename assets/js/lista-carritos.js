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
    let contenedorCarrito = document.getElementById('contenedor-carrito')
    let datos = JSON.parse("["+localStorage.getItem("producto")+"]")
   /**  for (let i = 0; i < localStorage.length; i++) {
        console.log(datos)
    }*/
    let plantilla =""
    datos.forEach(productos => {
       // console.log(element.ID)
       plantilla += `
       <div class="row">
       <div class="col-6">
           <div class="card mb-3" style="max-width: 540px;">
               <div class="row g-0">
                 <div class="col-md-4">
                   <img src="../assets/img/tenis1.png" class="img-fluid rounded-start" alt="...">
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">${productos.Modelo}</h5>
                     <p class="card-text">${productos.Descripcion}</p>
                     <button class="btn btn-danger">Eliminar</button>
                   </div>
                 </div>
               </div>
             </div>
       </div>
       <div class="col-6">
           <div>
                 <div class="col-auto">
                   <label for="inputPassword2" class="visually-hidden">Password</label>
                   <input type="number" id="txt-cantidad" class="form-control" id="inputPassword2" placeholder="Cantidad" value ="${productos.Cantidad}">
                 </div>
                 <div class="col-auto">
                   <!--<input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">-->
                 </div>
                 <div class="col-auto">
                   <p  class="card-text"><strong id="lb-precion-unitario">${productos.precio}</strong></p>
                 </div>
           </div>
       </div>
   </div>
       `
    });
 contenedorCarrito.innerHTML = plantilla
}
function mostrarProductosStorage() {
    //console.log(JSON.parse(localStorage.getItem("productos")))
    //console.log(localStorage.getItem("producto"))
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