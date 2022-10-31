var json = {};
let body = document.querySelector('body');
body.onload = function() {
   printStates();
}

function printStates(){
   fetch('../assets/json/estados-municipios.json')
   .then(function(resp){return resp.json()})
   .then(function(data){
      json = data;
      var estados = Object.getOwnPropertyNames(data);
      var selectIdStates = document.getElementById("inputState");
      var emptyOption = document.createElement("option")
      emptyOption.textContent = "Seleccione un Estado";
      emptyOption.value = "";
      selectIdStates.appendChild(emptyOption);
      for(var i = 0; i < estados.length; i++) {
         var opt = estados[i];
         var el = document.createElement("option");
         el.textContent = opt;
         el.value = opt;
         selectIdStates.appendChild(el);
      }
   });   
}

let selectIdStates = document.getElementById("inputState");

selectIdStates.onchange = function(){
   var ciudad = json[selectIdStates.value];
   console.log(selectIdStates.value);
   cleanCity()
   printCity(ciudad);
}

function printCity(ciudad){
      let selectIdCity = document.getElementById("inputCity");
      for(var i = 0; i < ciudad.length; i++) {
         var opt = ciudad[i];
         var el = document.createElement("option");
         el.textContent = opt;
         el.value = opt;
         selectIdCity.appendChild(el);
      }  
}

function cleanCity(){
   let selectIdCity = document.getElementById("inputCity");
   selectIdCity.innerHTML = "";
}



















