//Suma elementos en array
function sumaArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
} 
const array = [1,2,3,4,5];
const suma = sumaArray(array);

console.log("Suma elementos en array = ",suma);

//Promedio elementos en array
function promedioArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma / array.length;
}
const promedio = promedioArray(array);
console.log("Promedio elementos en array = ",promedio);

//Array de string a mayúsculas
function mayusculasArray(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}
const arrayMayus = ["a","mayuscula"];
const arrayMayusculas = mayusculasArray(arrayMayus);
console.log("Array de string a mayúsculas = ",arrayMayusculas);

//Array devuelve solo pares
function paresArray(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            array.splice(i,1);
        }
    }
}
const arrayPares = [1,2,3,4,5,6];
paresArray(arrayPares);
console.log("Pares del Array = ",arrayPares);