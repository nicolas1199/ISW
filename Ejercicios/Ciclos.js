//Números 1 al 10
console.log("Números del 1 al 10");
for(let i = 1; i <= 10; i++){   
    console.log(i);
}

//Números del 10 al 1
console.log("Números del 10 al 1");
for(let i = 10; i >= 1; i--){
    console.log(i);
}

//Números pares del 1 al 10
console.log("Números pares");
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Números impares del 1 al 10
console.log("Números impares");
for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

//Multiplos de 3 del 1 al 10
console.log("Multiplos de 3");
for(let i = 1; i <= 10; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//Multiplos de 5 del 1 al 10
console.log("Multiplos de 5");
for(let i = 1; i <= 10; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

//Multiplos de 3 y 5 del 1 al 10
console.log("Multiplos de 3 y 5");
for(let i = 1; i <= 10; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

//Multiplos de 3 o 5 del 1 al 10
console.log("Multiplos de 3 o 5");
for(let i = 1; i <= 10; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}