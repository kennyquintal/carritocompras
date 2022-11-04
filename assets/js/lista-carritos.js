let body = document.querySelector('body')
let txtCantida= document.querySelectorAll("#inputPassword2")
//let lbEnvio = document.getElementById("lb-envio").innerHTML
let lbTotal = document.getElementById("lb-total")
let total = 0
let cantidad

body.onload = function () {
    agregarProductos()
    mostrarProductosStorage()
    //localStorage.clear()
}



/**
 * Evento de teclado en el campo donde va la cantidad de productos a elegir
 */

/**txtCantida.forEach(inputsText =>{
    inputsText.addEventListener('keyup', function (e) {
        //let contenedor = document.getElementById("contenedor")
        let elemento = this.parentElement.parentElement
        console.log(elemento.children[2].children[0].children[0].innerHTML)
        let lbPrecioUnitario = elemento.children[2].children[0].children[0].innerHTML
        //lbTotal.innerHTML =""
        cantidad = inputsText.value
        //console.log(cantidad)
        if(!cantidad ==""){
            total = total + calcularTotal(parseInt(cantidad),parseInt(lbPrecioUnitario))
            lbTotal.innerText = total
            console.log(total)
        }
    })
})*/

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
       //total = calcularTotal(parseInt(productos.Cantidad),parseInt(productos.precio))
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
                   <p  class="card-text"><strong id="lb-precion-unitario">${Intl.NumberFormat("en-IN").format(productos.precio)}</strong></p>
                   <p  class="card-text text-end text-muted"><strong id="lb-precion-unitario">Sub total: ${Intl.NumberFormat("en-IN").format(productos.importe)}</strong></p>
                 </div>
           </div>
       </div>
   </div>
       `
       total = total + productos.importe
       //console.log(total)
    });
    console.log(total)
    lbTotal.innerHTML = Intl.NumberFormat("en-IN").format(total) 
    contenedorCarrito.innerHTML = plantilla
}
function mostrarProductosStorage() {
    //console.log(JSON.parse(localStorage.getItem("productos")))
    //console.log(localStorage.getItem("producto"))
    console.log(JSON.parse("["+localStorage.getItem("producto")+"]"))
}


