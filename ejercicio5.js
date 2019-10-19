function sumar(num1,num2) {  
    var suma = parseInt(num1)+parseInt(num2);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = suma;
}

function sum() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var op = document.getElementById("+")
    op.addEventListener("click",sumar(numero1,numero2),true);
}

function restar(num1,num2) {
    var resta = parseInt(num1) - parseInt(num2);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = resta;
}

function rest() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var op = document.getElementById("-")
    op.addEventListener("click",restar(numero1,numero2),true);
}





