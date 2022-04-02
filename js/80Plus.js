var texto80inc = "INTENTALO NUEVAMENTE";
var textoDifCorrec = "CORRECTO";


const boton43 = document.querySelector("#btn80fte1");
// Agregar listener
boton43.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("fte801").innerHTML =texto80inc;
    document.getElementById("fte801").style.color="red";
});
 const boton44 = document.querySelector("#btn80fte2");
// Agregar listener
boton44.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("fte801").innerHTML =textoDifCorrec;
    document.getElementById("fte801").style.color="green";
});

 const btn803 = document.querySelector("#btn80fte3");
// Agregar listener
btn803.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("fte802").innerHTML =texto80inc;
    document.getElementById("fte802").style.color="red";
});
 const btn804 = document.querySelector("#btn80fte4");
// Agregar listener
btn804.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("fte802").innerHTML =textoDifCorrec;
    document.getElementById("fte802").style.color="green";
});

// ejer 3
const btn805 = document.querySelector("#btn80fte5");
// Agregar listener
btn805.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("fte803").innerHTML =textoDifCorrec;
    document.getElementById("fte803").style.color="green";
});
 
 let btns5 = document.querySelectorAll('.inEj5');
for (i of btns5) {
  i.addEventListener('click', function() {
	document.getElementById('fte803').innerHTML= textoDifInc;
	document.getElementById("fte803").style.color="red";
  });
}

/*
// ejercicio 3
const boton47 = document.querySelector("#btndiffteejer12");
// Agregar listener
boton47.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte3").innerHTML =textoDifCorrec;
    document.getElementById("difFte3").style.color="green";
});
 
 let btns = document.querySelectorAll('.inEj2');
for (i of btns) {
  i.addEventListener('click', function() {
	document.getElementById('difFte3').innerHTML= texto80inc;
	document.getElementById("difFte3").style.color="red";
  });
}
// ejercicio 4
const boton48 = document.querySelector("#btndiffteejer13");
// Agregar listener
boton48.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte4").innerHTML =textoDifCorrec;
    document.getElementById("difFte4").style.color="green";
});
 
 let btns3 = document.querySelectorAll('.inEj3');
for (i of btns3) {
  i.addEventListener('click', function() {
	document.getElementById('difFte4').innerHTML= texto80inc;
	document.getElementById("difFte4").style.color="red";
  });
}

// ejercicio 5
const boton49 = document.querySelector("#btndiffteejer14");
// Agregar listener
boton49.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("difFte5").innerHTML =textoDifCorrec;
    document.getElementById("difFte5").style.color="green";
});
 
 let btns4 = document.querySelectorAll('.inEj4');
for (i of btns4) {
  i.addEventListener('click', function() {
	document.getElementById('difFte5').innerHTML= texto80inc;
	document.getElementById("difFte5").style.color="red";
  });
}

 */