//promedio de notas

//importamos la libreria para preguntar al usuario+

import pregunta from 'prompt-sync';

const prompt = pregunta();

console.log("promedio de notas");

//declaramos una constante que nos quiere decir que numestudiante es 5 o menor para utilziar en el for
const numEstudiante = 5;
//asi lo mismo para la cantidad de notas que revciba
const cantidadNota = 3;


//este ciclo proncipal recorre cada estudiante
for (let estudiante = 1 ; estudiante <= numEstudiante ; estudiante++ ){
    
    //en esta varibale se va gurdar la nota del estudiante
    let sumaNota = 0;
    console.log(`estudiante: ${estudiante}`);

    //dentr de este for anindado se le pedira la nota al estudiante
    //inicializamos la variable nota en 1, que es la primera nora
    //se debe cumplir la condicion quiere decir que nota debe ser menor o igual que 3 que es la conts
    //y cada que vez que nota recorra el ciclo, se le suma una nueva nota1 nota nota3
    for (let nota = 1; nota <= cantidadNota ; nota++){

        let valorNota = (parseFloat(prompt("ingresar su nota: ")));

        sumaNota += valorNota;

    }

    let promedio = sumaNota / cantidadNota;

    if(promedio >= 3){
        console.log(`promedio ${promedio.toFixed(2)} aprobo`);
    }
    else{
        console.log(`promedio ${promedio.toFixed(2)} reprobo`);
        
    }
    

}


