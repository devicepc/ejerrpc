var respuestaCorrecta = new Array("a1", "b2", "c3", "d4", "f1");
		
		function comprobarRadio(matriz){
		
			var numeroRespuestasOK=0;
			var numeroRespuestasKO=0;
			var solucion = document.getElementById("solucion");
			var tablaResultados ="<table border='1'>";
			
			for(j=0; j< matriz.length; j++){
			var radios = document.getElementsByName(j+1);
				for(i=0; i< radios.length;i++){
					if (radios[i].checked){
					var valor =  radios[i].value;
						if(valor == matriz[j]) {
						tablaResultados+= "<tr><td>Respuesta correcta: </td>"+ "<td>"+ valor + "</td></tr>";
						numeroRespuestasOK++;
						break;
						}else {
						tablaResultados+= "<tr><td>Respuesta incorrecta: </td><td>"+ valor + "</td></tr>";
						numeroRespuestasKO++;
						break;
						}
					}
				}
				
				
			}
			var numeroRespuestasNulas=matriz.length - (numeroRespuestasOK + numeroRespuestasKO);
			tablaResultados+="<tr><td>Resultado: </td><td>Respuestas correctas: "+numeroRespuestasOK+"<br/>Respuestas incorrectas: "+ numeroRespuestasKO+"<br/>Respuestas en blanco: "+ numeroRespuestasNulas+"</td></tr></table>";
			solucion.innerHTML = tablaResultados;
            check();
	}

    function check() {
		const pageWidth  = document.documentElement.scrollWidth;
		console.log(pageWidth);
		if(pageWidth < 964) {
			document.getElementById("button-containerradio").style.height = "900px";
		}
		else {
			document.getElementById("button-containerradio").style.height = "730px";
		}
        
        
    }