function solve() {
    document.getElementById('add').addEventListener('click', onAddClick);

    let tokensInfo = []

    function onAddClick(ev) {
        ev.preventDefault();
        let parent = ev.target.parentNode;

        const taskInput = document.getElementById("task");
        const descriptionInput = document.getElementById("description");
        const dateInput = document.getElementById("date");

        tokensInfo.task = taskInput
        tokensInfo.description = descriptionInput
        tokensInfo.date = dateInput

        if (taskInput.value !== '' && descriptionInput.value !== '' && dateInput.value !== '') {
            const orangeSection = document.querySelector('.orange').parentNode.parentNode;
            const [h1Tag, sectionToFill] = Array.from(orangeSection.querySelectorAll('div'));

            let articleTag = creatingArticles.call(tokensInfo);;

            let divButtons = document.createElement('div');
            divButtons.classList.add('flex');
            let buttonStart = document.createElement('button');
            buttonStart.textContent = `Start`;
            buttonStart.classList.add('green');
            buttonStart.addEventListener('click', addingToProgress);
            divButtons.appendChild(buttonStart);

            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = `Delete`;
            buttonDelete.classList.add('red');
            buttonDelete.addEventListener('click', deletingFunc);
            divButtons.appendChild(buttonDelete);

            articleTag.appendChild(divButtons);
            sectionToFill.appendChild(articleTag);
        };
        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

    };
    function addingToProgress(ev) {
        let inProgressSection = document.querySelector('#in-progress');

        let articleTag = creatingArticles.call(tokensInfo);

        let divButtons = document.createElement('div');
        divButtons.classList.add('flex');
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = `Delete`;
        buttonDelete.classList.add('red');
        buttonDelete.addEventListener('click', deletingFunc);
        divButtons.appendChild(buttonDelete);

        let buttonFinish = document.createElement('button');
        buttonFinish.textContent = `Finish`;
        buttonFinish.classList.add('orange');
        buttonFinish.addEventListener('click', onFinishEvent);
        divButtons.appendChild(buttonFinish);

        articleTag.appendChild(divButtons);
        inProgressSection.appendChild(articleTag);

        deletingFunc.call(null, ev)
    };

    function onFinishEvent(ev) {
        const greenSection = document.querySelector('.green').parentNode.parentNode;
        const [h1Tag, sectionToFill] = Array.from(greenSection.querySelectorAll('div'));

        let articleTag = creatingArticles.call(tokensInfo);
        sectionToFill.appendChild(articleTag);

        deletingFunc.call(null, ev)
    }
    function creatingArticles(task, descrition, data) {
        let articleTag = document.createElement('article');
        let h3Tag = document.createElement('h3');
        h3Tag.textContent = this.task.value;
        articleTag.appendChild(h3Tag);

        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${this.description.value}`;
        articleTag.appendChild(pDescription);

        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${this.date.value}`;
        articleTag.appendChild(pDate);

        return articleTag
    }

    function deletingFunc(ev) {
        const parent = ev.target.parentNode.parentNode;
        parent.remove();
    };
};