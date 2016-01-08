var incrementar=function(){
	var cont=0;
	cont++;
	alert('El contado ahora  vale:'+cont);
}

var mensaje=function(men){
	switch(men){
		case  1: alert('presiono el boton 1');
				break;
		case  2:  alert('presiono el boton 2');
				break;
		case  3:  alert('presiono el boton 3');
				break;
			 			}
}

var mostrar=function(){
	var nom=document.getElementById('nombre').value;
	var ed=document.getElementById('edad').value;
	alert('ingreso el nombre:'+nom);
	alert('y la edad :'+ed);
}
 var cubo=function(){
 	var num=document.getElementById('numero').value;
 	var n=parseInt(num);
 	var resultado=Math.pow(n,3);
 	alert('El cubo es:  '+resultado);

 }
 var mayor=function(){
 	var a=document.getElementById('num_a').value;
 	var a=parseInt(a);

 	var b=document.getElementById('num_b').value;
 	var b=parseInt(b);
 	if (a>b){
 		alert('el mayor es :'+a);
 	}
 	else{
 		alert('el mayor es : '+b);
 	}
 }


 var concatenar=function(){
 	var nom=document.getElementById('nombre1').value;
 	var ape=document.getElementById('apellido1').value;
 	var nom_completo=nom+' '+ape;
 	document.getElementById('mostrar_a').value=nom_completo;

 }
  var verificar1=function(){
  	var clave=document.getElementById('clave').value;
  	if(clave.length<5){
  		alert('La clave no puede tener menos de 5 caracteres!!!');
  	}
  	else{
  		alert('Largo de la clave correcta');
  	}
  }

  var verificar=function(){
  	var clave=document.getElementById('clave').value;
  	var clave1=document.getElementById('clave1').value;
  	if( clave==clave1){
  		alert('claves iguales');
  	}
  	else{
  		alert('claves distintas ');
  	}
  }

  var cambiarColor=function(){
  	var seleccion=document.getElementById('select1');
  	document.getElementById('text1').value=seleccion.selectedIndex;
  	document.getElementById('text2').value=seleccion.options[seleccion.selectedIndex].text;
  	document.getElementById('text3').value=seleccion.options[seleccion.selectedIndex].value;
  }

  var cambiarPizza=function(){
  	var seleccion=document.getElementById('select1');
  	document.getElementById('text2').value=seleccion.options[seleccion.selectedIndex].text;
  	document.getElementById('text3').value=seleccion.options[seleccion.selectedIndex].value;

  }

  var calcular=function(){
  	var cantidad,importe,precio;
  	var cantidad=document.getElementById('cantidad').value;
  	cantidad=parseInt(cantidad);
  	precio=document.getElementById('text3').value;
  	precio=parseInt(precio);
  	importe=cantidad*precio;
  	document.getElementById('importe').value=importe;

  }
var calcularPres=function(){
	var seleccionPro=document.getElementById('selectPro');
	var seleccionMon=document.getElementById('selectMon');
	var seleccionDis=document.getElementById('selectDis');
	var precioPro=parseInt(seleccionPro.options[seleccionPro.selectedIndex].value);
	var precioMon=parseInt(seleccionMon.options[seleccionMon.selectedIndex].value);
	var precioDis=parseInt(seleccionDis.options[seleccionDis.selectedIndex].value);

	var presu=precioPro+precioMon+precioDis;
	document.getElementById('presupuesto').value=presu;
}

var calcularRespuestas=function(){
  var selectP1,selectP2,selectP3,selectP4,resp1,resp2,resp3,resp4;
  selectP1=document.getElementById('selectP1');
  selectP2=document.getElementById('selectP2');
  selectP3=document.getElementById('selectP3');
  selectP4=document.getElementById('selectP4');
  resp1=parseInt(selectP1.options[selectP1.selectedIndex].value);
  resp2=parseInt(selectP2.options[selectP2.selectedIndex].value);
  resp3=parseInt(selectP3.options[selectP3.selectedIndex].value);
  resp4=parseInt(selectP4.options[selectP4.selectedIndex].value);
var suma_co=resp1+resp2+resp3+resp4;
var suma_inco=4-suma_co;
document.getElementById('respCorrestas').value=suma_co;
document.getElementById('incorrectas').value=4-suma_co; 
}

var contarSeleccionados=function(){
   var cant=0;
   if(document.getElementById('checkbox1').checked){
      cant++;
   }
   if(document.getElementById('checkbox2').checked){
    cant++;
   }
   if(document.getElementById('checkbox3').checked){
    cant++;
   }
   if(document.getElementById('checkbox4').checked){
    cant++;
   }
   alert('conoce  '+cant+'lenguajes');
}

var mostrarDeportes=function(){
  var deportes='';
  if(document.getElementById('dep1').checked){
    deportes=deportes+'  Basquet';

  }
  if(document.getElementById('dep2').checked){
    deportes=deportes+'  Futbol';
  }
  if(document.getElementById('dep3').checked){
    deportes=deportes+'  Tenis';
  }
  alert('Los deportes seleccionados son: '+deportes);
}

var mostrarSeleccionado=function(){
    if (document.getElementById('radio1').checked) {
      alert('no tienes estudios');
    }
    if(document.getElementById('radio2').checked){
      alert('tienes estudios primarios');
    }
    if (document.getElementById('radio3').checked) {
      alert('tienes estudios secundarios');
    }
    if(document.getElementById('radio4').checked){
      alert('tienes estudios universitarios');
    } 
}

var mayorVerificar=function(){
  if(document.getElementById('radioS').checked){
    alert('Puede ingresar al sitio');
  }
  if(document.getElementById('radioN').checked){
    alert('No puede ingresar al sitio');
  }
}

var controlarCaracteres=function () {
  if(document.getElementById('curriculum').value.length>2000){
    alert('curriculum muy largo');

  }
  else{
    alert('Datos correctos');
  }

}

 var mostrarDatos=function(){
   var nom=document.getElementById('nom').value;
   var mail=document.getElementById('mail').value;
   var com=document.getElementById('comentario').value;
   alert('Los datos son : '+'\n'+nom+'\n'+mail+'\n'+com);


 }
