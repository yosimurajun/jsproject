// side nav 
const side_links = document.querySelectorAll('.side_link');
side_links.forEach((link) => {
    link.addEventListener('click', (e) => {
        const type = e.target.dataset.type;
        const main_container = document.querySelector('.main_container');
        main_container.innerHTML = tabbed_menu(type);


    });
})

const dummy_todos = [
    {
        title: 'Inbox 1',
        status: 'public', 
    },
    {
        title: 'Inbox 2',
        status: 'personal', 
    },
    {
        title: 'Inbox 3',
        status: 'public', 
    },
]




function tabbed_menu(type) {
    if (type === 'inbox') {
        const main_header_title = document.querySelector('.main_header_title');
        main_header_title.style.textTransform = 'capitalize';
        main_header_title.textContent = type;

        let datas = dummy_todos.map((value, index) => {
            return `<div class="item" data-index=${index}>
                        <div class="item_title">
                            <p>${value.title}</p>
                        </div>
                        <div class="item_option">
                            <span>${value.status}</span>
                        </div>
                    </div>`
        });
        datas = datas.join('');
        return datas;
    }

    if (type === 'today') {
        const main_header_title = document.querySelector('.main_header_title');
        main_header_title.style.textTransform = 'capitalize';
        main_header_title.textContent = type;

       //fillter date

        
        
    }

    if (type === 'next') {
        const main_header_title = document.querySelector('.main_header_title');
        main_header_title.style.textTransform = 'capitalize';
        main_header_title.textContent = type +'7 Days';

       //fillter date        
    }

    if(type == 'project') {
        return;
    }
}
