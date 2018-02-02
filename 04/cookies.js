console.log("************ cookies *****************");

//chrome://settings/siteData?search=cookies

// se guardan cosas que NO SON SENSIBLES


// se cra una entrada de la cookie
document.cookie = "nombre=mocho;";
document.cookie = "apellido=loto;";

// leyendo
var cookies = document.cookie;
//console.log(cookies);


// escape de string
function crearCookie(nombre, valor){

	valor = escape(valor);	// cambia los caracteres conflictivos por carateres del tipo %xx

	//fecha de expiracion de una cookie
	var hoy = new Date();
	hoy.setMonth( hoy.getMonth() + 1);


	 document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() +";"
}

function borrarCookie(nombre){

	var hoy = new Date();
	hoy.setMonth( hoy.getMonth()  - 1);


	 document.cookie = nombre + "=x;" + "expires=" + hoy.toUTCString() +";"

	 console.log(document.cookie);

}


var demo ="123;123*123/";

console.log("escape(demo)= " , escape(demo));
console.log("unescape(demo)= " , unescape(demo));

crearCookie("chromeapesta","quemalfunciona");
crearCookie("correo","quemalfunciona@lmp.com");
crearCookie("direccion","San Jose, Costa rica");

borrarCookie("apellido");

//*********************
// Obteniendo los valores de una cookie

function getCookie(nombre){

	var todasLasCookies = document.cookie;

	var cookieArr = todasLasCookies.split("; ");
	console.log(cookieArr);

	for( var i = 0;  i < todasLasCookies.length ; i++){

		var parArr = cookieArr[i].split("=");
		if( parArr[0] === nombre){
			return  unescape( parArr[1] );	
		}
	}

	// igual siempre devuelve undefined si no se devuelve nada
	return undefined;
}

console.log(getCookie("correo"));



