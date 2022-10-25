/* here the functions to show the caracteristics of last game played */

let finalControls = document.getElementById("final-controls");
let finalPanel = document.getElementById("final-msj");
let finalControlsPlay = document.getElementById("final-controls-play");
let finalControlsData = document.getElementById("final-controls-data");

let finalEmoji = document.getElementById("final-emoji");
let successItem = document.getElementById("success-item");
let triesItem = document.getElementById("tries-item");
let timeItem = document.getElementById("time-item");


export function initComponents(callPlayGame){
    finalPanel.addEventListener("click",(e)=>{
        if(e.target.dataset.break){
            hideFinalPanel();
            showFinalControls();
            finalControlsData.classList.add("active");
        }
    })
    finalControlsPlay.addEventListener("click", ()=>{
        callPlayGame();
    })
    finalControlsData.addEventListener("click",()=>{
        showFinalPanel();
        showFinalControls(false);
    })
}

export function hideFirstPresentation(){
    /* shows the play button bigger at the beginning */
    finalControls.classList.remove("presentation");
    finalControlsPlay.classList.remove("presentation");
}

export function showFinalPanel(success, tries, time){
    finalEmoji.textContent = getEmojiBySuccessRate(success ?? parseInt(successItem.textContent));

    successItem.textContent = success ?? successItem.textContent;
    triesItem.textContent = tries ?? triesItem.textContent;
    timeItem.textContent = time ?? timeItem.textContent;

    finalPanel.classList.add("active")
}
export function hideFinalPanel(){
    finalPanel.classList.remove("active");
}

export function showFinalControls(flag = true){
    if(flag){
        finalControls.classList.add("active");
        finalControls.classList.remove("desactive");
    }else{
        finalControls.classList.add("desactive");
        finalControls.classList.remove("active");
    }
}

function getEmojiBySuccessRate(rate){
    if(rate <= 10){
        return getEmojiByLevel(6);
    }else if(rate < 25){
        return getEmojiByLevel(5);
    }else if(rate < 50){
        return getEmojiByLevel(4);
    }else if(rate < 60){
        return getEmojiByLevel(3);
    }else if(rate < 95){
        return getEmojiByLevel(2);
    }else if(rate <= 100){
        return getEmojiByLevel(1);
    }else{
        return getEmojiByLevel(0);
    }
}

function getEmojiByLevel(level = 0){
    try{
        return rankingEmoji[level][Math.floor(Math.random()*rankingEmoji[level].length)];
    }catch{
        return "👀";
    }
}
const rankingEmoji = {
    "1":["😎","🤩","🤑"],
    "2":["😁","😄","😺"],
    "3":["😉","😊","🙂"],
    "4":["😐","😑","🙃"],
    "5":["😯","🙄","😪"],
    "6":["😫","😱","💩"]
}