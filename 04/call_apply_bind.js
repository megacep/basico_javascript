console.log("******** call_apply_bind.js ***********")

// todas la funciones tienen en su prototype los siguiente metodos
// call
// apply
// bind

var carro = {
	color:"Blanco",
	marca:"Mazda",
	imprimir: function(){
		var salida = this.marca + " - " + this.color;
		return salida;
	}
}

var carro2 = {
	color:"Rojo",
	marca: "Toyota"
}


console.log( carro.imprimir());

var logCarro = function(arg1, arg2){
	console.log("Carro", this.imprimir());
	console.log("Argumentos", arg1, arg2);
	console.log("==================");
}

// con el bind le digo que el this de logCarro es carro
var logModeloCarro = logCarro.bind( carro ) ;

logModeloCarro("abc","xyz");
/********************************************/

// apunta a carro
logModeloCarro.call( carro, "123","456" );

 // apply espear dos parametro la refencia al objeto, y un array  de parametros
logModeloCarro.apply( carro, ["asd","qew"] );




/********************************************************/
/******** funciones prestadas **************************/

// en imprimir va a apuntar a carro2(this)
console.log( carro.imprimir.call( carro2 ) );