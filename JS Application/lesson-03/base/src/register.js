const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', onSubnit);

function onSubnit(event){
               event.preventDefault();
               const formData = new FormData(event.target);
               const some = [...formData.values()].some(x => x === '');
               if(some == true){
                              alert(`All fields are required!`);
                              return;
               };

               const body = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, {[key]: value.trim()}), {});
               if(body.password !== body.rePass){
                              alert(`The password doesn't match!`);
                              return;
               };

               console.log(body)

}