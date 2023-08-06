function funcionSaludo(){
    alert ("Hola!");
}
let btn = document.getElementById("btn");
let miDiv = document.getElementById('miDiv');

miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
});