console.log("************** uso de new *************");

// esto lo va usar como si fuera una clase
// new lo que hace es reservar un espacio en memoria para Persona
function Persona(){
	this.nombre = "Juan";
	this.apellido = "Mendoza"
	this.edad = 30;

	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido;
	}
};

function Persona2(nombre, apellido){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;

	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido;
	}
};


// aca se lo invoca como una funcione, con lo cual va a dar un
// undefined, ya que todas las funciones devuelven un valor
var juan =  Persona();
console.log(juan);

// aca estoy tratando como si fuera una clase
var pepe = new Persona();

console.log(pepe);
console.log(pepe.nombreCompleto())

var pepe2 = new Persona2("Peoe","Pompim");
console.log(pepe2);
console.log(pepe2.nombreCompleto())