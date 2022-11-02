
let body = document.querySelector('body')
body.onload = function () {
     productos()

}



function productos() {
     let plantilla = ""
     let contenedorProductos = document.getElementById('contenedor-productos')
     let url = 'http://10.60.63.90:4000/api/Products/'
     fetch(url)
          .then(function (respuesta) { return respuesta.json() })
          .then(function (data) {
               console.log(typeof (data))
               // extraemos la data y vamos alterarla para sacar cada uno de los datos//
               data.forEach(datos => {
                    console.log(datos)
                    plantilla += `
               <div class="col-2 tarjetas-margen">
               <div class="card" style="width: 18rem;">
                   <img src="/assets/img/tenis1.png" class="card-img-top" alt="...">
                   <div class="card-body">
                       <h5 class="card-title">${datos.Nombre}</h5>
                       <p class="card-text">
                       <ul>
                           <dl>${datos.Descripcion}</dl>
                           <dl> 1 Color</dl>
                           <dl>${datos.Precio}</dl>
                       </ul>
                       </p>
                       <input type='number' id="cantidad" min="0" value="0">
                       <select class="form-select general" aria-label="Default select example">
                           <option selected>Tallas</option>
                           <option value="1">25</option>
                           <option value="2">26</option>
                           <option value="3">27</option>
                           <option value="4">28</option>
                           <option value="5">29</option>
                       </select>
                       <a href="#" class="btn btn-primary general">Agregar</a>
                   </div>
               </div>
           </div>
               `
               });

               contenedorProductos.innerHTML = plantilla
          })
}


//// botones dinamicos soloo selecccione en el que estoy 
function comprar(){

    let compra = document.querySelector('compra');

}





