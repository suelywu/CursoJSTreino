function calcularIMC(peso, altura) {
    //imc = peso / altura ^ 2
    
    if(isNaN(peso)) {
        return -1;
    } else if(isNaN(altura)) {
        return -2;
    } else {
        return (peso / (altura * altura)).toFixed(2);
    }
}

function showResult(imc) {
    const resultado = document.querySelector('.resultado');

    if(imc < 0) {
        resultado.classList.add("invalido");
        resultado.classList.remove("valido");
        if(imc === -1) {
            resultado.innerHTML = "Peso inválido";
        } else {
            resultado.innerHTML = "Altura inválida";
        }
    } else {
        resultado.classList.add("valido");
        resultado.classList.remove("invalido");
        let resultText = `Seu IMC é ${imc} `;

        if(imc < 18.5) {
            resultText += "(Abaixo do peso)";
        } else if(imc < 25) {
            resultText += "(Peso normal)";
        } else if(imc < 30) {
            resultText += "(Sobrepeso)";
        } else if(imc < 35) {
            resultText += "(Obesidade grau 1)";
        } else if(imc < 40) {
            resultText += "(Obesidade grau 2)";
        } else {
            resultText += "(Obesidade grau 3)";
        }

        resultado.innerHTML = resultText;
    }
}

function btnCalcularClick(evento) {
    evento.preventDefault();

    const form = document.querySelector('.form');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    let imc = calcularIMC(peso.value, altura.value);
    showResult(imc);
    //resultado.innerHTML = imc;
}

let form_button = document.querySelector('.a');
form_button.addEventListener('click', btnCalcularClick);
