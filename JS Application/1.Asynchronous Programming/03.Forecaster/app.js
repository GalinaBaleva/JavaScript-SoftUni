function attachEvents() {

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', onClick);

    const conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }


    async function onClick(e) {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;

        const divForcast = document.getElementById('forecast');
        divForcast.style.display = 'none';
        const inputLocation = document.getElementById('location');

        const divCurrent = document.getElementById('current');
        let current = divCurrent.children[0];
        const divUpcoming = document.getElementById('upcoming');
        let upcoming = divUpcoming.children[0];

        if (divCurrent.children.length > 1) {
            divCurrent.children[1].remove();
            divUpcoming.children[1].remove();
        };

        let response = await requests(url);

        if (response === undefined) {
            callError(current, divCurrent, upcoming, divUpcoming, divForcast);
            return;
        };

        let responseFilter = response.filter(x => x.name == inputLocation.value);
        inputLocation.value = '';

        if (responseFilter.length <= 0) {
            callError(current, divCurrent, upcoming, divUpcoming, divForcast);
            return;

        } else {
            today(responseFilter[0].code, divCurrent, divForcast, current, upcoming);
            threeDays(responseFilter[0].code, divUpcoming, divForcast, upcoming);
        };

    }

    async function today(code, divCurrent, divForcast, current, upcoming) {
        let urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const answerToday = await requests(urlToday);

        if (answerToday === undefined) {
            callError(current, divCurrent, upcoming, divUpcoming, divForcast);
            return;
        };

        divForcast.style.display = 'block';
        current.textContent = `Current conditions`;
        upcoming.textContent = `Three-day forecast`;

        const temperature = `${answerToday.forecast.low}${conditions.Degrees}/${answerToday.forecast.high}${conditions.Degrees}`;

        let spanForecases = el('div', 'forecasts',
            el('span', 'condition symbol', conditions[answerToday.forecast.condition]),
            el('span', 'condition',
                el('span', 'forecast-data', answerToday.name),
                el('span', 'forecast-data', temperature),
                el('span', 'forecast-data', answerToday.forecast.condition)));

        divCurrent.appendChild(spanForecases);
    }

    async function threeDays(code, divUpcoming, divForcast, upcoming) {
        let urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        const answerThreeDays = await requests(urlThreeDays);

        if (answerThreeDays === undefined) {
            callError(current, divCurrent, upcoming, divUpcoming, divForcast);
            return;
        };
        let divForestThreeDays = el('div', 'forecast-info', '');
        divUpcoming.appendChild(divForestThreeDays)

        let spansUpcoming = answerThreeDays.forecast.forEach(element => {
            const spanUpcoming = el('span', 'upcoming',
                el('span', 'symbol', conditions[element.condition]),
                el('span', 'forecast-data', `${element.low}${conditions.Degrees}/${element.high}${conditions.Degrees}`),
                el('span', 'forecast-data', element.condition)
                )
                divForestThreeDays.appendChild(spanUpcoming);
        });
    }

    async function requests(url) {
        try {
            const answer = await fetch(url);
            if (answer.status != 200) {
                throw new Error(`Error`);
            };
            const data = await answer.json();

            return data;

        } catch (error) {
            return error.status;
        }
    }

    function callError(current, divCurrent, upcoming, divUpcoming, divForcast) {
        divForcast.style.display = 'block';
        current.textContent = `Error`;
        upcoming.textContent = `Error`;
    }

    function el(tag, atr, ...text) {
        let elTag = document.createElement(tag);
        elTag.classList = atr;

        for (let word of text) {
            if (typeof (word) == 'string' || typeof (word) == 'number') {
                word = document.createTextNode(word);
            }
            elTag.appendChild(word);
        }
        return elTag;
    }

    return;
}


// function attachEvents() {

//     const getWatherButton = document.getElementById('submit');
//     getWatherButton.addEventListener('click', getWather);

//     let url = `http://localhost:3030/jsonstore/forecaster/`;

//     const wether = {
//         'Sunny': '☀',
//         'Partly sunny': '⛅',
//         'Overcast': '☁',
//         'Rain': '☂',
//         'Degrees': '°'
//     }

//     async function getWather() {
//         let divForestCast = document.getElementById('forecast');
//         const divToday = document.getElementById('current');
//         let divCurrent = divToday.querySelectorAll('div');
//         if (divCurrent[1] != undefined) {
//             divCurrent[1].remove();
//         }

//         const divTree = document.getElementById('upcoming');
//         let divUpcoming = divTree.querySelectorAll('div');
//         if (divUpcoming[1] != undefined) {
//             let toRemove = Array.from(divUpcoming).splice(1);
//             toRemove.forEach(el => el.remove())
//         }
//         divForestCast.style.display = 'none';

//         let location = document.getElementById('location');

//         try {
//             const responsGetCode = errorChecker('locations', undefined, undefined);
//             const getLocationsCode = await responsGetCode;
//             const code = getLocationsCode.filter(loc => loc.name == location.value);
//             if (code.length == 0) {
//                 throw new Error(`Error`);
//             };
//             const [todayResponse, threeDaysResponse] = await Promise.all([errorChecker(undefined, 'today', code[0].code), errorChecker(undefined, 'upcoming', code[0].code)]);

//             today(todayResponse);
//             three(threeDaysResponse);

//             divForestCast.style.display = 'block';
//             location.value = '';

//         } catch (error) {
//             divForestCast.style.display = 'block';

//             let divErrorToday = el('div', 'forecasts', error.message);
//             divToday.appendChild(divErrorToday);

//             let divError = el('div', 'forecasts', error.message);
//             divTree.appendChild(divError);
//             return;
//         }
//     }

//     function today(obj) {
//         const divToday = document.getElementById('current');
//         let condition = obj.forecast.condition;

//         let divContaner = el('div', 'forecasts',
//             el('span', 'condition symbol', wether[condition]),
//             el('span', 'condition',
//                 el('span', 'forecast-data', obj.name),
//                 el('span', 'forecast-data', `${obj.forecast.high}${wether.Degrees}/${obj.forecast.low}${wether.Degrees}`),
//                 el('span', 'forecast-data', obj.forecast.condition),
//             ))
//         divToday.appendChild(divContaner);
//     };

//     function three(obj) {
//         const divTree = document.getElementById('upcoming');
//         const divForecastInfo = el('div', 'forecast-info', '');
//         for (let day of obj.forecast) {
//             let condition = day.condition;

//             let upcomingSpan = el('span', 'upcoming',
//                 el('span', 'symbol', wether[condition]),
//                 el('span', 'symbol', `${day.low}${wether.Degrees}/${day.high}${wether.Degrees}`),
//                 el('span', 'symbol', day.condition),
//             );
//             divForecastInfo.appendChild(upcomingSpan);
//         }
//         divTree.appendChild(divForecastInfo);
//     }

//     async function errorChecker(main, period, code) {
//         try {
//             let resp = '';
//             if (!main) {
//                 resp = await fetch(`${url}${period}/${code}`);

//             } else {
//                 let newUrl = `${url}${main}`
//                 //resp = await fetch(newUrl);
//                 resp = await fetch(newUrl);
//             };
//             if (resp.status != 200) {
//                 throw new Error(`Error`);
//             };
//             const data = resp.json();

//             return data;
//         } catch (error) {
//             return error;
//         }
//     };

//     function el(elm, atr, ...text) {
//         let elTag = document.createElement(elm);

//         elTag.classList = atr;

//         for (let word of text) {
//             if (typeof word == 'string' || typeof word == 'number') {
//                 word = document.createTextNode(word);
//             }
//             elTag.appendChild(word);
//         }
//         return elTag;
//     }

// }
attachEvents();