let numeroSecreto = 0;
let intentos = 0;
let numeroSorteado = [];
let numeroMax = 5;

function verificarIntento(){
    numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en  ${intentos} ${(intentos == 1) ? "vez": "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
// limpia el campo de entrada de texto
function limpiarCaja(){
    document.getElementById('valorUsuario').value  = '';
}
//funcion para asignar texto a un elemento html
function asignarTextoElemento(elemento,texto){
    let elemntoHtml = document.querySelector(elemento);
    elemntoHtml.innerHTML = texto;  
  return;  
}
// Genera numero aleatorio
function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax)+ 1;

     if(numeroSorteado.length == numeroMax){
        asignarTextoElemento('p', `ya se sortearon todos los numeros posibles`)

    }else {
            if(numeroSorteado.includes(numeroGenerado)){
                return generaNumeroSecreto();
            
            } else{
                numeroSorteado.push(numeroGenerado);
                return numeroGenerado;
            }
    }   
   
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indica mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();

