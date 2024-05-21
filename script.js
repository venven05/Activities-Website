/COLOR MIXER/ 

let colorMix = [];

function addColor(color) {
    colorMix.push(color);
    updateDisplay();
}

function removeLastColor() {
    colorMix.pop();
    updateDisplay();
}

function clearMix() {
    colorMix = [];
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('colorDisplay');
    if (colorMix.length === 0) {
        display.textContent = 'No colors in the mix yet!';
    } else {
        display.textContent = 'Current Mix: ' + colorMix.join(' + ');
    }
}


/GRADE CHECKER/

function checkGrade() {
    const grade = parseInt(document.getElementById('gradeInput').value);

    if (isNaN(grade)) {
        document.getElementById('equivalent').innerText = "Please enter a valid number.";
        return;
    }

    if (grade >= 95) {
        document.getElementById('equivalent').innerText = "Excellent! You got an A+";
    } else if (grade >= 89) {
        document.getElementById('equivalent').innerText = "Excellent! You got an A";
    } else if (grade >= 83) {
        document.getElementById('equivalent').innerText = "Great! You got a B+";
    } else if (grade >= 77) {
        document.getElementById('equivalent').innerText = "Good! You got a B.";
    } else if (grade >= 75) {
        document.getElementById('equivalent').innerText = "A for effort but its a C.";
    } else {
        document.getElementById('equivalent').innerText = "You failed, you got an F.";
    }
}

/TRIANGLE CONTAINER/

function generateTriangle() {
    const character = document.getElementById('character').value.trim();

    if (!character) {
        alert('Please enter a character!')
        return;
    }

    let pyramid = '';
    const numRows = 5;

    for (i = 1; i <= numRows; i++) {
        pyramid += character.repeat(i) + '<br>';
    }

    document.getElementById('triangleContainer').innerHTML = pyramid;
}

/ODD OR EVEN CHECKER/

function numberChecker() {
    var number = document.getElementById('numberGetter').value;
    var result = document.getElementById('oddOrEven');

    if (number %2 === 0) {
        result.innerHTML = number + " is an <strong>Even</strong> number"
    } else {
        result.innerHTML = number + " is an <strong>Odd</strong> number"
    }
}

/EVEN AND ODD GENERATOR/

function displayEvenAndOddNumbers() {
    const rangeLimit = document.getElementById('rangeLimit').value;
    let en = document.getElementById('evenNumbers')
    let on = document.getElementById('oddNumbers')

    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 1; i <= rangeLimit; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    en.innerHTML = evenNumbers.toString()
    on.innerHTML = oddNumbers.toString()
}

/COMPOUND INTEREST/

document.querySelector('.calcu').addEventListener('click', calculateAndDisplayInterest);

function calculateAndDisplayInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compoundFrequency = parseFloat(document.getElementById('compoundFrequency').value);

    let compoundPrincipal = principal;
    let years = 0;
    let log = '';

    while (years < time) {
        compoundPrincipal *= Math.pow(1 + rate / compoundFrequency, compoundFrequency);
        years++;
        log += `Year ${years}: Compound principal: $${compoundPrincipal.toFixed(2)}<br>`;
    }

    const compoundInterest = compoundPrincipal - principal;
    document.getElementById('result').textContent = `Compound interest: $${compoundInterest.toFixed(2)}`;
    document.getElementById('log').innerHTML = log;
}