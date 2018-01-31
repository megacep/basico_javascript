console.log("******** objeto Math **************");

//	 TANTO Date, Math, Number, String, Boolean son objetos que
//   estan en el objeto global window

console.log(window.Math)

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 40.556789

console.log( num1);
console.log("redondeo Math.round "+ Math.round(num1) );

console.log( Math.round( num1*100 ) /100 );

//toma el numero entero
console.log("floor "  + Math.floor(num1) );


var rnd = Math.random();
console.log(rnd);


function randomEntre(min, max){
	return Math.floor(  Math.random() * ( max - min  + 1)  +min );
}


console.log(randomEntre(1,6));

console.log("sqrt " + Math.sqrt(4));
console.log("sqrt " + Math.sqrt(10));


console.log(" pow " + Math.pow(2,10) );
