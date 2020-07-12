const year = parseInt(promp("Ingrese el ano que desea saber si es bisiesto:"));
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("El ano ingresado es bisiesto.");
} else {
    console.log("el ano ingresado eligio no es bisiesto");
}