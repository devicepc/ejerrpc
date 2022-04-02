var textoDifInc = "INTENTALO NUEVAMENTE";
var textoDifCorrec = "CORRECTO";


const boton36 = document.querySelector("#btndiffteejer2");
// Agregar listener
boton36.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte1").innerHTML =textoDifInc;
    document.getElementById("difFte1").style.color="red";
});
 const boton37 = document.querySelector("#btndiffteejer1");
// Agregar listener
boton37.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte1").innerHTML =textoDifCorrec;
    document.getElementById("difFte1").style.color="green";
});

const boton38 = document.querySelector("#btndiffteejer3");
// Agregar listener
boton38.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte2").innerHTML =textoDifInc;
    document.getElementById("difFte2").style.color="red";
});
 const boton39 = document.querySelector("#btndiffteejer4");
// Agregar listener
boton39.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte2").innerHTML =textoDifCorrec;
    document.getElementById("difFte2").style.color="green";
});


// ejercicio 3
const boton40 = document.querySelector("#btndiffteejer5");
// Agregar listener
boton40.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte3").innerHTML =textoDifCorrec;
    document.getElementById("difFte3").style.color="green";
});
 
 let btns = document.querySelectorAll('.inEj2');
for (i of btns) {
  i.addEventListener('click', function() {
	document.getElementById('difFte3').innerHTML= textoDifInc;
	document.getElementById("difFte3").style.color="red";
  });
}
// ejercicio 4
const boton41 = document.querySelector("#btndiffteejer6");
// Agregar listener
boton41.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte4").innerHTML =textoDifCorrec;
    document.getElementById("difFte4").style.color="green";
});
 
 let btns3 = document.querySelectorAll('.inEj3');
for (i of btns3) {
  i.addEventListener('click', function() {
	document.getElementById('difFte4').innerHTML= textoDifInc;
	document.getElementById("difFte4").style.color="red";
  });
}

// ejercicio 5
const boton42 = document.querySelector("#btndiffteejer7");
// Agregar listener
boton42.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte5").innerHTML =textoDifCorrec;
    document.getElementById("difFte5").style.color="green";
});
 
 let btns4 = document.querySelectorAll('.inEj4');
for (i of btns4) {
  i.addEventListener('click', function() {
	document.getElementById('difFte5').innerHTML= textoDifInc;
	document.getElementById("difFte5").style.color="red";
  });
}

