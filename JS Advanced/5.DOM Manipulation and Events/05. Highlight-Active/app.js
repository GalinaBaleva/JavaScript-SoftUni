function focused() {
    const inputList = (document.getElementsByTagName('input'));
    for(let section of inputList){
        section.addEventListener('focus', onFocus);
        section.addEventListener('blur', onBlurred);

        function onFocus(ev){
            ev.target.parentNode.classList.add('focused');
        };
        function onBlurred (ev){
            ev.target.parentNode.classList.remove('focused');
        }


    }
}