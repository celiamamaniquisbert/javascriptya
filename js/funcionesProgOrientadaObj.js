var Cliente=function(){
	this.nombre=nombre;
	this.saldo=saldo;
	this.depositar=depositar;
	this.extraer=extraer;
}


var Cliente=function  (nombre,saldo) {
	this.nombre=nombre;
	this.saldo=saldo;
	this.depositar=depositar;
	this.extraer=extraer;
}

var depositar=function  (dinero) {
	this.saldo=this.saldo+dinero
}
var extraer=function  (dinero) {
	this.saldo=this.saldo-dinero;
}
//problema 1.
var Suma=function(valor1,valor2){
	this.valor1=valor1;
	this.valor2=valor2;
	this.cargarvalor1=cargarvalor1;
	this.cargarvalor2=cargarvalor2;
	this.resultado=resultado;
}
var cargarvalor1=function(valor1){
this.valor1=valor1;
}
var cargarvalor2=function(valor2){
this.valor2=valor2;
}

var resultado=function(){
	return this.valor1+this.valor2;

}
//DEFINICION DE VARIAS CLASES
//clase numeroquiela.
var Numeroquiniela=function(nombre){
	this.nombre=nombre;
	this.cargarnumero=cargarnumero;
	this.verificarsigano=verificarsigano;
}
var cargarnumero=function(){
this.numero=prompt("Que numero de quiniela quiere?","");

}
 var verificarsigano=function(num){
  if(this.numero==num)
  	return true;
  else 
  	return false;
 }
 //clase /Bolillero
 var Bolillero=function(){
 	this.numero=-1;
 	this.sortear=sortear;
 }
var sortear=function(){
	this.numero=parseInt(Math.random()*10)+1;
}
//PROBLEMA
var Persona=function(){
	this.cargarnombre=cargarnombre;
	this.cargaredad=cargaredad;
		
}
var cargarnombre=function(){
	this.nombre=prompt("Ingrese el nombre:");
}
var cargaredad=function(){
	this.edad=prompt("Ingrese edad:");
}
var Empresa=function(nombreEmpresa,edadTope){
	this.nombreEmpresa=nombreEmpresa;
	this.edadTope=edadTope;
	this.verificarHabilitacion=verificarHabilitacion;
}
var verificarHabilitacion=function(edad){
	var sw=0
if(this.edadTope==edad){
 	sw=1;
}
	return sw;
}