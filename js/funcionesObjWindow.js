var abrir=function(){
	var ventana=open();
	ventana.document.write("Estoy escribiendo en la nueva ventana");
	ventana.document.write("Segunda linea");
}

var abrirParametros=function  () {
	var ventana=open('','','status=yes,widht=400,height=250,menubar=yes');
	ventana.document.write("Esto es lo primero que aparece");
}
var mostrarAlerta=function  () {
	alert("Esta ventana de alerta ya se utilizo en otros problemas");
}
var confirmar=function  () {
	var respuesta=confirm("Presione alguno de los dos btones");
	if(respuesta==true)
		alert("presiono aceptar");
	else
		alert("presiona cancelar");
}	

var cargarCadena=function  () {
	var cad=prompt("cargue una cadena:","");
	alert("Usted ingreso "+cad);
}	
var abrirVentana=function  () {
	var ventana=open('','','status=yes,widht=600,height=300');
	ventana.document.write('Solucion del problema');
}
//propiedad Location de window
var verificarEntrada=function  () {
if(window.confirm('Desea salir del sitio e ingresar al periodico La Nacion?')){
	window.location='http://www.lanacion.com.ar';
}
else{
	window.alert('No hay problemas');
}
}

var crearHipervinculo=function  () {
	var num=Math.random()*3;
	num=parseInt(num);
	if (num==0) {
		window.location='http://www.hotmail.com';
	}
	if(num==1){
		window.location='http://www.gmail.com';
	}
	if (num==2) {
		window.location='http://www.yahoo.com';
	}
}
//Propiedad history de window
var avanzar=function  () {
	window.history.go(1);
}

var retornar=function  () {
	window.history.go(-1);
}
//Propiedad screen de window
 var abrirVentana2=function  () {
 	var ventana=open('','','width='+screen.availWidth+',height='+screen.availHeight/2);
 }

 //Propiedad navigator del objeto dde window
//Una vez que se cargue la página mostrar un alert indicando si el navegador tiene activas las cookies.
 var verificar=function(){
 	if(navigator.cookieEnabled==true){
 		alert('Acceso a cookies activas');
 	}
 	else
 	{
 		alert('No se encuentran activas las cookies en este navegador');
 	}
 }
