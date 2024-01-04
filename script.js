function calculateArea() {
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let area = 0.5 * base * height;
    document.getElementById('area-result').innerText = `Luas Segitiga: ${area}`;
}

function resetArea() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('area-result').innerText = '';
}

function calculatePerimeter() {
    let sideA = document.getElementById('sideA').value;
    let sideB = document.getElementById('sideB').value;
    let sideC = document.getElementById('sideC').value;
    let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
    document.getElementById('perimeter-result').innerText = `Keliling Segitiga: ${perimeter}`;
}

function resetPerimeter() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('perimeter-result').innerText = '';
}