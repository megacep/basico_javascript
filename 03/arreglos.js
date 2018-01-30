console.log("***** arrays ******************");

var arr1 = []; // esto es equivalente a var arr = new Array()

var arr = [5,4,3,2,1]

console.log(arr);

console.log(arr[0]);

// los arreglos tiene varias funciones prototipos

arr.reverse();
console.log("reverse ", arr);


// map ejecuta la funcion para cada elemento
arr = arr.map(function(elem){
	elem *=elem;
	return elem;
});

console.log("map ", arr);

arr = arr.map(Math.sqrt);
console.log("map ", arr);


// join

arr = arr.join("|"); // si no se indica el tipo de separacion usa coma
console.log("join ", arr);


arr = arr.split("|");
console.log("split ", arr);


arr.push("6");
console.log("push ", arr);

// agrega un elmento al comienzo
arr.unshift("0")
console.log("unshift ", arr);


console.log("toString() " + arr.toString());

var elimine = arr.pop()
console.log("pop ", arr);
console.log("pop elemento eliminado ", elimine);


//splice(posicion elemento, cantidad de elmento a eliminar )
arr.splice(1,1 );
console.log("splice ", arr);

//splice(posicion elemento, cantidad de elmento a eliminar, elemento a agregar separados por coma )
arr.splice(1,1,"10" );
console.log("splice ", arr);

arr.splice(1,1,"11","20" );
console.log("splice ", arr);


// toma los elementos indicados por a[i]  y a[j-1] 
// slice(i,j)
arr = arr.slice(1,3)
console.log("slice ", arr);
