const plus_buttons = document.querySelectorAll('.fa-plus-square');
const content_texts = document.querySelectorAll('.content_text');





plus_buttons.forEach(button => button.addEventListener('click', function(e) {
    let key = e.currentTarget.classList[2];
    content_texts.forEach(text => {
        if(text.classList.contains(key)){
            text.classList.toggle('show');
        }

    })
    
}))

