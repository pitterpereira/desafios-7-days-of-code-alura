document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();
    let input = document.querySelector("#searchInput").value;



    if (input !== '') {
        clear()
        showWarning('Loading ...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&units=metric&appid=d06cdb298fafc83c520d5ab677fc477e`
        // api key hardcoded for tests, use the .env file 
        let res = await fetch(url);
        let json = await res.json();


        if (json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg - 90
            })

        }
        else {
            clear()
            showWarning('Not found try again');
        }



    }
    else { clear() }
})

function clear() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function showWarning(message) {
    document.querySelector('.aviso').innerHTML = message;
}

function showInfo(json) {

    showWarning('');


    document.querySelector('.titulo').innerHTML = `${json.name} , ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle}deg)`


    document.querySelector('.resultado').style.display = 'block';
}