function Translate(word, language) {
    this.apikey = 'a6a351e606mshc5ff9e70ecdaba2p1cb404jsn059b16ddfb0b';
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
    const endpoint = `https://just-translated.p.rapidapi.com/?lang=az-${this.language}&text=${this.word}`;
    const data = null;

    this.xhr.open("GET", endpoint);
    this.xhr.setRequestHeader("X-RapidAPI-Host", "just-translated.p.rapidapi.com");
    this.xhr.setRequestHeader("X-RapidAPI-Key", this.apikey);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
        } else {
            callback("Error!",null);
        }
    }

    this.xhr.send(data);
}

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}