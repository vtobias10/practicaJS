function sumar(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var resultado = num1 + num2;

    document.getElementById('resultado').value = resultado;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
function restar(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var resultado = num1 - num2;

    document.getElementById('resultado').value = resultado;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
function mult(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var resultado = num1 * num2;

    document.getElementById('resultado').value = resultado;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
function div(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    if(num2 != 0)
    {
        var resultado = num1 / num2;
        document.getElementById('resultado').value = resultado;
    }
    else{
        document.getElementById('resultado').value = "ERROR";
    }
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
