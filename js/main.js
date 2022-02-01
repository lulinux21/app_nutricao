//document.getElementById("name-user").textContent = "Lucas"; TextContent === Altera texto

// IMC peso / altura * altura
// peso = document.querySelector(".user_one .info-peso").innerHTML;
// altura = document.querySelector(".user_one .info-altura").innerHTML;
// resultIMC = peso / (altura * altura);
// infoIMC = document.querySelector(".user_one .info-imc").innerHTML =
//   resultIMC.toFixed(0);

// peso = document.querySelector(".user_two .info-peso").innerHTML;
// altura = document.querySelector(".user_two .info-altura").innerHTML;
// resultIMC = peso / (altura * altura);
// infoIMC = document.querySelector(".user_two .info-imc").innerHTML =
//   resultIMC.toFixed(0);

// peso = document.querySelector(".user_three .info-peso").innerHTML;
// altura = document.querySelector(".user_three .info-altura").innerHTML;
// resultIMC = peso / (altura * altura);
// infoIMC = document.querySelector(".user_three .info-imc").innerHTML =
//   resultIMC.toFixed(0);

// peso = document.querySelector(".user_four .info-peso").innerHTML;
// altura = document.querySelector(".user_four .info-altura").innerHTML;
// resultIMC = peso / (altura * altura);
// infoIMC = document.querySelector(".user_four .info-imc").innerHTML =
//   resultIMC.toFixed(0);

// peso = document.querySelector(".user_five .info-peso").innerHTML;
// altura = document.querySelector(".user_five .info-altura").innerHTML;
// resultIMC = peso / (altura * altura);
// infoIMC = document.querySelector(".user_five .info-imc").innerHTML =
//   resultIMC.toFixed(0);

var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutricionista";

var paciente = document.querySelector(".user_one");

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
}

if (altura <= 0 || altura >= 3.0) {
  console.log("altura inválido!");
  alturaIsValid = false;
  tdAltura.textContent = "Altura Inválida!!!";
}

if (pesoIsValid && alturaIsValid) {
  tdImc.textContent = imc.toFixed(1);
} else {
  tdImc.textContent = "Dados incorretos!!!";
}
