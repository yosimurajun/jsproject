function createProjectForm() {
    // const form = document.createElement('form');
    // form.setAttribute('id', 'createForm');
    // const input = document.createElement('input');
    // const button = document.createElement('button');
    // input.setAttribute('type', 'text');
    // input.setAttribute('name', 'title');
    // input.setAttribute('id', 'title');
    // button.textContent = 'create';
    // button.setAttribute('type', 'submit');
    
    // form.appendChild(input);
    // form.appendChild(button);
    // return form;
    

    return `<form id="createForm"><input type="text" name="title" id="title"><button type="submit">create</button></form>`
}

export default createProjectForm;