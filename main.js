// //Distanza da percorrere

// let distance = parseInt(prompt("Quanti Km devi percorrere?"));

// //Età del cliente

// let age = parseInt(prompt("Inserisci la tua età"));

// // Dati e sconti legati all'età



// document.getElementById("result").innerHTML=result.toFixed(2);

let name = document.getElementById('name');
let number = document.getElementById('distance');
let age = document.getElementById('age');

    


let bottone = document.getElementById('genera');
document.getElementById("welcome").hidden = true;
bottone.addEventListener('click',
    function() {
        document.querySelector('.awesome').hidden = false;
        // if (age < 18){
        //     result = 0.21 * 0.8 * distance;
        //     } 
            
        //     else if (age > 65){
        //     result = 0.21 * 0.6 * distance;
        //     }
            
        //     else {
        //     result = 0.21 * distance;
        //     }
            
        //     document.getElementById("result").innerHTML=result.toFixed(2);
    }
)

let secondoBottone = document.getElementById('annulla');
secondoBottone.addEventListener('click',
    function() {
       name.value=""
       number.value=""
       age.value=""
       document.getElementById("welcome").hidden = true;
    }
)

//  if (age < 18){
//  result = 0.21 * 0.8 * distance;
// } 

//  else if (age > 65){
//  result = 0.21 * 0.6 * distance;
// }

//  else {
//  result = 0.21 * distance;
// }