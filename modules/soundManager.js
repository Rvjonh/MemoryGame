/* 
    Here the functions to control if the app can or cannot play sounds 
    and their repective references
*/

const successSound = './sounds/exito.mp3';
const failSound = './sounds/error.mp3';
const FlipSound = './sounds/flip.mp3';

let soundChecker = document.getElementById("sound");
let flagSound = true;

export function initComponents(){
    soundChecker.addEventListener("input",(e)=>{
        flagSound = e.target.checked;
    })
}

export function playExito(){
    if(flagSound){
        var audio = new Audio(successSound);
        audio.play();
    }
}

export function playFail(){
    if(flagSound){
        var audio = new Audio(failSound);
        audio.play();
    }
}

export function playFlip(){
    if(flagSound){
        var audio = new Audio(FlipSound);
        audio.play();
    }
}