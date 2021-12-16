/*Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

let primoDiv = document.createElement("div");
let secondoDiv = document.createElement("div");

primoDiv.setAttribute("id","primoDiv");
secondoDiv.setAttribute("id","secondoDiv");

document.body.appendChild(primoDiv);
document.body.appendChild(secondoDiv);

primoDiv.style.color="red";
secondoDiv.style.color="green";

let myArray = [];
for(let i = 0 ; i < 10; i++){
    myArray.push(Math.floor(Math.random()*10)+1);
};

for(let i = 0 ; i < myArray.length ; i++){
    if(myArray[i]%2!=0){
        primoDiv.innerHTML += myArray[i];
    }else{
        secondoDiv.innerHTML += myArray[i];
    };
};
