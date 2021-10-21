function attachEventsListeners() {
    document.getElementsByTagName('main')[0].addEventListener('click', converting);

    const constructorInfo = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function calculator(value, type) {
        const inDays = value / constructorInfo[type];

        return {
            days: inDays,
            hours: inDays * constructorInfo.hours,
            minutes: inDays * constructorInfo.minutes,
            seconds: inDays * constructorInfo.seconds
        }
    }

    const dayInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');


    function converting(ev) {
        if (ev.target.nodeName == 'INPUT' && ev.target.type === 'button') {
            const inputText = ev.target.parentElement.querySelector('input[type="text"]');
            
            const time = calculator(Number(inputText.value), inputText.id);

            dayInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }
       

    }
}