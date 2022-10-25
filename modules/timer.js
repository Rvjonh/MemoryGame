/* 
    here  you can control the time that a user took to last a game
*/

let panelTimer = document.getElementById("timer")

let loop = null;
let counter = 0;

export function initComponents(){
    panelTimer.addEventListener("click",()=>{
        panelTimer.textContent = getCounterFormater();
    })
}

export function startCounter(){
    stopCounter();
    panelTimer.textContent = getCounterFormater();
    loop = setInterval(()=>{
        counter +=1;
        panelTimer.textContent = getCounterFormater();
    },1000)
}

export function stopCounter(){
    counter = 0;
    clearInterval(loop)
}

export function getCounterFormater(){
    if(counter <60){
        return `${counter}s`;
    }else if(counter < 3600){
        const mins = parseInt(counter/60);
        const secs = counter%60;
        return `${mins}m:${secs}s`;
    }
    const hours = parseInt(counter/3600)
    const mins = parseInt(counter%3600/60);
    const secs = counter%3600%60;
    return `${hours}h:${mins}m:${secs}s`;
}