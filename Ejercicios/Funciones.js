//De string a string con mayúsculas
function mayusculas(texto){
    return texto.toUpperCase();
}
const mayus ="a mayusculas";
console.log(mayusculas(mayus));

//De string a string con minusculas
function minusculas(texto){
    return texto.toLowerCase();
}
const min ="A MINUSCULAS"
console.log(minusculas(min));

//Resta de dos números
function resta(numero1,numero2){
    return numero1 - numero2;
}
const res = resta(40,15);
console.log("a-b= ",res);

//División de dos números
function division(numero1,numero2){
    return numero1 / numero2;
}
const div = division(30,15);
console.log("a/b= ",div);

//Multiplicación de dos números
function multiplicacion(numero1,numero2){
    return numero1 * numero2;
}
const mult = multiplicacion(10,15);
console.log("a*b= ",mult);

//Longitud de un string
function longitud(texto){
    return texto.length;
}
const long = "Longitud";
console.log("Longitud string=",longitud(long));

