
let configCard = document.getElementById('configCard')
let mainCard = document.getElementById('mainCard')

function openConfig(){
    if(configCard.style.display != 'none'){
        configCard.style.display = 'none'
        mainCard.setAttribute('class' , 'col-12')
    }else{
        configCard.style.display = 'block'
        mainCard.setAttribute('class' , 'col-6')
    }
}