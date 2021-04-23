const words = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
]

const lorem_form = document.querySelector('#lorem-form');
const number = document.querySelector("#number");
let section = document.querySelector('.section');

lorem_form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('submit', number.value);
    const parseNumber = parseInt(number.value);
    const random_number = Math.floor(Math.random() * words.length);
    console.log(random_number);

    if (parseNumber > words.length || parseNumber < 0 || isNaN(parseNumber)) {
        section.innerHTML = words[random_number];
    } else {
        let tempText = words.slice(0, parseNumber);
        tempText.map(function(item) {
            return `<p class="result">${item}</p>`
        }).join("");
        
        number.value = 1;
        section.innerHTML = tempText;
    }

})
