/* 
    here are the functions to controls the number of pair of cards that will be shown on the board game
*/

let number = document.getElementById("points-number");
let points = document.getElementById("points")

export function initComponents(){
    points.addEventListener("input",()=>{
        number.textContent = points.value
    })
}

export function choiceNumberOfPair(initialPoints = 3){
    /* sets the numbers of pair of cards initialy */
    if(initialPoints < 2){
        throw Error("Must be greater than 2!")
    }else if(initialPoints > 30){
        throw Error("Must be less than 30!")
    }

    points.value = initialPoints;
    number.textContent = points.value;
}

export function getPairNumber(){
    return number.textContent;
}