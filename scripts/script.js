
function sum() {
    var num1, num2, total;
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    
    total = num1 + num2;

    document.getElementById("answer").innerHTML = "The total is " + total;
}
