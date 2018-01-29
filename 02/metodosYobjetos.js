console.log("************* metodos y objetos ***************")

var persona = {
	nombre: "maria",
	apellido: "Dubon",
	imprimirNombre: function(){
		console.log(this.nombre + " " + this.apellido );
	},
	direccion: {
		pais: "Costa Rica",
		obtenerPais: function(){
			// aca this es el objeto direccion
			//console.log(this);
			//console.log("la direccion es en " + this.pais);

			// aca this apunta a windows wtf
			//var nuevaDireccion = function(){
			//	console.log(this)
			//}

			//nuevaDireccion();

			var self = this; // this apunta  al objeto  direccion (self no es una palabra recervada, se puede usar cualquier palabar)

			var nuevaDireccion = function(){
				console.log(self);
				console.log("La direccion es en " + self.pais);
			}

			nuevaDireccion();
		}
	}
};

persona.nombre = "Andres";
persona.imprimirNombre();

persona.direccion.obtenerPais();


