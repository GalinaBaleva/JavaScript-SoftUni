function solve() {

  const [first, loginForm] = document.querySelectorAll('.col-md-12 form');
  const tbody = document.getElementsByTagName('tbody')[0];

  const buyBtn = document.querySelectorAll('.col-md-12 button')[1];
  buyBtn.addEventListener('click', toBuy);

  if (loginForm != undefined) {
    const registerForm = first;
    registerForm.addEventListener('submit', onRegisterSubmit);
    loginForm.addEventListener('submit', onLogin);
  } else {

    if (sessionStorage.authToken === undefined) {
      window.location = '/2.Remote Data and Authentication/06.Furniture/home.html';
    };

    const createForme = first;
    createForme.addEventListener('submit', onCreate);
  };

  //Register

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

    if (password !== rePass) {
      alert(`The repeated password doesn't match!`);
      return;
    };

    const data = await sendingRequests('http://localhost:3030/users/register', 'post', { email, password, rePass });

    try {

      if (data.accessToken === undefined) {
        throw new Error(data.message);
      };

      sessionStorage.setItem('authToken', data.accessToken);
      window.location = '/2.Remote Data and Authentication/06.Furniture/homeLogged.html';

    } catch (error) {
      alert(error.message);
      return;
    };
  };

  //Login

  async function onLogin(event) {
    event.preventDefault()
    const loginData = new FormData(event.target);

    const email = loginData.get('email').trim();
    const password = loginData.get('password').trim();

    if (email == '' || password == '') {
      alert(`All fields are requiered!`);
      return;
    };

    const data = await sendingRequests('http://localhost:3030/users/login', 'post', { email, password });

    try {

      if (data.accessToken === undefined) {
        throw new Error(data.message);
      };

      sessionStorage.setItem('authToken', data.accessToken);
      window.location = '/2.Remote Data and Authentication/06.Furniture/homeLogged.html';

    } catch (error) {
      alert(error.message);
      return;
    };
  };

  async function sendingRequests(url, type, body, authToken) {
    const options = {
      method: type,
      headers: {
        'Content-Type': 'application/json'
      }

    };
    if (body != undefined) {
      options.body = JSON.stringify(body);
    };
    if (authToken != undefined) {
      options.headers['X-Authorization'] = authToken;
    }

    const res = await fetch(url, options);
    const data = res.json();

    return data;
  };

  //Create Product

  async function onCreate(event) {
    event.preventDefault();
    const dataCreate = new FormData(event.target);
    const some = [...dataCreate.values()].some(x => x == '');
    const body = [...dataCreate.entries()].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1] }), {});

    if (some === true) {
      alert(`All fields are required!`);
      return;
    };
    const respons = await sendingRequests('http://localhost:3030/data/furniture', 'post', body, sessionStorage.authToken)

    try {
      if (respons._id === undefined) {
        throw new Error(respons.message)
      };

      const articleToBuy = el('tr', '', [['data-id', respons._ownerId]],
        el('td', '', [],
          el('img', '', [['src', respons.img]])
        ),
        el('td', '', [],
          el('p', '', [], respons.name)
        ),
        el('td', '', [],
          el('p', '', [], respons.price)
        ),
        el('td', '', [],
          el('p', '', [], respons.factor)
        ),
        el('td', '', [],
          el('input', '', [['type', 'checkbox']], '')
        ),
      )

      tbody.appendChild(articleToBuy);

    } catch (error) {
      alert(error);
    };
  };

  //function to create elements

  function el(tagName, className, attrNames, ...text) {
    let tag = document.createElement(tagName);

    if (className != '') {
      tag.className = className;
    };

    if (attrNames.length !== 0) {
      for (let attr of attrNames) {
        tag.setAttribute(attr[0], attr[1]);
      };
    };

    for (let word of text) {
      if (typeof (word) === 'string' || typeof (word) === 'number') {
        word = document.createTextNode(word);
      };
      tag.appendChild(word);
    };

    return tag;
  };

  //bye product

  async function toBuy(event) {

    const cheked = [...tbody.querySelectorAll('input')].filter(x => x.checked);
    const products = cheked.map(elem => elem.parentElement.parentElement);
    const bodys = products.map(tr => {
      const [name, price, factor] = tr.querySelectorAll('td p');

      return { name: name.textContent, price: price.textContent };
    });
    
    // const results = bodys.map( body => async function () { await sendingRequests('http://localhost:3030/data/orders', 'post', body, sessionStorage.authToken)});
    const result = await sendingRequests('http://localhost:3030/data/orders', 'post', bodys[0], sessionStorage.getItem('authToken'));
    console.log(result)// Error "Invalid access token" with correct token
  };
};
solve()