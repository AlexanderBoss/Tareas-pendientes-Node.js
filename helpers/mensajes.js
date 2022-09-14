
const color = require('colors');
const { resolve } = require('path');

const mostrarMenu= () =>{
    
    return new Promise((resolve,reject)=>{
        console.clear();
        console.log("======================".green);
        console.log(" Seleccione una opcion ".green);
        console.log("======================\n".green);
    
        console.log(`${`1`.green} Crear tarea`);
        console.log(`${`2`.green} Listar tarea`);
        console.log(`${`3`.green} Listar tareas completadas`);
        console.log(`${`4`.green} Listar tareas pendientes`);
        console.log(`${`5`.green} Completar tareas`);
        console.log(`${`6`.green} Borrar tarea`);
        console.log(`${`0`.green} Salir\n`);
    
        const readline = require('readline').createInterface({
            input : process.stdin,
            output: process.stdout
        });

    //informacion del usuario
        readline.question('Selecciona una opcion: ', (opt)=>{
            readline.close();
            resolve(opt)
        })
    })  
}

const pause = () =>{

    return new Promise((resolve,reject) =>{
        const readline = require('readline').createInterface({
            input : process.stdin,
            output: process.stdout
        });

        //informacion del usuario
        readline.question(`\nPresione ${ 'ENTER'.green} para continuar: \n`, (opt)=>{
            readline.close();
        })

    });
    
}


module.exports={
    mostrarMenu,
    pause
}