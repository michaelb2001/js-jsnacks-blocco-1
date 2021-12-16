let myArray = [];
let somma = 0;
let i = 0;
do{
    let num = parseInt(prompt("inserire un numero: "));
    myArray[i] = num;
    somma += myArray[i];
    i++;
    
}while(somma < 50);

document.writeln(somma);