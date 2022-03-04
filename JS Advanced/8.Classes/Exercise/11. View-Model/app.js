class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(selector);
        Array.from(this._elements).forEach(el => el.addEventListener('click', () => this.value = el.value));
    };

    get elements() {
        return this._elements;
    };
    get value() {
        return this._elements[0].value;
    }
    set value(val) {
        return Array.from(this._elements).forEach(el => el.value = val);
    }
    isValid(){
        return !this._invalidSymbols.test(this._elements[0].value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox')
textbox.value = "Joro";