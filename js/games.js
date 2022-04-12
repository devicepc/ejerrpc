let question001 = ["<img src=images/preguntas/atx2.jpg height=40 /><br /><br />Que alimenta este conector?",
"<img src=images/preguntas/berg-conector.jpg height=40 /><br /><br />Este conector se conecta en ...",
"<img src=images/preguntas/eps.jpg height=40 /><br /><br />Este conector se conecta en ...",
"<img src=images/preguntas/molex.jpg height=40 /><br /><br />Este conector se conecta en ...",
"<img src=images/preguntas/pcie-conector.jpg height=40 /><br /><br />Este conector se conecta en ...",
"<img src=images/preguntas/sata.jpg height=40 /><br /><br />Este conector se conecta en ...",

];

let options001 = ["<button class=buttons001 onclick=q1i()>Microprocesador</button><br /><br /><button class=buttons001 onclick=q1c()>Placa Madre</button>"];
let options002 = ["<button class=buttons001 onclick=q1c()>Disquetera</button><br /><br /><button class=buttons001 onclick=q1i()>Disco duro</button>"];
let options003 = ["<button class=buttons001 onclick=q1c()>Alimentacion de procesador</button><br /><br /><button class=buttons001 onclick=q1i()>Disco duro</button>"];
let options004 = ["<button class=buttons001 onclick=q1i()>Floppy</button><br /><br /><button class=buttons001 onclick=q1c()>Lectora / Disco </button>"];
let options005 = ["<button class=buttons001 onclick=q1c()>Tarjeta grafica</button><br /><br /><button class=buttons001 onclick=q1i()>Procesador</button>"];
let options006 = ["<button class=buttons001 onclick=q1c()>Tarjeta grafica</button><br /><br /><button class=buttons001 onclick=q1i()>Disco / Lectora</button>"];


let a = 0;
a++;
let b = 0;
b++;

function begin001() {
disappear001.innerHTML = "";
message001.innerHTML = question001[0];
message002.innerHTML = options001;
number001.innerHTML = a++;
}

function q1c() {
message003.innerHTML = "Correcto";
message002.innerHTML = "";
score001.innerHTML = b++;
message004.innerHTML = "<button class=buttons002 onclick=next001()>Siguiente</button>";
}

function q1i() {
message003.innerHTML = "Incorrecto";
message002.innerHTML = "";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Siguiente</button>";
}

function next001() {
if (a == "2") {
    message001.innerHTML = question001[1];
    message002.innerHTML = options002;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "3") {
    message001.innerHTML = question001[2];
    message002.innerHTML = options003;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}


else if (a == "4") {
    message001.innerHTML = question001[3];
    message002.innerHTML = options004;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "5") {
    message001.innerHTML = question001[4];
    message002.innerHTML = options005;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}

else if (a == "6") {
    message001.innerHTML = question001[5];
    message002.innerHTML = options006;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
}



 else {
    message001.innerHTML = "Fin del  Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}

function repeat001() {
location.reload();
}


