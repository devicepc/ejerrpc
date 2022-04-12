let questionPM001 = ["<img src=images/preguntasPM/auxdefuente.jpg height=40 /><br /><br />Que alimenta este conector?",
"<img src=images/preguntasPM/bios.jpg height=40 /><br /><br />Que nombre tiene es esta parte ...",
"<img src=images/preguntasPM/buttons.jpg height=40 /><br /><br />Que nombre tiene es esta parte ...",
"<img src=images/preguntasPM/chipset.jpg height=40 /><br /><br />Se llaman ...",
"<img src=images/preguntasPM/conectorplacabase.jpg height=40 /><br /><br />Este conector se llama ...",
"<img src=images/preguntasPM/ide.jpg height=40 /><br /><br />Conexion Ide ...",
"<img src=images/preguntasPM/LGA_Socket_1366.jpg height=40 /><br /><br />Se llama : ...",
"<img src=images/preguntasPM/panelfrontal.jpg height=40 /><br /><br />Este conector se llama ...",
"<img src=images/preguntasPM/paneltrasero.jpg height=40 /><br /><br />Esta parte de la placa es  ...",
"<img src=images/preguntasPM/PCI.jpg height=40 /><br /><br />Este conector se llama ...",
"<img src=images/preguntasPM/PCIEXX1.jpg height=40 /><br /><br />Nombre de este slot de expancion ...",
"<img src=images/preguntasPM/PCIEXX16.jpg height=40 /><br /><br />Nombre de este slot de expancion ...",
"<img src=images/preguntasPM/PILA.jpg height=40 /><br /><br />Que nombre tiene esta pieza ...",
"<img src=images/preguntasPM/RAM.jpg height=40 /><br /><br />Nombre de este slot ...",
"<img src=images/preguntasPM/RESETCMOS.jpg height=40 /><br /><br />Realizamos  ...",
"<img src=images/preguntasPM/sata.jpg height=40 /><br /><br />Nombre este conector  ...",
"<img src=images/preguntasPM/SSD-M2.jpg height=40 /><br /><br />Nombre este conector ...",
"<img src=images/preguntasPM/vmr.jpg height=40 /><br /><br />Que nombre tiene este sector de la placa ...",

];

let optionsPM001 = ["<button class=buttons001 onclick=qPM1i()>Disco duro</button><br /><br /><button class=buttons001 onclick=qPM1c()>Aux de Micro</button>"];
let optionsPM002 = ["<button class=buttons001 onclick=qPM1c()>Bios</button><br /><br /><button class=buttons001 onclick=qPM1i()>Chipset</button>"];
let optionsPM003 = ["<button class=buttons001 onclick=qPM1c()>Botones reset, encendido</button><br /><br /><button class=buttons001 onclick=qPM1i()>Panel delantero</button>"];
let optionsPM004 = ["<button class=buttons001 onclick=qPM1i()>Socket</button><br /><br /><button class=buttons001 onclick=qPM1c()>Chipset  </button>"];
let optionsPM005 = ["<button class=buttons001 onclick=qPM1c()>Conector alimentación ATX</button><br /><br /><button class=buttons001 onclick=qPM1i()>Aux de Micro</button>"];
let optionsPM006 = ["<button class=buttons001 onclick=qPM1c()>IDE</button><br /><br /><button class=buttons001 onclick=qPM1i()>SATA</button>"];
let optionsPM007 = ["<button class=buttons001 onclick=qPM1i()>Bios</button><br /><br /><button class=buttons001 onclick=qPM1c()>Socket</button>"];
let optionsPM008 = ["<button class=buttons001 onclick=qPM1c()>Panel frontal</button><br /><br /><button class=buttons001 onclick=qPM1i()>Conector de USB</button>"];
let optionsPM009 = ["<button class=buttons001 onclick=qPM1c()>Panel trasero</button><br /><br /><button class=buttons001 onclick=qPM1i()>Panel frontal</button>"];
let optionsPM010 = ["<button class=buttons001 onclick=qPM1i()>PCI EX x1</button><br /><br /><button class=buttons001 onclick=qPM1c()>PCI  </button>"];
let optionsPM011 = ["<button class=buttons001 onclick=qPM1c()>PCI EX x1</button><br /><br /><button class=buttons001 onclick=qPM1i()>PCI EX x16</button>"];
let optionsPM012 = ["<button class=buttons001 onclick=qPM1c()>PCI EX x16</button><br /><br /><button class=buttons001 onclick=qPM1i()>IDE</button>"];

let optionsPM013 = ["<button class=buttons001 onclick=qPM1i()>VMR</button><br /><br /><button class=buttons001 onclick=qPM1c()>Pila</button>"];
let optionsPM014 = ["<button class=buttons001 onclick=qPM1c()>Ranuras de memoria</button><br /><br /><button class=buttons001 onclick=qPM1i()>Conector de USB</button>"];
let optionsPM015 = ["<button class=buttons001 onclick=qPM1c()>Reset CMOS</button><br /><br /><button class=buttons001 onclick=qPM1i()>Encendido</button>"];
let optionsPM016 = ["<button class=buttons001 onclick=qPM1i()>SSD - M2</button><br /><br /><button class=buttons001 onclick=qPM1c()>Sata </button>"];
let optionsPM017 = ["<button class=buttons001 onclick=qPM1c()>SSD - M2</button><br /><br /><button class=buttons001 onclick=qPM1i()>PCI EX X1</button>"];
let optionsPM018 = ["<button class=buttons001 onclick=qPM1c()>VMR</button><br /><br /><button class=buttons001 onclick=qPM1i()>Reset CMOS</button>"];


let c = 0;
c++;
let d = 0;
d++;

function beginPM001() {
disappearPM001.innerHTML = "";
messagePM001.innerHTML = questionPM001[0];
messagePM002.innerHTML = optionsPM001;
numberPM001.innerHTML = c++;
}

function qPM1c() {
messagePM003.innerHTML = "Correcto";
messagePM002.innerHTML = "";
scorePM001.innerHTML = d++;
messagePM004.innerHTML = "<button class=buttons002 onclick=nextPM001()>Siguiente</button>";
}

function qPM1i() {
messagePM003.innerHTML = "Incorrecto";
messagePM002.innerHTML = "";
messagePM004.innerHTML = "<button class=buttons002 onclick=nextPM001()>Siguiente</button>";
}

function nextPM001() {
if (c == "2") {
    messagePM001.innerHTML = questionPM001[1];
    messagePM002.innerHTML = optionsPM002;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "3") {
    messagePM001.innerHTML = questionPM001[2];
    messagePM002.innerHTML = optionsPM003;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}


else if (c == "4") {
    messagePM001.innerHTML = questionPM001[3];
    messagePM002.innerHTML = optionsPM004;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "5") {
    messagePM001.innerHTML = questionPM001[4];
    messagePM002.innerHTML = optionsPM005;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "6") {
    messagePM001.innerHTML = questionPM001[5];
    messagePM002.innerHTML = optionsPM006;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "7") {
    messagePM001.innerHTML = questionPM001[6];
    messagePM002.innerHTML = optionsPM007;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "8") {
    messagePM001.innerHTML = questionPM001[7];
    messagePM002.innerHTML = optionsPM008;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}


else if (c == "9") {
    messagePM001.innerHTML = questionPM001[8];
    messagePM002.innerHTML = optionsPM009;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "10") {
    messagePM001.innerHTML = questionPM001[9];
    messagePM002.innerHTML = optionsPM010;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "11") {
    messagePM001.innerHTML = questionPM001[10];
    messagePM002.innerHTML = optionsPM011;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}
else if (c == "12") {
    messagePM001.innerHTML = questionPM001[11];
    messagePM002.innerHTML = optionsPM012;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
} 


else if (c == "13") {
    messagePM001.innerHTML = questionPM001[12];
    messagePM002.innerHTML = optionsPM008;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}


else if (c == "14") {
    messagePM001.innerHTML = questionPM001[13];
    messagePM002.innerHTML = optionsPM009;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "15") {
    messagePM001.innerHTML = questionPM001[14];
    messagePM002.innerHTML = optionsPM010;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "16") {
    messagePM001.innerHTML = questionPM001[15];
    messagePM002.innerHTML = optionsPM011;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}
else if (c == "17") {
    messagePM001.innerHTML = questionPM001[16];
    messagePM002.innerHTML = optionsPM012;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
} 



 else {
    messagePM001.innerHTML = "Fin del  Quiz";
    messagePM002.innerHTML = "";
    messagePM003.innerHTML = "";
    messagePM004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}

function repeat001() {
location.reload();
}


