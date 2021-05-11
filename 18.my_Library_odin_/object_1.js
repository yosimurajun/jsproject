let myLibrary = [{ title: "Harry potter", author: "sherlock", pages: 250, read: 'not read' }];

const bookForm = document.querySelector('#bookForm');



// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//  form submit
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('click form', event.target.attributes.id.value);
    console.log('add');
    // new book data
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read_status').value;

    if (!title || !author || !pages) {
        alert('correctly input title, author, pages, read');

    } else {
        let newBook = new Book(title, author, pages, read);
        // add array
        myLibrary.push(newBook);
        
        // view
        updateLocalStorage();
        render();
        // console.log(myLibrary);
    }
    // create instance 



});

// save localstorage  type : array >> object (JSON.stringify())
function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
  }
// read from localstorage type: object >> array (JSON.parse())
  function checkLocalStorage() {
    if (localStorage.getItem("library")) {
      myLibrary = JSON.parse(localStorage.getItem("library"));
    }
  }

// display books;
function render() {
    const tobody = document.querySelector('tbody');
    
    checkLocalStorage();
    let item = myLibrary.map((value, index) => {
        return `<tr class="book ${index}">
                    <td class="title">${value.title}</td>
                    <td class="author">${value.author}</td>
                    <td class="pages">${value.pages}</td>
                    <td class="read">${value.read}</td>
                    <td class="delete">delete</td>
                </tr>`;
    });
    tobody.innerHTML = item.join('');

    const change_status = document.querySelectorAll('.read');
    change_status.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log('change read / not read');
            let book_index = event.target.parentElement.classList[1];
            // console.log(event.target.textContent);
            if (myLibrary[book_index].read === 'read') {
                myLibrary[book_index].read = 'not read'
            } else {
                myLibrary[book_index].read = 'read'
            }
            updateLocalStorage();
            render();
        })
    })
    // delete
    const delete_buttons = document.querySelectorAll('.delete');
    delete_buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            console.log('delete');
            // console.log(event.target.parentElement);
            let book_index = event.target.parentElement.classList[1];
            // console.log(book_index);
            delete_book(book_index);
            
        });
    })
}



function delete_book(book_index) {
    console.log('delete book');
    console.log(book_index);
    if (myLibrary[book_index] !== null) {
        myLibrary.splice(book_index, 1);
        updateLocalStorage();
        render();
        
    }
}
render();