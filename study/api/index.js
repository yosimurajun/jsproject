// if (window.XMLHttpRequest) { // Mozilla, Safari, ...
//     request = new XMLHttpRequest();
// } else if (window.ActiveXObject) { // IE
//     try {
//         request = new ActiveXObject('Msxml2.XMLHTTP');
//     }
//     catch (e) {
//         try {
//             request = new ActiveXObject('Microsoft.XMLHTTP');
//         }
//         catch (e) { }
//     }
// }

// // Open, send.
// request.open('GET', 'https://url.com/some/url', true);
// request.send(null);

// weather api
fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f589d815c2ac462d6ed1c56b4af4cc33')
    .then((response) => {

    }).catch((err) => {

    })

// giphy(gif)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=q8hbl5qY9Xxr3bYm1ZvrqhxC8JVAO7kG&s=cats', { mode: 'cors' })
    .then((response) => {

    }).catch((err) => {

    })



    async function loadJson(url) {
        const response = await fetch(url);
        if(response.status === 200) {
            const json = await response.json();
            return json;
        }
        throw new Error(response.status);
    }

    loadJson('no-such-user.json').catch(alert);