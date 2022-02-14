var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (e) {
  console.log("click duplo na tabela");
  if (e.target.tagName == "TD") {
    e.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
      e.target.parentNode.remove();
    }, 600);
  }
});
