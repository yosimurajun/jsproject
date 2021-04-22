const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];


const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadLine');
const items = document.querySelectorAll('.deadLine-format h4');
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 3, 22, 19, 37, 0);
// console.log(futureDate);

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// console.log(futureDate.getDay());
// console.log(weekday);



giveaway.textContent = `giveaway ends on ${weekday} ${date}, ${month} ${year} ${hours} : ${mins}`;

const futreTime = futureDate.getTime();
// console.log(futreTime);

function getRemaingTime() {
    const today = new Date().getTime();
    // console.log(today);
    const remainTime = futreTime-today;
    const getReDay = 24 * 60 * 60 * 1000;
    const getReHour = 60 * 60 * 1000;
    const getReMin = 60 * 1000;

    let days = remainTime / getReDay;
    days = Math.floor(days);
    console.log(days);
    let hours = (remainTime % getReDay) / getReHour;
    hours = Math.floor(hours);
    // console.log(hours);

    let mins = Math.floor((remainTime % getReHour) / getReMin);
    let seconds = Math.floor((remainTime % getReMin) / 1000);

    const values = [days, hours, mins, seconds];


    function format(item) {
        if(item < 10) 
        {
            return item = `0${item}`; 
        }
        return item;
    }

    items.forEach(function(item, index) {
        // console.log(item);

        
        item.innerHTML = format(values[index]);
    });
    if(remainTime < 0) {
        clearInterval(countdown);
        deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway ahs expired.</h4>`
    }
}

let countdown = setInterval(getRemaingTime, 1000);
getRemaingTime();