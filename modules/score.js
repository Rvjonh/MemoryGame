/* 
    here are the function to control all related to the game's score
*/
import * as Tries from './tries.js';
import * as FinalPanel from './finalPanel.js';
import * as Timer from './timer.js';

let score = document.getElementById("score");
let pointSignal = document.getElementById("point-signal");
let goal = document.getElementById("goal");


let actualPoints = 0;

export function setInitialScore(initialScore = 0, lastGoal = 0){
    if(goal < initialScore){
        throw Error("Must be a goal superior to reach it")
    }else{
        actualPoints = lastGoal;
        goal.textContent = lastGoal;

        score.textContent = `${initialScore}`;
    }
}

export function addPoint(){
    score.textContent = parseInt(score.textContent) + 1;

    pointSignal.classList.add("point-added");
    setTimeout(() => {
        pointSignal.classList.remove("point-added")
    }, 500);

    if(GameHasFinish()){
        const numLastTries = Tries.getTries();
        const successRate = getSuccessRate();
        FinalPanel.showFinalPanel(successRate, numLastTries,Timer.getCounterFormater());
        Timer.stopCounter()
    }
}
function GameHasFinish(){
    return parseInt(score.textContent) === parseInt(goal.textContent);
}
function getSuccessRate(){
    return  parseInt(parseInt(goal.textContent)/Tries.getTries()*100)
}