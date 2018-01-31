console.log("********** STRINGS *****************");

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia

// los string son objetos y no array de caracters
// aunque se puede acceder a su caracters con []

var a = new String("Eduardo");
console.log(a);
console.log(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);

var b = "pepe";

console.log("b.toUpperCase() " + b.toUpperCase());
console.log("b.toLowerCase() " + b.toLowerCase());


// a.indexOf(caracter a buscar o cadena), retorna el indice
// si no la encuentra devuelve -1
var i = a.indexOf("o");
console.log("a.indexOf(o) " + i);

// es como indexOf lo unico que empieza desde atras
i = a.lastIndexOf("r");
console.log("a.lastIndexOf(r) " + i);


// desde indice 6 empieza el substring
//
var nombre = a.substr(2);
console.log("substr " +nombre );

// empieza del indice 2 y toma tres elementos
// Eduardo u
nombre = a.substr(2 , 3);
console.log("substr " + nombre );

nombre = a.substr(0, a.indexOf("a"));
console.log("substr " + nombre );

var fullName = "Christopher Eduardo";

var split = fullName.split(" "); // devuevle un array
console.log("split " + split);


//************************************************/

// escribe en la pagina web
// para hacer este tipo de cosas se usa jquery, angular, etc
document.write( a.italics() );
document.write( a.strike() );

