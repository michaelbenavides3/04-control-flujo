//programa para determinar si un numero dentro del 1 al 50 es primo

console.log("programa para determinar si un numero es primo: ");

let  numero = 2;

for (numero = 2; numero <=50 ; numero ++){
    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor ++){
        if (numero % 2 === 0) {
            esPrimo = false;
            break;
            
        }



    }
    if(esPrimo){
        console.log(`numero primo es: ${numero}`);
        
    }


}

