console.log("*********** polimorfismo *****************");

function determinaDato( a ){

	if(a === undefined)
		console.log("a es undefined... fijarse que hacer")

	if( typeof a == "number")
		console.log("a es un numero y puedo hacer operaciones con este");

	if( typeof a === "string")
		console.log("es un string")

	if( typeof a === "object"){
		console.log("a es un objeto");

		if ( a instanceof Number)
			console.log("a es un objeto numerico");
	}
}


var b = new Number(3); // es un objeto de tipo numero
var z = 10; // es un tipo primitivo

console.log(b);

determinaDato(b);
determinaDato(z);