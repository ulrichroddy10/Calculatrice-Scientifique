var screens = document.getElementById('screene');
var currentInput = '0';
// Fonction pour effacer l'écran
function clearScreen() {
    currentInput = '0';
    screens.innerText = currentInput; // Utilisez 'value' si c'est un input
}
// Fonction pour ajouter un caractère à l'expression
function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char; // Remplace '0' par le premier caractère
    }
    else {
        currentInput += char; // Ajoute le caractère à l'expression
    }
    screens.innerText = currentInput; // Utilisez 'value' si c'est un input
}
// Fonction pour ajouter une fonction trigonométrique
function appendFunction(func) {
    currentInput += func + '(';
    screens.innerText = currentInput; // Utilisez 'value' si c'est un input
}
function cosinus() {
    var screener = document.getElementById('screene');
    var angleRadians = parseFloat(screener.innerText);
    screener.innerText = Math.cos(angleRadians * Math.PI / 180).toString();
}
function sinus() {
    var screener = document.getElementById('screene');
    var angleRadians = parseFloat(screener.innerText);
    screener.innerText = Math.sin(angleRadians * Math.PI / 180).toString();
}
function tangente() {
    var screener = document.getElementById('screene');
    var angleRadians = parseFloat(screener.innerText);
    screener.innerText = Math.tan(angleRadians * Math.PI / 180).toString();
}
function racine() {
    var screener = document.getElementById('screene');
    var angleRadians = parseFloat(screener.innerText);
    screener.innerText = Math.sqrt(angleRadians).toString();
}
function log() {
    var screener = document.getElementById('screene');
    var angleRadians = parseFloat(screener.innerText);
    screener.innerText = Math.log(angleRadians).toString();
}
function Exp() {
    var screener = document.getElementById('screene');
    var result = Math.exp(parseFloat(screener.innerText));
    screener.innerText = result.toString();
}
function aran(v) {
    if (v === 0) {
        return 1;
    }
    else {
        return v * aran(v - 1);
    }
}
function facto() {
    var screener = document.getElementById('screene');
    var result = parseFloat(screener.innerText);
    screener.innerText = aran(result).toString();
}
function Hex() {
    var screener = document.getElementById('screene');
    try {
        var vy = screener.innerText;
        var decimal = parseInt(vy, 16);
        screener.innerText = decimal.toString();
    }
    catch (_a) {
        screener.innerText = 'Syntax Error';
    }
}
function Dec() {
    var screener = document.getElementById('screene');
    var vy = screener.innerText;
    var base10 = parseInt(vy, 10);
    screener.innerText = base10.toString();
}
function Bin() {
    var screener = document.getElementById('screene');
    try {
        var ld = parseInt(screener.innerText, 10);
        var binary = ld.toString(2);
        screener.innerText = binary.toUpperCase();
    }
    catch (_a) {
        screener.innerText = 'System Error';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var landry = document.querySelectorAll('.Scientifique');
    var vianey = document.getElementById('Normal');
    var schimit = document.getElementById('scientife');
    vianey.addEventListener('click', function () {
        landry.forEach(function (button) {
            button.style.display = 'none';
        });
    });
    schimit.addEventListener('click', function () {
        landry.forEach(function (button) {
            button.style.display = 'block';
        });
    });
});
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0- 23
    var m = date.getMinutes(); // 0 -59
    var s = date.getSeconds(); // 0 -59
    var session = "AM";
    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? Number("0" + h) : h;
    m = (m < 10) ? Number("0" + m) : m;
    s = (s < 10) ? Number("0" + s) : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDispaly").textContent = time;
}
setInterval(showTime, 1000);
