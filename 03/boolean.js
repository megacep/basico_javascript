console.log("*********** bool ***************")

var a = true;
var b = false;


var c = new Boolean(); // valor por defecto false
var d = new Boolean("-1");
var e = new Boolean("0");
var f = new Boolean("false"); ///devuelve true

console.log(c);


var pepe = new Boolean();

console.log(a.valueOf());

// si pepe tiene un valor se va a ejecutar
if ( pepe )  {
	console.log("me imprimir")
}

if ( pepe.valueOf() )  {
	console.log("me imprimir")
}