const users = [
    {
        name : 'susan smith',
        job : 'web developer',
        review : 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.',
        image :  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
    },
    {
        name : 'merry volt',
        job : 'enginner',
        review : 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        image : 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg'
    },
    {
        name : 'ron wesely',
        job : 'disigner',
        review : 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        image : 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
    }  
]
// card 
// user profile
const image = document.querySelector('.image');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const review = document.querySelector('.review');

// side bar
const side_buttons = document.querySelectorAll('span');

let current_index = 0;

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    showUser(current_index);
});

function showUser(index)
{
    
    console.log(index);
   
    let user = users[index];
    image.src = user.image;
    name.textContent = user.name;
    job.textContent = user.job;
    review.textContent = user.review;
}

side_buttons.forEach(side_button => {
    
    side_button.addEventListener('click', function(e) {
        let target = e.currentTarget.classList;
        
        if(target.contains('left'))
        {
            current_index--;

            if(current_index < 0)
            {  
                current_index = users.length-1;
                showUser(current_index);
            }
            else 
            {
                showUser(current_index);
            }
        } 
        else 
        {
            current_index++;

            if(current_index > users.length - 1)
            {  
                current_index = 0;
                showUser(current_index);
            }
            else 
            {
                showUser(current_index);
            }
        }
    })
})


