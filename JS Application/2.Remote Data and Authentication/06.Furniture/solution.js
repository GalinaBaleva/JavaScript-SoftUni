function solve() {
  const [registerForm, loginForm] = document.querySelectorAll('.col-md-12 form');
  registerForm.addEventListener('submit', onRegisterSubmit);
  loginForm.addEventListener('submit', onLogin)


  async function onRegisterSubmit(event) {
    event.preventDefault();
    const registerData = new FormData(event.target);

    const email = registerData.get('email').trim();
    const password = registerData.get('password').trim();
    const rePass = registerData.get('rePass').trim();

    if (email == '' || password == '' || rePass == '') {
      alert(`All fields are requiered!`);
      return;
    };

    if(password !== rePass){
      alert(`The repeated password doesn't match!`);
      return;
    };

    const data = await sendingRequests('http://localhost:3030/users/register', 'post', { email, password, rePass });

    try {
      if(data.accessToken === undefined){
        throw new Error(data.message);
      };
      sessionStorage.setItem('authToken', data.accessToken);
      window.location = '/2.Remote Data and Authentication/06.Furniture/homeLogged.html';
    } catch (error) {
      alert(error.message);
      return;
    }


  }

  async function onLogin(event) {
    event.preventDefault()
    console.log(event.target)
  };

  async function sendingRequests(url, type, body) {
    const options = {
      method: type,
      headers: {
        'Content-Type': 'application/json'
      }
      
    };
    if (body != undefined) {
      options.body = JSON.stringify(body);
    };

    const res = await fetch(url, options);
    const data = res.json();

    return data;
  }
}
solve()