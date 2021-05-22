let items = [
    {
        name: 'waffle',
        price: 12.22,
        img : './image/waffle.png'
    },
    {
        name: 'potato',
        price: 14.22,
        img : './image/potato.png'
    },
    {
        name: 'apple',
        price: 10.11,
        img : './image/apple.png'
    },
    {
        name: 'peach',
        price: 9.54,
        img : './image/peach.png'

    },
    {
        name: 'lemon',
        price: 20.18,
        img : './image/lemon.png'
    },
]

function menuPage() {
    const menu_div = document.createElement('div');
    menu_div.classList.add('menu_page');
    const menu_header = document.createElement('h1');
    menu_header.textContent = 'Waffle Pie';

    const items_div = document.createElement('div');
    items_div.classList.add('items');
    
    items.forEach((item) => {
        items_div.appendChild(createPie(item.name, item.price, item.img));
    });
    menu_div.appendChild(menu_header);
    menu_div.appendChild(items_div);
    return menu_div;
}


function createPie(name, price, src) {
    const item_div = document.createElement('div');
    const img = document.createElement('img');
    const desc = document.createElement('div');
    desc.classList.add('item_desc');
    const item_name_para = document.createElement('p');
    const line_span = document.createElement('span');
    line_span.classList.add("underline");
    const price_span = document.createElement('span');
    item_div.classList.add('item');
    img.src = src;
    img.classList.add('food_image');
    item_name_para.textContent = name;
    price_span.textContent = '$'+price;
    desc.appendChild(item_name_para)
    desc.appendChild(line_span);
    desc.appendChild(price_span);

    item_div.appendChild(img);
    item_div.appendChild(desc);

    return item_div;
    

}
function loadMenu() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(menuPage());
}


export default loadMenu;