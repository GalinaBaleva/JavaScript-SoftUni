function attachEvents() {

    const getWatherButton = document.getElementById('submit');
    getWatherButton.addEventListener('click', getWather);

    let url = `http://localhost:3030/jsonstore/forecaster/`;

    const wether = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }

    async function getWather() {
        let divForestCast = document.getElementById('forecast');
        const divToday = document.getElementById('current');
        let divCurrent = divToday.querySelectorAll('div');
        if (divCurrent[1] != undefined) {
            divCurrent[1].remove();
        }

        const divTree = document.getElementById('upcoming');
        let divUpcoming = divTree.querySelectorAll('div');
        if (divUpcoming[1] != undefined) {
            let toRemove = Array.from(divUpcoming).splice(1);
            toRemove.forEach(el => el.remove())
        }
        divForestCast.style.display = 'none';

        let location = document.getElementById('location');

        try {
            const responsGetCode = errorChecker('locations', undefined, undefined);
            const getLocationsCode = await responsGetCode;
            const code = getLocationsCode.filter(loc => loc.name == location.value);
            if (code.length == 0) {
                throw new Error(`Error`);
            };
            const [todayResponse, threeDaysResponse] = await Promise.all([errorChecker(undefined, 'today', code[0].code), errorChecker(undefined, 'upcoming', code[0].code)]);

            today(todayResponse);
            three(threeDaysResponse);

            divForestCast.style.display = 'block';
            location.value = '';

        } catch (error) {
            divForestCast.style.display = 'block';

            let divErrorToday = el('div', 'forecasts', error.message);
            divToday.appendChild(divErrorToday);

            let divError = el('div', 'forecasts', error.message);
            divTree.appendChild(divError);
            return;
        }
    }
    
    function today(obj) {
        const divToday = document.getElementById('current');
        let condition = obj.forecast.condition;

        let divContaner = el('div', 'forecasts',
            el('span', 'condition symbol', wether[condition]),
            el('span', 'condition',
                el('span', 'forecast-data', obj.name),
                el('span', 'forecast-data', `${obj.forecast.high}${wether.Degrees}/${obj.forecast.low}${wether.Degrees}`),
                el('span', 'forecast-data', obj.forecast.condition),
            ))
        divToday.appendChild(divContaner);
    };

    function three(obj) {
        const divTree = document.getElementById('upcoming');
        const divForecastInfo = el('div', 'forecast-info', '');
        for (let day of obj.forecast) {
            let condition = day.condition;

            let upcomingSpan = el('span', 'upcoming',
                el('span', 'symbol', wether[condition]),
                el('span', 'symbol', `${day.low}${wether.Degrees}/${day.high}${wether.Degrees}`),
                el('span', 'symbol', day.condition),
            );
            divForecastInfo.appendChild(upcomingSpan);
        }
        divTree.appendChild(divForecastInfo);


    }

    async function errorChecker(main, period, code) {
        try {
            let resp = '';
            if (!main) {
                resp = await fetch(`${url}${period}/${code}`);

            } else {
                let newUrl = `${url}${main}`
                //resp = await fetch(newUrl);
                resp = await fetch(newUrl);
            };
            if (resp.status != 200) {
                throw new Error(`Error`);
            };
            const data = resp.json();

            return data;
        } catch (error) {
            return error;
        }
    };

    function el(elm, atr, ...text) {
        let elTag = document.createElement(elm);

        elTag.classList = atr;

        for (let word of text) {
            if (typeof word == 'string' || typeof word == 'number') {
                word = document.createTextNode(word);
            }
            elTag.appendChild(word);
        }
        return elTag;
    }

}
attachEvents();