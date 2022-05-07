evenListeners();

function evenListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function() {
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();

function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord(function(error, response) {
        if (error === null) {
            ui.displayTranslate(response);
        } else {
            console.log(error);
        }
    });

    e.preventDefault();
}