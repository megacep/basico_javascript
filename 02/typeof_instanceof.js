console.log("************* typeof  instanceof***********************");

function identificar( param ){

	//console.log(typeof(param));

	// if(typeof(param) == "function"){
	// 	param();

	// }
	// else
	// 	console.log(param);

	console.log( typeof param);
	console.log( param instanceof Persona)
};

identificar(1);
identificar("1");
identificar({});


function Persona(){
	this.nombre = "pepe";
	this.edad = 30;
};


var juan = new Persona();

identificar(juan);

identificar(function(){ console.log("soy anonima")});

var pepe = new Persona();

identificar(pepe);