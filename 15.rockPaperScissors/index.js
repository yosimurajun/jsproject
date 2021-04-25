const container = document.querySelector('#container');
const buttons = container.querySelectorAll('button');

let random_number = Math.floor(Math.random() * 3);
// console.log(random_number);
const computer_selectors = ['rock', 'paper', 'scissors'];
let computer = computer_selectors[random_number];

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const current_selector = e.currentTarget.id;
        console.log('current_selector', current_selector);
        console.log('computer', computer);

        const status = document.querySelector('#status');
        
        if(current_selector == 'rock' && computer == 'scissors')
        {
            status.innerHTML = '<p class="win">win</p>';
        } else if(current_selector == 'rock' && computer == 'paper') {
            status.innerHTML = '<p class="lose">lose</p>';
        } else if(current_selector == 'scissors' && computer == 'rock') {
            status.innerHTML = '<p class="lose">lose</p>';
        } else if(current_selector == 'scissors' && computer == 'paper') {
            status.innerHTML = '<p class="win">win</p>';
        } else if(current_selector == 'paper' && computer == 'rock') {
            status.innerHTML = '<p class="win">win</p>';
        } else if(current_selector == 'paper' && computer == 'scissors') {
            status.innerHTML = '<p class="win">win</p>';
        } else {
            status.innerHTML = '<p class="draw">draw</p>';
        }
        

    
    })
})