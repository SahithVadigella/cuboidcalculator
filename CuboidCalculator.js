document.getElementById('btn1').addEventListener('click', function() {
    calculateVolume();
});

document.getElementById('btn2').addEventListener('click', function() {
    calculateTSA();
});

document.getElementById('btn3').addEventListener('click', function() {
    calculateLSA();
});

function calculateVolume() {
    let length = document.getElementById('input1').value;
    let height = document.getElementById('input2').value;
    let breadth = document.getElementById('input3').value;

    if (length && height && breadth) {
        let volume = length * height * breadth;
        displayResult(`Volume of Cuboid is ${volume} cm³`);
    } else {
        displayError();
    }
}

function calculateTSA() {
    let length = document.getElementById('input1').value;
    let height = document.getElementById('input2').value;
    let breadth = document.getElementById('input3').value;

    if (length && height && breadth) {
        let TSA = 2 * (length * breadth + breadth * height + height * length);
        displayResult(`T.SA of Cuboid is ${TSA} cm²`);
    } else {
        displayError();
    }
}

function calculateLSA() {
    let length = document.getElementById('input1').value;
    let height = document.getElementById('input2').value;
    let breadth = document.getElementById('input3').value;

    if (length && height && breadth) {
        let LSA = 2 * (length + breadth) * height;
        displayResult(`L.SA of Cuboid is ${LSA} cm²`);
    } else {
        displayError();
    }
}

function displayResult(message) {
    let para = document.getElementById('para');
    para.style.display = 'block';
    para.style.color = 'black';
    para.textContent = message;
}

function displayError() {
    let para = document.getElementById('para');
    para.style.display = 'block';
    para.style.color = 'red';
    para.textContent = 'Please enter the details correctly.';
}