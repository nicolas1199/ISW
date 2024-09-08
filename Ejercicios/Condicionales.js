const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Número mayor
if(numero1 > numero2){
    if(numero1 > numero3){
        console.log("El número mayor es: numero1");
    }
    else{
        console.log("El número mayor es: numero3");
    }
}
else{
    if(numero2 > numero3){
        console.log("El número mayor es: numero2");
    }
    else{
        console.log("El número mayor es: numero3");
    }
}


//Número menor
if(numero1 < numero2){
    if(numero1 < numero3){
        console.log("El número menor es: numero1");
    }
    else{
        console.log("El número menor es: numero3");
    }
}
else{
    if(numero2 < numero3){
        console.log("El número menor es: numero2");
    }
    else{
        console.log("El número menor es: numero3");
    }
}

//numero1 par o impar
if(numero1 % 2 === 0){
    console.log("numero1 es par");
} else{
    console.log("numero1 es impar");
}

//numero2 par o impar
if(numero2 % 2 === 0){
    console.log("numero2 es par");
}
else{
    console.log("numero2 es impar");
}

//numero3 par o impar
if(numero3 % 2 === 0){
    console.log("numero3 es par");
}
else{
    console.log("numero es impar");
}   

//numero1 multiplo de 5
if(numero1 % 5 === 0){
    console.log("numero1 es múltiplo de 5");
} else{
    console.log("numero1 no es múltiplo de 5");
}

//numero2 multiplo de 5
if(numero2 % 5 === 0){
    console.log("numero2 es múltiplo de 5");
} else{
    console.log("numero2 no es múltiplo de 5");
}

//numero3 multiplo de 5
if(numero3 % 5 === 0){
    console.log("numero3 es múltiplo de 5");
} else{
    console.log("numero3 no es múltiplo de 5");
}

