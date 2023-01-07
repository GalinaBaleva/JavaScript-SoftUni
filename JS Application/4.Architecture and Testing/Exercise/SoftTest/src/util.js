export  function setUserData(data){
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
};

export function crearUserData(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
};

export function createSubmitHandler(formId, callback){
    document.getElementById(formId).addEventListener('submit', onSubmit);

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event);
    };


}