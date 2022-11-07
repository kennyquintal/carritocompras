let lbTotal = document.getElementById("lb-total")
let total = 0
let continuar = document.getElementById('continuar')
continuar.onclick = function () {
  window.location.href = 'pasarelapago.html'
}

$(document).ready(function () {
    agregarProductos()
    //localStorage.clear()
    $(document).on('click', '.eliminar',(e)=> {
      let padre = $(this)[0].activeElement.parentElement.parentElement
      let id_producto = padre.children[0].children[0].innerHTML
    })
});

function agregarProductos() {
    let contenedorCarrito = document.getElementById('contenedor-carrito')
    let datos = JSON.parse("["+localStorage.getItem("producto")+"]")
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
                     <p hidden>${productos.ID}</p>
                     <h5 class="card-title">${productos.Modelo}</h5>
                     <p class="card-text">${productos.Descripcion}</p>
                     <button class="eliminar btn btn-danger">Eliminar</button>
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
    });
    console.log(total)
    lbTotal.innerHTML = Intl.NumberFormat("en-IN").format(total) 
    //$("#contenedor-carrito").html(plantilla)
    contenedorCarrito.innerHTML = plantilla
}


