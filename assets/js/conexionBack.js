//consultaProductos();
//consultaUsuarios();
//consultaCarrito();

function consultaProductos(){
    fetch('http://10.60.63.90:4000/api/Products/')
    .then(response => response.json()) //convierte a json
    .then(json => console.log(json))
 }

 function consultaUsuarios(){
   fetch('http://10.60.63.90:4000/api/Users/')
   .then(response => response.json()) //convierte a json
   .then(json => console.log(json))
}

function consultaCarrito(){
   fetch('http://10.60.63.90:4000/api/carrito/1')
   .then(response => response.json()) //convierte a json
   .then(json => console.log(json))
}