var vectordenso=function(vector){
var valor;
var indice=0;
do{
	valor=prompt('ingrese un valor entero(0 para finalizar)','');
	valor=parseInt(valor);
	if(valor!=0){
		vector[indice]=valor;
		indice++;
	}
}while(valor!=0);

};

var sumavector=function(vector){
	var f;
	var suma=0;
	for(f=0;f<vector.length;f++){
		suma=suma+vector[f];
	} 
	return suma;
};

var mostrar=function(vector){
	var f;
	for (f=0;f<vector.length;f++){
		document.write(vector[f]+'<br>');
	}
}
var valoresAleatorios=function(vector){
	var f;
	for(f=0;f<vector.length;f++){
		vector[f]=parseInt(Math.random()*500)+1;
	}
}
var vectores=function(vector){
	var f;
	var vector2=[];
	var vector3=[];
	indice2=0;
	indice3=0;
	for(f=0;f<vector.length;f++){
		if(vector[f]>=250){
			vector3[indice3]=vector[f];
			indice3++;
		}
		else{ vector2[indice2]=vector[f];
				indice2++;
		}
	}
	document.write('El segundo vector es:<br>');
	mostrar(vector2);
	document.write('El tercer vector es:<br>');
	mostrar(vector3);
}