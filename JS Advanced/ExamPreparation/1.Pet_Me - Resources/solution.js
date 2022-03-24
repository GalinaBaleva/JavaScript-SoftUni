function solve() {
    let container = Array.from(document.querySelectorAll('#container input'));
    let adoptionCont = document.querySelector('#adoption ul');
    let adopted = document.querySelector('#adopted ul');
    let addButton = document.querySelector('#container button');

    addButton.addEventListener('click', onAdoptionContainer);


    function onAdoptionContainer(e) {
        e.preventDefault()
        let [name, age, kind, currentOwner] = container.map(a => a.value.trim());
        if (container.map(a => a.value.trim()).some(a => a === '') || isNaN(Number(age))) {
            return;
        } else {
            let pet = el('li',
                el('p',
                    el('strong', name),
                    'is a',
                    el('strong', age),
                    'year old',
                    el('strong', kind),
                ),
                el('span', `Owner: ${currentOwner}`),
                el('button', `Contact with owner`)
            )

            adoptionCont.appendChild(pet)
        }
    }
}
function el(type, ...text) {
    let element = document.createElement(type);

    for (let word of text) {
        if (typeof word === 'string' || typeof word === 'number') {
            word = document.createTextNode(word);
            element.appendChild(word);
        }
    }


}


