//juego del adivinador

import pregunta from "prompt-sync";
const prompt = pregunta();

console.log("Juego: Adivina el número entre 1 y 20");

// Generamos el número secreto
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Primera pregunta ANTES del while
let intento = parseInt(prompt("Ingresa tu número: "));

// Ciclo que se repite hasta que el usuario acierte
while (intento !== numeroSecreto) {
    let diferencia = Math.abs(numeroSecreto - intento);

    if (diferencia <= 2) {
        console.log(" Estás MUY CERCA, sigue intentando...");
    } else if (diferencia <= 5) {
        console.log(" Estás cerca, pero no tanto...");
    } else {
        console.log(" Estás lejos, prueba otro número...");
    }

    // Nueva pregunta dentro del while
    intento = parseInt(prompt("Ingresa otro número: "));
}

// Cuando sale del while significa que acertó
console.log(` Felicitaciones El número secreto era ${numeroSecreto}`);
