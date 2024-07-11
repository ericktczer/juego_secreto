let numeroSecreto = 0;
let contador = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto === numeroDeUsuario);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`Acertastes el número en ${contador} ${(contador === 1) ? 'vez' : 'veces'}`); //Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
         // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroSorteado)) {
            return generarNumeroSecreto(); //recursividad de funciones
        } else {
            listaNumerosSorteados.push(numeroSorteado)
            return numeroSorteado
        }
    }
   
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();