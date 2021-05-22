import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function navbar() {
    const ul = document.createElement('ul');
    ul.classList.add('nav_link');

    ul.appendChild(link('home'));
    ul.appendChild(link('menu'));
    ul.appendChild(link('contact'));

    return ul;

}

function link(name) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    if(name == 'home')
    {
        a.classList.add(name);
        a.classList.add('active');     
    }
    a.classList.add(name);
    a.textContent = name;
    li.appendChild(a);
    a.addEventListener('click', (event) => {
        
        if(event.target.classList.contains('home')) {
            removeActive();
            event.target.classList.add('active');
            loadHome();
        }

        if(event.target.classList.contains('menu')) {
            console.log('menu');
            removeActive();
            event.target.classList.add('active');
            loadMenu();
            
        }

        if(event.target.classList.contains('contact')) {
            console.log('contact');
            removeActive();
            event.target.classList.add('active');
            loadContact();
        }
        
    })

    return li;
}

function removeActive() {
    const lis = document.querySelectorAll('a');
        lis.forEach(list => {
            list.classList.remove('active');
        })
}

export default navbar;