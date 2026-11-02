var RACAS_ATRIBUTOS = {
  'Anão': { con: 4, sab: 2, des: -2 },
  'Dahllan': { sab: 4, des: 2, int: -2 },
  'Elfo': { int: 4, des: 2, con: -2 },
  'Goblin': { des: 4, int: 2, car: -2 },
  'Lefou': { car: -2 },
  'Minotauro': { for: 4, con: 2, sab: -2 },
  'Qareen': { car: 4, int: 2, sab: -2 },
  'Golem': { for: 4, con: 2, car: -2 },
  'Hynne': { des: 4, car: 2, for: -2 },
  'Kliren': { int: 4, car: 2, for: -2 },
  'Medusa': { des: 4, car: 2 },
  'Osteon': { con: -2 },
  'Sílfide': { car: 4, des: 2, for: -4 },
  'Trog': { con: 4, for: 2, int: -2 }
};

function copiarObjeto(origem) {
  var copia = {};
  for (var chave in origem) {
    copia[chave] = origem[chave];
  }
  return copia;
}

function racial(id, nome, de, custo, desc) {
  return { id: id, nome: nome, custo: custo, tipo: 'Habilidade de raça', cat: de, soAuto: 'raca', de: de, desc: desc };
}

function classe(id, nome, de, nivel, custo, desc) {
  return { id: id, nome: nome, custo: custo, tipo: 'Habilidade de classe', cat: de, soAuto: 'classe', de: de, nivel: nivel, desc: desc };
}

function daOrigem(base, de, extra) {
  var novo = copiarObjeto(base);
  if (extra) {
    for (var chave in extra) {
      novo[chave] = extra[chave];
    }
  }
  if (extra && extra.id) {
    novo.id = extra.id;
  } else {
    novo.id = base.id + '-origem';
  }
  novo.soAuto = 'origem';
  novo.de = de;
  novo.preco = null;
  return novo;
}

var CATALOGO = {
  itens: ITENS_LIVRO.slice(),
  habilidades: HABILIDADES_LIVRO.slice(),
  magias: MAGIAS_LIVRO.slice()
};

CATALOGO.habilidades.push(
    racial('conhecimento-rochas', 'Conhecimento das Rochas', 'Anão', 0, 'Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.'),
    racial('devagar-e-sempre', 'Devagar e Sempre', 'Anão', 0, 'Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.'),
    racial('duro-como-pedra', 'Duro como Pedra', 'Anão', 0, 'Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.'),
    racial('tradicao-heredrimm', 'Tradição de Heredrimm', 'Anão', 0, 'Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.'),
    racial('amiga-das-plantas', 'Amiga das Plantas', 'Dahllan', 0, 'Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.'),
    racial('armadura-allihanna', 'Armadura de Allihanna', 'Dahllan', 1, 'Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.'),
    racial('empatia-selvagem-dahllan', 'Empatia Selvagem', 'Dahllan', 0, 'Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais (veja Diplomacia). Caso receba esta habilidade novamente, recebe +2 em Adestramento.'),
    racial('graca-glorienn', 'Graça de Glórienn', 'Elfo', 0, 'Seu deslocamento é 12m (em vez de 9m).'),
    racial('sangue-magico', 'Sangue Mágico', 'Elfo', 0, 'Você recebe +1 ponto de mana por nível.'),
    racial('sentidos-elficos', 'Sentidos Élficos', 'Elfo', 0, 'Você recebe visão na penumbra e +2 em Misticismo e Percepção.'),
    racial('engenhoso', 'Engenhoso', 'Goblin', 0, 'Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.'),
    racial('espelunqueiro', 'Espelunqueiro', 'Goblin', 0, 'Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.'),
    racial('peste-esguia', 'Peste Esguia', 'Goblin', 0, 'Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.'),
    racial('rato-das-ruas', 'Rato das Ruas', 'Goblin', 0, 'Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.'),
    racial('cria-tormenta', 'Cria da Tormenta', 'Lefou', 0, 'Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.'),
    racial('chifres', 'Chifres', 'Minotauro', 1, 'Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.'),
    racial('couro-rigido', 'Couro Rígido', 'Minotauro', 0, 'Sua pele é dura como a de um touro. Você recebe +1 na Defesa.'),
    racial('faro', 'Faro', 'Minotauro', 0, 'Você tem olfato apurado. Contra inimigos em alcance curto que não possa perceber, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.'),
    racial('medo-altura', 'Medo de Altura', 'Minotauro', 0, 'Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.'),
    racial('desejos', 'Desejos', 'Qareen', 0, 'Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.'),
    racial('arremessador', 'Arremessador', 'Hynne', 0, 'Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.'),
    racial('pequeno-rechonchudo', 'Pequeno e Rechonchudo', 'Hynne', 0, 'Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e pode usar Destreza como atributo-chave de Atletismo (em vez de Força).'),
    racial('sorte-salvadora', 'Sorte Salvadora', 'Hynne', 1, 'Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.'),
    racial('engenhosidade-kliren', 'Engenhosidade', 'Kliren', 2, 'Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de Inteligência no teste. Você não pode usar esta habilidade em testes de ataque. Caso receba esta habilidade novamente, seu custo é reduzido em –1 PM.'),
    racial('ossos-frageis', 'Ossos Frágeis', 'Kliren', 0, 'Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.'),
    racial('vanguardista', 'Vanguardista', 'Kliren', 0, 'Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, a sua escolha).'),
    racial('chassi', 'Chassi', 'Golem', 0, 'Seu corpo artificial é resistente, mas rígido. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você continua só podendo usar uma armadura).'),
    racial('criatura-artificial', 'Criatura Artificial', 'Golem', 0, 'Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PV e PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso). Por fim, a perícia Cura não funciona em você, mas Ofício (artesão) pode ser usada no lugar dela.'),
    racial('cria-megalokk', 'Cria de Megalokk', 'Medusa', 0, 'Você é uma criatura do tipo monstro e recebe visão no escuro.'),
    racial('natureza-venenosa', 'Natureza Venenosa', 'Medusa', 1, 'Você recebe resistência a veneno +5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja usando. A arma causa perda de 1d12 pontos de vida. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro).'),
    racial('olhar-atordoante', 'Olhar Atordoante', 'Medusa', 1, 'Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada (apenas uma vez por cena).'),
    racial('armadura-ossea', 'Armadura Óssea', 'Osteon', 0, 'Você recebe redução de corte, frio e perfuração 5.'),
    racial('natureza-esqueletica', 'Natureza Esquelética', 'Osteon', 0, 'Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV.'),
    racial('preco-nao-vida', 'Preço da Não Vida', 'Osteon', 0, 'Você precisa passar oito horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (osteon não são afetados por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome.'),
    racial('mestre-tridente', 'Mestre do Tridente', 'Sereia/Tritão', 0, 'Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes.'),
    racial('transformacao-anfibia', 'Transformação Anfíbia', 'Sereia/Tritão', 0, 'Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).'),
    racial('asas-borboleta', 'Asas de Borboleta', 'Sílfide', 1, 'Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.'),
    racial('espirito-natureza', 'Espírito da Natureza', 'Sílfide', 0, 'Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.'),
    racial('heranca-divina', 'Herança Divina', 'Suraggel', 0, 'Você é uma criatura do tipo espírito e recebe visão no escuro.'),
    racial('mau-cheiro', 'Mau Cheiro', 'Trog', 2, 'Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.'),
    racial('mordida', 'Mordida', 'Trog', 1, 'Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.'),
    racial('reptiliano', 'Reptiliano', 'Trog', 0, 'Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.'),
    racial('sangue-frio', 'Sangue Frio', 'Trog', 0, 'Você sofre 1 ponto de dano adicional por dado de dano de frio.'),
    classe('magias-arcanista', 'Magias', 'Arcanista', 1, 0, 'Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo (escolha-as na aba Magias do catálogo). A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho e você soma seu bônus de atributo-chave no seu total de PM.'),
    classe('alta-arcana', 'Alta Arcana', 'Arcanista', 20, 0, 'Seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).'),
    classe('furia', 'Fúria', 'Bárbaro', 1, 2, 'Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.'),
    classe('instinto-selvagem', 'Instinto Selvagem', 'Bárbaro', 3, 0, 'Você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.'),
    classe('reducao-dano-barbaro', 'Redução de Dano', 'Bárbaro', 5, 0, 'Graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.'),
    classe('furia-titanica', 'Fúria Titânica', 'Bárbaro', 20, 0, 'O bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 5 PM, em vez de um bônus de +5, recebe um bônus de +10.'),
    classe('inspiracao', 'Inspiração', 'Bardo', 1, 2, 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.'),
    classe('ecletico', 'Eclético', 'Bardo', 2, 1, 'Quando vai fazer um teste de perícia, você pode gastar 1 PM para receber os benefícios de ser treinado nessa perícia para este teste.'),
    classe('artista-completo', 'Artista Completo', 'Bardo', 20, 0, 'Você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, suas habilidades de bardo (incluindo magias) têm seu custo em PM reduzido pela metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).'),
    classe('audacia', 'Audácia', 'Bucaneiro', 1, 2, 'Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de Carisma no teste. Você não pode usar esta habilidade em testes de ataque.'),
    classe('insolencia', 'Insolência', 'Bucaneiro', 1, 0, 'Você soma seu bônus de Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('evasao-bucaneiro', 'Evasão', 'Bucaneiro', 2, 0, 'Quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('esquiva-sagaz', 'Esquiva Sagaz', 'Bucaneiro', 3, 0, 'Você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('panache', 'Panache', 'Bucaneiro', 5, 0, 'Sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM.'),
    classe('evasao-aprimorada-bucaneiro', 'Evasão Aprimorada', 'Bucaneiro', 10, 0, 'Quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('sorte-nimb', 'Sorte de Nimb', 'Bucaneiro', 20, 5, 'Quando faz um teste, você pode gastar 5 PM para rolá-lo novamente. Qualquer resultado 11 ou mais na segunda rolagem será considerado um 20 natural.'),
    classe('marca-presa', 'Marca da Presa', 'Caçador', 1, 1, 'Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (+1d8 no 5º nível, +1d12 no 9º, +2d8 no 13º e +2d10 no 17º).'),
    classe('rastreador', 'Rastreador', 'Caçador', 1, 0, 'Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência.'),
    classe('caminho-explorador', 'Caminho do Explorador', 'Caçador', 5, 0, 'Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.'),
    classe('mestre-cacador', 'Mestre Caçador', 'Caçador', 20, 5, 'Você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a habilidade, pode pagar 5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM.'),
    classe('codigo-honra', 'Código de Honra', 'Cavaleiro', 1, 0, 'Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.'),
    classe('baluarte', 'Baluarte', 'Cavaleiro', 1, 1, 'Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. A partir do 15º nível, pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto.'),
    classe('duelo', 'Duelo', 'Cavaleiro', 2, 2, 'Você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1.'),
    classe('resoluto', 'Resoluto', 'Cavaleiro', 11, 1, 'Você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como abalado, paralisado etc.) que o esteja afetando. O segundo teste recebe um bônus de +5 e, se você passar, cancela o efeito. Você só pode usar esta habilidade uma vez por efeito.'),
    classe('bravura-final', 'Bravura Final', 'Cavaleiro', 20, 3, 'Sua virtude vence a morte. Se for reduzido a 0 ou menos PV, pode gastar 3 PM para continuar consciente e de pé.'),
    classe('magias-clerigo', 'Magias', 'Clérigo', 1, 0, 'Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo (escolha-as na aba Magias do catálogo). A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma seu bônus de Sabedoria no seu total de PM.'),
    classe('mao-divindade', 'Mão da Divindade', 'Clérigo', 20, 15, 'Você pode gastar uma ação completa e 15 PM para canalizar energia divina. Ao fazer isso, você lança três magias divinas quaisquer (de qualquer círculo, incluindo magias que você não conhece), como uma ação livre e sem gastar PM (mas ainda precisa pagar outros custos). Você pode aplicar aprimoramentos, mas precisa pagar por eles. Após usar esta habilidade, você fica atordoado por 1d4 rodadas (mesmo se for imune a esta condição).'),
    classe('magias-bardo', 'Magias', 'Bardo', 1, 0, 'Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM.'),
    classe('magias-druida', 'Magias', 'Druida', 1, 0, 'Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM.'),
    classe('empatia-selvagem-druida', 'Empatia Selvagem', 'Druida', 1, 0, 'Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão (veja Diplomacia).'),
    classe('caminho-ermos', 'Caminho dos Ermos', 'Druida', 2, 0, 'Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais.'),
    classe('forca-natureza', 'Força da Natureza', 'Druida', 20, 0, 'Você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas em +2. Os bônus dobram (–4 PM e +4 na CD) se você estiver em terrenos naturais.'),
    classe('ataque-especial', 'Ataque Especial', 'Guerreiro', 1, 1, 'Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.'),
    classe('durao', 'Durão', 'Guerreiro', 3, 3, 'Sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade.'),
    classe('ataque-extra', 'Ataque Extra', 'Guerreiro', 6, 2, 'Quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada.'),
    classe('campeao', 'Campeão', 'Guerreiro', 20, 0, 'O dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele.'),
    classe('engenhosidade-inventor', 'Engenhosidade', 'Inventor', 1, 2, 'Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.'),
    classe('comerciante', 'Comerciante', 'Inventor', 3, 0, 'Você pode vender itens 10% mais caro (não cumulativo com barganha).'),
    classe('encontrar-fraqueza', 'Encontrar Fraqueza', 'Inventor', 7, 2, 'Você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se fizer isso, ignora a redução de dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra ele. Os benefícios desta habilidade duram até o fim da cena.'),
    classe('olho-dragao', 'Olho do Dragão', 'Inventor', 10, 0, 'Você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se o item é mágico, suas propriedades e como utilizá-las.'),
    classe('fabricar-item-superior', 'Fabricar Item Superior', 'Inventor', 2, 0, 'Você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Veja o Capítulo 3: Equipamento para a lista de melhorias. Nos níveis 5, 8 e 11, você pode substituir esse item por um item superior com duas, três e quatro melhorias, respectivamente, e passa a poder fabricar itens superiores com essa quantidade de melhorias. Considera-se que você estava trabalhando nos itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente).'),
    classe('fabricar-item-magico', 'Fabricar Item Mágico', 'Inventor', 9, 0, 'Você recebe um item mágico menor e passa a poder fabricar itens mágicos menores. Veja o Capítulo 8: Recompensas para as regras de itens mágicos. Nos níveis 13 e 17, você pode substituir esse item por um item mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou pontos de mana neles (mas gasta em itens que fabricar futuramente).'),
    classe('obra-prima', 'Obra-Prima', 'Inventor', 20, 0, 'Você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter benefícios equivalentes a de um item com cinco melhorias e quatro encantos. Considera-se que você estava trabalhando no item e você não gasta dinheiro, tempo ou PM nele.'),
    classe('ataque-furtivo', 'Ataque Furtivo', 'Ladino', 1, 0, 'Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.'),
    classe('evasao-ladino', 'Evasão', 'Ladino', 2, 0, 'Quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('esquiva-sobrenatural-ladino', 'Esquiva Sobrenatural', 'Ladino', 4, 0, 'Seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.'),
    classe('olhos-costas', 'Olhos nas Costas', 'Ladino', 8, 0, 'Você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado.'),
    classe('evasao-aprimorada-ladino', 'Evasão Aprimorada', 'Ladino', 10, 0, 'Quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.'),
    classe('pessoa-certa', 'A Pessoa Certa para o Trabalho', 'Ladino', 20, 5, 'Você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da lista de ladino, você pode gastar 5 PM para receber +10 no teste.'),
    classe('briga', 'Briga', 'Lutador', 1, 0, 'Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta: 1d8 (5º nível), 1d10 (9º), 2d6 (13º) e 2d8 (17º). O dano é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos.'),
    classe('golpe-relampago', 'Golpe Relâmpago', 'Lutador', 1, 1, 'Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional.'),
    classe('casca-grossa', 'Casca Grossa', 'Lutador', 3, 0, 'Você soma seu bônus de Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa.'),
    classe('golpe-cruel', 'Golpe Cruel', 'Lutador', 5, 0, 'Você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.'),
    classe('golpe-violento', 'Golpe Violento', 'Lutador', 9, 0, 'Você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1.'),
    classe('dono-rua', 'Dono da Rua', 'Lutador', 20, 0, 'Seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação agredir para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro).'),
    classe('autoconfianca', 'Autoconfiança', 'Nobre', 1, 0, 'Você pode somar seu bônus de Carisma em vez de Destreza na Defesa (mas continua não podendo somar um bônus de atributo na Defesa quando usa armadura pesada).'),
    classe('orgulho', 'Orgulho', 'Nobre', 1, 0, 'Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu modificador de Carisma). Para cada PM que gastar, recebe +2 no teste.'),
    classe('palavras-afiadas', 'Palavras Afiadas', 'Nobre', 2, 1, 'Você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int 3 ou mais) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (4d6 no 6º nível, 6d6 no 10º, 8d6 no 14º e 10d6 no 18º).'),
    classe('riqueza', 'Riqueza', 'Nobre', 3, 0, 'Você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. O uso desta habilidade é condicionado a sua relação com sua família, patrono ou negócios e a onde você está.'),
    classe('gritar-ordens', 'Gritar Ordens', 'Nobre', 4, 0, 'Você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu bônus de Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou.'),
    classe('presenca-aristocratica', 'Presença Aristocrática', 'Nobre', 5, 2, 'Sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.'),
    classe('realeza', 'Realeza', 'Nobre', 20, 0, 'A CD para resistir a sua Presença Aristocrática aumenta em +5 e uma criatura que falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena.'),
    classe('codigo-heroi', 'Código do Herói', 'Paladino', 1, 0, 'Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.'),
    classe('golpe-divino', 'Golpe Divino', 'Paladino', 1, 2, 'Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu bônus de Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8.'),
    classe('cura-maos', 'Cura pelas Mãos', 'Paladino', 2, 1, 'Você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida em um alvo em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV curados em +1d8+1. Esta habilidade causa dano de luz a mortos-vivos (CD Car). A partir do 6º nível, você pode gastar +1 PM quando usa Cura pelas Mãos para anular uma condição afetando o alvo, entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo.'),
    classe('aura-sagrada', 'Aura Sagrada', 'Paladino', 3, 1, 'Você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e duração sustentada. A aura emite uma luz dourada e agradável. Além disso, você e os aliados dentro da aura somam seu bônus de Carisma nos testes de resistência.'),
    classe('vingador-sagrado', 'Vingador Sagrado', 'Paladino', 20, 10, 'Você pode gastar uma ação completa e 10 PM para se cobrir de energia divina, assumindo a forma de um vingador sagrado até o fim da cena. Nesta forma, você recebe deslocamento de voo 18m e redução de dano 20. Além disso, seu Golpe Divino tem seu custo reduzido à metade e causa mais dois dados de dano.')
);

function item(id) {
  for (var i = 0; i < CATALOGO.itens.length; i++) {
    if (CATALOGO.itens[i].id === id) {
      return CATALOGO.itens[i];
    }
  }
  throw new Error('item de origem sem base: ' + id);
}

var CAT_ORIGEM = { 'Vestuário': 'Vestuário', 'Arma': 'Armas Simples' };

function soOrigem(id, nome, tipo, esp, desc, de) {
  var categoria = CAT_ORIGEM[tipo];
  if (!categoria) {
    categoria = 'Equipamento de Aventura';
  }
  return daOrigem({ id: id, nome: nome, tipo: tipo, esp: esp, desc: desc, cat: categoria }, de);
}

CATALOGO.itens.push(
  daOrigem(item('simbolo-sagrado'), 'Acólito'),
  soOrigem('traje-sacerdote', 'Traje de Sacerdote', 'Vestuário', 0, 'Vestes de sacerdote, item de origem do Acólito.', 'Acólito'),
  daOrigem(item('algemas'), 'Escravo'),
  soOrigem('ferramenta-pesada', 'Ferramenta Pesada', 'Arma', 1, 'Mesmas estatísticas de uma maça: Dano 1d8 · Crítico 20/x2 · Impacto.', 'Escravo'),
  soOrigem('joia-familia', 'Joia de Família', 'Equipamento', 0, 'Joia de família no valor de T$ 300.', 'Aristocrata'),
  daOrigem(item('traje-corte'), 'Aristocrata'),
  daOrigem(item('instrumentos-oficio'), 'Artesão'),
  daOrigem(item('instrumentos-oficio'), 'Assistente de Laboratório', { id: 'instrumentos-alquimista-origem', nome: 'Instrumentos de Ofício (alquimista)' }),
  daOrigem(item('barraca'), ['Batedor', 'Eremita', 'Mateiro']),
  daOrigem(item('equipamento-viagem'), ['Batedor', 'Eremita', 'Forasteiro', 'Mateiro', 'Nômade']),
  soOrigem('adereco-gangue', 'Adereço de Gangue', 'Equipamento', 0, 'Tatuagem ou outro adereço de sua gangue: +1 em Intimidação.', 'Capanga'),
  daOrigem(item('estojo-disfarces'), 'Charlatão'),
  soOrigem('joia-falsificada', 'Joia Falsificada', 'Equipamento', 0, 'Valor aparente de T$ 100, sem valor real.', 'Charlatão'),
  soOrigem('bolas-malabarismo', 'Bolas de Malabarismo (x3)', 'Equipamento', 0, 'Três bolas coloridas para malabarismo: +1 em Atuação.', 'Circense'),
  daOrigem(item('balsamo-restaurador'), 'Curandeiro', { nome: 'Bálsamo Restaurador (x2)', esp: 1, desc: 'Dois bálsamos restauradores. ' + item('balsamo-restaurador').desc }),
  daOrigem(item('maleta-medicamentos'), 'Curandeiro'),
  daOrigem(item('colecao-livros'), 'Estudioso'),
  daOrigem(item('carroca'), ['Mercador', 'Fazendeiro']),
  soOrigem('ferramenta-agricola', 'Ferramenta Agrícola', 'Arma', 1, 'Mesmas estatísticas de uma lança: Dano 1d6 · Crítico 20/x2 · Perfuração.', 'Fazendeiro'),
  daOrigem(item('racao-viagem'), 'Fazendeiro', { id: 'racoes-viagem-origem', nome: 'Rações de Viagem (x10)', esp: 5, desc: 'Dez rações de viagem (alimento para dez dias).' }),
  daOrigem(item('instrumento-musical'), 'Forasteiro', { id: 'instrumento-exotico-origem', nome: 'Instrumento Musical Exótico', desc: '+1 em uma perícia de Carisma aprovada pelo mestre.' }),
  soOrigem('traje-estrangeiro', 'Traje Estrangeiro', 'Vestuário', 0, 'Item de origem do Forasteiro.', 'Forasteiro'),
  soOrigem('apito', 'Apito', 'Equipamento', 0, 'Item de origem do Guarda.', 'Guarda'),
  soOrigem('insignia-milicia', 'Insígnia da Milícia', 'Equipamento', 0, 'Item de origem do Guarda.', 'Guarda'),
  soOrigem('simbolo-heranca', 'Símbolo de Herança', 'Equipamento', 0, 'Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!', 'Herdeiro'),
  soOrigem('traje-plebeu', 'Traje de Plebeu', 'Vestuário', 0, 'Item de origem do Herói Camponês e do Pivete.', ['Herói Camponês', 'Pivete']),
  daOrigem(item('corda'), 'Marujo'),
  daOrigem(item('arco-curto'), 'Mateiro'),
  daOrigem(item('flechas'), 'Mateiro'),
  daOrigem(item('trobo'), 'Mercador'),
  soOrigem('mercadorias', 'Mercadorias (T$ 100)', 'Equipamento', 0, 'Mercadorias para vender no valor de T$ 100.', 'Mercador'),
  soOrigem('gemas-preciosas', 'Gemas Preciosas (T$ 100)', 'Equipamento', 0, 'Gemas preciosas no valor de T$ 100.', 'Minerador'),
  daOrigem(item('picareta'), 'Minerador'),
  daOrigem(item('bordao'), 'Nômade'),
  daOrigem(item('gazua'), 'Pivete'),
  soOrigem('uniforme-militar', 'Uniforme Militar', 'Vestuário', 0, 'Item de origem do Soldado.', 'Soldado'),
  soOrigem('insignia-exercito', 'Insígnia do Exército', 'Equipamento', 0, 'Item de origem do Soldado.', 'Soldado'),
  soOrigem('panela', 'Panela', 'Equipamento', 0, 'Item de origem do Taverneiro.', 'Taverneiro'),
  soOrigem('avental', 'Avental', 'Vestuário', 0, 'Item de origem do Taverneiro.', 'Taverneiro'),
  soOrigem('caneca', 'Caneca', 'Equipamento', 0, 'Item de origem do Taverneiro.', 'Taverneiro'),
  soOrigem('pano-sujo', 'Pano Sujo', 'Equipamento', 0, 'Item de origem do Taverneiro.', 'Taverneiro'));
