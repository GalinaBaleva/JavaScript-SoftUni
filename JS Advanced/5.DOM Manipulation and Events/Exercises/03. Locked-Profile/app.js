function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onClick));

    function onClick(ev) {
        const parent = ev.target.parentElement;
        const isUnlocked = parent.querySelector('input[type="radio"][value = "unlock"]').checked;

        if (isUnlocked) {
            const hiddenFieds = parent.querySelector('div')
            const textOfButton = parent.querySelector('button');

            if (textOfButton.textContent === 'Show more') {
                hiddenFieds.style.display = 'block';
                textOfButton.textContent = `Hide it`;
            } else {
                hiddenFieds.style.display = ''; // ''-това връща style.display към оригинална зададената стойност
                textOfButton.textContent = `Show more`;
            }

        }

    }
}