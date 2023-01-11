export function setUserData(data) {
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
};

export function clearUserData() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
};

export function createSubmitHandler(formId, callback) {
    document.getElementById(formId).addEventListener('submit', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event);
    };
};

export function el(tagName, className, attrName, ...text) {
    let tag = document.createElement(tagName);

    if (className.length > 0) {
        for(let clas of className){
            tag.classList.add(clas);
        }
    };

    if (attrName.length > 0) {
        for (let attr of attrName) {
            tag.setAttribute(attr[0], attr[1]);
        };
    };

    for (let word of text) {
        if (typeof (word) == 'string' || typeof (word) == 'number') {
            word = document.createTextNode(word);
        };
        tag.appendChild(word);
    };

    return tag;
}