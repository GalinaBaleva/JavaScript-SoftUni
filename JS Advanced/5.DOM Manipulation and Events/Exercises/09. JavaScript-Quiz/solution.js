function solve() {
  let sections = Array.from(document.querySelectorAll('section'));

  const answers = {
    0: 'onclick',
    1: 'JSON.stringify()',
    2: 'A programming API for HTML and XML documents'
  };
  let trueAnswers = 0;

  for (let i = 0; i < sections.length; i++) {

    let buttons = Array.from(sections[i].querySelectorAll('p'));
    buttons.forEach(b => b.addEventListener('click', onClick));

    function onClick(ev) {
      if (ev.target.textContent === answers[i]) {
        trueAnswers++;
      };
      sections[i].style.display = 'none';

      if(i !== sections.length - 1){
        sections[i + 1].style.display = 'block';

      } else {
        const printingInfo = trueAnswers == 3 ? `You are recognized as top JavaScript fan!` : `You have ${trueAnswers} right answers`;
        let result = document.querySelector('.results-inner h1');
        result.parentNode.parentNode.style.display = 'block'
        console.log(result)
        result.textContent = printingInfo;
      }

    };
  }
}
