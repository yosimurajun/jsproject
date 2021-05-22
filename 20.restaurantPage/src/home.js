function home() {
    const restaurant_name = document.createElement('div');
    restaurant_name.classList.add('home_page');
    const home_header = document.createElement('h1');
    home_header.setAttribute('id', 'brand_name');
    home_header.textContent = 'Waffle Pie';
    const para = document.createElement('p');
    const span = document.createElement('span');
    para.textContent = 'Hello, i\'m chef. Harry Borison';
    span.textContent = 'Grrrrrrreat Pie';
    const img = document.createElement('img');
    img.src = './image/chef.png';
    img.alt = 'chef_image';
    img.classList.add('home_image');

    restaurant_name.appendChild(home_header);
    restaurant_name.appendChild(para);
    restaurant_name.appendChild(span);
    restaurant_name.appendChild(img);

    return restaurant_name;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(home());
}

export default loadHome;