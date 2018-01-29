// tipos primitivos
var num = 10;        // numericos
var str = "texto"    // string
var bol = true;      // bool
var und = undefined; // indefinido
var nul = null;      // null


// tipos objetos
var obj = {
	numero: 10,
	texto: "nuevo texto",
	objHijo:{
		numero2: 25,
		texto2: "nuevo texto2",
		aplica: false		
	}


};

console.log(obj);



// Por VALOR por REFERENCIA

// LAS VARIALBLES PRIMITIVAS SIEMPRE SE PASAR POR VALOR
var a = 10;
var b = a;

console.log('a: ',a);
console.log('b:', b );

a = 20;

console.log('a: ',a);
console.log('b:', b );


// LOS OBJECTOS SE PASAN POR REFERENCIA
var c = {
	nombre: "pepe"
};

// d y c son sinonimos, cada vez que se cambie c tambien se cambia d y viceversa
// se comporta como un puntero

var d = c;

console.log('c: ',c);
console.log('d: ', d);

c.nombre = "juan";

console.log('c: ',c);
console.log('d: ', d);

d.nombre = "pedro";

console.log('c: ',c);
console.log('d: ', d);


