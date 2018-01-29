console.log("************ Ejercicio **************")

// la primera letra se usa en mayuscula para indicar que se va
// a utilizar como una clase
function Jugador(nombre){
	this.nombre = nombre;
	this.pv = 100;      // putnos de vida
	this.sp = 100;

	this.curar = function( jugadorObjetivo ){

		if( this.sp >= 40){
			 this.sp -= 40;
			 jugadorObjetivo.pv += 20;
		}
		else{
			console.info(this.nombre + "no tiene sp");
		}

		this.estado(jugadorObjetivo);
	};

	this.tirarFlechas = function( jugadorObjetivo ){

		if(jugadorObjetivo.pv >= 40){			
			jugadorObjetivo.pv -= 40;
		}
		else{
			jugadorObjetivo.pv = 0;
			console.error(jugadorObjetivo.nombre + " murio");
		}
		this.estado(jugadorObjetivo);
	}

	this.estado = function(jugadorObjetivo)	{

		console.info( this );
		console.info( jugadorObjetivo );
	};

}


var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas")
	
console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
legolas.tirarFlechas(gandalf);

