async function getData() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f589d815c2ac462d6ed1c56b4af4cc33');
    if(response.status === 200) {
        const json = await response.json();
        return json;
    }
}

export default getData;