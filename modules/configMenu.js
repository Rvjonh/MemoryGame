/* Here are the function to control the lateral menu */

let configPanel = document.getElementById("config-panel")
let configBtnMenu = document.getElementById("config-btn-menu")
let configBtnClose = document.getElementById("close-config-menu");


export function initComponents(){
    configBtnMenu.addEventListener("click", handleShowConfigMenu);

    configPanel.addEventListener("click",(e)=>{
        if(e.target.dataset.back){
            e.target.classList.toggle("active");
        }
    })
    
    configBtnClose.addEventListener("click",()=>{
        handleShowConfigMenu(false)
    })
}

export function handleShowConfigMenu(flag = true){
    if(flag){
        configPanel.classList.add("active");
    }else{
        configPanel.classList.remove("active");
    }
}