console.log("*******if_switch.js ********");

//


var a = 10;
var b = 20;

var c = 0;

if (a > b)
	c = a;
else
	c = b;

console.log(c);


c = (a > b) ? a : b;

console.log(c);

// cosa de mandigna

c = (a > b) ?  function() {
					 console.log("A es mayor a B")
					 return a;
 			   }()  // () ejecuto la funcion
 			   : function(){
 			   		console.log("B es mayor que A");
 			   		return b;
 			   }();

console.log(c);


var d = 25;
var e = undefined;

var f = d || e;

console.log(f); // 25

f = e || d;

console.log(f); //25

function getNombre(nombre){
	var nomb = nombre || "<sin nombre>";
	console.log(nomb);
}

getNombre();




/***********************************/

var mes = 2;

switch( mes ){
	case 1:
		console.log("Enero");
		break;
	case 2:
		console.log("Febrero");
		break;
	case 3: 
		console.log("Marzo");
		break;
	default:
		console.log("cualquier otro mes");

}

var mesLoco = 40;

switch (mesLoco){

	// en los case se pueden meter funciones y cosas locas
	case ( 10 > 5 )? 40:1 :
		console.log("Enero");
		break;
	case 2:
		console.log("Febrero");
		break;
	case 3: 
		console.log("Marzo");
		break;
	default:
		console.log("cualquier otro mes");

}