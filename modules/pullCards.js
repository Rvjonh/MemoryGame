
/* 
    here you will find the functions to control de game board and creations of cards ...
*/
import * as PairNumbers from './pairNumbers.js';
import getCardItem from './emojis.js';
import * as CardSelection from './cardTypeSelection.js';
import * as SoundManager from './soundManager.js';
import * as Tries from './tries.js';
import * as Score from './score.js';



let board = document.getElementById("game");
let cards = [];

let choicesCard = []
let hideCardList = []

export function createPullCard(){
    clearBoard();

    const lengthCards = parseInt(PairNumbers.getPairNumber());

    let indexId = 0;
    for(let i = 0 ; i<lengthCards ; i++){
        cards.push({"card":createCard(i, indexId), value:i, id:indexId, state:false})
        cards.push({"card":createCard(i, indexId+1), value:i, id:indexId+1, state:false})
        indexId +=2;
    }

    getRandomArray(cards);

    for(let i = 0 ; i<cards.length ; i++){
        addCardToBoard(cards[i].card)
    }
}

function clearBoard(){
    board.textContent = "";
    cards = []
}

function getRandomArray(arr){
    for(let i=arr.length-1 ; i>0 ; i--){
        let j = Math.floor( Math.random() * (i+1) );
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

function createCard(itemIndex, idIndex){
    let div = document.createElement("div");
    const cardIndex = idIndex;
    div.addEventListener("click", ()=>handleShowingCard(cardIndex));
    div.className = 'flip-card';

    let div2 = document.createElement("div");
    div2.className = 'flip-card-inner';

    let div3 = document.createElement("div");
    div3.className = 'flip-card-front';

    let content = document.createElement("div");
    content.className = 'flip-card-back';
    content.textContent = getCardItem(CardSelection.getCardType(), itemIndex);

    div2.appendChild(div3);
    div2.appendChild(content);

    div.appendChild(div2);
    return div;
}

function handleShowingCard(index){

    let card = cards.filter(item=>item.id===index)[0];
    card.card.classList.add("show");

    if(choicesCard.length < 2 && !card.state){
        if(choicesCard.find(item=>item.id === index)){
            shakeCard(card);
        }else{
            choicesCard.push(card);
            if(choicesCard.length === 1){
                SoundManager.playFlip();
            }
        }
    }
    
    if(choicesCard.length === 2){
        Tries.addTry()

        let cardOne = cards.filter(item=>item.id===choicesCard[0].id)[0];;
        let cardTwo = cards.filter(item=>item.id===choicesCard[1].id)[0];;

        if(choicesCard[0].value === choicesCard[1].value){
            Score.addPoint();
            SoundManager.playExito();

            cardOne.card.classList.remove("show");
            cardTwo.card.classList.remove("show");
            
            cardOne.card.classList.add("showed");
            cardTwo.card.classList.add("showed");

            cardOne.state = true;
            cardTwo.state = true;

            choicesCard = [];

        }else{
            SoundManager.playFail();
            setTimeout(()=>{
                shakeCard(cardOne);
                shakeCard(cardTwo);
            },250)

            hideCard(cardOne);
            hideCard(cardTwo);
            choicesCard = [];
        }
    }
}

function addCardToBoard(card){
    board.appendChild(card)
}

function hideCard(card){

    hideCardList.push(card);

    let hiddenLoop = setTimeout(()=>{
        hideCardList[0].card.classList.remove("show");
        hideCardList.shift()
        if(hiddenLoop.length>0){
            hiddenLoop()
        }else{
            clearTimeout(hiddenLoop)
        }
    },1000)
}

function shakeCard(card){
    card.card.classList.add("shake-card")
    setTimeout(() => {
        card.card.classList.remove("shake-card")
    }, 500);
}