const view = document.querySelector('.view');
const buttons = document.querySelectorAll('button');
const logic = document.querySelector('.logic');
let a = '';
let operator = '';
let b = '';
let views = '';

function init() {
    a = '';
    b = '';
    operator = '';
}
view.innerHTML = '0';
function operators(...arg) {

    console.log(arg);
    switch (arg[2]) {
        case '%':
            return arg[0] % arg[1];
            break;
        case '/':
            return arg[0] / arg[1];
            break;
        case '+':
            return arg[0] + arg[1];
            break;
        case '-':
            return arg[0] - arg[1];
            break;
        case 'x':
            return arg[0] * arg[1];
        default:
            console.log('error');
            break;
    }
}

buttons.forEach(button => {
    // a = '';
    
    button.addEventListener('click', (event) => {
        console.log('click button');
        // console.log(event.target);
        let current_button = event.target;
        // console.log(current_button.classList[0]);

        

        if (current_button.classList.contains('operator') && operator == '' && a === '') {
            console.log('## oper 1');
            a = 0;
            operator = current_button.textContent;
            view.innerHTML = operator;
        }
        

        if (current_button.dataset.type === 'number' && operator === '') {
            console.log('a');
            
            a += current_button.textContent;
            console.log(a);
            view.innerHTML = a;
        }
        
        if (current_button.classList.contains('operator') && operator == '' && current_button.dataset.type !== 'ac') {
            console.log('## oper');
            operator = current_button.textContent;
            view.innerHTML = operator;
        }
        if (current_button.dataset.type === 'number' && a !== '' && operator !== '') {
            console.log('b');
            b += current_button.textContent;
            console.log(b);
            
            view.innerHTML = b;
        }

        if(current_button.dataset.type === 'ac')  {
            console.log('ac');
            view.innerHTML = '0';
            init();
        }


        if (current_button.dataset.type === 'equal') {
            console.log('equal');
            // console.log(`${a} ${operator} ${b}`);
            let result = operators(Number(a), Number(b), operator);
            
            console.log(`RESULT :: ${result}`);
            
            logic.innerHTML = `${a} ${operator} ${b} =  ${result.toFixed(2)}`;
            view.innerHTML = `0`;
            init();
            
        }



        // if(current_button.dataset.type === 'number' && operator === '') {
        //     console.log('number');            
        //     a += current_button.textContent;
        //     console.log(a);  
        // } else if(current_button.dataset.type !== 'number' && current_button.dataset.type !== 'equal' && current_button.dataset.type !== 'ac') {
        //     operator = current_button.dataset.type; 
        //     console.log(operator);
        // } else if(current_button.dataset.type === 'number' && a !== '' && operator !== ''){
        //     b += current_button.textContent;
        //     console.log(b);
        // }

        
        // if(current_button.dataset.type === 'equal') {
        //     console.log('equal');
        //     console.log(`${a} ${operator} ${b}`);
        //     let result = operators(Number(a), Number(b), operator);
        //     console.log(`RESULT :: ${result}`);
        //     init();

        // }
    })
})




