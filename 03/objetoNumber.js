console.log("************ objeto number ************");

var a = 10;

var b = new Number(10);

// compara si son el mismo objeto y tiene el mismo valor
console.log("a === b ",  a===b);

// compara por valor 
console.log("a == b " , a == b);


console.log("toFixed()",a.toFixed(2));

a = 10.1265678
// toFixed (redondean)
console.log(
			"a = " + a +  "		a.toFixed("+ 2 +")= " + a.toFixed(2) 
		    );

console.log(
			"a = " + a +  "		a.toFixed("+ 3 +")= " + a.toFixed(3) 
		    );

console.log("a.toString() ", a.toString());


console.log(a)
//toPrecision devuelve un string 
// https://www.w3schools.com/jsref/jsref_toprecision.asp
// Return Value:	A String, representing a number formatted to the specified precision
console.log(a.toPrecision(4));


a =10;
a *= 100000000000000000000000000000000000000000000000000000000000000000000000;
a *= 100000000000000000000000000000000000000000000000000000000000000000000000;
a *= 100000000000000000000000000000000000000000000000000000000000000000000000;
a *= 100000000000000000000000000000000000000000000000000000000000000000000000;
console.log(a);


var b = new Number("20");

console.log(b);
console.log("b.valueOf() ", b.valueOf());

