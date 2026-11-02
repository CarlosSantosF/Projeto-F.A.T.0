function atualizarTextoBotaoTema() {
  var botao = document.getElementById("botaoTema");
  if (document.body.classList.contains("dark-mode")) {
    botao.textContent = "Modo claro";
  } else {
    botao.textContent = "Modo escuro";
  }
}

function aplicarTemaSalvo() {
  var temaSalvo = localStorage.getItem("temaFato");
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
  }
  atualizarTextoBotaoTema();
}

function alternarModoEscuro() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("temaFato", "escuro");
  } else {
    localStorage.setItem("temaFato", "claro");
  }
  atualizarTextoBotaoTema();
}

aplicarTemaSalvo();
