var json = {};
let body = document.querySelector('body');
body.onload = function() {
   consumeAPI();
}

function consumeAPI(){
    fetch('http://10.99.99.114:4000/api/Products/')
    .then(function(resp){return resp.json()})
    .then(function(data){
       json = data;
       console.log(json);
    });   
 }