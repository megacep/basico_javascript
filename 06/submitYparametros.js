console.log("********* submit y parametros **********");

function validar(){

	//NOTA EN ANGULAR Y JQUERY ETC ESTO ESTA RESUELTO
	// validacion que se ejecuta por el onsubmit

	var nombre = document.getElementById("txtNombre").value;
	var apellido = document.getElementById("txtApellido").value;

	if( nombre.length < 1){
		console.log("el nombre es obligatorio");
		return false;
	}

	if( apellido.length < 1){
		console.log("el apellido es obligatorio");
		return false;
	}

	return true;
}


// OBTENER LA URL (QUERYSTRING) var adjunto para ver el getParamURL
console.log(window.location.search);


