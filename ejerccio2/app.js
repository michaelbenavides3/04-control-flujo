
// tabla de multiplicar utilizando un while para que el usuario dese consultar otra tabla, 
// va hasta el numero 12


import pregunta from "prompt-sync";

console.log("bienvenido a la tabla de multiplicar.\n Ingrese\n 1- si desea conultar una tabla.\n 2-para salir: ");

const prompt = pregunta();


let continuar = true;

while (continuar) {

    let opcion = parseInt(prompt("Que opcoion desea ingresar (1 o 2): "))
    
    switch (opcion) {
        
        
        
        case 1:
            //console.log("Ingrese el numero de la tabla: ");
            let tabla = parseInt(prompt("Ingrese el numero de la tabla: "))

            for (let i = 1 ; i <= 12 ; i ++){
                console.log(`${tabla} x ${i} = ${tabla * i }`);
                
            }    
            break;
        case 2:
            console.log("usted esta saliendo del programaa. ");
            continuar = false;
            break;
    
        default:
            console.log("opcions invalida");
            
            break;
    }
    
}



console.log("ejercicio2");


