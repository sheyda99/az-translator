function Translate(word, language) {
    this.apikey = '98a4e8797dmsh3f09630434206e0p1d3c8djsn2bb30271e879';
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
    const endpoint = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${this.word}&to=${this.language}&from=az`;
    const data = null;

    this.xhr.open("GET", endpoint);
    this.xhr.setRequestHeader("X-RapidAPI-Key", this.apikey);
    this.xhr.setRequestHeader("X-RapidAPI-Host", "nlp-translation.p.rapidapi.com");

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.translated_text[this.language];
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