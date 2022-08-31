async function getInfo() {
    const button = document.getElementById('submit');
    button.disabled = true;
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const timeTable = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/` + stopId.value;

    stopName.textContent = `Loading...`;
    timeTable.replaceChildren();

    try {
        const response = await fetch(url);

        if (response.status != 200) {
            throw new Error(`Error`);
        }
        const data = await response.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            timeTable.appendChild(liElement);
        });

        button.disabled = false;

    } catch (error) {
        timeTable.replaceChildren();
        stopName.textContent = `Error`;
        button.disabled = false;
    }

}













// async function getInfo() {
//     const input = document.getElementById('stopId').value;
//     const resultName = document.getElementById('stopName');
//     const resutlBuses = document.getElementById('buses');

//     let url = `http://localhost:3030/jsonstore/bus/businfo/${input}`;


//     try {
//         resultName.textContent = `Loading...`;
//         resutlBuses.replaceChildren()
//         const response = await fetch(url);
//         if (response.status != 200) {
//             throw new Error(`Error`);
//         }
//         const data = await response.json();

//         resultName.textContent = data.name;
//         Object.entries(data.buses).forEach(el => {
//             let liElement = document.createElement('li');
//             liElement.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`
//             resutlBuses.appendChild(liElement);
//         })

//     } catch (error) {
//         resultName.textContent = `Error`;
//     }
// }