function validate() {
   let emailInput = document.querySelector('#email');
   const emailPattern = /(^[a-z]+@[a-z]+.[a-z]+$)/;

   emailInput.addEventListener('change', changingFunc);

   function changingFunc(e){
    let emailContent = e.target;

    if(!emailPattern.test(emailContent.value)){
        emailContent.classList = 'error';
    } else {
        emailContent.classList = 'none';
    }
    
   }
}