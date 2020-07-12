const number = parseInt("Ingrese el numero que desea sumar:");
let i = 1;
let plus = 0;
while (i <= number){
    plus += i;
    console.log(i)
    i++;
}console.log(`El resultado final de la suma es : ${plus}`);