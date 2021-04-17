    // colors
    const colors = ['red', 'blue', 'green', 'pink', 'yellow', 'brown'];
    const hex_colors = ['#6D2CEE', '#8eff8e', '#f3dcf5', '#ff1095', '#00baff'];

    // body
    const body = document.querySelector('body');

    // header 
    const header = document.querySelector('header');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-around';
    header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.2)';

    // two button
    const simple_color_button = document.createElement('div');
    const hex_color_button = document.createElement('div');
    simple_color_button.textContent = 'Simple Color';
    simple_color_button.style.padding = '15px 20px';
    hex_color_button.textContent = 'Hex Color';
    hex_color_button.style.padding = '15px 20px';
    

    // container
    const container = document.querySelector('#container');
    container.style.height = '100%';
    container.style.textAlign = 'center';
    container.style.padding = '200px 0';
    container.style.fontSize = '2rem';
    
    // detail - color name
    const describe_bgColor =  document.createElement('span');
    describe_bgColor.textContent = 'Background Color : ';

    const color_name = document.createElement('span');
    color_name.textContent = 'white';
    // detail - change button
    const click_button = document.createElement('button');
    click_button.textContent = 'Click Me';
    click_button.style.display = 'block';
    click_button.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    click_button.style.border = '1px solid black';
    click_button.style.padding = '10px 20px';
    click_button.style.margin = '20px auto';

    // click button - select color
    let change = 1;
    simple_color_button.addEventListener('click', () => change = 1);
    hex_color_button.addEventListener('click', () => 
        change = 0 );

    click_button.addEventListener('click', () => {
        let random_index =   change ? Math.floor(Math.random() * colors.length) : Math.floor(Math.random() * hex_colors.length);
        color_name.textContent = change ? colors[random_index] : hex_colors[random_index];
        container.style.backgroundColor = change ? colors[random_index] : hex_colors[random_index];
    })

    // append
    header.appendChild(simple_color_button);
    header.appendChild(hex_color_button);
    container.appendChild(describe_bgColor);
    container.appendChild(color_name);
    container.appendChild(click_button);


