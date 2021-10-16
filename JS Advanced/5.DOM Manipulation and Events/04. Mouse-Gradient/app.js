function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener("mousemove", onMove);
    
    const result = document.getElementById('result');

    function onMove(ev){
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100); //box.offsetWidth

        result.textContent = `${offset}%`;
        
    }

}