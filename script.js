let hoursDigit1 = document.querySelector(".hours .first");
let hoursDigit2 = document.querySelector(".hours .second");

let minutesDigit1 = document.querySelector(".minutes .first");
let minutesDigit2 = document.querySelector(".minutes .second");

let secondDigit1 = document.querySelector(".seconds .first");
let secondDigit2 = document.querySelector(".seconds .second");

let reminderBtn = document.getElementById("btn");
let remindTime, message;
let weReminding = false;

reminderBtn.addEventListener("click", () => {
    remindTime = document.getElementById("userInput").value.toString().trim();
    if (weReminding) {
        alert("Reminder is already been set.");   
        return false;
    }
    if (!remindTime) {
        alert("No Input Was Given.");
        return false;
    }
    message = prompt("Enter A Message To Remind With.").trim();
    weReminding = true;
})

//Writing Time on First Load.
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

    if(weReminding){
        let currentTime = date.getHours()+":"+date.getMinutes();
        if (remindTime == currentTime) {
            alert(message);
            weReminding = false;
        }
    }

}

setInterval(updateSeconds, 100);
