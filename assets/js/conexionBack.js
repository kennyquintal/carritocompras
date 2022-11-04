//consultaProductos();
//consultaUsuarios();
//consultaCarrito();
insertarClientes();

function consultaProductos(){
    fetch('http://10.60.63.90:4000/api/registro/')
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

var enviar = document.getElementById('clienteForm');
enviar.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(enviar);
    insertarClientes(data);
});

async function insertarClientes(data) {
   let response = await fetch('http://10.60.63.90:4000/api/registro/', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    });
    
    let result = await response.json();
    console.log(result.message);
}
