console.log("************ arreglos parte 2 *******************");

var arr = [
	true,
	false,
	{
		nombre:"pepe",
		apellido: "ton"
	},
	true,
	function(){
		console.log("Una funcion dentro de un arreglo");
	},
	function (persona){
		console.log( persona.nombre + " " + persona.apellido);
	},
	[
		"pepe",
		"chirola", 
		"gato", 
		"chechu", 
		[
			"moco",
			"loco",
			3,
			function() {
				console.log(this);
			}
		]
	]

];


console.log(arr);
console.log(arr[0] );
console.log(arr[2].nombre + " " + arr[2].apellido );
arr[4]();
arr[5]( arr[2] );

console.log(arr[6][1]);
 
console.log(arr[6][4][1]);

console.log(arr.length);

// referencia al arreglo ["moco","loco",3]
var arreglo2 = arr[6][4]

arreglo2[2] = "cambiad, referencia"

console.log(arreglo2);
console.log(arr);


arr[6][4][3]();
arreglo2[3]();


