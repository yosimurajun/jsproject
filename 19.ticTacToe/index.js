

const GameBoard = () => {
    let gameboard = [];

    
    const render = () => {
        const container = document.querySelector('.container');    
        for(let i = 0; i < 9; i++) {
            gameboard.push('');
            const section = document.createElement('div');
            section.classList.add('layout');
            section.textContent = '';
            section.setAttribute('data-id', i);
            container.appendChild(section);
            // console.log(gameboard);
        }

        
    }
    const select = (mark) => {
        const layouts = document.querySelectorAll('.layout');
        layouts.forEach(layout => {
            layout.addEventListener('click', (event) => {
                let layout_index = event.target.dataset.id;

                if(!gameboard[layout_index]) {
                    gameboard[layout_index] = 'o';
                    layouts[layout_index].textContent = 'o';
                }

                // computer
                let random_index = Math.floor(Math.random()*9);

                
                    if(gameboard[random_index] == null) {
                        gameboard[random_index] = 'x';
                        layouts[random_index].textContent = 'x';
                    }
                
                    
                
            })
        })
    }



    return { render, select }
}

const players = (type) => {
    
    // display name
    
    // user 
    let mark = 'o';
    GameBoard().select(mark);

    // computer
    

}



const sections = document.querySelectorAll('.layout');
const user_select = '';
// sections.forEach(section => {
//     section.addEventListener('click', (event) => {
//         // console.log(event.target);
//         event.target.textContent = 'X';
//         let input = GameBoard();
//         input.user_input('x');

//         let random_index = Math.floor(Math.random() * 9);
//         if(sections[random_index].textContent !== 'x') {
//             sections[random_index].textContent = 'O'
//         } else {
//             sections[random_index].textContent = 'O'
//         }

//     })
// })

GameBoard().render();


players('Mike');