//cajero automatico

import pregunta from 'prompt-sync';

const prompt = pregunta();

let saldo = 1000000;



let continuar = true;


while(continuar){
    let opcion = parseInt(prompt(console.log("bienvenido a su cajero, que desera realizar. \n1-realizar retiro. \n2-consultar saldo. \n3-salir")));
    
    switch(opcion){
        case 1:
            let retirar = parseInt(prompt("cuanto dinero desea retirar: "));
            if(retirar <= saldo){
                saldo -= retirar;
                // let subtotal = saldo - retirar;
                console.log(`retiro de: ${retirar}`);
                console.log(`su saldo es: ${saldo}`);
                console.log(`retiro exitoso`);
                
            }else if(retirar >= saldo){
                console.log(`fondos insuficiente`);
                
            }
            break;
        case 2: 
            console.log(`tu saldo actual es: ${saldo}`);
            break;
        case 3:
            console.log(`saliendo del cajero`);
            continuar = false
            break;
        default:
            console.log(`caracter invalido. intenta nuevamente. `);
            
            
    }



}
