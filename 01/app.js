
var a = 1;
var b = 'christian';

console.log(a);
console.log(b);


console.warn(a);
console.error(a);
console.info(a);

console.log(a + a);

// El triple igual compara tanto valor como objeto
// 	===

// por ejemplo undefined == null va a dar true
// pero   undefined === null va a dar false, ya que son objetos diferentes	



// demostrando que javascript no es asincrono
function imprimir(){
	for(var i = 0 ; i < 8000; i++ ){
		console.log("imprimio");
	}
}

function presionoClick(){
	console.log("preciono el boton");
}


imprimir();