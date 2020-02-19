'use strict';
{

let dayNum = document.getElementById('dayNum');
let timer = document.getElementById('timer');
const theDay = new Date(2020, 1, 24); //Mon Feb 24 2020 00:00:00 GMT-0800 (Pacific Standard Time)


function countDown(){
    let currentTime = new Date();
    let diff = new Date(theDay - currentTime); //theDay - currentTime // number
    const hour = String(diff.getHours()).padStart(3, '');
    const min = String(diff.getMinutes()).padStart(2, '0');
    const sec = String(diff.getSeconds()).padStart(2, '0');
    timer.textContent = `${hour}:${min}:${sec}`;
    // console.log(timer.textContent);
    setTimeout(() => {
        countDown();
    } , 1000);
}

dayNum.addEventListener('click',() => {
    let today = new Date();
    let diff = new Date(theDay - today); //theDay - today // number
    const date = String(diff.getDate()).padStart(2, '');
    dayNum.textContent = date;
    countDown();
})

}

