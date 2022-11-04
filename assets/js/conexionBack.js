//consultaProductos();
//consultaUsuarios();
//consultaCarrito();
//insertarClientes();

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
    var nombres = document.getElementById("inputName4").value;
    var ApellidoP = document.getElementById("inputLastName1").value;
    var ApellidoM = document.getElementById("inputLastName2").value;
    var celular = document.getElementById("inputCellPhone").value;
    var correo = document.getElementById("inputEmail1").value;
    var Direccion = document.getElementById("inputAddress").value;
    var Estado = document.getElementById("inputState").value;
    var CodigoPostal = document.getElementById("inputCP").value;
    var Ciudad = document.getElementById("inputCity").value;
    
    let data = JSON.stringify({
      Nombres: nombres,
      ApellidoP: ApellidoP,
      ApellidoM: ApellidoM,
      Celular: celular,
      Correo: correo,
      Direccion: Direccion,
      Estado: Estado,
      CodigoPostal: CodigoPostal,
      Ciudad: Ciudad
  })
    //var data = new FormData(enviar);
    //console.log(data.Nombres)
    insertarClientes(data);
});


async function insertarClientes(data) {
   let response = await fetch('http://10.60.63.90:4000/api/registro/', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    let result = await response.json();
    console.log(result.message);
}
