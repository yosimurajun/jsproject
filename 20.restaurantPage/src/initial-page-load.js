
import navbar from './navbar';
import loadHome from './home';
import foot from './foot';

function initializePage() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(navbar());
    const main = document.createElement('div');
    main.classList.add('main');
    const footer = document.createElement('div');
    footer.classList.add('footer'); 
    footer.appendChild(foot());



    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    loadHome();

}

export default initializePage;