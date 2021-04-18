        // number 
        const number_section = document.querySelector('#number');
        let number = 0;
        number_section.textContent = number;

        // three button
        const decrease_button = document.querySelector('#decrease');
        const reset_button = document.querySelector('#reset');
        const increase_button = document.querySelector('#increase');

        decrease_button.addEventListener('click', () =>  {
            number_section.textContent =  --number;
            number_section.style.color = 'red';
        });
        reset_button.addEventListener('click', () =>  {
            number_section.textContent =  number = 0;
            number_section.style.color = '';
        });
        increase_button.addEventListener('click', () =>  
        {
            number_section.textContent =  ++number;
            number_section.style.color = 'blue';
        });


        // forEacth, e.currentTarget.classList
        // btn.addeventListener('click', function(e) {
        // const style = e.currentTarget.classList;
        // if(styles.contains('decrease')) {
        // ...
        // })