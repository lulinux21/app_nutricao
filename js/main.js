var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var imc = peso / (altura * altura);
  var tdImc = paciente.querySelector(".info-imc");

  var pesoIsValid = true;
  var alturaIsValid = true;

  if (peso <= 0 || peso >= 360) {
    console.log("Peso inválido!");
    pesoIsValid = false;
    tdPeso.textContent = "Peso Inválido!!!";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("altura inválido!");
    alturaIsValid = false;
    tdAltura.textContent = "Altura Inválida!!!";
    paciente.classList.add(".paciente-invalido");
  }

  if (pesoIsValid && alturaIsValid) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Dados incorretos!!!";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
