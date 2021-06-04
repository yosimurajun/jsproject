import './style.css';
import rain from './rain.gif';
import clear from './clear.gif';
import clouds from './clouds.gif';
// import wether_json from './components/get_data';

const icons = ['01d', '02d', '03d', '04d', '05d', '06d', '07d', '08d', '09d' , '10d', '11d', '13d', '50d'];

function component() {
    const element = document.createElement('div');
    const container_layout = document.createElement('div');
    const left_layout = document.createElement('div');
    const right_layout = document.createElement('div');
    const bottom_layout = document.createElement('div');

    //left 
    const describe_section = document.createElement('div');
    const describe_img = document.createElement('img');
    const describe_p = document.createElement('p');
    const describe_city = document.createElement('span');
    const degree_section = document.createElement('div');
    const change_location_section = document.createElement('div');
    const change_p = document.createElement('p');
    const change_input = document.createElement('input');

    //right 
    const humidity_section = document.createElement('div');
    const air_section = document.createElement('div');
    const chance_rain_section = document.createElement('div');
    const wind_speed_section = document.createElement('div');


    const humidity_p = document.createElement('p');
    const humidity_span = document.createElement('p');
    const air_p = document.createElement('p');
    const air_span = document.createElement('span');
    const chance_rain_p = document.createElement('p');
    const chance_rain_span = document.createElement('span');
    const wind_speed_p = document.createElement('p');
    const wind_speed_span = document.createElement('span');

    //

    async function getData(city = 'london') {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=f589d815c2ac462d6ed1c56b4af4cc33`);
        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            const response_7days = await fetch(`https://api.openweathermap.org/data/2.5/onecall?&lat=${json.coord.lat}&lon=${json.coord.lon}&units=metric&exclude=hourly,minutely&appid=f589d815c2ac462d6ed1c56b4af4cc33`);
            const json_7day = await response_7days.json();


            if(json.weather[0].main == 'Rain') {
                console.log('rain');
                element.style.backgroundImage = `url('${rain}')`;
                element.style.backgroundRepeat = 'none';
                element.style.backgroundSize = 'cover';
            } else if(json.weather[0].main == 'Clouds') {
                console.log('clouds');
                element.style.backgroundImage = `url('${clouds}')`;
                element.style.backgroundRepeat = 'none';
                element.style.backgroundSize = 'cover';
            } else {
                console.log('clear');
                element.style.backgroundImage = `url('${clear}')`;
                element.style.backgroundRepeat = 'none';
                element.style.backgroundSize = 'cover';
            } 
            left_section(json);
            right_section(json);
            bottom_section(json_7day);
        }

        // const data = await response_7days.json();
        // console.log(data);
    }
    getData();

    //element
    element.className = 'index';
    

    //container 
    container_layout.className = 'container_layout';

    // left layout

    function left_section(wether) {

        left_layout.className = 'left_layout';


        describe_section.className = 'describe section';

        const temp_icon = wether.weather[0].icon;

        if(icons.includes(temp_icon)){
            describe_img.src = `http://openweathermap.org/img/wn/${temp_icon}@2x.png`;
        }
        
        describe_p.textContent =  wether.weather[0].description;
        describe_city.className = 'city';
        describe_city.textContent = `${wether.name}, ${wether.sys.country}` ;
        describe_section.appendChild(describe_img);
        describe_section.appendChild(describe_p);
        describe_section.appendChild(describe_city);




        degree_section.className = 'degree section';
        degree_section.textContent = `${Math.round(wether.main.temp)} °C`;


        change_location_section.className = 'change_location section';
        change_p.textContent = 'change location';
        change_input.className = 'change_input';
        change_location_section.appendChild(change_p);
        change_location_section.appendChild(change_input);
        change_input.addEventListener('keydown', (event) => {
            const cityname = event.target.value;
            console.log(event.key);
            if (event.key === 'Enter') {
                getData(cityname);
                event.target.value = '';
            }
        });

        left_layout.appendChild(describe_section);
        left_layout.appendChild(degree_section);
        left_layout.appendChild(change_location_section);

        container_layout.appendChild(left_layout);

    }





    // right layout

    function right_section(wether) {


        right_layout.className = 'right_layout';

        humidity_section.className = 'section';

        humidity_p.textContent = 'humidity';
        humidity_span.textContent = `${wether.main.humidity} %`;
        humidity_section.appendChild(humidity_p);
        humidity_section.appendChild(humidity_span);

        air_section.className = 'section';


        air_p.textContent = 'air pressure';
        air_span.textContent = wether.main.pressure;
        air_section.appendChild(air_p);
        air_section.appendChild(air_span);


        chance_rain_section.className = 'section';

        chance_rain_p.textContent = 'chance of rain';
        chance_rain_span.textContent = `${wether.clouds.all} %`;
        chance_rain_section.appendChild(chance_rain_p);
        chance_rain_section.appendChild(chance_rain_span);

        wind_speed_section.className = 'section';

        wind_speed_p.textContent = 'wind speed';
        wind_speed_span.textContent = `${wether.wind.speed} km/h`;
        wind_speed_section.appendChild(wind_speed_p);
        wind_speed_section.appendChild(wind_speed_span);


        right_layout.appendChild(humidity_section);
        right_layout.appendChild(air_section);
        right_layout.appendChild(chance_rain_section);
        right_layout.appendChild(wind_speed_section);
        container_layout.appendChild(right_layout);
    }



    // bottom layout
    function bottom_section(data) {

        bottom_layout.className = 'bottom_layout';
        const arr = [...data.daily];
        const newArr = arr.slice(1, arr.length);

        bottom_layout.innerHTML = '';

        newArr.forEach((item) => {
            // console.log(item.weather[0].main);
            const item_layout = document.createElement('div');
            const item_layout_header = document.createElement('div');
            const date = document.createElement('p');
            const item_layout_body = document.createElement('div');
            const item_img = document.createElement('img');
            const degree = document.createElement('p');
            const item_layout_footer = document.createElement('div');
            const feellike = document.createElement('span');
            feellike.className = 'feellike';

            item_layout.className = 'item_layout';
            
            date.textContent = datefomat(item.dt);
            item_layout_header.className = 'bottom_section_header'
            item_layout_header.appendChild(date);
            // console.log(item.weather[0].icon);
            if(icons.includes(item.weather[0].icon)){
                item_img.src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                item_img.className = 'bottom_icon';
            }
            degree.textContent = `${Math.round(item.temp.day)} °C`;
            item_layout_body.className = 'bottom_section_body';
            item_layout_body.appendChild(item_img);
            item_layout_body.appendChild(degree);

            feellike.textContent = `${Math.round(item.feels_like.day)} °C`;
            item_layout_footer.appendChild(feellike);


            item_layout.appendChild(item_layout_header);
            item_layout.appendChild(item_layout_body);
            item_layout.appendChild(item_layout_footer);
            bottom_layout.appendChild(item_layout);
            element.appendChild(bottom_layout);
        })
    }


    // append container and bottom layout
    element.appendChild(container_layout);

    return element;
}

function datefomat(date) {
    const format = new Date(date * 1000);
    const days = ['sunday', 'monday', 'thuesday', 'wensday', 'thurday', 'friday', 'saturday'];
    const day = days[format.getDay()];
    return day;
}


document.body.appendChild(component());