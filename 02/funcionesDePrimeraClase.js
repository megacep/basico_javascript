console.log("********** funciones de primera clase **************");

// las funciones son objetos
function a(){
	console.log("Funcion a");
}

a();

a.nombre = "Maria";
a.direccion = {
	pais: "Costa Rica",
	ciudad: "San Jose",
	edificio: {
		piso: "8vo"
	}
}

console.log(a.nombre);

a