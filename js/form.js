var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemInfoPaciente(form);

  // Cria a TR e a TD dos pacientes na tabela
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
});

function obtemInfoPaciente(form) {
  // Aqui é criado um objeto, pois o paciente tem várias características em comum!!!
  var paciente = {
    // Propriedades do objeto
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  // Retorna os dados do objeto paciente (Nome, Peso, Altura e etc...)
  return paciente;
}

function montaTr(paciente) {
  // Cria a TR na tabela
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // Cria a TD na tabela
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
   
}