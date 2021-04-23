// initial data
const groceries =  ["bacon", "milk", "eggs"];

// form, view
const article = document.querySelector('article');
const grocery_form = document.querySelector('#grocery-form');
const grocery_list = document.querySelector('#grocery-list');
const grocery_item = document.querySelector('#grocery');
const message = document.querySelector('#msg');

let update_data = '';
let update_status = false;
let update_name = '';

window.addEventListener('DOMContentLoaded', function() {
    console.log('# DOM CONTENT LOADED');
    displayList();
});

function displayList() {
    let items = groceries.map(function(item, index) {
        return `
                <div class="section">
                    <p>${item}</p>
                    <div id=${index} data-item=${item}>
                        <button class="btn update_item">update</button>
                        <button class="btn delete_item">delete</button>
                    </div>
                </div>`
                ;
    }).join("");
    grocery_list.innerHTML = items;
    
    const update_buttons = grocery_list.querySelectorAll('.update_item');
    const delete_buttons = grocery_list.querySelectorAll('.delete_item');
    const submit_button = grocery_form.querySelector('#submit_button');
    // update 
    update_buttons.forEach(function(update_button) {

        update_button.addEventListener('click', function(e) {

            let current_item_id = e.currentTarget.parentElement.id;
            update_data = current_item_id;
            update_name = e.currentTarget.parentElement.dataset.item;
            grocery_item.value = update_name;

            // console.log(update_name);
            submit_button.textContent = 'edit';
            
            
            
            
        })
    })


    //delete
    delete_grocery(delete_buttons)
   
    
}
// function checkInput(data) {
//     console.log(data);
    
// }


// form function
grocery_form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // console.log('update_data', update_data);
    const newItem = grocery_item.value;
    // checkInput(newItem);

    
    
    
    if (newItem && groceries[update_data] === update_name) {
        console.log('update');
        groceries[update_data] = newItem;
        update_status = true;
        submit_button.textContent = 'Submit';
    }
    else if(newItem){
        console.log('# submit');
        groceries.push(newItem);
        grocery_item.value = '';
        
        message.innerHTML = `<span class="success">SUCCESS::INPUT DATA</span>`;
        
        
        
    }  else {
        
        message.innerHTML = `<span class="error">ERROR::INPUT CORRECT DATA</span>`;
    }
    displayList();
});

// update, delete

function delete_grocery(delete_buttons) {
    delete_buttons.forEach(function(delete_button) {
        delete_button.addEventListener('click', function(e) {
            console.log('delete');
            const id = e.currentTarget.parentElement.id;
            console.log(id);
            delete groceries[id];
            // const get_index_item = groceries.indexOf(id);
            // groceries.splice(get_index_item, 1);
            displayList();
        })

    })
}




