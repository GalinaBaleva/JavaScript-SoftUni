export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    return data;
};

export function clearUserData() {
    sessionStorage.clear();
};

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = Object.fromEntries(formData);

        callback(result, event.target);
    };
};
