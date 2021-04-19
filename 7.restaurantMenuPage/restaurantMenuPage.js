const menus = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./image/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle. `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./image/item-1.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb. `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./image/item-1.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth `,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./image/item-1.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./image/item-1.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter. `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./image/item-1.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./image/item-1.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./image/item-1.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday. `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./image/item-1.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./image/item-1.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af.`,
    },
];
// get parent element
const item_section = document.querySelector("#item_section");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menus);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {

    let allMenu =  menuItems.map(function(menu) {

        return `<div class="item ${menu.id}">
                    <img class="left" src="${menu.img}" />
                    <div class="right">
                        <div class="right_top">
                            <h3>${menu.title}</h3>
                            <span>$${menu.price}</span>
                        </div>
                        <p class="right_text">${menu.desc}</p>
                    </div>
                </div>`
    })
    allMenu = allMenu.join("");
    item_section.innerHTML = allMenu;
}

function displayMenuButtons() {

    const categories = menus.reduce(
        function(values, item) {
            // console.log(values);
            if(!values.includes(item.category))
            {
                values.push(item.category);
            }
            return values;
        }
    , ['all']);

    
    const categoryBtn = categories.map(function(category) {
        return `<button class="filter" data-id="${category}">${category}</button>`
    });

    btnContainer.innerHTML = categoryBtn.join('');

    const filter_buttons = document.querySelectorAll('.filter');

    filter_buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let curTarget = e.currentTarget.dataset.id;
            
            const menuCategory = menus.filter(function(menu) {
                if(menu.category === curTarget)
                {
                    return menu;
                }
            });

            if(curTarget === 'all')
            {
                diplayMenuItems(menus);
            } 
            else 
            {
                diplayMenuItems(menuCategory);
            }
        })
    })


}