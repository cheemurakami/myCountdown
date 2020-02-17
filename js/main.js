'use strict';
{

let dayNum = document.getElementById('dayNum');
let today = new Date();
const theDay = new Date(2020, 1, 24);

dayNum.addEventListener('click',() => {
    // toDay - 1/24/20
    const d = new Date(theDay - today);
    const date = String(d.getDate()).padStart(2, '');
    console.log(date);
    dayNum.textContent = date;
})


}

