var inicio = 0; //se inicializa una variable en 0

function aumentar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var cantidad = document.getElementById('cantidad').value = ++inicio;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir() {

     var cantidad = document.getElementById('cantidad');

     if (inicio < 0) {
          alert("No se puede tener stock negativa");
          cantidad.value = 0;
     }
     else {
          cantidad.value = inicio--;
     }
}





//Segunda tarjeta
var principal = 0; //se inicializa una variable en 0

function agregar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var pieza = document.getElementById('pieza').value = ++principal;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}


function quitar() {

     var pieza = document.getElementById('pieza');

     if (principal < 0) {
          alert("No se puede tener stock negativa");
          pieza.value = 0;
     }
     else {
          pieza.value = principal--;
     }
}




//Tercera tarjeta
var inicial = 0; //se inicializa una variable en 0

function aumenta() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var cantidad = document.getElementById('producto').value = ++inicial;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}


function baja() {

     var producto = document.getElementById('producto');

     if (inicial < 0) {
          alert("No se puede tener stock negativa");
          producto.value = 0;
     }
     else {
          producto.value = inicial--;
     }
}




//Cuarta tarjeta

var principio = 0; //se inicializa una variable en 0

function subir() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var articulo = document.getElementById('articulo').value = ++principio;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}
function bajar() {

     var articulo = document.getElementById('articulo');

     if (principio < 0) {
          alert("No se puede tener stock negativa");
          articulo.value = 0;
     }
     else {
          articulo.value = principio--;
     }
}








