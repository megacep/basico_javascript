console.log("************ enventos ********************* ")


function botonClick(args){
	console.log("evento click");
	console.log(args);
}

function botonDobleClick(args){
	console.log("evento doble click");
	console.log(args);	
}

function evento(arg){
	console.log("me dispare");
	console.log(arg)

	if( arg instanceof MouseEvent){
		console.log("coordenadas donde hizo click");
		console.log(arg.x, arg.y);
	}
	 	

}
/***************************************************/

var objeto = document.getElementById("objDemo");

// el segundo parametro la funcion que se va a ejecutar
objeto.addEventListener("keypress", evento)


var objeto2 = document.getElementById("btnParaClick");
objeto2.addEventListener("click", evento); // isTrusted = true; el usuario hizo la accion

//objeto2.click(); // isTrusted = false; se esta simulando el click, como en este caso