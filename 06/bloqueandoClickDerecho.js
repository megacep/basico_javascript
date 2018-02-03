console.log("**** bloqueando click derecho ***********");

document.onmousedown = function(arg){

	if(arg.button === 2){
		alert("click blockeado");
		return;
	}
	console.log(arg);
	console.log("no hay problema");
}


document.onmouseup = function(){

	var texto = window.getSelection().toString();

	console.log( texto );
}