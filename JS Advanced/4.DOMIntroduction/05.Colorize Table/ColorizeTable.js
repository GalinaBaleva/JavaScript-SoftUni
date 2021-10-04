function colorize() {
    const elements = Array.from(document.querySelectorAll("table tr"));
    
    for (let i = 1; i < elements.length; i += 2) {
        elements[i].style.background = 'teal';
    }
}