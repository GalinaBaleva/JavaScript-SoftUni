function attachEvents() {
    const location = document.getElementById('location').value;
    let divForestCast = document.getElementById('forecast');
    const getWatherButton = document.getElementById('submit');
    getWatherButton.addEventListener('click', getWather);

    let url = `http://localhost:3030/jsonstore/forecaster/`;

    const wether = {
        'Sunny': '#x2600',
        'Partly sunny': '#x26C5',
        'Overcast': '#x2601',
        'Rain': '#x2614',
        'Degrees': '#176'
    }

    async function getWather() {

        const responsGetCode = errorChecker('locations', undefined, undefined);
        const getLocationsCode = await responsGetCode;
        const code = getLocationsCode.filter(loc => loc.name == location);


        const todayResponse = errorChecker(undefined, 'today', code[0].code);
        const threeDaysResponse = errorChecker(undefined, 'upcoming', code[0].code);
        const todayData = await todayResponse;
        const threeDays = await threeDaysResponse;

        today(todayData)
        three(threeDays)
    }

    function today(obj) {
        console.log(obj)
    };

    function three(obj) {
        console.log(obj)
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
            divForestCast.style.display = 'block';
            divForestCast.textContent = `${error}`;
        }
    }


}

attachEvents();