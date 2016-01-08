var guionesMedios = function(nombre){
	var i, resultado = "";
	if (typeof nombre === "string") {
		for (i=0 ; i < nombre.length; i += 1) {
			if (i !== nombre.length-1) {
				resultado = resultado + nombre.charAt(i)+"-";
			} else {
				resultado = resultado + nombre.charAt(i);
			}
		}
		return resultado;
	}else{
		return "no es valido";
	}
}