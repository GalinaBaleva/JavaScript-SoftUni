function addItem() {
    const textInput = document.getElementById('newItemText')
    const valueInput = document.getElementById('newItemValue');

    const selectSection = document.getElementById('menu');
    const newOption = document.createElement('option');
    newOption.textContent = textInput.value
    newOption.value = valueInput.value;
    selectSection.appendChild(newOption);
    textInput.value = '';
    valueInput.value = '';
}
