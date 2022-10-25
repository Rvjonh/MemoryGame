/* Here is controled the type of card, emoji, letters or numbers, just the type */

let inputsChoices = document.querySelectorAll('input[name="card-type"]')
let CardType = "Emojis";

export function initComponents(){
    addInputSelectionEvent();
}

function addInputSelectionEvent(){
    for(let input of inputsChoices){
        input.addEventListener('input',(e)=>{
            CardType = e.target.value;
        })
    }
}

export function getCardType(){
    return CardType;
}