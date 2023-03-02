export function setUserData(data){
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
};

export function removeUserData(data){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
};