const screens: HTMLElement = document.getElementById('screene') as HTMLElement;
let currentInput: string = '0';

// Fonction pour effacer l'écran
function clearScreen(): void {
    currentInput = '0';
    screens.innerText = currentInput;  // Utilisez 'value' si c'est un input
}

// Fonction pour ajouter un caractère à l'expression
function appendCharacter(char: string): void {
    if (currentInput === '0' && char !== '.') {
        currentInput = char;  // Remplace '0' par le premier caractère
    } else {
        currentInput += char;  // Ajoute le caractère à l'expression
    }
    screens.innerText = currentInput;  // Utilisez 'value' si c'est un input
}

// Fonction pour ajouter une fonction trigonométrique
function appendFunction(func: string): void {
    currentInput += func + '(';
    screens.innerText = currentInput;  // Utilisez 'value' si c'est un input
}

function cosinus(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const angleRadians: number = parseFloat(screener.innerText);
    screener.innerText = Math.cos(angleRadians * Math.PI / 180).toString();
}

function sinus(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const angleRadians: number = parseFloat(screener.innerText);
    screener.innerText = Math.sin(angleRadians * Math.PI / 180).toString();
}

function tangente(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const angleRadians: number = parseFloat(screener.innerText);
    screener.innerText = Math.tan(angleRadians * Math.PI / 180).toString();
}

function racine(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const angleRadians: number = parseFloat(screener.innerText);
    screener.innerText = Math.sqrt(angleRadians).toString();
}

function log(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const angleRadians: number = parseFloat(screener.innerText);
    screener.innerText = Math.log(angleRadians).toString();
}

function Exp(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const result: number = Math.exp(parseFloat(screener.innerText));
    screener.innerText = result.toString();
}

function aran(v: number): number {
    if (v === 0) {
        return 1;
    } else {
        return v * aran(v - 1);
    }
}

function facto(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const result: number = parseFloat(screener.innerText);
    screener.innerText = aran(result).toString();
}

function Hex(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    try {
        const vy: string = screener.innerText;
        const decimal: number = parseInt(vy, 16);
        screener.innerText = decimal.toString();
    } catch {
        screener.innerText = 'Syntax Error';
    }
}

function Dec(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    const vy: string = screener.innerText;
    const base10: number = parseInt(vy, 10);
    screener.innerText = base10.toString();
}

function Bin(): void {
    const screener: HTMLElement = document.getElementById('screene') as HTMLElement;
    try {
        const ld: number = parseInt(screener.innerText, 10);
        const binary: string = ld.toString(2);
        screener.innerText = binary.toUpperCase();
    } catch {
        screener.innerText = 'System Error';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const landry: NodeListOf<HTMLElement> = document.querySelectorAll('.Scientifique');
    const vianey: HTMLElement = document.getElementById('Normal') as HTMLElement;
    const schimit: HTMLElement = document.getElementById('scientife') as HTMLElement;

    vianey.addEventListener('click', function () {
        landry.forEach(button => {
            button.style.display = 'none';
        });
    });

    schimit.addEventListener('click', function () {
        landry.forEach(button => {
            button.style.display = 'block';
        });
    });
});

function showTime(): void {
    const date: Date = new Date();
    let h: number = date.getHours(); // 0- 23
    let m: number = date.getMinutes(); // 0 -59
    let s: number = date.getSeconds(); // 0 -59
    let session: string = "AM";

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

    const time: string = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay")!.innerText = time;
    document.getElementById("MyClockDispaly")!.textContent = time;
}



setInterval(showTime, 1000);