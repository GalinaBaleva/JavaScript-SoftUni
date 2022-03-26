function solve() {
    let container = Array.from(document.querySelectorAll('#container input'));
    let adoptionCont = document.querySelector('#adoption ul');
    let adopted = document.querySelector('#adopted ul');
    let addButton = document.querySelector('#container button');

    addButton.addEventListener('click', onAdoptionContainer);


    function onAdoptionContainer(e) {
        e.preventDefault()
        let [name, age, kind, currentOwner] = container.map(a => a.value.trim());
        if (container.map(a => a.value.trim()).some(a => a == '') || Number.isNaN(Number(age))) {
            return;
        } else {
            let buttonContact = el('button', `Contact with owner`)
            buttonContact.addEventListener('click', toYesTakeIt);
            let pet = el('li',
                el('p',
                    el('strong', name),
                    ' is a ',
                    el('strong', age),
                    ' year old ',
                    el('strong', kind),
                ),
                el('span', `Owner: ${currentOwner}`),
                buttonContact
            )

            adoptionCont.appendChild(pet)
            container.map(el => el.value = '');
        }
    }

    function toYesTakeIt(e) {
        let parent = e.target.parentNode;
        let buttonToRemove = parent.querySelector('button');
        buttonToRemove.remove()
        let takeItButton = el('button', 'Yes! I take it!');

        let divTag = el('div',
            elWithAtr('input', { placeholder: 'Enter your names' }),
            takeItButton
        )
        takeItButton.addEventListener('click', toAdoptedContainer)
        parent.appendChild(divTag);
    }

    function toAdoptedContainer(e) {
        let parent = e.target.parentNode.parentNode;
        let newOwner = parent.querySelector('div input')
        if(!newOwner.value){
            return;
        }
        newOwner = newOwner.value;
        let info = Array.from(parent.querySelectorAll('p strong'));
        let [name, age, kind] = info.map(a => a.textContent.trim())
        let buttonChecked = el('button', `Checked`)
        buttonChecked.addEventListener('click', checkedFunc);
        let pet = el('li',
            el('p',
                el('strong', name),
                ' is a ',
                el('strong', age),
                ' year old ',
                el('strong', kind),
            ),
            el('span', `New Owner: ${newOwner}`),
            buttonChecked
        );
        adopted.appendChild(pet);
        parent.remove()
    }

    function checkedFunc(e) {
        e.target.parentNode.remove();
    }

    function elWithAtr(type, atr, ...text) {
        let element = document.createElement(type);

        for (let atribut in atr) {
            element[atribut] = atr[atribut];
        };
        return element;
    }

    function el(type, ...text) {
        let element = document.createElement(type);

        for (let word of text) {
            if (typeof word === 'string' || typeof word === 'number') {
                word = document.createTextNode(word);
            }
            element.appendChild(word);
        }
        return element;
    }
}


