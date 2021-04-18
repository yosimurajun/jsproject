let bars_button = document.querySelector('.fa-bars');
let header = document.querySelector('header');
let close_button = document.querySelector('.fa-times');

bars_button.addEventListener('click', function() {
    console.log('bars click');
    header.classList.add('click');
})
close_button.addEventListener('click', function() {
    console.log('times cloase');
    header.classList.remove('click');
})