// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let usuarioIngresado = null;
let indexListaAmigo = null;
const regex = /\W|\d/;

function agregarAmigos() {
    if (document.getElementById("amigo").value == "" || regex.test(document.getElementById("amigo").value)) {
        alert(`${document.getElementById("amigo").value == "" ? "Por favor, inserte un nombre." : "No ingrese caracteres especiales, números o acentos."}`);
        limpiarCampo();
    
    } 
    else {
        
        usuarioIngresado = document.getElementById("amigo").value;
        listaAmigos.push(usuarioIngresado);
        //let tamanioActualLista = listaAmigos[listaAmigos.length - 1];
        //console.log(listaAmigos[listaAmigos.length - 1]);
        let elementoLista = document.createElement("li");
        let llamadoALista = document.getElementById("listaAmigos");
        elementoLista.textContent = usuarioIngresado;
        llamadoALista.appendChild(elementoLista);
        //llamadoALista.innerHTML += `<li>${tamanioActualLista}</li>`; //manera incorrecta de modificar el DOM en HTML ya que pueden inyectar código malicioso en tu página
        limpiarCampo();
        cambiarContenidoResultado("")
        
    }
    return;
}

function limpiarCampo() {
    document.getElementById("amigo").value = "";
    return;
}

function sortearAmigo() {
    let amigoSorteado = parseInt(Math.random()*listaAmigos.length);
    indexListaAmigo = listaAmigos[amigoSorteado];
    MostrarAmigoSorteado();
    return;
}

function cambiarContenidoResultado(valor) {
    let contenidoResultado = document.getElementById("resultado");
    contenidoResultado.textContent = valor;
    return;
}

function MostrarAmigoSorteado() {
    if (listaAmigos.length == 0){
        cambiarContenidoResultado("Ingrese un amigo primero")
        } else {
            while (document.querySelector("#listaAmigos").childElementCount > 0 ){
            let removerLista = document.querySelector("#listaAmigos > li");
            removerLista.remove();
            }
            listaAmigos = [];
            limpiarCampo();
            cambiarContenidoResultado(`Su amigo secreto es ${indexListaAmigo}`)
        }
    return;
}