function validar() {
  let mensagem = msgEntrada.value;
  let testNumero = /[0-9]/g.test(mensagem);
  let testCaracter = /[!"#$%&'()*+,-./:;?@[\\\]_`{|}~]/g.test(mensagem);
  let testLetra = /[A-Z\u00C0-\u00FF]+/g.test(mensagem); //letras maiusculas e todos os caracteres Unicode do 'À' até o 'ÿ'

  if (mensagem == "") {
    return false;
  } else if (testNumero == true || testCaracter == true || testLetra == true) {
    return false;
  } else {
    return true;
  }
}
function criptografar() {
  let mensagem = msgEntrada.value;
  let valido = validar();
  if (valido == false) {
    alert(
      "Inválido! Digite uma mensagem com apenas letras minúsculas e sem acento."
    );
    msgEntrada.value = "";
  } else {
    var mensagemCripto = mensagem
      .replaceAll("a", "ax")
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");

    document.getElementById("elementos").style.display = "none";
    msgSaida.value = mensagemCripto;
    msgEntrada.value = "";
    document.getElementById("btn-copiar").style.display = "block";
  }
}

function descriptografar() {
  let mensagem = msgEntrada.value;
  let valido = validar();
  if (valido == false) {
    alert("Inválido! Apenas letras minúsculas e sem acento.");
    msgEntrada.value = "";
  } else {
    var mensagemDescripto = mensagem
      .replaceAll("ax", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    document.getElementById("elementos").style.display = "none";
    msgSaida.value = mensagemDescripto;
    msgEntrada.value = "";
    document.getElementById("btn-copiar").style.display = "block";
  }
}
function limparSaida() {
  msgSaida.value = "";
}
async function copiarTexto() {
  let text = msgSaida.value;
  await navigator.clipboard.writeText(text);
  alert("Mensagem copiada!");
  document.getElementById("btn-copiar").style.display = "none";
  document.getElementById("elementos").style.display = "block";
  limparSaida();
}

var msgEntrada = document.querySelector("#input-texto");
var msgSaida = document.querySelector("#output-texto");
const btnCripto = document.querySelector("#btn-criptografar");
const btnDescripto = document.querySelector("#btn-descriptografar");
const btnCopiar = document.querySelector("#btn-copiar");

document.getElementById("btn-copiar").style.display = "none";

btnCripto.onclick = criptografar;
btnDescripto.onclick = descriptografar;
btnCopiar = document
  .getElementById("btn-copiar")
  .addEventListener("click", copiarTexto);
