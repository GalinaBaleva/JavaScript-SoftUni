function addItem() {
    let writedText = document.getElementById("newItemText");

    let newliElement = document.createElement('li');
    newliElement.textContent = writedText.value;

    document.getElementById('items').appendChild(newliElement);

    writedText = '';
}