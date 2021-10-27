function solve() {
    const divExercise = document.getElementById('exercise');
    let [firstTextArea, secondTextArea] = Array.from(divExercise.getElementsByTagName('textarea'))

    const [generatingButton, buyButton] = Array.from(document.getElementsByTagName('button'));
    generatingButton.addEventListener('click', generator);
    buyButton.addEventListener('click', buy);

    function generator(e) {
        let textArea = JSON.parse(firstTextArea.value);
        for (let product of textArea) {
            let row = document.createElement('tr');

            let colonImg = document.createElement('td');
            let colonName = document.createElement('td');
            let colonPrice = document.createElement('td');
            let colonDecFactor = document.createElement('td');
            let colonCheckbox = document.createElement('td');

            let img = document.createElement('img');
            let pName = document.createElement('p');
            let pPrice = document.createElement('p');
            let pDecFactor = document.createElement('p');
            let inputCheckbox = document.createElement('input');

            img.src = product.img;
            pName.textContent = product.name;
            pPrice.textContent = Number(product.price);
            pDecFactor.textContent = Number(product.decFactor);
            inputCheckbox.type = 'checkbox';

            colonImg.appendChild(img);
            colonName.appendChild(pName);
            colonPrice.appendChild(pPrice);
            colonDecFactor.appendChild(pDecFactor);
            colonCheckbox.appendChild(inputCheckbox);

            row.appendChild(colonImg);
            row.appendChild(colonName);
            row.appendChild(colonPrice);
            row.appendChild(colonDecFactor);
            row.appendChild(colonCheckbox);

            let newRowAppending = divExercise.getElementsByTagName('tbody')[0];
            newRowAppending.appendChild(row);
        }
    }
    function buy(e) {
        let checkedBoxes = Array.from(divExercise.querySelectorAll('input[type="checkbox"]:checked'));
        let boughtedProducts = [];
        let totalPrice = 0;
        let avDecFactor = 0;
        for (let box of checkedBoxes) {
            let parent = box.parentElement.parentElement.children;

            boughtedProducts.push(parent[1].textContent);
            totalPrice += Number(parent[2].textContent);
            avDecFactor += Number(parent[3].textContent);


        }

        secondTextArea.textContent = `Bought furniture: ${boughtedProducts.join(', ')}
Total price: ${totalPrice}
Average decoration factor: ${avDecFactor /= checkedBoxes.length}`

    }


}
