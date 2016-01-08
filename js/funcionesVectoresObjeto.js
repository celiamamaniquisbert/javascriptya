var Hipervinculo=function(direccion,titulo){
	this.direccion=direccion;
	this.titulo=titulo;
	this.retornar=retornar;
};
var retornar=function(){
	var cadena;
	cadena='<a href=' +this.direccion+ '>' +this.titulo+'</a>';
	return cadena;
};
//PROBLEMA
var Persona=function(nombre,edad){
	this.nombre=nombre;
	this.edad=edad;
	this.imprimir=imprimir;
	
};
var imprimir=function(){
	document.write(this.nombre+' con edad de  '+this.edad+'<br>');
};

var cliente1={
	nombre:'juan',
	deposito: 10,
	imprimir1:function(){
		document.write(this.nombre+'<br>');
		document.write(this.deposito+'<br>');
	},
	depositar:function(monto){
		this.deposito=this.deposito+monto;
	},
	extraer:function(monto){
		this.deposito=this.deposito-monto;
	}

	};

//PROBEMA DE CREACION DE OBJETOS LATERALES
var participante={
	nombre:'ricardo',
	puntos: 0,
	imprimir2:function(){
		document.write(this.nombre+'<br>');
		document.write(this.puntos+'<br>');
	},
	aumentarpuntos:function(puntos){
		this.puntos=this.puntos+puntos;
	},
	verificarsigano:function(){
		if(this.puntos>=1000){
			document.write('ES EL GANADOR');
		}
		else{
			document.write(' NO GANO');
		}
	}


}

