console.log("********** loops***********");

var i = 1

console.log("break")
while( i <= 10 ){	
	i++;

	if ( i == 5 )
		break;

	console.log(i);
}

console.log("continue");
i = 1;
while( i <= 10 ){	
	i++;

	if ( i == 5 )
		continue; // no evalua lo de abajo

	console.log(i);
}
console.log("do while");

var i = 0;

do{
	i++
	console.log(i)

}while(i <=10);


console.log("for");
for(var i = 0 ; i <10 ; i +=2){
	console.log(i);
}

console.log("********** for in (como el foreach)*****************");

var Persona = function(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido,
	this.edad = edad;
};

Persona.prototype.imprimir = function(){
	console.log(this);
	console.log(this.nombre + " " + this.apellido + " " + "(" + this.edad +")");
	return;
};

// jugando con json
var pablo = new Persona("pepe","pompim",35);
var pjoson = JSON.stringify(pablo);
console.log("json", JSON.stringify(pablo));

console.log("objeto js",  JSON.parse(pjoson));
var obj = JSON.parse(pjoson);
var p2 = new Persona(obj.nombre, obj.apellido, obj.edad);
console.log(p2);
p2.imprimir();

console.log("*** navegando por propiedades REFLECTION***");

for( prop in pablo ){

	// es true si la funcion o propiedad no esta definida en una prototype
	console.log(pablo.hasOwnProperty(prop));

	if (!pablo.hasOwnProperty(prop))
		console.log( "(Esta definda en un prototype )" + prop + " " + pablo[prop]);
	else
		console.log( "(NO esta definida en un prototype )" + prop + " " + pablo[prop]);
}

console.log("**** imprimiendo solo lo que se define en la 'clase', no esta en un prototype ")

for( prop in pablo ){
	
	if (!pablo.hasOwnProperty(prop))
		continue;

	console.log(  prop + " " + pablo[prop]);
}

console.log("*********** forEach arrglos**************");

[1,2,3,4,5,true, "pepe"].forEach(function(val) {

	console.log(val);

});