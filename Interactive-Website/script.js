const cookie = document.getElementById('cookie');
const counter = document.getElementById('cookie-count');
const win = document.getElementById('win');

win.style.visibility = 'hidden'; //Hide win message initially

let count = 0;

function addCount(){ //Increment cookie count
    count += 1;
    counter.textContent = count; 
    won(); // Check for win condition
}
cookie.onclick = addCount;

function won(){
    if(count >= 10){
        win.style.visibility = 'visible'; //Show win message
    }
}
