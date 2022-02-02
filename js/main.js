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
    tdImc.textContent = imc.toFixed(1);
  } else {
    tdImc.textContent = "Dados incorretos!!!";
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
