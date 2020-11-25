const number = Number(prompt('Digite um número:'));

let elemNumTitulo = document.getElementById("numero-titulo");
let elemTexto = document.getElementById("texto");

elemNumTitulo.innerHTML = number;
elemTexto.innerHTML = `<p>Raiz quadrada: ${number ** 0.5}<p/>`
elemTexto.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}<p/>`
elemTexto.innerHTML += `<p>É NaN: ${Number.isNaN(number)}<p/>`
elemTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}<p/>`
elemTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}<p/>`
elemTexto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}<p/>`

