const video = document.querySelector('#video_background');
const video_button = document.querySelector('.video_button');
const slider_button = document.querySelector('.slider');

video_button.addEventListener('click', function(e) {
    console.log('1');
    const target = e.target.classList;
    if(target.contains('play'))
    {
       video_button.classList.remove('play');
       video_button.style.backgroundColor = '#000';
       slider_button.style.transform ='translateX(40px)';
       slider_button.style.backgroundColor = "rgb(255, 215, 0)";
        pause();
    }
    else 
    {
        play();
        video_button.classList.add('play');
        video_button.style.backgroundColor = "rgb(255, 215, 0)";
        slider_button.style.backgroundColor = "rgb(255, 255, 255)";
        slider_button.style.transform ='translateX(0px)';

    }
    
    
    
})





function play() {
    video.play();
}
function pause() {
    video.pause();
}