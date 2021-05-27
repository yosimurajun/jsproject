let items = [
    // {
    //     type: 'inbox',
    //     data: 'harry potter and sorcer stone',
    //     date: '2021-05-26'
    // },
    {
        type: 'inbox',
        data: '5 mon 27 days',
        date: '2021-05-27'
    },
    {
        type: 'inbox',
        data: '5 mon 28 days',
        date: '2021-05-27'
    },
    {
        type: 'inbox',
        data: '6 mon 2 days',
        date: '2021-06-02'
    },
    {
        type: 'inbox',
        data: '6 mon 1 days',
        date: '2021-06-01'
    },
    // {
    //     type: 'inbox',
    //     data: 'we are playing computer game',
    //     date: '2021-05-31'
    // },
    // {
    //     type: 'inbox',
    //     data: 'we are playing computer game',
    //     date: '2021-05-30'
    // },
    // {
    //     type: 'inbox',
    //     data: 'sherlock holmes and jackferson'
    // }
]

const item = (type, data, date) => {
    return { type, data, date };
}
const container = document.querySelector('#container');
const content_body = document.querySelector('#content');
const side_header_ul = document.querySelector('.side_header_ul');
const main_header_title = document.querySelector('.main_header_title');
const main_container = document.querySelector('.main_container');
const s_form = document.querySelector('.s_form');
const side_main_ul = document.querySelector('.main_ul');

// item document

function createForm(type) {
    const form = document.createElement('form');
    const content_input = document.createElement('input');
    const date_input = document.createElement('input');
    const submit = document.createElement('button');
    content_input.setAttribute('type', 'text');
    content_input.setAttribute('id', 'contents');
    date_input.setAttribute('type', 'date');
    date_input.setAttribute('id', 'date');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'add';
    form.classList.add(type);
    form.classList.add('create');
    form.classList.add('_form');
    form.appendChild(content_input);
    form.appendChild(date_input);
    form.appendChild(submit);
    s_form.innerHTML = '';
    s_form.appendChild(form);

    //function
    submitItem(form, type);
}

function updateForm(type, data) {

    const form = document.createElement('form');
    const input = document.createElement('input');
    const date_input = document.createElement('input');
    const submit = document.createElement('button');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'contents');
    date_input.setAttribute('type', 'date');
    date_input.setAttribute('id', 'date');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'update';
    form.classList.add('update');
    form.classList.add('_form');
    input.value = data.data;
    date_input.value = data.date;
    form.appendChild(input);
    form.appendChild(date_input);
    form.appendChild(submit);
    s_form.innerHTML = '';
    s_form.appendChild(form);

    let index = items.indexOf(data);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const renew_content = document.querySelector('#contents');
        const renew_date = document.querySelector('#date');
        const renew_data = { type: 'inbox', data: renew_content.value, date: renew_date.value };


        updateItem(renew_data, index);
        createForm(type);
        render(type);

        // if(type === 'next') {
        //     let get_full_next_7_date = getFullDate(7);
        //     render_next(type, get_full_next_7_date);
        // }

    });

}

const items_layout = document.querySelector('.items');

function submitItem(form, type) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        const content = document.querySelector('#contents');
        const date = document.querySelector('#date');

        if (content.value == '') {
            const error_div = document.createElement('div');
            error_div.classList.add('alert');
            const error_para = document.createElement('p');
            const error_para2 = document.createElement('p');
            error_para.textContent = 'please input content';
            error_para2.textContent = 'ex) homework';
            const error_button = document.createElement('button');
            error_button.textContent = 'close';
            error_button.classList.add('error_button');
            error_para2.classList.add('error_desc');
            error_div.appendChild(error_para);
            error_div.appendChild(error_para2);
            error_div.appendChild(error_button);
            content_body.appendChild(error_div);
            container.classList.add('stop');
            error_button.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.removeChild(error_div);
                container.classList.remove('stop');
            });
            return;
        } else if (date.value == '') {
            const error_div = document.createElement('div');
            error_div.classList.add('alert');
            const error_para = document.createElement('p');
            const error_para2 = document.createElement('p');
            error_para.textContent = 'please input date';
            error_para2.textContent = 'ex) mm / dd / yyyy >> 04 / 04 / 2024';
            error_para2.classList.add('error_desc');
            const error_button = document.createElement('button');
            error_button.textContent = 'close';
            error_button.classList.add('error_button');
            error_div.appendChild(error_para);
            error_div.appendChild(error_para2);
            error_div.appendChild(error_button);
            content_body.appendChild(error_div);
            container.classList.add('stop');
            error_button.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.removeChild(error_div);
                container.classList.remove('stop');
            });
            return;
        } else {
            let new_item;
            if (type == 'today' || type == 'next') {
                new_item = item('inbox', content.value, date.value);
            } else {
                new_item = item(type, content.value, date.value);
            }
            items.push(new_item);
            createForm(type);
            render(type);
        }
    })
}

function updateItem(renewData, index) {
    // items[index].type = renewData.type;
    items[index].data = renewData.data;
    items[index].date = renewData.date;
}

function deleteItem(type, content) {
    console.log('deleteItem :: ');
    console.log(type, content, date);
    // console.log(items);
    items_layout.innerHTML = '';

    if (type === "inbox") {
        items = items.filter((item) => item.data !== content);
        render(type);
    }

    if (type === 'today') {
        items = items.filter((item) => item.data !== content);
        render(type);
    }
    if (type === 'next') {
        items = items = items.filter((item) => item.data !== content);
        render(type);
    }

}

function resetActive() {
    const list = document.querySelectorAll('.side_link');
    side_main_ul.classList.remove('active');
    list.forEach((li) => li.classList.remove('active'));
}

function render(type) {
    items_layout.innerHTML = '';
    let sort_content
    if (type == 'inbox') {
        sort_content = items.sort((a, b) => a.date > b.date).filter((content) => content.type === type);
    } 
    if (type == 'today') {
        sort_content = items.sort((a, b) => a.date > b.date).filter((content) => content.date === getFullDate());
    }
    if (type == 'next') {
        sort_content = items.sort((a, b) => a.date > b.date).filter((item) => new Date(getFullDate()).getTime() < new Date(item.date).getTime() && new Date(item.date).getTime() <= new Date(getFullDate(7)).getTime());
    }
    if(type !== 'inbox' && type !== 'today' && type !== 'next') {
        sort_content = items.sort((a, b) => a.date > b.date).filter((content) => content.type === type);
    }

    

    sort_content.forEach((content, index) => {
        const item_div = document.createElement('div');
        const item_para = document.createElement('p');
        const date_span = document.createElement('span');
        const option_div = document.createElement('div');
        const delete_button = document.createElement('span');
        const update_button = document.createElement('span');
        item_div.classList.add('item');
        item_para.textContent = content.data;
        delete_button.textContent = 'delete';
        delete_button.classList.add('delete');
        update_button.textContent = 'update';
        update_button.classList.add('update');
        date_span.classList.add('date');
        date_span.textContent = content.date;
        option_div.classList.add('option');
        option_div.appendChild(date_span);
        option_div.appendChild(update_button);
        option_div.appendChild(delete_button);
        item_div.appendChild(item_para);
        item_div.appendChild(option_div);
        update_button.addEventListener('click', (e) => updateForm(type, content));
        delete_button.addEventListener('click', (e) => deleteItem(type, content.data));
        items_layout.appendChild(item_div);
    })
}

function getFullDate(days) {
    const current_Date = new Date();
    let next_date = new Date(current_Date.getFullYear(), current_Date.getMonth(), current_Date.getDate());

    let current_get_year = current_Date.getFullYear();
    let current_get_month = current_Date.getMonth() + 1;
    let current_get_date = '';


    if (days) {

        next_date = new Date(next_date.getFullYear(), next_date.getMonth() + 1, next_date.getDate() + 7);
    } else {
        current_get_date = current_Date.getDate();
    }

    let next_get_year = next_date.getFullYear();
    let next_get_month = next_date.getMonth();
    let next_get_date = next_date.getDate();

    if (next_get_month < 10) {
        next_get_month = '0' + next_get_month;
    }
    if (next_get_date < 10) {
        next_get_date = '0' + next_get_date;
    }
    if (current_get_month < 10) {
        current_get_month = '0' + current_get_month;
    }

    if (current_get_date < 10) {
        current_get_date = '0' + current_get_date;
    }
    if (days) {
        return `${next_get_year}-${next_get_month}-${next_get_date}`;
    } else {
        return `${current_get_year}-${current_get_month}-${current_get_date}`;
    }
}
side_header_ul.addEventListener('click', (e) => {
    const type = e.target.dataset.type;

    if (type == 'inbox') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }

    if (type == 'today') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }

    if (type === 'next') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }


    if (type == 'project') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }
});
side_main_ul.addEventListener('click', (e) => {
    const type = e.target.dataset.type;
    if (type === 'work') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }
    if (type === 'personal') {
        resetActive();
        main_header_title.textContent = type;
        e.target.classList.add('active');
        createForm(type);
        render(type);
    }
})