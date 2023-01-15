

let countElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el");
let count = 0
function increment(){
    count += 1;
    countElement.innerText = count;
}


function save(){
    let saveEl = count + " - ";
    saveElement.textContent +=saveEl;
    count = 0;
    countElement.innerText = count;
}