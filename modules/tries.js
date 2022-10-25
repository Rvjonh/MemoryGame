/* 
    here are the functions to controls the counter of tries in the last game
*/

let tries = document.getElementById("tries");


export function addTry(){
    tries.textContent = parseInt(tries.textContent)+1
}

export function setTries(numTries = "0"){
    tries.textContent = `${numTries}`;
}

export function getTries(){
    return parseInt(tries.textContent);
}