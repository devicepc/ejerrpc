// Ejercicio 1 botones

function cambiar (){
    document.getElementById("Resultado1").innerHTML ="ESTAS EN LO CORRECTO, recuerda siempre ponerlo en 600 o 750";

}
document.getElementById("button1ejer1").onclick = function(){
    cambiar();
    cambiocolorResultok();
}
function cambiarF (){
    document.getElementById("Resultado1").innerHTML ="Prueba nuevamente";

}
document.getElementById("button2ejer1").onclick = function(){
    cambiarF();
    cambiocolorResult();
}
document.getElementById("button3ejer1").onclick = function(){
    cambiarF();
    cambiocolorResult();
}

function cambiocolorResult(){
    document.getElementById("Resultado1").style.color= "red";
}
function cambiocolorResultok(){
    document.getElementById("Resultado1").style.color= "green";
}

// fin de ejercicio 1 botones
// Ejercicio 2 botones

function cambiar2(){
    document.getElementById("Resultado2").innerHTML ="ESTAS EN LO CORRECTO, recuerda siempre ponerlo en 20V";
    cambiocolorResultok2();
}

function cambiarF2 (){
    document.getElementById("Resultado2").innerHTML="Prueba nuevamente";
    cambiocolorResult2();
}

function cambiocolorResult2(){
    document.getElementById("Resultado2").style.color= "red";
}
function cambiocolorResultok2(){
    document.getElementById("Resultado2").style.color= "green";
}

// fin de ejercicio 2 botones
// Ejercicio 3 botones

function cambiar3(){
    document.getElementById("Resultado3").innerHTML ="ESTAS EN LO CORRECTO, recuerda Si da un valor distinto de 0 el cable esta ok";
    cambiocolorResultok3();
}

function cambiarF3 (){
    document.getElementById("Resultado3").innerHTML="Prueba nuevamente";
    cambiocolorResult3();
}

function cambiocolorResult3(){
    document.getElementById("Resultado3").style.color= "red";
}
function cambiocolorResultok3(){
    document.getElementById("Resultado3").style.color= "green";
}

// fin de ejercicio 3 botones

// Ejercicio 4 botones

function cambiar4(){
    document.getElementById("Resultado4").innerHTML ="ESTAS EN LO CORRECTO, recuerda Si da un valor distinto de 0 el cable esta ok";
    
}

function cambiarF4 (){
    document.getElementById("Resultado4").innerHTML="Prueba nuevamente";
    cambiocolorResult4();
}

function cambiocolorResult4(){
    document.getElementById("Resultado4").style.color= "red";
}
function cambiocolorResultok4(){
    document.getElementById("Resultado4").style.color= "green";
}

// fin de ejercicio 4 botones
//inicio de botones de corriente
// Ejercicio 1
function CambiarCorr1(){
    document.getElementById("ResultadoCorr1").innerHTML ="Incorrecto, los tomacorriente schuko tienen tierra en la parte superior e inferior";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr1").style.color= "red";
    }
    cambiocolorResultok();
}

function CambiarCorr2(){
    document.getElementById("ResultadoCorr1").innerHTML ="ESTAS EN LO CORRECTO";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr1").style.color= "green";
    }
    cambiocolorResultok();
}

// Fin del Ejercicio 1
// Ejercicio 2
function CambiarCorr3(){
    document.getElementById("ResultadoCorr2").innerHTML ="Incorrecto, en caso de poner adaptadores estos deben de tener tierra";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr2").style.color= "red";
    }
    cambiocolorResultok();
}

function CambiarCorr4(){
    document.getElementById("ResultadoCorr2").innerHTML ="ESTAS EN LO CORRECTO";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr2").style.color= "green";
    }
    cambiocolorResultok();
}

// Fin del Ejercicio2
// Ejercicio 2
function CambiarCorr5(){
    document.getElementById("ResultadoCorr4").innerHTML ="ESTAS EN LO CORRECTO ";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr4").style.color= "green";
    }
    cambiocolorResultok();
}

function CambiarCorr6(){
    document.getElementById("ResultadoCorr4").innerHTML ="Incorrecto, debe ser cambiado de manera inmediata";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr4").style.color= "red";
    }
    cambiocolorResultok();
}

// Fin del Ejercicio2
// Ejercicio 3
function CambiarCorr3(){
    document.getElementById("ResultadoCorr3").innerHTML ="ESTAS EN LO CORRECTO, siempre tiene que haber tierra ";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr3").style.color= "green";
    }
    cambiocolorResultok();
}

function CambiarCorr4(){
    document.getElementById("ResultadoCorr3").innerHTML ="Incorrecto, para proteger debemos tener tierra";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr3").style.color= "red";
    }
    cambiocolorResultok();
}
// fin del ejercicio 3
// Ejercicio 4
function CambiarCorr5(){
    document.getElementById("ResultadoCorr4").innerHTML ="ESTAS EN LO CORRECTO ";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr4").style.color= "green";
    }
    cambiocolorResultok();
}

function CambiarCorr6(){
    document.getElementById("ResultadoCorr4").innerHTML ="Incorrecto, debe ser cambiado de manera inmediata";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr4").style.color= "red";
    }
    cambiocolorResultok();
}

// Fin del Ejercicio4
// Ejercicio 5
function CambiarCorr3(){
    document.getElementById("ResultadoCorr3").innerHTML ="ESTAS EN LO CORRECTO, siempre tiene que haber tierra ";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr3").style.color= "green";
    }
    cambiocolorResultok();
}

function CambiarCorr4(){
    document.getElementById("ResultadoCorr3").innerHTML ="Incorrecto, para proteger debemos tener tierra";
    function cambiocolorResultok(){
        document.getElementById("ResultadoCorr3").style.color= "red";
    }
    cambiocolorResultok();
}
// fin del ejercicio 5






// funcion de ocultar y mostar

function ocultarCorr(){
    document.getElementById("Pregcorr").style.display="none";
   
}
function MostrarCorr(){
    document.getElementById("Pregcorr").style.display="block";
    ocultarFte();
    ocultarDifFte();
    ocultar80plusFte();
    ocultarConectFte();
    ocultarFallasFte();
}

function ocultarFte(){
    document.getElementById("PregFte").style.display="none";
}
function MostrarFte(){
    document.getElementById("PregFte").style.display="block";
    ocultarCorr();
    ocultarDifFte();
     ocultar80plusFte();
    ocultarConectFte();
     ocultarFallasFte();  
}


function ocultarDifFte(){
    document.getElementById("PregDifFte").style.display="none";
}
function MostrarDifFte(){
    document.getElementById("PregDifFte").style.display="block";
    ocultarCorr();
    ocultarFte();
    ocultar80plusFte();
    ocultarConectFte();
    ocultarFallasFte();
}
function ocultar80plusFte(){
    document.getElementById("Preg80Plus").style.display="none";
}
function Mostrar80plusFte(){
    document.getElementById("Preg80Plus").style.display="block";
    ocultarFte();
    ocultarCorr();
    ocultarDifFte();
    ocultarConectFte();
    ocultarFallasFte();
}
function ocultarConectFte(){
    document.getElementById("PregConexFte").style.display="none";
}
function MostrarConectFte(){
    document.getElementById("PregConexFte").style.display="block";
    ocultarFte();
    ocultarCorr();
    ocultarDifFte();
    ocultar80plusFte();
    ocultarFallasFte();
}

function ocultarFallasFte(){
    document.getElementById("PregFallasFte").style.display="none";
}
function MostrarFallasFte(){
    document.getElementById("PregFallasFte").style.display="block";
    ocultarFte();
    ocultarCorr();
    ocultarDifFte();
    ocultar80plusFte();
    ocultarConectFte();
}

// funcion de  Placa madre ocultar y mostar
const PM ={
    tiposPMMOstrar: function (){
        document.getElementById("PregTiposPM").style.display="block";
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.conectPMOcultar();
        this.fallasPMOcultar();
    },
    partesPMMOstrar: function (){
        document.getElementById("PregPartesPM").style.display="block";
        this.tiposPMOcultar();
        this.diferPMOcultar();
        this.conectPMOcultar();
        this.fallasPMOcultar();
    },
    diferPMMOstrar: function (){
        document.getElementById("PregDifPM").style.display="block";
        this.partesPMOcultar();
        this.tiposPMOcultar();
        this.conectPMOcultar();
        this.fallasPMOcultar();
    },
    conectPMMOstrar: function (){
        document.getElementById("PregConectPM").style.display="block";
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.tiposPMOcultar();
        this.fallasPMOcultar();
    },
    fallasPMMOstrar: function (){
        document.getElementById("PregFallasPM").style.display="block";
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.conectPMOcultar();
        this.tiposPMOcultar();
    },

    tiposPMOcultar: function (){
        document.getElementById("PregTiposPM").style.display="none";
    },
    partesPMOcultar: function (){
        document.getElementById("PregPartesPM").style.display="none";
    },
    diferPMOcultar: function (){
        document.getElementById("PregDifPM").style.display="none";
    },
    conectPMOcultar: function (){
        document.getElementById("PregConectPM").style.display="none";
    },
    fallasPMOcultar: function (){
        document.getElementById("PregFallasPM").style.display="none";
    }

}

// funcion de  Memoria ram ocultar y mostar
const Mem ={
    tiposMEMMOstrar: function (){
        document.getElementById("PregTiposMem").style.display="block";
        this.partesMEMOcultar();
        this.diferMEMOcultar();
        this.fallasMEMOcultar();
    },
    partesMEMMOstrar: function (){
        document.getElementById("PregPartesMem").style.display="block";
        this.tiposMEMOcultar();
        this.diferMEMOcultar();
        this.fallasMEMOcultar();
    },
    diferMEMMOstrar: function (){
        document.getElementById("PregDifMem").style.display="block";
        this.partesMEMOcultar();
        this.tiposMEMOcultar();
        this.fallasMEMOcultar();
    },
    fallasMEMMOstrar: function (){
        document.getElementById("PregFallasMem").style.display="block";
        this.partesMEMOcultar();
        this.diferMEMOcultar();
        this.tiposMEMOcultar();
    },

    tiposMEMOcultar: function (){
        document.getElementById("PregTiposMem").style.display="none";
    },
    partesMEMOcultar: function (){
        document.getElementById("PregPartesMem").style.display="none";
    },
    diferMEMOcultar: function (){
        document.getElementById("PregDifMem").style.display="none";
    },
    
    fallasMEMOcultar: function (){
        document.getElementById("PregFallasMem").style.display="none";
    }

}

// funcion de  Tarj de video ocultar y mostar
const TdeV ={
    tiposTdeVMOstrar: function (){
        document.getElementById("PregTiposTVid").style.display="block";
        this.partesTdeVOcultar();
        this.diferTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    partesTdeVMOstrar: function (){
        document.getElementById("PregPartesTVid").style.display="block";
        this.tiposTdeVOcultar();
        this.diferTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    diferTdeVMOstrar: function (){
        document.getElementById("PregDifTVid").style.display="block";
        this.partesTdeVOcultar();
        this.tiposTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    fallasTdeVMOstrar: function (){
        document.getElementById("PregFallasTVid").style.display="block";
        this.partesTdeVOcultar();
        this.diferTdeVOcultar();
        this.tiposTdeVOcultar();
    },

    tiposTdeVOcultar: function (){
        document.getElementById("PregTiposTVid").style.display="none";
    },
    partesTdeVOcultar: function (){
        document.getElementById("PregPartesTVid").style.display="none";
    },
    diferTdeVOcultar: function (){
        document.getElementById("PregDifTVid").style.display="none";
    },
    fallasTdeVOcultar: function (){
        document.getElementById("PregFallasTVid").style.display="none";
    }

}

// funcion de  Tarj de video ocultar y mostar
const TdeS ={
    tiposTdeSMOstrar: function (){
        document.getElementById("PregTiposTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.diferTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    partesTdeSMOstrar: function (){
        document.getElementById("PregPartesTdeS").style.display="block";
        this.tiposTdeSOcultar();
        this.diferTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    diferTdeSMOstrar: function (){
        document.getElementById("PregDifTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.tiposTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    fallasTdeSMOstrar: function (){
        document.getElementById("PregFallasTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.diferTdeSOcultar();
        this.tiposTdeSOcultar();
    },

    tiposTdeSOcultar: function (){
        document.getElementById("PregTiposTdeS").style.display="none";
    },
    partesTdeSOcultar: function (){
        document.getElementById("PregPartesTdeS").style.display="none";
    },
    diferTdeSOcultar: function (){
        document.getElementById("PregDifTdeS").style.display="none";
    },
    
    fallasTdeSOcultar: function (){
        document.getElementById("PregFallasTdeS").style.display="none";
    }

}

// funcion de  Procesador ocultar y mostar

const Proc ={
    tiposProcMOstrar: function (){
        document.getElementById("PregTiposPorc").style.display="block";
        this.partesProcOcultar();
        this.diferProcOcultar();
        this.fallasProcOcultar();
    },
    partesProcMOstrar: function (){
        document.getElementById("PregPartesProc").style.display="block";
        this.tiposProcOcultar();
        this.diferProcOcultar();
        this.fallasProcOcultar();
    },
    diferProcMOstrar: function (){
        document.getElementById("PregDifProc").style.display="block";
        this.partesProcOcultar();
        this.tiposProcOcultar();
        this.fallasProcOcultar();
    },
    fallasProcMOstrar: function (){
        document.getElementById("PregFallasProc").style.display="block";
        this.partesProcOcultar();
        this.diferProcOcultar();
        this.tiposProcOcultar();
    },

    tiposProcOcultar: function (){
        document.getElementById("PregTiposPorc").style.display="none";
    },
    partesProcOcultar: function (){
        document.getElementById("PregPartesProc").style.display="none";
    },
    diferProcOcultar: function (){
        document.getElementById("PregDifProc").style.display="none";
    },
    
    fallasProcOcultar: function (){
        document.getElementById("PregFallasProc").style.display="none";
    }

}


// scrool up
document.getElementById("ir-arriba").addEventListener("click",scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll >0){
        window.scrollTo(0,0);
    }
}




// funcion de  disco ocultar y mostar

const Disc ={
    tiposDiscMOstrar: function (){
        document.getElementById("PregTiposDisc").style.display="block";
        this.partesDiscOcultar();
        this.diferDiscOcultar();
        this.fallasDiscOcultar();
    },
    partesDiscMOstrar: function (){
        document.getElementById("PregPartesDisc").style.display="block";
        this.tiposDiscOcultar();
        this.diferDiscOcultar();
        this.fallasDiscOcultar();
    },
    diferDiscMOstrar: function (){
        document.getElementById("PregDifDisc").style.display="block";
        this.partesDiscOcultar();
        this.tiposDiscOcultar();
        this.fallasDiscOcultar();
    },
    fallasDiscMOstrar: function (){
        document.getElementById("PregFallasDisc").style.display="block";
        this.partesDiscOcultar();
        this.diferDiscOcultar();
        this.tiposDiscOcultar();
    },

    tiposDiscOcultar: function (){
        document.getElementById("PregTiposDisc").style.display="none";
    },
    partesDiscOcultar: function (){
        document.getElementById("PregPartesDisc").style.display="none";
    },
    diferDiscOcultar: function (){
        document.getElementById("PregDifDisc").style.display="none";
    },
    
    fallasDiscOcultar: function (){
        document.getElementById("PregFallasDisc").style.display="none";
    }

}


function Mostrarma(){
    window.scroll({
        top: 5500,
        left: 0,
        behavior: 'smooth'
      });
}