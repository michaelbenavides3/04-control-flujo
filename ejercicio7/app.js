//programa que ingrese 10 numero y deteminar cuantos pares e impares

import pregunta from 'prompt-sync';

const prompt = pregunta();

// let continuar = true;

console.log("ingresar 10 numeros: ");

for(let i = 1 ; i <=10; i++){

    let numero = parseInt(prompt(`ingresar numero: ${i}: `))

    if(numero %2 === 0){
        console.log(`numero par ${numero}`);
        
    }else{
        console.log(`numero impar ${numero}`);
        
    }


}


