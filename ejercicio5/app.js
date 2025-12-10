//simulacion de venta de una tineda

import pregunta from "prompt-sync";

const prompt = pregunta();


let continuar = true;
let total = 0;
let articulos = 0;

while(continuar){

    let opcion = parseInt(prompt("1-ingresar un articulo. \n2revisar el total. \n3-salir del programa"));

    switch(opcion){
        case 1:
            let articulo = parseInt(prompt("ingresar valor articulo: "))
            if(articulo >= 100000){
                let descuento = articulo * 0.10;
                let precioFinal = articulo - descuento;
                console.log(`se aplico el descuento. el valor total es: ${precioFinal}`);
                total += precioFinal;

            }else{
                total += articulos;
            }
            break;
        case 2:
            console.log(`el total es: ${total}`);
            break;
        case 3:
            console.log(`saliendo de la tienda.`);
            continuar = false;
            break
        default:{
            console.log("caracter invalido");
            
        }    

    }
    


}