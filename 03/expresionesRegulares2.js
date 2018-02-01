console.log("******** expresiones regulares 2 ***************");

var tex = "Aeorupuerto";
var tex2 = "La respuesta de la suma es: 45 + 60 = 105"

console.log(tex);

//
console.log( tex.match(/[aeiou]{2,2}/gi));

console.log( tex.match(/\w{2,2}/gi));


console.log( tex2.match(/\d{1,} | respuesta/g));

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions