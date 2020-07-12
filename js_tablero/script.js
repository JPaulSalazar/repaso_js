let numeral = "#";
let space = " ";
let i = 0;
let lines = 8;
let character = 4;
let line1 = "";
let line2 = "";
while(i <= lines ){
    while(i < character){
        line1 = line1 + numeral + space
        line2 = line2 + space + numeral
        i++
    }console.log(line1);
    console.log(line2);
    i++
}
