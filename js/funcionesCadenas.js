var cargar2=function() {
	var cont=0;
	var y=1;
	var vector=new Array();
	var longitudPalabra,primerLetra,demasLetras;
	while(cont<=y){
		var palabra;
		palabra=prompt('Ingrese las palabras:','');
		palabra=palabra.toUpperCase();
		if(palabra.indexOf('FIN')!=-1)
			y=y-2;
		else{	
			longitudPalabra=palabra.length;
			primerLetra=palabra.charAt(0);
			demasLetras=palabra.substring(1,longitudPalabra);
			demasLetras=demasLetras.toLowerCase();
			palabra=primerLetra+demasLetras;
			vector[cont]=palabra;
		}
		cont=cont+1;
		y=y+1;
	}
	return vector;
}
var mostrarPalabra=function(vector){
	var f;
	for(f=0;f<vector.length;f++){
		document.write(vector[f]+'<br>');
	}
}

var cargar3 = function (){
	var palabras = [], cont=0, palabra, auxPalabra;
	do {
		palabra = prompt('Ingrese las palabras:','');
		auxPalabra = palabra.toLowerCase();
		if (auxPalabra !== "fin"){
			palabras[cont] = palabra;
			cont++;
		}
	}while(auxPalabra!== 'fin');
	return palabras;
}

var busqueda=function(){
	var frase;
	frase=prompt('ingrese la frase','');
	palabra=prompt('ingrese la palabra a buscar','');
	if(frase.indexOf(palabra)!=-1)
	document.write('se encuentra la palabra en la posicion :'+frase.indexOf(palabra));
	else
		document.write('no se encuentra la palabra');
}

var concatenar=function(vector)
{
	var palabra='';
	var f;
	for(f=0;f<vector.length;f++)
	{
		palabra=palabra+vector[f];
	}
return palabra;
}



var palabraPalindrome=function( palabra){

	var f;
	var longitudPalabra=palabra.length;
	var vector2=new Array();

	for(g=0;g<longitudPalabra;g++){
		vector2[g]=palabra.charAt(longitudPalabra-(g+1));
	}
		
	if(palabra.indexOf(concatenar(vector2))!=-1)
		document.write('es una palabra palindrome');
	else
		document.write('no es una palabra palindrome');

}
 
 var verificarMail=function(){
 	var mail;
	mail=prompt('Ingrese el mail','');
	if(mail.indexOf('@')!=-1 )
		document.write('si se encuentra  el caracter @');
	else
		document.write('no se encuentra el caracter @');
 }

var imprimirMitad=function(palabra){
	var mitad,f;
	mitad=palabra.length/2;
	for(f=0;f<mitad;f++)
	{
		document.write(palabra.charAt(f));
	}
}

var ultimoCaracter=function(palabra){
	var logitud=palabra.length;
	var ultCa=palabra.charAt(logitud-1);
	document.write('El ultimo caracter es: '+ultCa);

}

var palabraInversa=function(palabra){
	var f, g;
	var palabraInv='';
 	var vector=new Array();
	for(f=0;f<palabra.length;f++)
	{
		vector[f]=palabra.charAt(palabra.length-(f+1));
	}

	palabraInv=concatenar(vector);
	document.write('La inversa de la palabra es : '+palabraInv);
}

var caracterGuion=function(palabra){
	var f;
	var palConcatenada='';
 	var vector=new Array();
	for(f=0;f<palabra.length;f++)
	{
		if(f!==palabra.length-1)
		palConcatenada=palConcatenada+palabra.charAt(f)+'-';
	else
		palConcatenada=palConcatenada+palabra.charAt(f);
	}

	document.write('La palabra es : '+palConcatenada);
}

var cantidadVocales=function(palabra){
	var f;
	var letra='';
	var cont_a=cont_e=cont_i=cont_o=cont_u=totalVocal=0;

	for(f=0;f<palabra.length;f++){
		letra=palabra.charAt(f);
		switch(letra){
		case 'a': cont_a=1;
				break;
		case 'e':  cont_e=1;
				break;
		case 'i':  cont_i=1;
				break;
		case 'o':  cont_o=1;
				break;	
		case 'u':  cont_u=1;
				break;					 			
		}
		
	}
totalVocal=cont_a+cont_e+cont_i+cont_o+cont_u;
document.write('La cantidad de vocales en esta palabra es: '+totalVocal);
}

var verificaVolcal=function(letra){
	var cont=0;
switch(letra){
		case 'a': cont=cont+1;
				break;
		case 'e':  cont=cont+1;
				break;
		case 'i':  cont=cont+1;
				break;
		case 'o':  cont=cont+1;
				break;	
		case 'u':  cont=cont+1;
				break;					 			
}
return cont;
}

var mostrarCadaPalabra=function(oracion){
	var f;
	for(f=0;f<oracion.length;f++){
		if(oracion.charAt(f)==' '){
			document.write('<br>');
		}
		else
			{
				document.write(oracion.charAt(f));
			}
	}

	
	
}