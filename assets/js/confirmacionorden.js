let body = document.querySelector('body');
body.onload = function() {
   printStates();
   //printCity();
}

function printStates(){
   fetch('../assets/json/estados-municipios.json')
   .then(function(resp){return resp.json()})
   .then(function(data){
      var estados = Object.getOwnPropertyNames(data);
      var selectIdStates = document.getElementById("inputState");
      var emptyOption = document.createElement("option")
      emptyOption.textContent = "Seleccione una opción";
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



















