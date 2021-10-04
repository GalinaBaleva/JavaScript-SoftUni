function editElement(element, match, replacer) {
    const text = element.textContent;
    
    // element.textContent = text.split(match).join(replacer);

    const matcher = new RegExp(match, 'g');
    const edited = text.replace(matcher, replacer);
    element.textContent = edited;
}