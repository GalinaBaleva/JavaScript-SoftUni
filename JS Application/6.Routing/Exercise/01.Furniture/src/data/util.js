export function setUserData(data){
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
};

export function removeUserData(){
    sessionStorage.removeItem('userId', data._id);
    sessionStorage.removeItem('email', data.email);
    sessionStorage.removeItem('accessToken', data.accessToken);
};