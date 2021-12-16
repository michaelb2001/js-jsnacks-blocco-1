/*JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.*/


let num = parseInt(prompt("inserire un numero"));
for(i=0; i< num; i++){
    let myArray = [];
    for(j = 0 ; j<10;j++){
        myArray.push(Math.floor(Math.random()*9)+1);
    }
    elementoLi = document.createElement("li");
    elementoLi.innerHTML = myArray;
    document.getElementById("lista").appendChild(elementoLi);
};