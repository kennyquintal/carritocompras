$(document).ready(function (e) {
     productos()
     //eliminarStorage()
     let datos = []
     $(document).on('click','.agregar',(e)=>{
          //accedemos al padre de todos los elementos con jquery
          let padre = $(this)[0].activeElement.parentElement
          let modeloProducto = padre.children[1].innerHTML
          let idProducto = padre.children[0].innerHTML
          let descripcionProducto = padre.children[3].children[0].innerHTML
          let precioProducto = padre.children[3].children[1].innerHTML
          let cantidadProducto = padre.children[4].value
          let talla = padre.children[5].value

          let producto = JSON.stringify({
               ID    : idProducto,
               Cantidad : cantidadProducto,
               Descripcion  : descripcionProducto,
               Modelo : modeloProducto,
               precio : precioProducto,
               talla: talla,
               importe: calcularTotal(cantidadProducto, precioProducto) 
       })
       datos.push(producto)
       console.log(JSON.parse("["+datos+"]"))
       localStorage.setItem("producto",datos)
     })
})

/**
 * 
 * @param {*} cantidad cantidad de productos
 * @param {*} precioUnitario precio unitario del producto
 * @returns total de la compra
 */
 function calcularTotal(cantidad, precioUnitario) {
     total = ((cantidad*precioUnitario))   
     return total;
 }

function productos() {
     let plantilla =""
     //let contenedorProductos = document.getElementById('contenedor-productos')
     let url = 'http://10.60.63.84:4000/api/Products/'
     fetch(url)
     .then(function(respuesta) {return respuesta.json()})
     .then(function (data) {
          /**
           * extraemos la data y vamos iterarla para sacar cada uno de los datos
           */
          data.forEach(datos => {
              // console.log(datos)
               plantilla +=`
               <div class="col-2 tarjetas-margen">
               <div class="card" style="width: 18rem;">
                   <img src="/assets/img/tenis1.png" class="card-img-top" alt="...">
                   <div class="card-body">
                       <p hidden>${datos.idProducto}</p>
                       <h5 class="card-title">${datos.Modelo}</h5>
                       <p class="card-text">
                       <ul>
                           <dl>${datos.Descripcion}</dl>
                           <dl>${datos.Precio}</dl>
                           <span class="text-success">${datos.Cantidad} pza</span>
                       </ul>
                       <input type='number' id="cantidad" min="0">

                       <select class="form-select general" aria-label="Default select example">
                           <option selected value="">Tallas</option>
                           <option value="25">25</option>
                           <option value="26">26</option>
                           <option value="27">27</option>
                           <option value="28">28</option>
                           <option value="29">29</option>
                       </select>

                       <button class="agregar btn btn-primary general">Agregar</button>
                   </div>
               </div>
           </div>`
               
          });
          //
          $("#contenedor-productos").html(plantilla)
     })
}

function eliminarStorage() {
     localStorage.clear()
}