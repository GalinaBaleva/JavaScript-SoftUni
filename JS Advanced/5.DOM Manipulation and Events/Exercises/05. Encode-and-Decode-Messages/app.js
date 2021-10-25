function encodeAndDecodeMessages() {

    let textAreaInput = document.getElementsByTagName('textarea')[0];
    let textAreaOutput = document.getElementsByTagName('textarea')[1];

    const buttInput = document.getElementsByTagName('button')[0];
    const buttOutput = document.getElementsByTagName('button')[1];

    buttInput.addEventListener('click', encodingText);
    buttOutput.addEventListener('click', decodingText);

    function encodingText(e) {
        let textToEncoding = textAreaInput.value;
        textAreaInput.value = '';
        textToEncoding = [...textToEncoding]
            .map(x => String.fromCharCode((x.charCodeAt()) + 1))
            .join('');
        return textAreaOutput.value = textToEncoding;
    }

    function decodingText(e) {
        let textToDecoding = textAreaOutput.value;
        textToDecoding = [...textToDecoding]
            .map(x => String.fromCharCode((x.charCodeAt() - 1)))
            .join('');
        return textAreaOutput.value = textToDecoding;
    }
}