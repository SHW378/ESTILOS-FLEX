
function calcularSuma() {
    let num1 = document.getElementById("intNum1").value;
    let num2 = document.getElementById("intNum2").value;

    let resultado = parseFloat(num1) + parseFloat(num2);
    alert("El resultado de la suma es: " + resultado);
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}

function calcularResta() {
    let num1 = document.getElementById("intNum1").value;
    let num2 = document.getElementById("intNum2").value;

    let resultado = parseFloat(num1) - parseFloat(num2);
    alert("El resultado de la suma es: " + resultado);
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}

function calcularMultiplicacion() {
    let num1 = document.getElementById("intNum1").value;
    let num2 = document.getElementById("intNum2").value;

    let resultado = parseFloat(num1) * parseFloat(num2);
    alert("El resultado de la suma es: " + resultado);
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}

function calcularDivision() {
    let num1 = document.getElementById("intNum1").value;
    let num2 = document.getElementById("intNum2").value;

    let resultado = parseFloat(num1) / parseFloat(num2);
    alert("El resultado de la suma es: " + resultado);
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}
