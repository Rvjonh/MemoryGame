/* Here are the functions to change the color of the cards' back 
    with a single color
    and applying linear gradient
*/

const initialColor = "linear-gradient(to bottom, rgb(0, 0, 0), rgb(255, 0, 0))";

let btnColorNormal = document.getElementById("colorCardNormal");

let dirs = document.querySelectorAll(".l-g-d");
let linearDirection = "to top";
let inputColor = document.getElementById("colorCardLinear");
let addColorButton = document.getElementById("add-color-list");
let listColors = document.getElementById("list-selected-colors");
let selectedColors = [];
let addedNewColor = false;


let resetColorBtn = document.getElementById("reset-color-btn");

let actualColor = "linear-gradient(to bottom, rgb(0, 0, 0), rgb(255, 0, 0))"


export function initComponents(){

    btnColorNormal.addEventListener("input", (e)=>{
        setCardsColor(e.target.value)
    })

    for(let dir of dirs){
        dir.addEventListener("click",setDirection);
    }

    addColorButton.addEventListener("click",()=>{
        if(selectedColors.length < 5){
            addedNewColor = true;
            selectedColors.push(inputColor.value);
            updateListSelectedColor();
            updateLinearColor();
        }
    })

    resetColorBtn.addEventListener("click", ()=>{
        setCardsColor(initialColor)
    })
}


function setDirection(e){
    linearDirection = e.target.dataset.dir;

    cleanSelection();
    e.target.classList.add("selected");

    updateLinearColor();
}

function cleanSelection(){
    for(let dir of dirs){
        dir.classList.remove("selected")
    }
}

function updateListSelectedColor(){
    listColors.textContent = "";

    for(let i=0; i<selectedColors.length ; i++){
        const flag = i===selectedColors.length-1
        listColors.appendChild(createSmallSquareColor(selectedColors[i], i, flag))
    }
}
function createSmallSquareColor(color="#000000", index=0, last=null){
    let div = document.createElement("div");
    if(last && addedNewColor){
        addedNewColor = false;
        div.className = "small-square appear";
        setTimeout(() => {
            div.classList.remove("appear");
        }, 250);
    }else{
        div.className = "small-square";
    }

    div.dataset["value"] = color;
    div.dataset["index"] = index;
    div.style.background = color;
    div.addEventListener("click", ()=>{
        selectedColors = selectedColors.filter((item, i)=>i!==index)
        div.classList.add("disappear");

        setTimeout(()=>{
            div.classList.remove("disappear")
            updateListSelectedColor()
            updateLinearColor();
        },250)
    })
    return div;
}

export function updateLinearColor(){
    let listedColors = "";

    if(selectedColors.length === 0){
        setCardsColor(initialColor)
    }else if(selectedColors.length === 1){
        setCardsColor(selectedColors[0])
    }else{

        for(let colour of selectedColors){
            listedColors +=", "+colour;
        }
        
        const color = `linear-gradient(${linearDirection} ${listedColors})`;
        setCardsColor(color);
    }
}

export function setCardsColor(color = null){
    if(actualColor !== color && color != null){
        actualColor = color;
    }

    const cards = document.querySelectorAll(".flip-card-front");
    for(let card of cards){
        card.style.background = actualColor;
    }
}