function solve() {
    let infoTable = document.getElementsByClassName('info')[0];
    const url = `http://localhost:3030/jsonstore/bus/schedule/`;
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    arriveBtn.disabled = true;
    
    
    let nextStop = {
        name: "",
        next: "depot"
    }

    async function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        infoTable.textContent = `Loading...`

      try{

        const response = await fetch(url + nextStop.next);

        if(response.status != 200){
            throw new Error(`Error`);
        }
        const data = await response.json();
        infoTable.textContent = `Next stop ${data.name}`;
        nextStop.name = data.name;
        nextStop.next = data.next; 
      } catch (error){
        infoTable.textContent = error;
      }
    };

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

        infoTable.textContent = `Arriving at ${nextStop.name}`;
    };

    return {
        depart,
        arrive
    }
}
let result = solve();


// function solve() {
//     const departButton = document.getElementById('depart');
//     departButton.addEventListener('click', depart);
//     const arriveButton = document.getElementById('arrive');
//     arriveButton.addEventListener('click', arrive);
//     const infoBox = document.getElementById('info');

//     let stop = {
//         previos: 'depot',
//         next: 'depot'

//     };
    
//     async function depart() {
        
//         try{
//             let url = `http://localhost:3030/jsonstore/bus/schedule/`+ stop.next;
//             infoBox.textContent = `Loading...`
//             departButton.disabled = true;
//             arriveButton.disabled = false;
//             const resp = await fetch(url);
//             if(resp.status != 200){
//                 throw new Error(`Error`);
//             }
//             const data = await resp.json()
//             infoBox.textContent = `Next stop ${data.name}`
//             stop.next = data.next;
//             stop.previos = data.name;

//         } catch (error){
//             infoBox.textContent = `Error`;

//             departButton.disabled = true;
//             arriveButton.disabled = true;
//         }
//     };

//     async function arrive() {
//         infoBox.textContent = `Loading...`;
//         arriveButton.disabled = true;
//         departButton.disabled = false;

//         infoBox.textContent = `Arriving at ${stop.previos}`;
//     };

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();