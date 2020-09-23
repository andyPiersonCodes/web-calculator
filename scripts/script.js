
function calculate() {
    var num1, num2, total, operatorDropDown, operatorType, submitted;
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
    operatorDropDown = document.getElementById('operator')
    operatorType = operatorDropDown.options[operatorDropDown.selectedIndex].value

    switch (operatorType){
        case 'plus':
            total = num1 + num2;
            document.getElementById("answer").innerHTML = "The total is " + total;
            break
            
        case 'minus':
            total = num1 - num2;
            document.getElementById("answer").innerHTML = "The total is " + total;
            break

        case 'times':
            total = num1 * num2;
            document.getElementById("answer").innerHTML = "The total is " + total;
            break

        case 'divide':
            total = num1 / num2;
            document.getElementById("answer").innerHTML = "The total is " + total;
            break

        case 'whatsThis':
            submitted = document.createElement("IMG");
            submitted.setAttribute("src", "submitButton.png");
            submitted.setAttribute("width", "304");
            submitted.setAttribute("height", "228");
            document.body.appendChild(submitted);
            break

        default:
            document.getElementById("answer").innerHTML ="Please choose an operator";
            break

    }


}
