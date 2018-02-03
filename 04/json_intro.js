console.log("************ json ******************");

var objetoJs = {
	nombre:"Pepe",
	apellido : "Pompim",
	edad: 37,
	imprimir: function(){
		console.log(this.nombre + " " + this.apellido)
	}

};

console.log("Objeto literal", objetoJs);


// transforma solo las propiedades, si tiene funciones a esta no se puede transformar
var jsonString = JSON.stringify(objetoJs);

console.log("Objeto JSON", jsonString);

//pagina json.parser.online.fr

// lo transforam en un objeto javascript
var objetoDesdJson = JSON.parse(jsonString);
console.log("JSON.parse(jsonString) ",objetoDesdJson );

console.log(objetoDesdJson.nombre);
console.log(objetoDesdJson.edad);


