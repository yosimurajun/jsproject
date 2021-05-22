function contactPage() {
    const contact_div = document.createElement('div');
    contact_div.classList.add('contact_page');

    const contact_title = document.createElement('h1');
    contact_title.textContent = 'Contact';

    const contact_content = document.createElement('div');
    const contact_map = document.createElement('div');
    contact_map.setAttribute('id', 'map');
    const contact_info = document.createElement('div');
    contact_info.classList.add('info');
    const information = document.createElement('p');
    information.textContent = '275  Oak Lane WATERFORD Michigan 48328'
    const phone = document.createElement('span');
    phone.textContent = '660-678-6165';

    const contact_form = document.createElement('form');
    contact_form.classList.add('contact_form');
    const name_label = document.createElement('label');
    const name_input = document.createElement('input');
    const text_label = document.createElement('label');
    const text_textarea = document.createElement('textarea');
    const sumbit_button = document.createElement('button');
    sumbit_button.textContent= 'Send';
    name_label.textContent = 'name';
    name_label.setAttribute('for', 'name');
    name_input.classList.add('name_input');
    name_input.setAttribute('id', 'name');
    text_label.textContent = 'content';
    text_label.setAttribute('for', 'text');
    text_textarea.classList.add('text_textarea');
    text_textarea.setAttribute('id', 'text');

    
    

    contact_form.appendChild(name_label);
    contact_form.appendChild(name_input);
    contact_form.appendChild(text_label);
    contact_form.appendChild(text_textarea);
    contact_form.appendChild(sumbit_button);



   


    contact_info.appendChild(information);
    contact_info.appendChild(phone);

    contact_content.appendChild(contact_map);
    contact_content.appendChild(contact_info);
    contact_div.appendChild(contact_title);
    contact_div.appendChild(contact_content);
    contact_div.appendChild(contact_form);

    return contact_div;

}

function loadContact() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(contactPage());
}

export default loadContact;