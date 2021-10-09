function solve() {
  const text = document.querySelector('#text').value;
  const convention = document.querySelector('#naming-convention').value;

  let textPermanentResult = text.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('');

  if (convention == "Camel Case" ) {
    textPermanentResult = textPermanentResult[0].toLowerCase() + textPermanentResult.slice(1);
  } else if (convention == "Pascal Case") {
    textPermanentResult = textPermanentResult;
  }  else {
    textPermanentResult = 'Error!';
  }

 let result = document.getElementById('result');
 result.textContent = textPermanentResult;
}