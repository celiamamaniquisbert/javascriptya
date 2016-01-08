var vaciar=function(control){
control.value='';
}

var verificarEntrada=function  (control) {
	if (control.value=='') {
		alert('Debe ingresar datos');
	}
}

var verificarContrasena=function  (control) {
	
	if(control.value.length< 7|| control.value.length>20){
		alert('Cantidad de caracteres no valido en la clave (deben ser entre 7-20 caracteres)');

}
}

var pintar=function  (col) {
 document.bgColor=col;
}

var pintar=function  (objeto,col) {
	objeto.bgColor=col;
}

var activarPrimerControl=function  () {
	document.getElementById('nombre1').focus();
}

var mostrarMensaje=function(){
	alert('Pagina cargada');
	
}