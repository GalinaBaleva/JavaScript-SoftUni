function notify(message) {
  let button = document.querySelector('#content button');
  let notification = document.querySelector('#notification');

    notification.style.display = 'block';
    notification.textContent = message;

  notification.addEventListener('click', hiding);
  function hiding() {
    notification.style.display = 'none';
  };

};