import * as FinalPanel from './modules/finalPanel.js';
import * as LinearGradientePanel from './modules/linearGradient.js';
import * as Timer from './modules/timer.js';
import * as CardSelection from './modules/cardTypeSelection.js';
import * as SoundManager from './modules/soundManager.js';
import * as ConfigMenu from './modules/configMenu.js';
import * as PairNumbers from './modules/pairNumbers.js';
import * as Score from './modules/score.js';
import * as Tries from './modules/tries.js';
import * as PullCards from './modules/pullCards.js';

let btnRePlay = document.getElementById("btn-replay");
let btnPlay = document.getElementById("btn-play");


/************************************************/
window.addEventListener('DOMContentLoaded', ()=>{main();})
/************************************************/

function main(){
    /* 
        iniciate all the components from the modules ...
    */
    initComponents();
    FinalPanel.initComponents(playGame);
    LinearGradientePanel.initComponents();
    Timer.initComponents();
    CardSelection.initComponents();
    SoundManager.initComponents();
    ConfigMenu.initComponents();
    PairNumbers.initComponents();

    /* Initial state of the app */
    PairNumbers.choiceNumberOfPair(6);
    /* Must be the same of number of pairs */
}

function initComponents(){
    btnRePlay.addEventListener("click", ()=>{
        playGame()
    })

    btnPlay.addEventListener("click", ()=>{
        playGame()
    })
}


function playGame(){
    /* 
        play a game memory, reset everything from the last game ...
    */
    FinalPanel.hideFinalPanel();
    FinalPanel.showFinalControls(false);
    ConfigMenu.handleShowConfigMenu(false)

    
    Score.setInitialScore(0, PairNumbers.getPairNumber());
    Tries.setTries(0);
    PullCards.createPullCard()

    LinearGradientePanel.setCardsColor();
    Timer.startCounter();
    showBoardGame();

    FinalPanel.hideFirstPresentation();
}
function showBoardGame(){
    game.classList.add("active")
}
