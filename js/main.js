document.getElementById("name-user").textContent = "Lucas"; // TextContent === Altera texto

// IMC peso / altura * altura
peso = document.querySelector(".user_one .info-peso").innerHTML;
altura = document.querySelector(".user_one .info-altura").innerHTML;
resultIMC = peso / (altura * altura);
infoIMC = document.querySelector(".user_one .info-imc").innerHTML =
  resultIMC.toFixed(0);

peso = document.querySelector(".user_two .info-peso").innerHTML;
altura = document.querySelector(".user_two .info-altura").innerHTML;
resultIMC = peso / (altura * altura);
infoIMC = document.querySelector(".user_two .info-imc").innerHTML =
  resultIMC.toFixed(0);

peso = document.querySelector(".user_three .info-peso").innerHTML;
altura = document.querySelector(".user_three .info-altura").innerHTML;
resultIMC = peso / (altura * altura);
infoIMC = document.querySelector(".user_three .info-imc").innerHTML =
  resultIMC.toFixed(0);

peso = document.querySelector(".user_four .info-peso").innerHTML;
altura = document.querySelector(".user_four .info-altura").innerHTML;
resultIMC = peso / (altura * altura);
infoIMC = document.querySelector(".user_four .info-imc").innerHTML =
  resultIMC.toFixed(0);

peso = document.querySelector(".user_five .info-peso").innerHTML;
altura = document.querySelector(".user_five .info-altura").innerHTML;
resultIMC = peso / (altura * altura);
infoIMC = document.querySelector(".user_five .info-imc").innerHTML =
  resultIMC.toFixed(0);
