console.log("************** PROTOTYPE **********")

function Persona(){
	this.nombre = "Fernando";
	this.apellido = "Herrera";
	this.edad = 30;
	this.pais = "Costa Rica";

	// this.imprimierInfo = function(){
	// 	console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
	// }
}

// Los prototitpos permite expander "clases" en javascript, metodos propiedades;

// prototype se utiliza para hacer mas eficientes los objectos,
// por ejemplo si tengo 1000 objetos de la clase Persona, la funcion
// imprimirInfo se va a repetir mil veces, cuando esto no es neceario
// ya que es un metodo

Persona.prototype.imprimirInfo =  function(){
	console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");

}; // __proto__

var fer = new Persona();
console.log(fer);
console.log(fer.pais);


// SE RECOMIENDO USAR prototype  SOLO PARA "CLASES" PROPIAS


Number.prototype.esPositivo = function(){
	if( this > 0 )
		return true;
	else
		return false;
};

