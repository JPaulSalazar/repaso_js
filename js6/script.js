const numero =parseInt(prompt("ingrese un numero para saber si es primo:"));
let i = 2;
let primo = true;
while(i < numero) {
    if(numero % i == 0){
     primo = false;
    }
    i++
}
if(primo == true){
    console.log("el numero es primo");
}else{
    console.log("el numero es compuesto");
}