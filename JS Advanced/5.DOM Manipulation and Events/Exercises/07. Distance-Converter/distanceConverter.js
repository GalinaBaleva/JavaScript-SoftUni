function attachEventsListeners() {
    let body = document.querySelector('body');

    let convertButton = body.querySelector('#convert');
    convertButton.addEventListener('click', converting);

    let distanceValues = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function converting(ev) {
        let inputUnits = body.querySelector('#inputUnits').value;
        let outputDistance = body.querySelector('#outputUnits').value;

        let input = Number(body.querySelector('#inputDistance').value);

        let totalInputUnits = distanceValues[inputUnits] * input / distanceValues[outputDistance];
        let resultOutput = body.querySelector('#outputDistance');
        resultOutput.disabled = false;
        resultOutput.value = totalInputUnits;
    };
};

// function attachEventsListeners() {
//     let convertButton = document.querySelector('#convert');
//     convertButton.addEventListener('click', converting);


//     let distanceValues = {
//         km: 1000,
//         m: 1,
//         cm: 0.01,
//         mm: 0.001,
//         mi: 1609.34,
//         yrd: 0.9144,
//         ft: 0.3048,
//         in: 0.0254,
//     }

//     function converting(ev) {
//         let inputUnits = document.querySelector('#inputUnits').value;
//         let outputDistance = document.querySelector('#outputUnits').value;

//         let input = Number(document.querySelector('#inputDistance').value);

//         let totalInputUnits = distanceValues[inputUnits] * input / distanceValues[outputDistance];
//         let resultOutput = document.querySelector('#outputDistance');
//         resultOutput.disabled = false;
//         resultOutput.value = totalInputUnits;
//     };
// };