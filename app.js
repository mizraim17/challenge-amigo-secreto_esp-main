// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos array de amigos
let arrAmigos = [];

function agregarAmigo() {
	//Capturando nombre desde el input
	let nuevoAmigo = document.getElementById("amigo").value;

	//validamos que el campo no este vacío
	if (nuevoAmigo == "") {
		//si campo vacío, mostramos alerta
		alert("Por favor, inserte un nombre.");
	} else {
		//agregando al arreglo de amigos
		arrAmigos.push(nuevoAmigo);
		//limpiamos el campo una vez que se agrego
		limpiarCampo();

		console.log("arrAmigos total", arrAmigos);

		//actualizamos la lista de amigos

		actualizarLista();
	}
}

function limpiarCampo() {
	//limpiamos campo del nombre del amigo
	document.getElementById("amigo").value = "";
}

function actualizarLista() {
	//obtengo la lista
	listaUl = document.getElementById("listaAmigos");

	//limpio la lista
	listaUl.innerHTML = "";

	console.log("arrAmigos total", arrAmigos);

	console.log("listaUl", listaUl);

	for (i = 0; i < arrAmigos.length; i++) {
		// Creamos el elemento <li>
		let li = document.createElement("li");

		// Agregamos el texto al elemento <li>
		li.innerHTML = arrAmigos[i];

		// Agregamos el elemento <li> al elemento <ul>
		listaUl.appendChild(li);
	}

	console.log("listaUl end", listaUl);
}
