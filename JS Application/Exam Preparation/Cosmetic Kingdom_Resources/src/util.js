export function getUserData(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    return userData;
};

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function clearUserData(){
    sessionStorage.clear('userData');
};


export function createSubmitHandler(callback){
    return function (event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event.target);

    };
};