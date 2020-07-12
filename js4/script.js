let text = prompt("Ingrese un texto").toLowerCase();
let character = prompt("Ingrese el caracter que desea buscar en el texto:").toLowerCase();
let array = [];
for(let i = 0; i < text.length; i ++){
    if(text[i] == character){
        array.push(i);
    }
}
console.log(`El character: ${character} se repite: ${array.length} veces`);