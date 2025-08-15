// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos array de amigos
let arrAmigos = [];

function agregarAmigo() {
	//Capturando nombre desde el input
	let nuevoAmigo = document.getElementById("amigo").value;

	console.log("nuevo amigo ", nuevoAmigo);

	//validamos que el campo no este vacío
	if (nuevoAmigo == "") {
		//si campo vacío, mostramos alerta
		alert("Por favor, inserte un nombre.");
	} else {
		//agregando al arreglo de amigos
		arrAmigos.push(nuevoAmigo);
		//limpiamos el campo una vez que se agrego
		limpiarCampo();
	}

	console.log("  arrAmigos ", arrAmigos);
}

function limpiarCampo() {
	//limpiamos campo del nombre del amigo
	document.getElementById("amigo").value = "";
}
