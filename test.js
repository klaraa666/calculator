var method 
do{
method = prompt("Enter +, /, -, * or exit to quit.");
var num1 = parseInt(prompt("Enter the first number", 0), 10);
var num2 = parseInt(prompt("Enter the second number.", 0), 10);

    switch(method){
    case '+':
        alert(num1 + " + " + num2 + " = " + num1 + num2);
        break;
    case '/':
        alert(num1 + " / " + num2 + " = " + num1 / num2);
        break;
    case '-':
        alert(num1 + " - " + num2 + " = " + num1 - num2);
        break;
    case '*':
        alert(num1 + " * " + num2 + " = " + num1 * num2);
        break;
    default:
        alert("Invalid input.")
        break;
    }
}while(method.toLowerCase() != "exit")
