var D20 = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">' +
  '<path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15M14.93,8.27A2.57,2.57 0 0,1 17.5,10.84V13.5C17.5,14.9 16.35,16.05 14.93,16.05C13.5,16.05 12.36,14.9 12.36,13.5V10.84A2.57,2.57 0 0,1 14.93,8.27M14.92,9.71C14.34,9.71 13.86,10.18 13.86,10.77V13.53C13.86,14.12 14.34,14.6 14.92,14.6C15.5,14.6 16,14.12 16,13.53V10.77C16,10.18 15.5,9.71 14.92,9.71M11.45,14.76V15.96L6.31,15.93V14.91C6.31,14.91 9.74,11.58 9.75,10.57C9.75,9.33 8.73,9.46 8.73,9.46C8.73,9.46 7.75,9.5 7.64,10.71L6.14,10.76C6.14,10.76 6.18,8.26 8.83,8.26C11.2,8.26 11.23,10.04 11.23,10.5C11.23,12.18 8.15,14.77 8.15,14.77L11.45,14.76Z"/></svg>';

var TRAVA = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/></svg>';

var OLHO = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>';
var OLHO_CORTADO = OLHO.replace('</svg>', '<path d="M3 3L21 21" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>');

var ATRIBUTOS = [
  { chave: 'for', sigla: 'FOR', nome: 'Força' },
  { chave: 'des', sigla: 'DES', nome: 'Destreza' },
  { chave: 'con', sigla: 'CON', nome: 'Constituição' },
  { chave: 'int', sigla: 'INT', nome: 'Inteligência' },
  { chave: 'sab', sigla: 'SAB', nome: 'Sabedoria' },
  { chave: 'car', sigla: 'CAR', nome: 'Carisma' }
];

var PERICIAS = [
  { nome: 'Acrobacia', atributo: 'des' },
  { nome: 'Adestramento', atributo: 'car' },
  { nome: 'Atletismo', atributo: 'for' },
  { nome: 'Atuação', atributo: 'car' },
  { nome: 'Cavalgar', atributo: 'des' },
  { nome: 'Conhecimento', atributo: 'int' },
  { nome: 'Cura', atributo: 'sab' },
  { nome: 'Diplomacia', atributo: 'car' },
  { nome: 'Enganação', atributo: 'car' },
  { nome: 'Fortitude', atributo: 'con' },
  { nome: 'Furtividade', atributo: 'des' },
  { nome: 'Guerra', atributo: 'int' },
  { nome: 'Iniciativa', atributo: 'des' },
  { nome: 'Intimidação', atributo: 'car' },
  { nome: 'Intuição', atributo: 'sab' },
  { nome: 'Investigação', atributo: 'int' },
  { nome: 'Jogatina', atributo: 'car' },
  { nome: 'Ladinagem', atributo: 'des' },
  { nome: 'Luta', atributo: 'for' },
  { nome: 'Misticismo', atributo: 'int' },
  { nome: 'Nobreza', atributo: 'int' },
  { nome: 'Ofício', atributo: 'int' },
  { nome: 'Percepção', atributo: 'sab' },
  { nome: 'Pilotagem', atributo: 'des' },
  { nome: 'Pontaria', atributo: 'des' },
  { nome: 'Reflexos', atributo: 'des' },
  { nome: 'Religião', atributo: 'sab' },
  { nome: 'Sobrevivência', atributo: 'sab' },
  { nome: 'Vontade', atributo: 'sab' }
];

var RACAS = ['Humano', 'Anão', 'Dahllan', 'Elfo', 'Goblin', 'Lefou', 'Minotauro', 'Qareen', 'Golem', 'Hynne', 'Kliren', 'Medusa', 'Osteon', 'Sereia/Tritão', 'Sílfide', 'Suraggel', 'Trog'];

var ORIGENS = ['Acólito', 'Amigo dos Animais', 'Amnésico', 'Aristocrata', 'Artesão', 'Artista', 'Assistente de Laboratório', 'Batedor', 'Capanga', 'Charlatão', 'Circense', 'Criminoso',
  'Curandeiro', 'Eremita', 'Escravo', 'Estudioso', 'Fazendeiro', 'Forasteiro', 'Gladiador', 'Guarda', 'Herdeiro', 'Herói Camponês', 'Marujo', 'Mateiro', 'Membro de Guilda', 'Mercador',
  'Minerador', 'Nômade', 'Pivete', 'Refugiado', 'Seguidor', 'Selvagem', 'Sem Origem', 'Soldado', 'Taverneiro', 'Trabalhador'];

var CLASSES = {
  Arcanista: { pvInicial: 8, pvPorNivel: 2, pmPorNivel: 6 },
  Bárbaro: { pvInicial: 24, pvPorNivel: 6, pmPorNivel: 3 },
  Bardo: { pvInicial: 12, pvPorNivel: 3, pmPorNivel: 4 },
  Bucaneiro: { pvInicial: 16, pvPorNivel: 4, pmPorNivel: 3 },
  Caçador: { pvInicial: 16, pvPorNivel: 4, pmPorNivel: 4 },
  Cavaleiro: { pvInicial: 20, pvPorNivel: 5, pmPorNivel: 3 },
  Clérigo: { pvInicial: 16, pvPorNivel: 4, pmPorNivel: 5 },
  Druida: { pvInicial: 16, pvPorNivel: 4, pmPorNivel: 4 },
  Guerreiro: { pvInicial: 20, pvPorNivel: 5, pmPorNivel: 3 },
  Inventor: { pvInicial: 12, pvPorNivel: 3, pmPorNivel: 4 },
  Ladino: { pvInicial: 12, pvPorNivel: 3, pmPorNivel: 4 },
  Lutador: { pvInicial: 20, pvPorNivel: 5, pmPorNivel: 3 },
  Nobre: { pvInicial: 16, pvPorNivel: 4, pmPorNivel: 4 },
  Paladino: { pvInicial: 20, pvPorNivel: 5, pmPorNivel: 3 }
};

function listarNomesDeClasses() {
  var nomes = [];
  for (var nome in CLASSES) {
    nomes.push(nome);
  }
  return nomes;
}

var NOMES_CLASSES = listarNomesDeClasses();
var LISTADOS = { race: RACAS, origin: ORIGENS, class: NOMES_CLASSES };
var ROTULOS_LISTADOS = { race: 'Raça', origin: 'Origem', class: 'Classe' };
var DICAS_LISTADOS = { race: 'Buscar raça', origin: 'Buscar origem', class: 'Buscar classe' };
var DESLOCAMENTO = { 'Anão': 6, Golem: 6, Hynne: 6, Elfo: 12 };
var NOMES_FONTE = { raca: 'raça', origem: 'origem', classe: 'classe' };
var ORDEM_FONTES = ['raca', 'origem', 'classe'];
var valoresAnteriores = {};

function itensBase() {
  return [
    { nome: 'Armadura Pesada (Brunea)', def: 5, esp: 5, eq: false, slot: 'armadura', desc: '' },
    { nome: 'Armadura Leve (Couro batido)', def: 3, esp: 2, eq: false, slot: 'armadura', desc: '' },
    { nome: 'Escudo Pesado', def: 2, esp: 2, eq: false, slot: 'escudo', desc: '' },
    { nome: 'Poção de Cura (2)', def: 0, esp: 1, eq: false, slot: '', desc: '' }
  ];
}

function criarFichasExemplo() {
  var thorgar = {
    name: 'Thorgar Punho de Ferro', race: 'Humano', origin: 'Soldado', class: 'Guerreiro', level: 5, deity: 'Khalmyr',
    attrs: { for: 18, des: 12, con: 16, int: 8, sab: 10, car: 10 },
    pvCurrent: 41, pmCurrent: 12, money: 150, defOverride: null, speedMeters: null, skillBonus: {},
    trained: ['Luta', 'Fortitude', 'Atletismo', 'Intimidação', 'Percepção', 'Pontaria'],
    attacks: [
      { nome: 'Espada Longa', teste: 'Luta', dano: '1d8+4', crit: '19/x2', tipo: 'Corte' },
      { nome: 'Arco Curto', teste: 'Pontaria', dano: '1d6', crit: '20/x3', tipo: 'Perfuração' }
    ],
    abilities: [
      { nome: 'Ataque Poderoso', custo: 1, desc: 'Texto de exemplo: gasta PM para trocar precisão por dano em um ataque.' }
    ],
    spells: [],
    items: itensBase()
  };
  thorgar.items.push({ nome: 'Espada Longa', def: 0, esp: 1, eq: false, slot: '', desc: '' });

  var kaelith = {
    name: 'Kaelith Sombravento', race: 'Elfo', origin: 'Acólito', class: 'Arcanista', level: 5, deity: 'Wynna',
    attrs: { for: 8, des: 14, con: 12, int: 18, sab: 12, car: 14 },
    pvCurrent: 14, pmCurrent: 22, money: 320, defOverride: null, speedMeters: null, skillBonus: {},
    trained: ['Misticismo', 'Conhecimento', 'Vontade', 'Investigação', 'Percepção'],
    attacks: [
      { nome: 'Cajado', teste: 'Luta', dano: '1d6', crit: '20/x2', tipo: 'Impacto' }
    ],
    abilities: [],
    spells: [
      { nome: 'Seta Infalível de Talude', custo: 1, desc: 'Texto de exemplo: dardos de energia que acertam o alvo sem teste de ataque.' }
    ],
    items: itensBase()
  };
  kaelith.items.push({ nome: 'Cajado', def: 0, esp: 2, eq: false, slot: '', desc: '' });

  return [thorgar, kaelith];
}

function novaFicha() {
  return {
    name: 'Novo personagem', race: 'Humano', origin: 'Soldado', class: 'Guerreiro', level: 1, deity: '',
    attrs: { for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
    pvCurrent: 20, pmCurrent: 3, money: 0, defOverride: null, speedMeters: null, skillBonus: {},
    trained: [], attacks: [], abilities: [], spells: [], items: itensBase(), image: '', bonusRaca: {}
  };
}

var FICHAS = criarFichasExemplo();
var S = FICHAS[0];
var atual = 0;
var defAnt = null;

function esc(texto) {
  if (texto === undefined || texto === null) {
    texto = '';
  }
  texto = String(texto);
  texto = texto.replace(/&/g, '&amp;');
  texto = texto.replace(/</g, '&lt;');
  texto = texto.replace(/>/g, '&gt;');
  texto = texto.replace(/"/g, '&quot;');
  return texto;
}

function fmt(numero) {
  if (numero < 0) {
    return '−' + Math.abs(numero);
  }
  return '+' + Math.abs(numero);
}

function mod(valor) {
  return Math.floor((valor - 10) / 2);
}

function sortear(lados) {
  return 1 + Math.floor(Math.random() * lados);
}

function valorOuVazio(valor) {
  if (valor === undefined || valor === null) {
    return '';
  }
  return valor;
}

function primeiraMaiuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function listaOuUnico(valor) {
  if (Array.isArray(valor)) {
    return valor;
  }
  return [valor];
}

function soTemDigitos(texto) {
  if (texto === '') {
    return false;
  }
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);
    if (letra < '0' || letra > '9') {
      return false;
    }
  }
  return true;
}

function acharNaLista(lista, texto) {
  var procurado = texto.trim().toLowerCase();
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].toLowerCase() === procurado) {
      return lista[i];
    }
  }
  return undefined;
}

function atributoDaPericia(nome) {
  for (var i = 0; i < PERICIAS.length; i++) {
    if (PERICIAS[i].nome === nome) {
      return PERICIAS[i].atributo;
    }
  }
  return '';
}

function nivelAtual() {
  return Math.max(1, S.level || 1);
}

function bonusDeTreino() {
  var nivel = nivelAtual();
  if (nivel >= 15) {
    return 6;
  }
  if (nivel >= 7) {
    return 4;
  }
  return 2;
}

function modDoAtributo(chave) {
  return mod(S.attrs[chave]);
}

function estaTreinada(nome) {
  return S.trained.indexOf(nome) !== -1;
}

function bonusBase(nome) {
  return Math.floor(nivelAtual() / 2) + modDoAtributo(atributoDaPericia(nome));
}

function bonusTreinado(nome) {
  if (estaTreinada(nome)) {
    return bonusDeTreino();
  }
  return 0;
}

function bonusOutros(nome) {
  return Number(S.skillBonus[nome]) || 0;
}

function bonusTotal(nome) {
  return bonusBase(nome) + bonusTreinado(nome) + bonusOutros(nome);
}

function equipavel(entrada) {
  return !!entrada.slot || Number(entrada.def) > 0;
}

function toast(linha, resultado, detalhe, tipo) {
  if (tipo === undefined) {
    tipo = '';
  }
  var caixa = document.getElementById('toasts');
  var aviso = document.createElement('div');
  var forte = document.createElement('strong');
  var pequeno = document.createElement('small');
  aviso.className = 'toast ' + tipo;
  forte.textContent = resultado;
  pequeno.textContent = detalhe;
  aviso.appendChild(document.createTextNode(linha));
  aviso.appendChild(forte);
  aviso.appendChild(pequeno);
  caixa.appendChild(aviso);
  while (caixa.children.length > 3) {
    caixa.removeChild(caixa.children[0]);
  }
  setTimeout(function () {
    if (aviso.parentNode) {
      aviso.parentNode.removeChild(aviso);
    }
  }, 4500);
}

var LIMITE_ROLAGENS = 5;
var DURACAO_ROLAGEM = 12000;
var rolagens = [];

function removerRolagem(rolagem) {
  var restantes = [];
  for (var i = 0; i < rolagens.length; i++) {
    if (rolagens[i] !== rolagem) {
      restantes.push(rolagens[i]);
    }
  }
  rolagens = restantes;
  renderRolagens();
}

function empilhar(rolagem) {
  rolagem.novo = true;
  rolagem.timer = setTimeout(function () {
    removerRolagem(rolagem);
  }, DURACAO_ROLAGEM);
  rolagens.unshift(rolagem);
  while (rolagens.length > LIMITE_ROLAGENS) {
    clearTimeout(rolagens.pop().timer);
  }
  renderRolagens();
}

function rolar(bonus, nome, indiceAtaque) {
  var dado = sortear(20);
  var sinal = '+';
  if (bonus < 0) {
    sinal = '−';
  }
  var tipo = '';
  var detalhes = '1d20(' + dado + ') ' + sinal + ' ' + Math.abs(bonus);
  if (dado === 20) {
    tipo = 'crit';
    detalhes += ' · máximo!';
  } else if (dado === 1) {
    tipo = 'fail';
    detalhes += ' · falha crítica';
  }
  var rolagem = {
    nome: nome,
    total: dado + bonus,
    tipo: tipo,
    formula: '1d20' + sinal + Math.abs(bonus),
    detalhes: detalhes
  };
  if (indiceAtaque >= 0) {
    rolagem.dano = danoDoAtaque(S.attacks[indiceAtaque], dado);
  }
  empilhar(rolagem);
}

function separarTermos(texto) {
  var termos = [];
  var sinal = '';
  var corpo = '';
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);
    if (letra === '+' || letra === '-') {
      if (corpo !== '') {
        termos.push(sinal + corpo);
        corpo = '';
      }
      sinal = letra;
    } else {
      corpo += letra;
    }
  }
  if (corpo !== '') {
    termos.push(sinal + corpo);
  }
  return termos;
}

function danoDoAtaque(ataque, natural) {
  var texto = String(ataque.dano).split('/')[0];
  texto = texto.replace(/−/g, '-').replace(/–/g, '-').replace(/\s/g, '');
  var termos = separarTermos(texto);
  var dados = 0;
  var fixo = 0;
  var partes = [];

  for (var i = 0; i < termos.length; i++) {
    var termo = termos[i];
    var sinal = 1;
    var corpo = termo;
    if (termo.charAt(0) === '-') {
      sinal = -1;
      corpo = termo.substring(1);
    } else if (termo.charAt(0) === '+') {
      corpo = termo.substring(1);
    }
    corpo = corpo.toLowerCase();

    var posicaoD = corpo.indexOf('d');
    var textoQuantidade = '';
    var textoLados = '';
    if (posicaoD >= 0) {
      textoQuantidade = corpo.substring(0, posicaoD);
      textoLados = corpo.substring(posicaoD + 1);
    }

    if (posicaoD >= 0 && (textoQuantidade === '' || soTemDigitos(textoQuantidade)) && soTemDigitos(textoLados)) {
      var quantidade = 1;
      if (textoQuantidade !== '') {
        quantidade = Number(textoQuantidade);
      }
      var sorteados = [];
      var soma = 0;
      for (var j = 0; j < quantidade; j++) {
        var valor = sortear(Number(textoLados));
        sorteados.push(valor);
        soma += valor;
      }
      dados += sinal * soma;
      var prefixo = '';
      if (partes.length > 0) {
        if (sinal < 0) {
          prefixo = '− ';
        } else {
          prefixo = '+ ';
        }
      } else if (sinal < 0) {
        prefixo = '−';
      }
      partes.push(prefixo + quantidade + 'd' + textoLados + '(' + sorteados.join('+') + ')');
    } else if (soTemDigitos(corpo)) {
      fixo += sinal * Number(corpo);
      if (sinal < 0) {
        partes.push('− ' + corpo);
      } else {
        partes.push('+ ' + corpo);
      }
    } else {
      return undefined;
    }
  }

  if (partes.length === 0) {
    return undefined;
  }

  var critico = String(ataque.crit);
  var margem = 20;
  var inicio = critico;
  var posicaoBarra = critico.indexOf('/');
  if (posicaoBarra >= 0) {
    inicio = critico.substring(0, posicaoBarra);
  }
  if (soTemDigitos(inicio) && Number(inicio) > 0) {
    margem = Number(inicio);
  }

  var multiplicador = 2;
  var posicaoX = critico.toLowerCase().indexOf('x');
  if (posicaoX >= 0) {
    multiplicador = parseInt(critico.substring(posicaoX + 1), 10) || 2;
  }

  var ameaca = natural >= margem;
  var total = dados + fixo;
  var detalhes = partes.join(' ');
  if (ameaca) {
    total = dados * multiplicador + fixo;
    detalhes += ' · dados x' + multiplicador;
  }
  return { total: total, formula: String(ataque.dano), critico: ameaca, detalhes: detalhes };
}

function limparRolagens() {
  for (var i = 0; i < rolagens.length; i++) {
    clearTimeout(rolagens[i].timer);
  }
  rolagens = [];
  renderRolagens();
}

function renderRolagens() {
  var caixa = document.getElementById('rollPopup');
  if (rolagens.length === 0) {
    caixa.className = 'roll-popup';
    caixa.innerHTML = '';
    return;
  }
  caixa.className = 'roll-popup open';

  var html = '<button type="button" class="roll-clear" title="Limpar rolagens" onclick="limparRolagens()">×</button>';
  for (var i = 0; i < rolagens.length; i++) {
    var r = rolagens[i];
    var classes = 'roll-entry';
    if (i === 0) {
      classes += ' roll-latest';
    } else {
      classes += ' roll-old';
    }
    if (r.tipo) {
      if (!r.dano) {
        classes += ' ' + r.tipo;
      }
      classes += ' nat-' + r.tipo;
    }
    if (r.novo) {
      classes += ' efeito';
    }

    html += '<div class="' + classes + '">';
    if (r.tipo) {
      var selo = '1 natural!';
      if (r.tipo === 'crit') {
        selo = '20 natural!';
      }
      html += '<span class="roll-selo ' + r.tipo + '">' + selo + '</span>';
    }
    html += '<div class="roll-label">' + esc(r.nome) + '</div>';

    if (r.dano) {
      var classeDano = '';
      var rotuloDano = 'Dano';
      if (r.dano.critico) {
        classeDano = 'crit';
        rotuloDano = 'Dano crítico';
      }
      html += '<div class="roll-par">';
      html += '<div class="roll-bloco ' + r.tipo + '">';
      html += '<div class="roll-label">Ataque</div>';
      html += '<div class="roll-total">' + r.total + '</div>';
      html += '<div class="roll-detail">' + esc(r.formula) + ' → ' + esc(r.detalhes) + '</div>';
      html += '</div>';
      html += '<div class="roll-bloco ' + classeDano + '">';
      html += '<div class="roll-label">' + rotuloDano + '</div>';
      html += '<div class="roll-total">' + r.dano.total + '</div>';
      html += '<div class="roll-detail">' + esc(r.dano.formula) + ' → ' + esc(r.dano.detalhes) + '</div>';
      html += '</div>';
      html += '</div>';
    } else {
      html += '<div class="roll-total">' + r.total + '</div>';
      html += '<div class="roll-detail">' + esc(r.formula) + ' → ' + esc(r.detalhes) + '</div>';
    }
    html += '</div>';
  }
  caixa.innerHTML = html;

  var nova = null;
  for (var j = 0; j < rolagens.length; j++) {
    if (rolagens[j].novo && nova === null) {
      nova = rolagens[j];
    }
  }
  for (var k = 0; k < rolagens.length; k++) {
    rolagens[k].novo = false;
  }
  if (nova !== null && nova.tipo) {
    piscarTela(nova.tipo);
  }
}

function piscarTela(tipo) {
  var flash = document.getElementById('flash');
  flash.className = '';
  var forcar = flash.offsetWidth;
  flash.className = 'flash-' + tipo;
}

function girarDado(botao) {
  botao.classList.remove('rolling');
  var forcar = botao.offsetWidth;
  botao.classList.add('rolling');
  setTimeout(function () {
    botao.classList.remove('rolling');
  }, 300);
}

function rolarAtributo(indice, botao) {
  girarDado(botao);
  var atributo = ATRIBUTOS[indice];
  rolar(modDoAtributo(atributo.chave), atributo.sigla, -1);
}

function rolarPericia(indice, botao) {
  girarDado(botao);
  var nome = PERICIAS[indice].nome;
  rolar(bonusTotal(nome), nome, -1);
}

function rolarAtaque(indice, botao) {
  girarDado(botao);
  var ataque = S.attacks[indice];
  rolar(bonusTotal(ataque.teste), ataque.nome, indice);
}

function trava(fonte) {
  return '<span class="trava" title="Concedido por ' + NOMES_FONTE[fonte] + ': não pode ser removido à mão">' + TRAVA + '</span>';
}

function valorDaFonte(fonte) {
  if (fonte === 'raca') {
    return S.race;
  }
  if (fonte === 'origem') {
    return S.origin;
  }
  return S.class;
}

function agruparLista(lista, rotuloEscolhidos) {
  var grupos = [];
  for (var f = 0; f < ORDEM_FONTES.length; f++) {
    var fonte = ORDEM_FONTES[f];
    grupos.push({
      fonte: fonte,
      titulo: primeiraMaiuscula(NOMES_FONTE[fonte]) + ': ' + valorDaFonte(fonte) + ' · ganho automaticamente',
      fixo: true,
      indices: []
    });
  }

  var escolhidos = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].fonte) {
      for (var g = 0; g < grupos.length; g++) {
        if (grupos[g].fonte === lista[i].fonte) {
          grupos[g].indices.push(i);
        }
      }
    } else {
      escolhidos.push(i);
    }
  }

  var ganhos = [];
  for (var h = 0; h < grupos.length; h++) {
    if (grupos[h].indices.length > 0) {
      ganhos.push(grupos[h]);
    }
  }

  if (ganhos.length === 0) {
    return [{ titulo: '', fixo: false, indices: escolhidos }];
  }
  if (escolhidos.length > 0) {
    ganhos.push({ titulo: rotuloEscolhidos, fixo: false, indices: escolhidos });
  }
  return ganhos;
}

function zebraDaPosicao(posicao) {
  if (posicao % 2 === 0) {
    return ' par';
  }
  return '';
}

function linhaHabilidade(habilidade, indice, fixo, sufixo, zebra) {
  var somenteLeitura = '';
  var classeFixo = '';
  if (fixo) {
    somenteLeitura = ' readonly';
    classeFixo = ' fixo';
  }
  var aoMudar = 'mudar' + sufixo + '(' + indice + ', this)';

  var html = '<div class="ability-wrap' + zebra + '">';
  html += '<div class="entry-row ability">';
  html += '<button class="expand hab-seta" title="Mostrar descrição" onclick="alternarDescricao(this)">▸</button>';
  html += '<input type="text" name="nome" class="hab-nome' + classeFixo + '" value="' + esc(habilidade.nome) + '" title="Nome"' + somenteLeitura + ' oninput="' + aoMudar + '">';
  html += '<input type="number" name="custo" min="0" class="hab-custo' + classeFixo + '" value="' + esc(habilidade.custo) + '" title="Custo em PM"' + somenteLeitura + ' oninput="' + aoMudar + '">';
  if (fixo) {
    html += trava(habilidade.fonte);
  } else {
    html += '<button class="del hab-del" title="Remover" onclick="remover' + sufixo + '(' + indice + ')">×</button>';
  }
  html += '</div>';
  html += '<textarea class="desc" name="desc" rows="3" style="display: none" title="Descrição" oninput="' + aoMudar + '">' + esc(habilidade.desc) + '</textarea>';
  html += '</div>';
  return html;
}

function linhaItem(entrada, indice, fixo, zebra) {
  var somenteLeitura = '';
  var classeFixo = '';
  if (fixo) {
    somenteLeitura = ' readonly';
    classeFixo = ' fixo';
  }
  var aoMudar = 'mudarItem(' + indice + ', this)';

  var html = '<div class="ability-wrap item-wrap' + zebra + '">';
  html += '<div class="entry-row item">';
  html += '<button class="expand item-seta" title="Mostrar descrição" onclick="alternarDescricao(this)">▸</button>';
  html += '<span class="item-check">';
  if (equipavel(entrada)) {
    var marcado = '';
    if (entrada.eq) {
      marcado = ' checked';
    }
    html += '<input type="checkbox" class="damage-check" id="eq-' + indice + '" name="eq"' + marcado + ' title="Equipar ' + esc(entrada.nome) + '" onchange="' + aoMudar + '">';
  }
  html += '</span>';
  html += '<input type="text" name="nome" class="item-nome' + classeFixo + '" value="' + esc(entrada.nome) + '" title="Nome do item"' + somenteLeitura + ' oninput="' + aoMudar + '">';
  html += '<input type="number" name="def" min="0" class="item-def' + classeFixo + '" value="' + esc(entrada.def) + '" title="Bônus de Defesa"' + somenteLeitura + ' oninput="' + aoMudar + '" onchange="aoMudarDefDoItem(' + indice + ')">';
  html += '<input type="number" name="esp" min="0" step="0.5" class="item-esp' + classeFixo + '" value="' + esc(entrada.esp) + '" title="Espaços"' + somenteLeitura + ' oninput="' + aoMudar + '">';
  if (fixo) {
    html += trava(entrada.fonte);
  } else {
    html += '<button class="del item-del" title="Remover item" onclick="removerItem(' + indice + ')">×</button>';
  }
  html += '</div>';
  html += '<textarea class="desc" name="desc" rows="3" style="display: none" title="Descrição" oninput="' + aoMudar + '">' + esc(entrada.desc) + '</textarea>';
  html += '</div>';
  return html;
}

function opcaoSelect(valor, selecionado) {
  if (valor === selecionado) {
    return '<option selected>' + valor + '</option>';
  }
  return '<option>' + valor + '</option>';
}

function renderAtaques() {
  var html = '<div class="entry-head attack">';
  html += '<span class="atk-dado"></span><span class="atk-nome">Ataque</span><span class="atk-teste">Teste</span>';
  html += '<span class="atk-dano">Dano</span><span class="atk-crit">Crít.</span><span class="atk-tipo">Tipo</span><span class="atk-del"></span>';
  html += '</div>';

  for (var i = 0; i < S.attacks.length; i++) {
    var ataque = S.attacks[i];
    var zebra = '';
    if (i % 2 === 0) {
      zebra = ' par';
    }
    var aoMudar = 'mudarAtaque(' + i + ', this)';
    html += '<div class="entry-row attack' + zebra + '">';
    html += '<button class="roll-btn atk-dado" title="Rolar ataque" onclick="rolarAtaque(' + i + ', this)">' + D20 + '</button>';
    html += '<input type="text" name="nome" class="atk-nome" value="' + esc(ataque.nome) + '" title="Nome do ataque" oninput="' + aoMudar + '">';
    html += '<select name="teste" class="atk-teste" title="Perícia de ataque" onchange="' + aoMudar + '">';
    html += opcaoSelect('Luta', ataque.teste) + opcaoSelect('Pontaria', ataque.teste);
    html += '</select>';
    html += '<input type="text" name="dano" class="atk-dano" value="' + esc(ataque.dano) + '" title="Dano" oninput="' + aoMudar + '">';
    html += '<input type="text" name="crit" class="atk-crit" value="' + esc(ataque.crit) + '" title="Crítico" oninput="' + aoMudar + '">';
    html += '<input type="text" name="tipo" class="atk-tipo" value="' + esc(ataque.tipo) + '" title="Tipo" oninput="' + aoMudar + '">';
    html += '<button class="del atk-del" title="Remover ataque" onclick="removerAtaque(' + i + ')">×</button>';
    html += '</div>';
  }
  document.getElementById('attacksList').innerHTML = html;
}

function renderHabilidades() {
  var html = '<div class="entry-head ability">';
  html += '<span class="hab-seta"></span><span class="hab-nome">Habilidade</span><span class="hab-custo">PM</span><span class="hab-del"></span>';
  html += '</div>';

  var grupos = agruparLista(S.abilities, 'Escolhidas por você');
  var posicao = 1;
  for (var g = 0; g < grupos.length; g++) {
    var grupo = grupos[g];
    if (grupo.titulo) {
      html += '<div class="grupo-titulo">' + esc(grupo.titulo) + '</div>';
      posicao = posicao + 1;
    }
    for (var k = 0; k < grupo.indices.length; k++) {
      var indice = grupo.indices[k];
      posicao = posicao + 1;
      html += linhaHabilidade(S.abilities[indice], indice, grupo.fixo, 'Habilidade', zebraDaPosicao(posicao));
    }
  }
  document.getElementById('abilitiesList').innerHTML = html;
}

function renderMagias() {
  var html = '<div class="entry-head ability">';
  html += '<span class="hab-seta"></span><span class="hab-nome">Magia</span><span class="hab-custo">PM</span><span class="hab-del"></span>';
  html += '</div>';

  for (var i = 0; i < S.spells.length; i++) {
    html += linhaHabilidade(S.spells[i], i, false, 'Magia', zebraDaPosicao(i + 2));
  }
  document.getElementById('spellsList').innerHTML = html;
}

function renderItens() {
  var html = '<div class="entry-head item">';
  html += '<span class="item-seta"></span><span class="item-check">Equip.</span><span class="item-nome">Item</span>';
  html += '<span class="item-def">Def.</span><span class="item-esp">Esp.</span><span class="item-del"></span>';
  html += '</div>';

  var grupos = agruparLista(S.items, 'Escolhidos por você');
  var posicao = 1;
  for (var g = 0; g < grupos.length; g++) {
    var grupo = grupos[g];
    if (grupo.titulo) {
      html += '<div class="grupo-titulo">' + esc(grupo.titulo) + '</div>';
      posicao = posicao + 1;
    }
    for (var k = 0; k < grupo.indices.length; k++) {
      var indice = grupo.indices[k];
      posicao = posicao + 1;
      html += linhaItem(S.items[indice], indice, grupo.fixo, zebraDaPosicao(posicao));
    }
  }
  document.getElementById('itemsList').innerHTML = html;
}

function renderListas() {
  renderAtaques();
  renderHabilidades();
  renderMagias();
  renderItens();
}

function renderSheets() {
  var html = '';
  for (var i = 0; i < FICHAS.length; i++) {
    var ficha = FICHAS[i];
    var classeCartao = 'sheet-card';
    if (i === atual) {
      classeCartao += ' active';
    }
    var estiloImagem = '';
    if (ficha.image) {
      estiloImagem = ' style="background-image:url(\'' + esc(ficha.image) + '\')"';
    }
    var nome = esc(ficha.name);
    if (nome === '') {
      nome = 'Sem nome';
    }
    html += '<div class="' + classeCartao + '">';
    html += '<div class="sheet-thumb"' + estiloImagem + '></div>';
    html += '<button class="sheet-open" onclick="carregar(' + i + ')"><strong>' + nome + '</strong><small>' + esc(ficha.class) + ' · nível ' + ficha.level + '</small></button>';
    html += '<button class="del-ficha" title="Excluir ficha" onclick="excluirFicha(' + i + ')">×</button>';
    html += '</div>';
  }
  document.getElementById('sheetList').innerHTML = html;
}

function renderImagem() {
  var imagem = document.getElementById('charImg');
  var texto = document.getElementById('crestText');
  if (S.image) {
    imagem.src = S.image;
    imagem.style.display = 'block';
    texto.style.display = 'none';
  } else {
    imagem.src = '';
    imagem.style.display = 'none';
    texto.style.display = '';
  }
}

function atualizarBarra(id, valorAtual, maximo, mudaCor) {
  var porcentagem = Math.min(100, Math.max(0, valorAtual / maximo * 100));
  var barra = document.getElementById(id);
  barra.style.width = porcentagem + '%';
  if (mudaCor) {
    barra.className = '';
    if (porcentagem <= 25) {
      barra.className = 'low';
    } else if (porcentagem <= 50) {
      barra.className = 'mid';
    }
  }
}

function atualizarCampoSeNaoEstiverEditando(id, valor) {
  var campo = document.getElementById(id);
  if (document.activeElement !== campo) {
    campo.value = valor;
  }
}

function calc() {
  var nivel = nivelAtual();

  for (var a = 0; a < ATRIBUTOS.length; a++) {
    var chave = ATRIBUTOS[a].chave;
    var bonusRaca = 0;
    if (S.bonusRaca && S.bonusRaca[chave]) {
      bonusRaca = S.bonusRaca[chave];
    }
    document.getElementById('attrMod-' + chave).textContent = fmt(modDoAtributo(chave));
    var textoRaca = '';
    if (bonusRaca) {
      textoRaca = 'Raça ' + fmt(bonusRaca);
    }
    document.getElementById('attrRaca-' + chave).textContent = textoRaca;
  }

  for (var p = 0; p < PERICIAS.length; p++) {
    var nome = PERICIAS[p].nome;
    document.getElementById('treino-' + p).checked = estaTreinada(nome);
    document.getElementById('base-' + p).textContent = fmt(bonusBase(nome));
    document.getElementById('trval-' + p).textContent = fmt(bonusTreinado(nome));
    document.getElementById('total-' + p).textContent = fmt(bonusTotal(nome));
    atualizarCampoSeNaoEstiverEditando('outros-' + p, bonusOutros(nome) || '');
  }

  var dadosClasse = CLASSES[S.class];
  if (!dadosClasse) {
    dadosClasse = { pvInicial: 0, pvPorNivel: 0, pmPorNivel: 0 };
  }
  var con = modDoAtributo('con');
  var pvMax = Math.max(1, dadosClasse.pvInicial + con + (nivel - 1) * (dadosClasse.pvPorNivel + con));
  var pmMax = Math.max(1, dadosClasse.pmPorNivel * nivel);
  document.getElementById('pvMax').textContent = pvMax;
  document.getElementById('pmMax').textContent = pmMax;
  atualizarBarra('pvFill', S.pvCurrent, pvMax, true);
  atualizarBarra('pmFill', S.pmCurrent, pmMax, false);

  var metros = 9;
  if (S.speedMeters !== null && S.speedMeters !== undefined) {
    metros = S.speedMeters;
  } else if (DESLOCAMENTO[S.race]) {
    metros = DESLOCAMENTO[S.race];
  }
  var quadrados = Math.round(metros / 1.5 * 10) / 10;
  atualizarCampoSeNaoEstiverEditando('speedMeters', metros);
  atualizarCampoSeNaoEstiverEditando('speedSquares', quadrados);

  var equipamento = 0;
  var carga = 0;
  for (var i = 0; i < S.items.length; i++) {
    if (S.items[i].eq) {
      equipamento += Number(S.items[i].def) || 0;
    }
    carga += Number(S.items[i].esp) || 0;
  }
  var outros = 0;
  if (S.defOverride !== null && S.defOverride !== undefined) {
    outros = S.defOverride;
  }
  var defesa = 10 + modDoAtributo('des') + equipamento + outros;
  document.getElementById('defense').textContent = defesa;
  document.getElementById('defDesMod').textContent = fmt(modDoAtributo('des'));
  document.getElementById('defEquipMod').textContent = equipamento;
  if (defAnt !== null && defesa !== defAnt) {
    var caixaDefesa = document.getElementById('defBox');
    caixaDefesa.classList.remove('bump');
    var forcar = caixaDefesa.offsetWidth;
    caixaDefesa.classList.add('bump');
  }
  defAnt = defesa;

  document.getElementById('encumbrance').textContent = carga + ' / ' + Math.max(0, 10 + 2 * modDoAtributo('for'));
  renderSheets();
  salvar();
}

function mostrarAtributos() {
  for (var i = 0; i < ATRIBUTOS.length; i++) {
    document.getElementById('attr-' + ATRIBUTOS[i].chave).value = S.attrs[ATRIBUTOS[i].chave];
  }
}

function aplicarRaca() {
  var novo = RACAS_ATRIBUTOS[S.race] || {};
  var velho = S.bonusRaca || {};
  var aplicado = {};
  for (var i = 0; i < ATRIBUTOS.length; i++) {
    var chave = ATRIBUTOS[i].chave;
    var base = S.attrs[chave] - (velho[chave] || 0);
    var bonus = novo[chave] || 0;
    var valor = base + bonus;
    if (bonus < 0) {
      valor = Math.max(base + bonus, Math.min(base, 3));
    }
    S.attrs[chave] = valor;
    if (valor !== base) {
      aplicado[chave] = valor - base;
    }
  }
  S.bonusRaca = aplicado;
  mostrarAtributos();
}

function entradaItem(modelo, fonte) {
  var espacos = 1;
  if (modelo.esp !== undefined && modelo.esp !== null) {
    espacos = modelo.esp;
  }
  var entrada = {
    nome: modelo.nome,
    def: modelo.def || 0,
    esp: espacos,
    eq: false,
    slot: modelo.slot || '',
    desc: modelo.desc || '',
    catId: modelo.id
  };
  if (fonte) {
    entrada.fonte = fonte;
  }
  return entrada;
}

function entradaHab(modelo, fonte) {
  var descricao = modelo.desc || '';
  if (modelo.circulo) {
    descricao = modelo.tipo + ' · ' + modelo.escola + ' · ' + modelo.circulo + 'º círculo\n' + modelo.desc;
  }
  var entrada = {
    nome: modelo.nome,
    custo: modelo.custo || 0,
    catId: modelo.id,
    desc: descricao
  };
  if (fonte) {
    entrada.fonte = fonte;
  }
  return entrada;
}

function estaDevido(modelo, agora, nivel) {
  if (!modelo.soAuto) {
    return false;
  }
  if (listaOuUnico(modelo.de).indexOf(agora[modelo.soAuto]) === -1) {
    return false;
  }
  return (modelo.nivel || 1) <= nivel;
}

function sincronizarLista(nomeLista, aba, criar, agora, nivel) {
  var catalogo = CATALOGO[aba];
  var devidos = [];
  for (var i = 0; i < catalogo.length; i++) {
    if (estaDevido(catalogo[i], agora, nivel)) {
      devidos.push(catalogo[i]);
    }
  }

  var mantidos = [];
  var atuais = S[nomeLista];
  for (var j = 0; j < atuais.length; j++) {
    var entrada = atuais[j];
    var aindaDevido = false;
    for (var k = 0; k < devidos.length; k++) {
      if (devidos[k].id === entrada.catId) {
        aindaDevido = true;
      }
    }
    if (!entrada.fonte || aindaDevido) {
      mantidos.push(entrada);
    }
  }

  for (var m = 0; m < devidos.length; m++) {
    var jaTem = false;
    for (var n = 0; n < mantidos.length; n++) {
      if (mantidos[n].fonte && mantidos[n].catId === devidos[m].id) {
        jaTem = true;
      }
    }
    if (!jaTem) {
      mantidos.push(criar(devidos[m], devidos[m].soAuto));
    }
  }
  S[nomeLista] = mantidos;
}

function sincronizar() {
  var nivel = nivelAtual();
  var agora = { raca: S.race, origem: S.origin, classe: S.class };
  sincronizarLista('items', 'itens', entradaItem, agora, nivel);
  sincronizarLista('abilities', 'habilidades', entradaHab, agora, nivel);
}

function preencherCampos() {
  document.getElementById('f-name').value = valorOuVazio(S.name);
  document.getElementById('f-race').value = valorOuVazio(S.race);
  document.getElementById('f-origin').value = valorOuVazio(S.origin);
  document.getElementById('f-class').value = valorOuVazio(S.class);
  document.getElementById('f-level').value = valorOuVazio(S.level);
  document.getElementById('f-deity').value = valorOuVazio(S.deity);
  document.getElementById('pvAtual').value = valorOuVazio(S.pvCurrent);
  document.getElementById('pmAtual').value = valorOuVazio(S.pmCurrent);
  document.getElementById('f-money').value = valorOuVazio(S.money);
  document.getElementById('defOutros').value = valorOuVazio(S.defOverride);
}

function carregar(indice) {
  atual = indice;
  S = FICHAS[indice];
  defAnt = null;
  if (!S.bonusRaca) {
    S.bonusRaca = copiarObjeto(RACAS_ATRIBUTOS[S.race] || {});
  }
  sincronizar();
  preencherCampos();
  mostrarAtributos();
  renderListas();
  renderImagem();
  calc();
  document.getElementById('sidebar').classList.remove('open');
}

function mudarTexto(campo, elemento) {
  S[campo] = elemento.value;
  calc();
}

function mudarNumero(campo, elemento) {
  if (campo === 'defOverride' && elemento.value === '') {
    S[campo] = null;
  } else {
    S[campo] = Number(elemento.value) || 0;
  }
  if (campo === 'level') {
    sincronizar();
    renderListas();
  }
  calc();
}

function mudarListado(campo, elemento) {
  var valor = acharNaLista(LISTADOS[campo], elemento.value);
  if (!valor) {
    return;
  }
  S[campo] = valor;
  if (campo === 'race') {
    aplicarRaca();
  }
  sincronizar();
  renderListas();
  calc();
}

function confirmarListado(campo, elemento) {
  var valor = acharNaLista(LISTADOS[campo], elemento.value);
  if (!valor) {
    toast(ROTULOS_LISTADOS[campo], 'Valor inválido', 'Escolha uma opção da lista.', 'fail');
    elemento.value = S[campo];
  } else {
    elemento.value = valor;
  }
}

function abrirOpcoes(campo, elemento) {
  if (elemento.value === '') {
    return;
  }
  if (LISTADOS[campo].indexOf(elemento.value) === -1) {
    return;
  }
  valoresAnteriores[campo] = elemento.value;
  elemento.placeholder = elemento.value;
  elemento.value = '';
}

function fecharOpcoes(campo, elemento) {
  elemento.placeholder = DICAS_LISTADOS[campo];
  if (elemento.value === '' && valoresAnteriores[campo]) {
    elemento.value = valoresAnteriores[campo];
    mudarListado(campo, elemento);
  }
}

function mudarAtributo(indice, elemento) {
  S.attrs[ATRIBUTOS[indice].chave] = Number(elemento.value) || 0;
  calc();
}

function mudarTreino(indice, elemento) {
  var nome = PERICIAS[indice].nome;
  var restantes = [];
  for (var i = 0; i < S.trained.length; i++) {
    if (S.trained[i] !== nome) {
      restantes.push(S.trained[i]);
    }
  }
  if (elemento.checked) {
    restantes.push(nome);
  }
  S.trained = restantes;
  calc();
}

function mudarOutros(indice, elemento) {
  S.skillBonus[PERICIAS[indice].nome] = Number(elemento.value) || 0;
  calc();
}

function mudarDeslocamento(unidade, elemento) {
  if (elemento.value === '') {
    S.speedMeters = null;
  } else {
    var valor = Number(elemento.value) || 0;
    if (unidade === 'quadrados') {
      S.speedMeters = valor * 1.5;
    } else {
      S.speedMeters = valor;
    }
  }
  calc();
}

function mudarCampoDaLista(lista, indice, elemento) {
  var linha = lista[indice];
  var chave = elemento.name;
  if (elemento.type === 'checkbox') {
    linha[chave] = elemento.checked;
  } else if (elemento.type === 'number') {
    linha[chave] = Number(elemento.value) || 0;
  } else {
    linha[chave] = elemento.value;
  }
}

function mudarAtaque(indice, elemento) {
  mudarCampoDaLista(S.attacks, indice, elemento);
  calc();
}

function mudarHabilidade(indice, elemento) {
  mudarCampoDaLista(S.abilities, indice, elemento);
  calc();
}

function mudarMagia(indice, elemento) {
  mudarCampoDaLista(S.spells, indice, elemento);
  calc();
}

function mudarItem(indice, elemento) {
  mudarCampoDaLista(S.items, indice, elemento);
  var linha = S.items[indice];
  if (elemento.name === 'eq' && linha.eq && linha.slot) {
    for (var i = 0; i < S.items.length; i++) {
      if (i !== indice && S.items[i].slot === linha.slot) {
        S.items[i].eq = false;
      }
    }
    for (var j = 0; j < S.items.length; j++) {
      var caixa = document.getElementById('eq-' + j);
      if (caixa) {
        caixa.checked = S.items[j].eq;
      }
    }
  }
  calc();
}

function aoMudarDefDoItem(indice) {
  var linha = S.items[indice];
  var temCaixa = document.getElementById('eq-' + indice) !== null;
  if (temCaixa === equipavel(linha)) {
    return;
  }
  if (!equipavel(linha)) {
    linha.eq = false;
  }
  renderListas();
  calc();
}

function adicionarLinha(lista) {
  var novo;
  if (lista === 'attacks') {
    novo = { nome: 'Novo ataque', teste: 'Luta', dano: '1d6', crit: '20/x2', tipo: 'Corte' };
  } else if (lista === 'abilities') {
    novo = { nome: 'Nova habilidade', custo: 0, desc: '' };
  } else if (lista === 'spells') {
    novo = { nome: 'Nova magia', custo: 0, desc: '' };
  } else {
    novo = { nome: 'Novo item', def: 0, esp: 1, eq: false, slot: '', desc: '' };
  }
  S[lista].push(novo);
  renderListas();
  calc();
}

function removerLinha(lista, indice) {
  lista.splice(indice, 1);
  renderListas();
  calc();
}

function removerAtaque(indice) {
  removerLinha(S.attacks, indice);
}

function removerHabilidade(indice) {
  removerLinha(S.abilities, indice);
}

function removerMagia(indice) {
  removerLinha(S.spells, indice);
}

function removerItem(indice) {
  removerLinha(S.items, indice);
}

function alternarDescricao(botao) {
  var envoltorio = botao.parentNode.parentNode;
  var descricao = envoltorio.getElementsByTagName('textarea')[0];
  if (descricao.style.display === 'none') {
    descricao.style.display = 'block';
    botao.textContent = '▾';
  } else {
    descricao.style.display = 'none';
    botao.textContent = '▸';
  }
}

function excluirFicha(indice) {
  if (FICHAS.length < 2) {
    toast('Ficha', 'Não dá para excluir', 'Precisa existir pelo menos uma ficha.', 'fail');
    return;
  }
  var nome = FICHAS[indice].name || 'sem nome';
  if (!confirm('Excluir a ficha "' + nome + '"?')) {
    return;
  }
  FICHAS.splice(indice, 1);
  if (indice < atual) {
    carregar(atual - 1);
  } else {
    carregar(Math.min(atual, FICHAS.length - 1));
  }
}

function novaFichaClick() {
  FICHAS.push(novaFicha());
  carregar(FICHAS.length - 1);
}

function abrirMenu() {
  document.getElementById('sidebar').classList.add('open');
}

function recolherMenu() {
  var barra = document.getElementById('sidebar');
  var conteudo = document.getElementById('appShell');
  var botao = document.getElementById('collapseSidebar');
  if (window.innerWidth <= 900) {
    barra.classList.remove('open');
    return;
  }
  if (barra.classList.contains('collapsed')) {
    barra.classList.remove('collapsed');
    conteudo.classList.remove('collapsed');
    botao.textContent = '‹';
  } else {
    barra.classList.add('collapsed');
    conteudo.classList.add('collapsed');
    botao.textContent = '›';
  }
}

var MODAIS = ['cropModal', 'periciaModal', 'catalogoModal'];

function modalAberto(id) {
  return document.getElementById(id).style.display === 'flex';
}

function atualizarRolagemDaPagina() {
  var algumAberto = false;
  for (var i = 0; i < MODAIS.length; i++) {
    if (modalAberto(MODAIS[i])) {
      algumAberto = true;
    }
  }
  if (algumAberto) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function abrirModal(id) {
  document.getElementById(id).style.display = 'flex';
  atualizarRolagemDaPagina();
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
  atualizarRolagemDaPagina();
}

document.onkeydown = function (evento) {
  if (evento.key === 'Escape') {
    if (modalAberto('cropModal')) {
      fecharCorte();
    }
    if (modalAberto('periciaModal')) {
      fecharPericia();
    }
    if (modalAberto('catalogoModal')) {
      fecharCatalogo();
    }
  }
};

var CV = 300;
var RAIO = 130;
var CORTE = { img: null, base: 1, zoom: 1, x: 0, y: 0 };
var cvCorte = document.getElementById('cropCanvas');
var ctx = cvCorte.getContext('2d');
var arrasto = null;
ctx.imageSmoothingQuality = 'high';

function escolherImagem(campoArquivo) {
  var arquivo = campoArquivo.files[0];
  campoArquivo.value = '';
  if (!arquivo) {
    return;
  }
  if (arquivo.type.indexOf('image/') !== 0 || arquivo.size > 5 * 1024 * 1024) {
    toast('Imagem', 'Arquivo inválido', 'Escolha uma imagem de até 5 MB.', 'fail');
    return;
  }
  var leitor = new FileReader();
  leitor.onload = function () {
    abrirCorte(leitor.result);
  };
  leitor.readAsDataURL(arquivo);
}

function limitarCorte() {
  var escala = CORTE.base * CORTE.zoom;
  var maxX = Math.max(0, (CORTE.img.width * escala - 2 * RAIO) / 2);
  var maxY = Math.max(0, (CORTE.img.height * escala - 2 * RAIO) / 2);
  CORTE.x = Math.min(maxX, Math.max(-maxX, CORTE.x));
  CORTE.y = Math.min(maxY, Math.max(-maxY, CORTE.y));
}

function desenharCorte() {
  var escala = CORTE.base * CORTE.zoom;
  var largura = CORTE.img.width * escala;
  var altura = CORTE.img.height * escala;
  ctx.clearRect(0, 0, CV, CV);
  ctx.drawImage(CORTE.img, CV / 2 + CORTE.x - largura / 2, CV / 2 + CORTE.y - altura / 2, largura, altura);
  ctx.fillStyle = 'rgba(0, 0, 0, .6)';
  ctx.beginPath();
  ctx.rect(0, 0, CV, CV);
  ctx.arc(CV / 2, CV / 2, RAIO, 0, Math.PI * 2);
  ctx.fill('evenodd');
  ctx.beginPath();
  ctx.arc(CV / 2, CV / 2, RAIO, 0, Math.PI * 2);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 3;
  ctx.stroke();
}

function zoomCorte(novoZoom) {
  var zoom = Math.min(3, Math.max(1, novoZoom));
  CORTE.x = CORTE.x * zoom / CORTE.zoom;
  CORTE.y = CORTE.y * zoom / CORTE.zoom;
  CORTE.zoom = zoom;
  document.getElementById('cropZoom').value = zoom;
  limitarCorte();
  desenharCorte();
}

function abrirCorte(origem) {
  var imagem = new Image();
  imagem.onerror = function () {
    toast('Imagem', 'Arquivo inválido', 'Não foi possível abrir essa imagem.', 'fail');
  };
  imagem.onload = function () {
    CORTE.img = imagem;
    CORTE.base = Math.max(2 * RAIO / imagem.width, 2 * RAIO / imagem.height);
    CORTE.zoom = 1;
    CORTE.x = 0;
    CORTE.y = 0;
    document.getElementById('cropZoom').value = 1;
    desenharCorte();
    abrirModal('cropModal');
    document.getElementById('cropZoom').focus();
  };
  imagem.src = origem;
}

function fecharCorte() {
  fecharModal('cropModal');
  CORTE.img = null;
}

function comecarArrasto(evento) {
  arrasto = { x: evento.clientX, y: evento.clientY };
  cvCorte.setPointerCapture(evento.pointerId);
}

function moverArrasto(evento) {
  if (!arrasto) {
    return;
  }
  var fator = CV / cvCorte.getBoundingClientRect().width;
  CORTE.x += (evento.clientX - arrasto.x) * fator;
  CORTE.y += (evento.clientY - arrasto.y) * fator;
  arrasto = { x: evento.clientX, y: evento.clientY };
  limitarCorte();
  desenharCorte();
}

function soltarArrasto() {
  arrasto = null;
}

function rodarZoom(evento) {
  evento.preventDefault();
  if (evento.deltaY < 0) {
    zoomCorte(CORTE.zoom + 0.1);
  } else {
    zoomCorte(CORTE.zoom - 0.1);
  }
}

function mudarZoom(elemento) {
  zoomCorte(Number(elemento.value));
}

function salvarCorte() {
  var escala = CORTE.base * CORTE.zoom;
  var lado = 2 * RAIO / escala;
  var origemX = CORTE.img.width / 2 - CORTE.x / escala - lado / 2;
  var origemY = CORTE.img.height / 2 - CORTE.y / escala - lado / 2;
  var tela = document.createElement('canvas');
  var pincel = tela.getContext('2d');
  tela.width = 256;
  tela.height = 256;
  pincel.fillStyle = '#eee1c7';
  pincel.fillRect(0, 0, 256, 256);
  pincel.drawImage(CORTE.img, origemX, origemY, lado, lado, 0, 0, 256, 256);
  S.image = tela.toDataURL('image/jpeg', 0.9);
  fecharCorte();
  renderImagem();
  renderSheets();
  salvar();
}

function usoHtml(uso) {
  var html = '';
  var nome = '';
  if (uso.nome) {
    nome = '<strong>' + esc(uso.nome);
    if (uso.info) {
      nome += ' (' + esc(uso.info) + ')';
    }
    nome += '.</strong> ';
  }
  if (nome || uso.texto) {
    html += '<p class="pericia-uso">' + nome + esc(uso.texto || '') + '</p>';
  }
  if (uso.lista) {
    html += '<ul class="pericia-lista">';
    for (var i = 0; i < uso.lista.length; i++) {
      html += '<li>' + esc(uso.lista[i]) + '</li>';
    }
    html += '</ul>';
  }
  if (uso.tabela) {
    html += '<table class="pericia-tabela"><thead><tr>';
    for (var c = 0; c < uso.tabela.cab.length; c++) {
      html += '<th>' + esc(uso.tabela.cab[c]) + '</th>';
    }
    html += '</tr></thead><tbody>';
    for (var l = 0; l < uso.tabela.linhas.length; l++) {
      html += '<tr>';
      for (var d = 0; d < uso.tabela.linhas[l].length; d++) {
        html += '<td>' + esc(uso.tabela.linhas[l][d]) + '</td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
  }
  if (uso.depois) {
    html += '<p class="pericia-uso">' + esc(uso.depois) + '</p>';
  }
  return html;
}

function abrirPericia(indice) {
  var nome = PERICIAS[indice].nome;
  var descricao = DESCRICOES[nome];
  if (!descricao) {
    return;
  }
  var html = '<p class="pericia-cab">' + esc(descricao.cab) + '</p>';
  html += '<p class="pericia-resumo">' + esc(descricao.resumo) + '</p>';
  for (var i = 0; i < descricao.usos.length; i++) {
    html += usoHtml(descricao.usos[i]);
  }
  document.getElementById('periciaTitulo').textContent = nome;
  document.getElementById('periciaConteudo').innerHTML = html;
  abrirModal('periciaModal');
  document.getElementById('periciaFechar').focus();
}

function fecharPericia() {
  fecharModal('periciaModal');
}

function cliqueFundoPericia(evento) {
  if (evento.target.id === 'periciaModal') {
    fecharPericia();
  }
}

var catAba = 'itens';
var catMostrarAuto = false;
var catAbertas = {};
var NOMES_ABAS = ['itens', 'habilidades', 'magias'];

function semAcento(texto) {
  return String(texto).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function listaDaAba(aba) {
  if (aba === 'itens') {
    return S.items;
  }
  if (aba === 'habilidades') {
    return S.abilities;
  }
  return S.spells;
}

function entradasDaFicha(aba, modelo) {
  var encontradas = [];
  var lista = listaDaAba(aba);
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].catId === modelo.id) {
      encontradas.push(lista[i]);
    }
  }
  return encontradas;
}

function precoBR(preco) {
  return 'T$ ' + Number(preco).toLocaleString('pt-BR');
}

function categoriasDe(modelo) {
  if (!modelo.cat) {
    return [];
  }
  return listaOuUnico(modelo.cat);
}

function textoDeBusca(modelo) {
  var pedacos = [modelo.nome, modelo.tipo];
  pedacos = pedacos.concat(categoriasDe(modelo));
  pedacos.push(modelo.escola);
  pedacos.push(modelo.desc);
  if (modelo.de) {
    pedacos = pedacos.concat(listaOuUnico(modelo.de));
  }
  return pedacos.join(' ');
}

function cartaoCat(modelo) {
  var automatico = !!modelo.soAuto;
  var rotuloFonte = '';
  if (automatico) {
    rotuloFonte = NOMES_FONTE[modelo.soAuto];
  }
  var exclusivo = '';
  if (!automatico && modelo.de && modelo.fonteDe) {
    exclusivo = NOMES_FONTE[modelo.fonteDe];
  }

  var naFicha = entradasDaFicha(catAba, modelo);
  var tem = false;
  var quantidade = 0;
  for (var i = 0; i < naFicha.length; i++) {
    if (automatico && naFicha[i].fonte) {
      tem = true;
    }
    if (!automatico && !naFicha[i].fonte) {
      tem = true;
    }
    if (catAba === 'itens' && !naFicha[i].fonte) {
      quantidade = quantidade + 1;
    }
  }

  var pedacosMeta = [];
  if (catAba === 'itens') {
    var espacos = 1;
    if (modelo.esp !== undefined && modelo.esp !== null) {
      espacos = modelo.esp;
    }
    pedacosMeta.push(modelo.tipo);
    pedacosMeta.push(String(espacos).replace('.', ',') + ' esp.');
    if (modelo.preco !== undefined && modelo.preco !== null) {
      pedacosMeta.push(precoBR(modelo.preco));
    }
  } else if (catAba === 'habilidades') {
    pedacosMeta.push(modelo.tipo);
    if ((modelo.nivel || 1) > 1) {
      pedacosMeta.push(modelo.nivel + 'º nível');
    }
    if (modelo.custo) {
      pedacosMeta.push(modelo.custo + ' PM');
    }
  } else {
    pedacosMeta.push(modelo.tipo + ' · ' + modelo.escola);
    pedacosMeta.push(modelo.circulo + 'º círculo');
    pedacosMeta.push(modelo.custo + ' PM');
  }
  var textosMeta = [];
  for (var m = 0; m < pedacosMeta.length; m++) {
    if (pedacosMeta[m]) {
      textosMeta.push(pedacosMeta[m]);
    }
  }
  var meta = textosMeta.join(' · ');

  var bloqueado = automatico || (catAba !== 'itens' && tem);
  var rotulo = '+ Adicionar';
  if (automatico) {
    if (tem) {
      rotulo = 'Já recebido';
    } else {
      rotulo = 'Só por ' + rotuloFonte;
    }
  } else if (bloqueado) {
    rotulo = 'Já adicionada';
  }

  var titulo = modelo.nome;
  if (automatico) {
    titulo = modelo.nome + ' (' + rotuloFonte + ')';
  }
  var descricao = esc(modelo.desc);
  if (!descricao) {
    descricao = 'O livro não traz uma descrição própria para este item.';
  }

  var html = '<div class="cat-item"><div class="cat-info">';
  html += '<h3>' + esc(titulo) + '</h3>';
  html += '<div class="cat-meta">' + esc(meta) + '</div>';
  if (automatico || exclusivo) {
    var origem = rotuloFonte || exclusivo;
    html += '<div class="cat-origem">' + esc(primeiraMaiuscula(origem)) + ': ' + esc(listaOuUnico(modelo.de).join(', ')) + '</div>';
  }
  html += '<details class="cat-det"><summary>Descrição</summary><p>' + descricao + '</p></details>';
  html += '</div>';
  html += '<div class="cat-acao">';
  var desabilitado = '';
  if (bloqueado) {
    desabilitado = ' disabled';
  }
  html += '<button type="button" class="primary-btn" name="' + modelo.id + '" onclick="adicionarCat(this.name)"' + desabilitado + '>' + rotulo + '</button>';
  if (quantidade) {
    html += '<small>' + quantidade + ' na ficha</small>';
  }
  html += '</div></div>';
  return html;
}

function cartoesEmTexto(lista) {
  var html = '';
  for (var i = 0; i < lista.length; i++) {
    html += cartaoCat(lista[i]);
  }
  return html;
}

function gruposDaAba() {
  if (catAba === 'itens') {
    return [{ titulo: '', cats: CATEGORIAS_ITENS }];
  }
  if (catAba === 'habilidades') {
    return CATEGORIAS_HAB;
  }
  return [{ titulo: '', cats: CATEGORIAS_MAG }];
}

function temCategoria(modelo, categoria) {
  return categoriasDe(modelo).indexOf(categoria) !== -1;
}

function listaCartoes(lista, buscando, prefixo) {
  var grupos = gruposDaAba();
  var conhecidas = [];
  for (var g = 0; g < grupos.length; g++) {
    conhecidas = conhecidas.concat(grupos[g].cats);
  }

  var soltas = [];
  for (var i = 0; i < lista.length; i++) {
    var categorias = categoriasDe(lista[i]);
    var conhecida = false;
    for (var c = 0; c < categorias.length; c++) {
      if (conhecidas.indexOf(categorias[c]) !== -1) {
        conhecida = true;
      }
    }
    if (!conhecida) {
      soltas.push(lista[i]);
    }
  }

  if (soltas.length === lista.length) {
    return cartoesEmTexto(lista);
  }

  var html = '';
  for (var h = 0; h < grupos.length; h++) {
    var grupo = grupos[h];
    var secoes = [];
    for (var s = 0; s < grupo.cats.length; s++) {
      for (var t = 0; t < lista.length; t++) {
        if (temCategoria(lista[t], grupo.cats[s]) && secoes.indexOf(grupo.cats[s]) === -1) {
          secoes.push(grupo.cats[s]);
        }
      }
    }
    if (secoes.length === 0) {
      continue;
    }

    if (grupo.titulo) {
      var classeGrupo = 'cat-grupo';
      if (prefixo === '' && html === '') {
        classeGrupo += ' primeiro';
      }
      html += '<div class="' + classeGrupo + '">' + esc(grupo.titulo) + '</div>';
    }

    for (var u = 0; u < secoes.length; u++) {
      var categoria = secoes[u];
      var itens = [];
      for (var v = 0; v < lista.length; v++) {
        if (temCategoria(lista[v], categoria)) {
          itens.push(lista[v]);
        }
      }
      var chave = prefixo + categoria;
      var aberta = buscando || catAbertas[chave];
      var classeSecao = 'cat-secao';
      if (aberta) {
        classeSecao += ' aberta';
      }
      html += '<button type="button" class="' + classeSecao + '" name="' + esc(chave) + '" onclick="alternarSecao(this.name)">';
      html += '<span class="seta">▸</span>' + esc(categoria) + '<small>' + itens.length + '</small></button>';
      if (aberta) {
        html += cartoesEmTexto(itens);
      }
    }
  }
  return html + cartoesEmTexto(soltas);
}

function marcarAbaAtiva() {
  for (var i = 0; i < NOMES_ABAS.length; i++) {
    var botao = document.getElementById('aba-' + NOMES_ABAS[i]);
    if (NOMES_ABAS[i] === catAba) {
      botao.className = 'cat-aba ativa';
    } else {
      botao.className = 'cat-aba';
    }
  }
}

function renderCatalogo() {
  var busca = semAcento(document.getElementById('catBusca').value.trim());
  var caixa = document.getElementById('catLista');
  var topo = caixa.scrollTop;
  marcarAbaAtiva();

  var catalogo = CATALOGO[catAba];
  var achados = [];
  for (var i = 0; i < catalogo.length; i++) {
    if (busca === '' || semAcento(textoDeBusca(catalogo[i])).indexOf(busca) !== -1) {
      achados.push(catalogo[i]);
    }
  }
  achados.sort(function (a, b) {
    return a.nome.localeCompare(b.nome, 'pt-BR');
  });

  var livres = [];
  var automaticos = [];
  for (var j = 0; j < achados.length; j++) {
    if (achados[j].soAuto) {
      automaticos.push(achados[j]);
    } else {
      livres.push(achados[j]);
    }
  }

  var buscando = busca !== '';
  var html = '';
  if (livres.length > 0) {
    html += listaCartoes(livres, buscando, '');
  } else if (automaticos.length === 0) {
    html += '<p class="cat-vazio">Nada encontrado.</p>';
  }

  if (automaticos.length > 0) {
    var acao = 'Mostrar';
    var icone = OLHO;
    var ocultos = ' ocultos';
    if (automaticos.length === 1) {
      ocultos = ' oculto';
    }
    if (catMostrarAuto) {
      acao = 'Ocultar';
      icone = OLHO_CORTADO;
      ocultos = '';
    }
    html += '<div class="grupo-titulo cat-divisor"><span>Ganhos automaticamente (não podem ser adicionados à mão) · ' + automaticos.length + ocultos + '</span>';
    html += '<button type="button" class="cat-olho" id="catOlho" title="' + acao + ' os bloqueados" onclick="alternarBloqueados()">' + icone + '</button></div>';
    if (catMostrarAuto) {
      html += listaCartoes(automaticos, buscando, 'auto:');
    }
  }

  caixa.innerHTML = html;
  caixa.scrollTop = topo;
}

function abrirCatalogo(aba) {
  catAba = aba;
  catMostrarAuto = false;
  catAbertas = {};
  document.getElementById('catBusca').value = '';
  document.getElementById('catStatus').textContent = '';
  renderCatalogo();
  document.getElementById('catLista').scrollTop = 0;
  abrirModal('catalogoModal');
  document.getElementById('catBusca').focus();
}

function fecharCatalogo() {
  fecharModal('catalogoModal');
}

function cliqueFundoCatalogo(evento) {
  if (evento.target.id === 'catalogoModal') {
    fecharCatalogo();
  }
}

function trocarAba(aba) {
  catAba = aba;
  document.getElementById('catLista').scrollTop = 0;
  renderCatalogo();
}

function alternarSecao(chave) {
  if (catAbertas[chave]) {
    delete catAbertas[chave];
  } else {
    catAbertas[chave] = true;
  }
  renderCatalogo();
  var botoes = document.getElementsByClassName('cat-secao');
  for (var i = 0; i < botoes.length; i++) {
    if (botoes[i].name === chave) {
      botoes[i].focus();
    }
  }
}

function alternarBloqueados() {
  catMostrarAuto = !catMostrarAuto;
  renderCatalogo();
  document.getElementById('catOlho').focus();
}

function adicionarCat(id) {
  var modelo = null;
  var catalogo = CATALOGO[catAba];
  for (var i = 0; i < catalogo.length; i++) {
    if (catalogo[i].id === id) {
      modelo = catalogo[i];
    }
  }
  if (!modelo || modelo.soAuto) {
    return;
  }

  var escolhidasPeloJogador = 0;
  var naFicha = entradasDaFicha(catAba, modelo);
  for (var j = 0; j < naFicha.length; j++) {
    if (!naFicha[j].fonte) {
      escolhidasPeloJogador = escolhidasPeloJogador + 1;
    }
  }

  if (catAba === 'itens') {
    S.items.push(entradaItem(modelo));
  } else if (escolhidasPeloJogador === 0) {
    listaDaAba(catAba).push(entradaHab(modelo));
  } else {
    return;
  }

  renderListas();
  calc();
  renderCatalogo();

  var destino = 'as magias';
  if (catAba === 'itens') {
    destino = 'o inventário';
  } else if (catAba === 'habilidades') {
    destino = 'as habilidades';
  }
  document.getElementById('catStatus').textContent = modelo.nome + ' foi para ' + destino + '.';
}

function montarOpcoes(lista) {
  var html = '';
  for (var i = 0; i < lista.length; i++) {
    html += '<option value="' + lista[i] + '">';
  }
  return html;
}

function montarAtributos() {
  var html = '';
  for (var i = 0; i < ATRIBUTOS.length; i++) {
    var atributo = ATRIBUTOS[i];
    html += '<div class="attr-card">';
    html += '<div class="attr-top">';
    html += '<button class="attr-roll" title="Rolar ' + atributo.nome + '" onclick="rolarAtributo(' + i + ', this)">' + D20 + '</button>';
    html += '<b title="' + atributo.nome + '">' + atributo.sigla + '</b>';
    html += '</div>';
    html += '<input type="number" min="1" max="40" id="attr-' + atributo.chave + '" title="' + atributo.nome + '" oninput="mudarAtributo(' + i + ', this)">';
    html += '<div class="attr-mod" id="attrMod-' + atributo.chave + '">+0</div>';
    html += '<div class="attr-raca" id="attrRaca-' + atributo.chave + '"></div>';
    html += '</div>';
  }
  document.getElementById('attributesGrid').innerHTML = html;
}

function montarPericias() {
  var html = '';
  for (var i = 0; i < PERICIAS.length; i++) {
    var nome = PERICIAS[i].nome;
    var sigla = PERICIAS[i].atributo.toUpperCase();
    var zebra = '';
    if (i % 2 === 1) {
      zebra = ' par';
    }
    html += '<div class="skill-row' + zebra + '">';
    html += '<button class="skill-roll col-dado" title="Rolar ' + nome + '" onclick="rolarPericia(' + i + ', this)">' + D20 + '</button>';
    if (DESCRICOES[nome]) {
      html += '<button type="button" class="skill-name col-nome" title="Ver descrição" onclick="abrirPericia(' + i + ')">' + nome + '</button>';
    } else {
      html += '<span class="skill-name col-nome">' + nome + '</span>';
    }
    html += '<span class="skill-attr col-atr">( ' + sigla + ' )</span>';
    html += '<span class="skill-mod-base col-bonus" id="base-' + i + '">+0</span>';
    html += '<label class="skill-train-label col-treino">';
    html += '<input type="checkbox" class="training" id="treino-' + i + '" title="Treinada em ' + nome + '" onchange="mudarTreino(' + i + ', this)">';
    html += '<span class="skill-train-val" id="trval-' + i + '">+0</span>';
    html += '</label>';
    html += '<input type="number" class="skill-outros" id="outros-' + i + '" placeholder="0" title="Outros bônus de ' + nome + '" oninput="mudarOutros(' + i + ', this)">';
    html += '<strong class="skill-total col-total" id="total-' + i + '">+0</strong>';
    html += '</div>';
  }
  document.getElementById('skillsList').innerHTML = html;
}

var CHAVE = 'fato-fichas-v1';
var salvarTimer = null;

function salvar() {
  clearTimeout(salvarTimer);
  salvarTimer = setTimeout(salvarAgora, 300);
}

function salvarAgora() {
  clearTimeout(salvarTimer);
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ versao: 1, atual: atual, fichas: FICHAS }));
  } catch (erro) {
    var mensagem = 'O navegador bloqueou o salvamento.';
    if (erro.name === 'QuotaExceededError') {
      mensagem = 'Armazenamento cheio: remova uma imagem de personagem.';
    }
    toast('Ficha', 'Não foi possível salvar', mensagem, 'fail');
  }
}

function descricaoDeMagiaAntiga(descricao) {
  var fimDaLinha = descricao.indexOf('\n');
  if (fimDaLinha === -1) {
    return false;
  }
  var linha = descricao.substring(0, fimDaLinha);
  var comecos = ['Arcana · ', 'Divina · ', 'Universal · '];
  var resto = null;
  for (var i = 0; i < comecos.length; i++) {
    if (linha.indexOf(comecos[i]) === 0) {
      resto = linha.substring(comecos[i].length);
    }
  }
  if (resto === null || resto.length < 14) {
    return false;
  }
  var final = 'º círculo';
  if (resto.substring(resto.length - final.length) !== final) {
    return false;
  }
  var digito = resto.charAt(resto.length - final.length - 1);
  if (digito < '0' || digito > '9') {
    return false;
  }
  var separador = resto.substring(resto.length - final.length - 4, resto.length - final.length - 1);
  return separador === ' · ';
}

function ehMagia(entrada) {
  for (var i = 0; i < CATALOGO.magias.length; i++) {
    if (CATALOGO.magias[i].id === entrada.catId) {
      return true;
    }
  }
  return descricaoDeMagiaAntiga(entrada.desc || '');
}

function completarFicha(salva) {
  var base = novaFicha();
  var ficha = copiarObjeto(base);
  for (var chave in salva) {
    ficha[chave] = salva[chave];
  }
  ficha.attrs = copiarObjeto(base.attrs);
  if (salva.attrs) {
    for (var atributo in salva.attrs) {
      ficha.attrs[atributo] = salva.attrs[atributo];
    }
  }

  var listas = ['trained', 'attacks', 'abilities', 'spells', 'items'];
  for (var i = 0; i < listas.length; i++) {
    if (!Array.isArray(ficha[listas[i]])) {
      ficha[listas[i]] = base[listas[i]];
    }
  }

  var habilidades = [];
  for (var j = 0; j < ficha.abilities.length; j++) {
    if (ehMagia(ficha.abilities[j])) {
      ficha.spells.push(ficha.abilities[j]);
    } else {
      habilidades.push(ficha.abilities[j]);
    }
  }
  ficha.abilities = habilidades;

  if (!ficha.skillBonus || typeof ficha.skillBonus !== 'object') {
    ficha.skillBonus = {};
  }
  if (!salva.bonusRaca || typeof salva.bonusRaca !== 'object') {
    delete ficha.bonusRaca;
  }
  return ficha;
}

function lerSalvo() {
  try {
    var dados = JSON.parse(localStorage.getItem(CHAVE));
    if (!dados || !Array.isArray(dados.fichas) || dados.fichas.length === 0) {
      return null;
    }
    var fichas = [];
    for (var i = 0; i < dados.fichas.length; i++) {
      var ficha = dados.fichas[i];
      if (ficha && typeof ficha === 'object') {
        fichas.push(completarFicha(ficha));
      }
    }
    if (fichas.length === 0) {
      return null;
    }
    var indice = Number(dados.atual) || 0;
    indice = Math.min(Math.max(0, indice), fichas.length - 1);
    return { fichas: fichas, atual: indice };
  } catch (erro) {
    return null;
  }
}

function iniciar() {
  document.getElementById('lista-racas').innerHTML = montarOpcoes(RACAS);
  document.getElementById('lista-origens').innerHTML = montarOpcoes(ORIGENS);
  document.getElementById('lista-classes').innerHTML = montarOpcoes(NOMES_CLASSES);
  montarAtributos();
  montarPericias();

  var salvo = lerSalvo();
  if (salvo) {
    FICHAS.splice(0, FICHAS.length);
    for (var i = 0; i < salvo.fichas.length; i++) {
      FICHAS.push(salvo.fichas[i]);
    }
  }
  for (var j = 0; j < FICHAS.length; j++) {
    if (!FICHAS[j].bonusRaca) {
      FICHAS[j].bonusRaca = copiarObjeto(RACAS_ATRIBUTOS[FICHAS[j].race] || {});
    }
  }
  if (salvo) {
    carregar(salvo.atual);
  } else {
    carregar(0);
  }
}

window.onpagehide = salvarAgora;
iniciar();
