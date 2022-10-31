var inicio = 0; //se inicializa una variable en 0

function aumentar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var cantidad = document.getElementById('cantidad').value = ++inicio;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

     var cantidad = document.getElementById('cantidad').value = --inicio;
     //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

//Segunda tarjeta
var principal = 0; //se inicializa una variable en 0

function agregar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var pieza = document.getElementById('pieza').value = ++principal;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function quitar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

     var pieza = document.getElementById('pieza').value = --principal;
     //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}


//Tercera tarjeta
var inicial = 0; //se inicializa una variable en 0

function aumenta() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var producto = document.getElementById('producto').value = ++inicial;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function baja() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

     var producto = document.getElementById('producto').value = --inicial;
     //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}


//Cuarta tarjeta

var principio = 0; //se inicializa una variable en 0

function subir() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

     var articulo = document.getElementById('articulo').value = ++principio;
     //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function bajar() {
     // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

     var producto = document.getElementById('articulo').value = --principio;
     //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

