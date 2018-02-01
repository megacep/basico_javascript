console.log("******* expresiones regulares *********** ");

//var reg1 = new RegExp("a") // no se usa

var reg2 = /a/;
var reg3 = /Z/;


var texto = "Hola Mundo, 12345.\nQué tal?";

// si no lo encutran devuelve un null si no lo encuentra
// en caso contrario devuelve un array
console.log(texto.match(reg2));
console.log(texto.match(reg3));


// /^H/ que busque en la primera posicion la H
console.log(texto.match(/^H/));

// /o$/ busca la o al final de la cadena
console.log(texto.match(/o$/));

// /.../ tres caracteres cualquiera
console.log(texto.match(/.../));

// /^.o/ en la primera posocion cualquier caracter y despues una o
console.log(texto.match(/^.o/));

// /[0-9]/  los corchetes son utlizados para rangos
// busca la primera aparicion del caracter que este entre el rango 0 y 9
console.log(texto.match(/[0-9]/));

console.log(texto.match(/[026789]/));

// rangoa de caracteres /[a-z]/
console.log(texto.match(/[a-z]/));

// rangoa de caracteres /[a-z]/
console.log(texto.match(/[a-zA-Z]/));


console.log(texto.match(/^H[a-z]/));

console.log(texto.match(/^H[aeiou]/));


// cualquier letra pero la penultima tiene que estar en el ranco
console.log(texto.match(/[aeiou].$/));
console.log(texto.match(/[ae5].$/));

// busqueda de cualquier separcion del texto /\s/  (espacio tab)
console.log(texto.match(/\s/));

// [a-zA-Z0-9] == \w
console.log(texto.match(/[a-zA-Z0-9]/));
console.log(texto.match(/\w/));

// [0-9] == \d
console.log(texto.match(/[0-9]/));
console.log(texto.match(/\d/));

// i = insesible a mayuscula y minusculas
// g = todas la apariciones
// m = multilinea

console.log(texto.match(/[M]/i));
console.log(texto.match(/[aeiou]/i));
console.log(texto.match(/[aeiou]/g));
console.log(texto.match(/[aeiou]/ig));
console.log(texto);
console.log(texto.match(/[aeiou]/ig));

// | funciona como un o logico
// quiero cualquier vocal o e con asenteo , insensible y todas las apariciones
console.log(texto.match(/[aeiou]|é/ig));

console.log(texto.match(/[aeiou]|[áé]/ig));

var texto2 = "Hollaa mundoo. pepe ooo";
// o+ quiero que aparezca la o una o mas veces
// devuelve o oo ooo
console.log(texto2.match(/o+/g));

// p? aparece p no aparece la p
console.log(texto2.match(/p?/g));

// o* cero o mas veces
// ["", "o", "", "", "", "", "", "", "", "", "", "oo", "", "", "", "", "", "", "", "ooo", ""]
// "Hollaa mundoo. pepe ooo";
console.log(texto2.match(/o*/g));


// /o{2} la o tiene que aparecer dos veces
console.log(texto2.match(/o{2}/g));

// dos todas las haya
console.log(texto2.match(/o{2,}/g));

// tiene que haber 2 o 2 seguidas
console.log(texto2.match(/o{2,2}/g));