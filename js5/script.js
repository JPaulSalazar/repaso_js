let num = parseInt(prompt("Digite un numero del 1 al 100 para adivinar:"));
let secret = 15
let i = 1
while(num != secret && num != 0){
    if(num <= 100 && num >= 1){
        if(num >= secret){
            num = parseInt(prompt("el numero es mayor al numero secreto"));
        }else{
            num = parseInt(prompt("el numero es menor al numero secreto"));
        }
    }else{
        num = parseInt(prompt("el numero se sale del rango intente de nuevo:"));
    }
}
if(num == secret && num != 0){
    console.log("usted gano");
}else{
    console.log("el juego se detuvo");
}