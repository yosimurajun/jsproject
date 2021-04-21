const header = document.querySelector('.about_content_right_header');
const buttons = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.about_content_right_body_content');
header.addEventListener('click', function (e) {
    // console.log(e.target);
    const id = e.target.dataset.id;

    buttons.forEach(function (btn) {
        btn.classList.remove("tap");
    });
    e.target.classList.add('tap');

    contents.forEach(function (content) {
        content.classList.remove('active');
    })

    const element = document.getElementById(id);
    element.classList.add('active');
    // console.log(element);

})