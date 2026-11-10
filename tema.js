var ICONE_SOL = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM4.9 4.9a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1-1.4 1.4L4.9 6.3a1 1 0 0 1 0-1.4zm11.4 11.4a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1-1.4 1.4l-1.4-1.4a1 1 0 0 1 0-1.4zm3-11.4a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 0zM7.7 16.3a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 0z"/></svg>';

var ICONE_LUA = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 13.3A9 9 0 1 1 10.7 3a7.5 7.5 0 0 0 10.3 10.3z"/></svg>';

function atualizarBotaoTema() {
  var botao = document.getElementById("botaoTema");
  if (!botao) {
    return;
  }
  if (document.body.classList.contains("dark-mode")) {
    botao.innerHTML = ICONE_SOL;
    botao.title = "Mudar para o modo claro";
    botao.setAttribute("aria-label", "Mudar para o modo claro");
  } else {
    botao.innerHTML = ICONE_LUA;
    botao.title = "Mudar para o modo escuro";
    botao.setAttribute("aria-label", "Mudar para o modo escuro");
  }
}

function temaPadraoDaPagina() {
  if (document.body.classList.contains("tcc")) {
    return "escuro";
  }
  return "claro";
}

function aplicarTemaSalvo() {
  var temaSalvo = localStorage.getItem("temaFato");
  if (temaSalvo === null) {
    temaSalvo = temaPadraoDaPagina();
  }
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  atualizarBotaoTema();
}

function alternarModoEscuro() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("temaFato", "escuro");
  } else {
    localStorage.setItem("temaFato", "claro");
  }
  atualizarBotaoTema();
}

aplicarTemaSalvo();
