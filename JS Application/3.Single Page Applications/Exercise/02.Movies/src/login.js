const loginSection = document.getElementById('form-login');
loginSection.remove()

export function onLogin(event){
               if(event !== undefined){
                              event.preventDefault();
               };
               
}