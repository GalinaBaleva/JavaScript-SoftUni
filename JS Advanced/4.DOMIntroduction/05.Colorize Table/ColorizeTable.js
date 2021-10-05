function colorize() {
    const elements = Array.from(document.querySelectorAll("table tr")); //('table tr:nth-child(even)')селектира нечетните индекси
    
    
    for (let i = 1; i < elements.length; i += 2) {
        elements[i].style.background = 'teal';
    }
}