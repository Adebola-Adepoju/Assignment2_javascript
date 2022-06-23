alert('Welcome to Online Calculator')
const firstNum= parseFloat (prompt("Enter the first number "))
const secondNum= parseFloat (prompt("Enter the second number "))
const operand = prompt("Enter operator (+. -, /, *)")
 sum = firstNum + secondNum
let difference = firstNum - secondNum
let division = firstNum / secondNum
let multiplication = firstNum * secondNum

if (isNaN(firstNum) || isNaN(secondNum)){
    alert ("Wrong input, Refreh the page and provide valid data")
}else{
    if (operand == "+"){
        result= firstNum + secondNum;
    }else if (operand == "-"){
        result= firstNum - secondNum;
    }else if (operand == "/"){
        result= firstNum / secondNum;
    }else if (operand == "*"){
        result= firstNum * secondNum;
    }
    alert(result)
}

// if (operands === "+"){      
//     alert(sum)
// } else if(operands == "-"){
//     alert(difference)
// } else if(operands == "/"){
//     alert(division)
// } else if(operands == "*"){
//     alert(multiplication)
// }
//  else{
//     alert("Try again!")
// }