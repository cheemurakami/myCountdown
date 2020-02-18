'use strict';
{

let dayNum = document.getElementById('dayNum');
let today = new Date();
const theDay = new Date(2020, 1, 24);
const d = new Date(theDay - today);
let timer = document.getElementById('timer');

function countDown(){
    console.log(theDay - Date.now());
    const hour = String(d.getHours()).padStart(3, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const sec = String(d.getSeconds()).padStart(2, '0');
    timer.textContent = `${hour}:${min}:${sec}`;
    countDown();
}

dayNum.addEventListener('click',() => {
    // toDay - 1/24/20
    const date = String(d.getDate()).padStart(2, '');
    dayNum.textContent = date;
})

}

