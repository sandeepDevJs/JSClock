let hoursDigit1 = document.querySelector(".hours .first");
let hoursDigit2 = document.querySelector(".hours .second");

let minutesDigit1 = document.querySelector(".minutes .first");
let minutesDigit2 = document.querySelector(".minutes .second");

let secondDigit1 = document.querySelector(".seconds .first");
let secondDigit2 = document.querySelector(".seconds .second");

updateMinutes();
updateSeconds();

function updateHours() {
    let date = new Date();
    if (parseInt(date.getHours()) < 10) {
        hoursDigit1.textContent = 0;
        hoursDigit2.textContent = date.getHours().toString()[0];
    }else{
        hoursDigit1.textContent = date.getHours().toString()[0];
        hoursDigit2.textContent = date.getHours().toString()[1];
    }
}

function updateMinutes() {
    let date = new Date();
    if (parseInt(date.getMinutes()) < 10) {
        minutesDigit1.textContent = 0;
        minutesDigit2.textContent = date.getMinutes().toString()[0];
    }else{
        minutesDigit1.textContent = date.getMinutes().toString()[0];
        minutesDigit2.textContent = date.getMinutes().toString()[1];
    }
    
    updateHours();
}

function updateSeconds(){
    let date = new Date();
    if(parseInt(date.getSeconds()) < 10){
        secondDigit1.textContent = 0;
        secondDigit2.textContent = date.getSeconds().toString()[0];
    }else{
        secondDigit1.textContent = date.getSeconds().toString()[0];
        secondDigit2.textContent = date.getSeconds().toString()[1];
    }
    
    if (parseInt(date.getSeconds()) === 0) {
        updateMinutes();
    }

}

setInterval(updateSeconds, 100);