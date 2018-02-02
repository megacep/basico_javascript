console.log("********* manejo de errores ***********")


try{
	// el muy forro no tira una excepcion
	var a = 100/0 ;
	var b = 100;

	if ( b === 100)
		throw 'que estafa';
	else
		throw "mocoloco";

	console.log("El valor de a : " , a) ;
}
catch(e){
	if ( e === "que estafa")
		console.log("error tipo 1");

	if (e === "mocoloco")
		console.log("Eror tipo 2");
	
}
finally{
	console.log("el finally siempre se ejecuta");
}

/*******************************************************/

try{

	throw new Error("Error tipo 1");
}
catch( e ){
	console.log(e + " " + e.message);
}
finally{
	console.log("finally");
}

/****************************************************/

try{
	throw {
		nombreError:"error objecto",
		accion: "pepe",
		codError: 1
	}

}
catch( e ){
	console.log(e);
	console.log(e.nombreError);
	console.log(e.accion);
	console.log(e.codError);
}
finally{

}
/*********************************************/
try{

	throw function(){
		console.log("funcion en throw")	
	};
}
catch(e){
	e();
}

/*************************************************/

try{

	throw 1 ; // cualquer numero como codigo
}
catch( e ) {
	registroError(e);
}

/// funciona para mandar un mail, guradar en la base de datos
// hacer una llamda ajax 
function registroError(e){
	var ahora = new Date();
	console.log("se registro un error:", e, " a las: ",ahora );
	console.log(ahora.getTime());
	console.log( new Date (ahora.getTime()));
}