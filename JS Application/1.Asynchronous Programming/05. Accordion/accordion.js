async function solution() {
    const urlList = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const dataFromUrl = await getData(urlList);
    console.log(dataFromUrl)

}

async function getData(url) {
    try {
        const answer = await fetch(url);
        if (answer.status !== 200) {
            throw new Error(answer.status);
        }

        const data = await answer.json();

        return data;
    } catch (error) {
        return error;
    }
}



// async function solution() {
//     const urlList = `http://localhost:3030/jsonstore/advanced/articles/list`;


//     const respons = await fetch(urlList);
//     if (respons.status != 200) {
//         throw new Error(`Error`);
//     }
//     const data = await respons.json();

//     data.forEach(element => {
//         const url2 = `http://localhost:3030/jsonstore/advanced/articles/details/`;
//         const id = element._id;


//         fetch(url2 + id)
//             .then(respons => {
//                 if (respons.status != 200) {
//                     throw new Error(`Error`);
//                 };
//                 return respons.json();
//             }).then(data => createDivAccordion(data))
//             .catch(error => {
//                 throw new Error(error.message);
//             });
//     });
// };
// function createDivAccordion(obj) {
//     const divMain = document.getElementById('main');
//     let button = el('button', 'button', ['id', obj._id], `Show more`);

//     let divAccordion = el('div', 'accordion', undefined,
//         el('div', 'head', undefined,
//             el('span', undefined, undefined, obj.title),
//             button
//         ),
//         el('div', 'extra', undefined,
//             el('p', undefined, undefined, obj.content))
//     );
//     divMain.appendChild(divAccordion);
//     button.addEventListener('click', onClick)
// }

// async function onClick(e) {
//     let button = e.target;
//     const parent = e.target.parentNode.parentNode;
//     const extraChild = parent.lastChild;

//     if (extraChild.classList == 'extra') {
//         extraChild.classList.remove('extra');
//         button.textContent = 'Less';
//     } else {
//         extraChild.classList = 'extra';
//         button.textContent = 'Show more';
//     }


// }

// function el(tagName, className, atr, ...text) {
//     const tag = document.createElement(tagName);

//     if (className != undefined) {
//         tag.classList = className;
//     };

//     if (atr != undefined) {
//         tag.setAttribute(atr[0], atr[1]);
//     };

//     if (text[0] != undefined) {

//         for (let word of text) {
//             if (typeof word == 'string' || typeof word == 'number') {
//                 word = document.createTextNode(word);
//             }
//             tag.appendChild(word);
//         };
//     };
//     return tag;

// }
solution();

