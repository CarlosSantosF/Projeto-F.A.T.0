var DESCRICOES = {
  Acrobacia: {
    cab: 'Des • Armadura',
    resumo: 'Você consegue fazer proezas acrobáticas.',
    usos: [
      { nome: 'Amortecer Queda', info: 'CD 15, Apenas Treinado',
        texto: 'Quando cai, você pode gastar uma reação e fazer um teste de Acrobacia para reduzir o dano. Se passar, reduz o dano da queda em 1d6, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Se reduzir o dano a zero, você cai de pé.' },
      { nome: 'Equilíbrio', info: '',
        texto: 'Se estiver andando por superfícies precárias, você precisa fazer testes de Acrobacia para não cair. Cada ação de movimento exige um teste. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, cai. A CD é 10 para piso escorregadio, 15 para uma superfície estreita (como o topo de um muro) e 20 para uma superfície muito estreita (como uma corda esticada). Você pode sofrer –5 no teste para avançar seu deslocamento total. Quando está se equilibrando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Acrobacia; se falhar, cai.' },
      { nome: 'Escapar', info: '',
        texto: 'Você pode escapar de amarras. A dificuldade varia: cordas (CD igual ao resultado do teste de Destreza de quem o amarrou +10), redes (CD 20), algemas (CD 30). Este uso gasta uma ação completa.' },
      { nome: 'Levantar-se Rapidamente', info: 'CD 20, Apenas Treinado',
        texto: 'Se estiver caído, você pode fazer um teste de Acrobacia para ficar de pé. Você precisa ter uma ação de movimento disponível. Se passar no teste, se levanta como uma ação livre. Se falhar, gasta sua ação de movimento, mas continua caído.' },
      { nome: 'Passar por Espaço Apertado', info: 'CD 25, Apenas Treinado',
        texto: 'Você pode se espremer por espaços estreitos, suficientes para criaturas uma categoria de tamanho menor. Você gasta uma ação completa e avança metade do deslocamento.' },
      { nome: 'Passar por Inimigo', info: '',
        texto: 'Você pode atravessar um espaço ocupado por um inimigo como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Acrobacia, Iniciativa ou Luta do oponente (o que for melhor). Se você passar, atravessa o espaço; se falhar, não atravessa e sua ação de movimento termina. Um espaço ocupado por um inimigo conta como terreno difícil.' }
    ]
  },

  Adestramento: {
    cab: 'Car • Treinada',
    resumo: 'Você sabe lidar com animais.',
    usos: [
      { nome: 'Acalmar Animal', info: 'CD 25',
        texto: 'Você acalma um animal nervoso ou agressivo. Isso permite a você controlar um cavalo assustado ou convencer um lobo a não devorá-lo. Este uso gasta uma ação completa.' },
      { nome: 'Manejar Animal', info: 'CD 15',
        texto: 'Você faz um animal realizar uma tarefa para a qual foi treinado (como “atacar”, “sentar”, “vigiar”...). Isso permite usar Adestramento como Pilotagem para veículos de tração animal. Este uso gasta uma ação de movimento.' }
    ]
  },

  Atletismo: {
    cab: 'For',
    resumo: 'Você pode realizar façanhas atléticas.',
    usos: [
      { nome: 'Corrida', info: '',
        texto: 'Gaste uma ação completa e faça um teste de Atletismo. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Assim, se somar 20 no teste, avança 20 quadrados de 1,5m. Você recebe um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua. Assim, um elfo (deslocamento 12m) recebe +4 em testes de Atletismo para correr, enquanto um anão (deslocamento 6m) sofre uma penalidade de –4. Você só pode correr em linha reta e não pode correr através de terreno difícil. Você pode correr por um número de rodadas igual a 1 + seu modificador de Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, fica fatigado (cumulativo com novas falhas).' },
      { nome: 'Escalar', info: '',
        texto: 'Você pode subir superfícies inclinadas ou verticais. Gaste uma ação de movimento e faça um teste de Atletismo. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, você cai. A CD é 10 para superfícies com apoios para os pés e mãos (como o cordame de um navio), 15 para uma árvore, 20 para um muro com reentrâncias (como o de uma ruína) e 25 para um muro liso (como o de um castelo). Você pode sofrer –5 em seu teste para avançar seu deslocamento total. Quando está escalando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Atletismo; se falhar, você cai. Se um personagem adjacente a você estiver escalando e cair, você pode tentar pegá-lo. Faça um teste de Atletismo contra a CD da superfície +10. Se passar, segura o personagem. Se falhar por 5 ou mais, você também cai!' },
      { nome: 'Natação', info: '',
        texto: 'Se iniciar seu turno na água, você precisa gastar uma ação de movimento e fazer um teste de Atletismo. A CD é 10 para água calma, 15 para agitada e 20 ou mais para tempestuosa. Se passar, você pode avançar metade de seu deslocamento. Se falhar, consegue boiar, mas não avançar. Se falhar por 5 ou mais, você afunda. Se quiser avançar mais, pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo. Se você estiver submerso (seja por ter falhado no teste de Atletismo, seja por ter mergulhado de propósito), deve prender a respiração. Você pode prender a respiração por um número de rodadas igual a 1 + seu modificador de Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, perde 3d6 pontos de vida por rodada até ser tirado da água ou morrer. Você sofre penalidade de armadura em testes de Atletismo para nadar.' },
      { nome: 'Saltar', info: '',
        texto: 'Você pode pular sobre buracos ou obstáculos ou alcançar algo elevado. Para um salto longo, a CD é 5 por quadrado de 1,5m (CD 10 para 3m, 15 para 4,5m, 20 para 6m e assim por diante). Para um salto em altura, a CD 15 é por quadrado de 1,5m (30 para 3m, 45 para 4,5m e assim por diante). Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10). Saltar é parte de seu movimento e não exige uma ação.' }
    ]
  },

  Atuação: {
    cab: 'Car • Treinada',
    resumo: 'Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.',
    usos: [
      { nome: 'Apresentação', info: 'CD 20',
        texto: 'Você pode se apresentar para ganhar dinheiro. Faça um teste. Se passar, você recebe T$ 1d6, mais T$ 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Este uso leva um dia (ou noite...). Os valores recebidos pressupõem que você está se apresentando em um lugar propício, como o palco de uma taverna. De acordo com o mestre, você pode receber metade do valor, se estiver em um lugar inadequado (as ruas de uma cidade, um acampamento militar), ou o dobro, se estiver em um lugar especialmente propício (um festival, os salões de um palácio).' },
      { nome: 'Impressionar', info: '',
        texto: 'Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se você passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia. Se estiver tentando impressionar mais de uma pessoa, o mestre faz apenas um teste pela plateia, usando o melhor valor. Este uso leva de alguns minutos (canto ou dança) até algumas horas (apresentação teatral).' }
    ]
  },

  Cavalgar: {
    cab: 'Des',
    resumo: 'Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia.',
    usos: [
      { nome: 'Conduzir', info: '',
        texto: 'Cavalgar através de obstáculos exige testes de Cavalgar. A CD é 15 para terreno ruim e obstáculos pequenos (planície pedregosa, vala estreita) e 25 para terreno perigoso ou obstáculos grandes (encosta nevada, pântano traiçoeiro). Se você falhar, cai da montaria e sofre 1d6 pontos de dano. Conduzir é parte de seu movimento e não exige uma ação.' },
      { nome: 'Galopar', info: '',
        texto: 'Gaste uma ação completa e faça um teste de Cavalgar. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Seu teste sofre um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que você possua.' },
      { nome: 'Montar Rapidamente', info: 'CD 20',
        texto: 'Você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão.' },
      { nome: '', info: '', texto: 'Esta perícia exige uma sela. Sem ela, você sofre –5 no teste.' }
    ]
  },

  Conhecimento: {
    cab: 'Int • Treinada',
    resumo: 'Você estudou diversos campos do saber, como aritmética, astronomia, dialética, geografia, história...',
    usos: [
      { nome: 'Idiomas', info: 'CD 20',
        texto: 'Você pode entender idiomas desconhecidos. Se falhar por 5 ou mais, você tira uma conclusão falsa. Idiomas exóticos ou muito antigos têm CD 30.' },
      { nome: 'Informação', info: '',
        texto: 'Você responde dúvidas gerais. Questões simples, como o ano de fundação de um reino, não exigem testes. Questões complexas, como saber o antídoto de um veneno, tem CD 20. Por fim, mistérios e enigmas, como a origem de uma antiga maldição, tem CD 30.' }
    ]
  },

  Cura: {
    cab: 'Sab',
    resumo: 'Você sabe tratar ferimentos, doenças e venenos.',
    usos: [
      { nome: 'Cuidados Prolongados', info: 'CD 15, Apenas Treinado',
        texto: 'Você trata uma pessoa para que ela se recupere mais rapidamente. Se passar, ela aumenta sua recuperação de PV em +1 por nível nesse dia. Este uso leva uma hora e o número máximo de pessoas que você pode cuidar é igual ao seu nível.' },
      { nome: 'Necropsia', info: 'CD 20, Apenas Treinado',
        texto: 'Você examina um cadáver para determinar a causa e o momento aproximado da morte. Causas raras ou extraordinárias, como um veneno ou maldição, possuem CD 30. Este uso leva dez minutos.' },
      { nome: 'Primeiros Socorros', info: 'CD 15',
        texto: 'Você estabiliza um personagem adjacente que esteja sangrando. Este uso gasta uma ação padrão.' },
      { nome: 'Tratamento', info: 'Apenas Treinado',
        texto: 'Você ajuda a vítima de uma doença ou veneno com efeito contínuo. Gaste uma ação completa e faça um teste de Cura contra a CD da doença ou veneno. Se você passar, o paciente recebe +5 em seu próximo teste de Fortitude contra esse efeito.' },
      { nome: '', info: '', texto: 'Esta perícia exige uma maleta de medicamentos. Sem ela, você sofre –5 no teste. Você pode usar a perícia Cura em si mesmo, mas sofre –5 no teste.' }
    ]
  },

  Diplomacia: {
    cab: 'Car',
    resumo: 'Você convence pessoas com lábia e argumentação. Usos de Diplomacia são efeitos mentais.',
    usos: [
      { nome: 'Barganha', info: '',
        texto: 'Comprando ou vendendo algo, você pode barganhar. Seu teste de Diplomacia é oposto pelo teste de Vontade do negociante. Se passar, você muda o preço em 10% a seu favor. Se passar por 10 ou mais, muda em 20%. Se falhar por 5 ou mais, você ofende o negociante — ele não voltará a tratar com você durante pelo menos uma semana. Alguns comerciantes ou estabelecimentos podem não ter permissão de baixar seus preços.' },
      { nome: 'Mudar Atitude', info: '',
        texto: 'Você muda a categoria de atitude de um NPC em relação a você ou a outra pessoa (veja a página 259). Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você passar, muda a atitude dele em uma categoria para cima ou para baixo, à sua escolha (ou, se passar por 10 ou mais, em duas categorias). Se falhar por 5 ou mais, a atitude do alvo muda uma categoria na direção oposta. Este uso gasta um minuto. Você pode sofrer –10 no teste para fazê-lo como uma ação completa (para evitar uma briga, por exemplo). Você só pode mudar a atitude de um mesmo alvo uma vez por dia.' },
      { nome: 'Persuasão', info: 'CD 20',
        texto: 'Você convence uma pessoa a fazer algo, como responder uma pergunta ou prestar um favor. Se essa coisa for custosa (como fornecer uma carona de navio) você sofre –5 em seu teste. Se for perigosa (como ajudar numa luta) você sofre –10 ou falha automaticamente (veja também a página 259 para modificadores por categorias de atitude). De acordo com o mestre, seu teste pode ser oposto ao teste de Vontade da pessoa. Este uso gasta um minuto ou mais, de acordo com o mestre.' }
    ]
  },

  Enganação: {
    cab: 'Car',
    resumo: 'Você manipula pessoas com blefes e trapaças.',
    usos: [
      { nome: 'Disfarce', info: '',
        texto: 'Você muda sua aparência ou a de outra pessoa. Faça um teste de Enganação oposto pelo teste de Percepção de quem prestar atenção no disfarçado. Se você passar, a pessoa acredita no disfarce; caso contrário, percebe que há algo errado. Disfarces muito complexos (como uma raça diferente) impõem –5 no seu teste. Se o disfarce é de uma pessoa específica, quem conhecer essa pessoa recebe +10 no teste de Percepção. Um disfarce exige dez minutos e um estojo de disfarces. Sem ele, você sofre –5 no teste.' },
      { nome: 'Falsificação', info: '',
        texto: 'Você falsifica um documento. Faça um teste de Enganação oposto pelo teste de Percepção de quem examinar o documento. Se você passar, a pessoa acredita na falsificação; caso contrário, percebe que é falso. Se o documento é muito complexo, ou inclui uma assinatura ou carimbo específico, você sofre –10 no teste. Usada em conjunto com Ofício, você pode falsificar outros objetos (como joias e armas). Use Ofício para fabricar a peça e então um teste de Enganação para que ela pareça genuína.' },
      { nome: 'Fintar', info: '',
        texto: 'Você pode gastar uma ação padrão e fazer um teste de Enganação oposto a um teste de Reflexos de um ser em alcance curto. Se você passar, ele fica desprevenido contra seu próximo ataque, se realizado até o fim de seu próximo turno.' },
      { nome: 'Insinuação', info: 'CD 20',
        texto: 'Você fala algo para alguém sem que outras pessoas entendam do que você está falando. Se você passar, o receptor entende sua mensagem. Se você falhar por 5 ou mais, ele entende algo diferente do que você queria. Outras pessoas podem fazer um teste de Intuição oposto ao seu teste de Enganação. Se passarem, entendem o que você está dizendo.' },
      { nome: 'Intriga', info: 'CD 20',
        texto: 'Você espalha uma fofoca. Por exemplo, pode dizer que o dono da taverna está aguando a cerveja, para enfurecer o povo contra ele. Intrigas muito improváveis têm CD 30. Se você falhar por 5 ou mais, o alvo da intriga descobre que você está fofocando a respeito dele. Mesmo que você passe, uma pessoa pode investigar a fonte da intriga e chegar até você. Isso exige um teste de Investigação por parte dela (CD igual ao seu teste para a intriga). Este uso exige um dia ou mais, de acordo com o mestre.' },
      { nome: 'Mentir', info: '',
        texto: 'Você faz uma pessoa acreditar em algo que não é verdade. Seu teste é oposto pelo teste de Intuição da vítima. Mentiras muito implausíveis impõem uma penalidade de –10 em seu teste.' }
    ]
  },

  Fortitude: {
    cab: 'Con',
    resumo: 'Você usa esta perícia para resistir a efeitos que exigem vitalidade, como doenças e venenos. A CD é determinada pelo efeito. Você também usa Fortitude para manter seu fôlego quando está correndo ou sem respirar. A CD é 15 +1 por teste anterior.',
    usos: []
  },

  Furtividade: {
    cab: 'Des • Armadura',
    resumo: 'Você sabe ser discreto e sorrateiro.',
    usos: [
      { nome: 'Esconder-se', info: '',
        texto: 'Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Todos que falharem não conseguem percebê-lo (você tem camuflagem total contra eles). Esconder-se é uma ação livre que você só pode fazer no final do seu turno e apenas se terminar seu turno em um lugar onde seja possível se esconder (atrás de uma porta, num quarto escuro, numa mata densa, no meio de uma multidão...). Se tiver se movido durante o turno, você sofre –5 no teste (você pode se mover à metade do deslocamento normal para não sofrer essa penalidade). Se tiver atacado ou feito outra ação muito chamativa, sofre –20.' },
      { nome: 'Seguir', info: '',
        texto: 'Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como um descampado ou rua deserta. A vítima recebe +5 em seu teste de Percepção se estiver tomando precauções para não ser seguida (como olhar para trás de vez em quando). Se você passar, segue a pessoa até ela chegar ao seu destino. Se falhar, a pessoa o percebe na metade do caminho.' }
    ]
  },

  Guerra: {
    cab: 'Int • Treinada',
    resumo: 'Você foi educado em tática, estratégia e logística.',
    usos: [
      { nome: 'Analisar Terreno', info: 'CD 20',
        texto: 'Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver.' },
      { nome: 'Plano de Ação', info: 'CD 20',
        texto: 'Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se ele ficar com uma Iniciativa maior do que a sua e ainda não tiver agido nesta rodada, age imediatamente após seu turno. Nas próximas rodadas, ele age de acordo com a nova ordem.' }
    ]
  },

  Iniciativa: {
    cab: 'Des',
    resumo: 'Esta perícia determina sua velocidade de reação em situações de perigo. Quando uma cena de ação começa, cada personagem envolvido faz um teste de Iniciativa. Eles então agem em ordem decrescente dos resultados.',
    usos: []
  },

  Intimidação: {
    cab: 'Car',
    resumo: 'Você pode assustar ou coagir outras pessoas. Usos de Intimidação são efeitos de medo.',
    usos: [
      { nome: 'Assustar', info: '',
        texto: 'Gaste uma ação padrão e faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura em alcance curto. Se você passar, ela fica abalada pelo resto da cena. Se você passar por 10 ou mais, ela fica apavorada por uma rodada e então abalada pelo resto da cena.' },
      { nome: 'Coagir', info: '',
        texto: 'Faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura inteligente (Int 3 ou mais) adjacente. Se você passar, ela obedece uma ordem sua (como fazer uma pequena tarefa, deixar que você passe por um lugar que ela estava protegendo...). Se você mandá-la fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou passa automaticamente. Este uso gasta um minuto ou mais, de acordo com o mestre, e deixa o alvo hostil contra você.' }
    ]
  },

  Intuição: {
    cab: 'Sab',
    resumo: 'Esta perícia mede sua empatia e “sexto sentido”.',
    usos: [
      { nome: 'Perceber Mentira', info: '',
        texto: 'Você descobre se alguém está mentindo (veja a perícia Enganação).' },
      { nome: 'Pressentimento', info: 'CD 20, Apenas Treinado',
        texto: 'Você analisa uma pessoa, para ter uma noção de sua índole ou caráter, ou uma situação, para saber se há algo anormal (por exemplo, se os habitantes de uma vila estão agindo de forma estranha). Este uso apenas indica se há algo anormal, mas não revela a causa.' }
    ]
  },

  Investigação: {
    cab: 'Int',
    resumo: 'Você sabe encontrar pistas e informações.',
    usos: [
      { nome: 'Interrogar', info: '',
        texto: 'Você descobre informações perguntando ou indo para um lugar movimentado e mantendo os ouvidos atentos. Informações gerais (“Quem é o guerreiro mais forte da aldeia?”) não exigem teste. Informações restritas, que poucas pessoas conhecem (“Quem é o ancião que está sempre ao lado do rei?”), têm CD 20. Informações confidenciais ou que podem colocar em risco quem falar sobre elas (“Quem é o líder da guilda dos ladrões?”), têm CD 30. Este uso gasta uma hora e T$ 3d6 (para comprar bebidas, subornar oficiais etc.), mas esses valores podem variar de acordo com o mestre.' },
      { nome: 'Procurar', info: '',
        texto: 'Você examina um local em busca de algo. A CD varia: 15 para um item ou no meio de uma bagunça, mas não necessariamente escondido; 20 para um item escondido (cofre atrás de um quadro, documento no fundo falso de uma gaveta); 30 para um item muito bem escondido (passagem secreta ativada por um botão, documento escrito com tinta invisível). Este uso gasta desde uma ação completa (examinar uma escrivaninha) até um dia (pesquisar uma biblioteca). Você também pode encontrar armadilhas (CD de acordo com a armadilha) e rastros (mas para segui-los deve usar Sobrevivência).' }
    ]
  },

  Jogatina: {
    cab: 'Car • Treinada',
    resumo: 'Você sabe jogar jogos de azar.',
    usos: [
      { nome: 'Apostar', info: '',
        texto: 'Para resolver uma noite de jogatina, pague T$ 1d10, faça um teste de perícia e consulte a tabela abaixo para determinar quanto você ganha.',
        tabela: { cab: ['Teste', 'Ganho'], linhas: [
          ['9 ou menos', 'Nenhum.'],
          ['10 a 14', 'Metade da aposta.'],
          ['15 a 19', 'Valor da aposta (você “empata”).'],
          ['20 a 29', 'Dobro da aposta.'],
          ['30 a 39', 'Triplo da aposta.'],
          ['40 ou mais', 'Quíntuplo da aposta.'] ] },
        depois: 'O mestre pode variar o valor da aposta básica. De T$ 1d3, para uma taverna no porto frequentada por marujos e estivadores, a 1d10 x T$ 1.000, para um cassino de luxo em Valkaria.' }
    ]
  },

  Ladinagem: {
    cab: 'Des • Treinada • Armadura',
    resumo: 'Você sabe exercer atividades ilícitas.',
    usos: [
      { nome: 'Abrir Fechadura', info: '',
        texto: 'Você abre uma fechadura trancada. A CD é 20 para fechaduras simples (porta de loja), 25 para fechaduras médias (prisão, baú) e 30 para fechaduras superiores (cofre, câmara do tesouro). Este uso exige uma ação completa e uma gazua. Sem ela, você sofre –5 em seu teste.' },
      { nome: 'Ocultar', info: '',
        texto: 'Você esconde um objeto em você mesmo. Gaste uma ação padrão e faça um teste de Ladinagem oposto pelo teste de Percepção de qualquer um que possa vê-lo. Objetos discretos ou pequenos fornecem +5 no teste; objetos desajeitados ou grandes impõem –5. Se uma pessoa revistar você, recebe +10 no teste de Percepção.' },
      { nome: 'Punga', info: 'CD 20',
        texto: 'Você pega um objeto de outra pessoa (ou planta um objeto nas posses dela). Gaste uma ação padrão e faça um teste de Ladinagem. Se passar, você pega (ou coloca) o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem). Se passar, ela percebe sua tentativa, tenha você conseguido ou não.' },
      { nome: 'Sabotar', info: '',
        texto: 'Você desabilita um dispositivo mecânico. Uma ação simples (emperrar uma fechadura, desativar uma armadilha básica, sabotar uma roda de carroça para que quebre 1d4 rodadas após o uso) tem CD 20. Uma ação complexa (desativar uma armadilha avançada, sabotar um canhão para explodir quando utilizado) tem CD 30. Se você falhar por 5 ou mais, alguma coisa sai errada — a armadilha se ativa, você acha que o mecanismo está desabilitado, mas na verdade ele ainda funciona... Usar esta perícia leva 1d4 rodadas. Você pode sofrer –5 em seu teste para fazê-lo como uma ação completa.' }
    ]
  },

  Luta: {
    cab: 'For',
    resumo: 'Você usa Luta para fazer ataques corpo a corpo. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.',
    usos: []
  },

  Misticismo: {
    cab: 'Int • Treinada',
    resumo: 'Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.',
    usos: [
      { nome: 'Detectar Magia', info: 'CD 15',
        texto: 'Como uma ação completa, você detecta a presença e intensidade de auras mágicas em alcance curto (mas não suas localizações exatas). A intensidade de uma aura depende do círculo da magia ou categoria do item mágico que a gerou. Magias de 1º e 2º círculos e itens mágicos menores geram uma aura tênue, magias de 3º e 4º círculos e itens mágicos médios geram uma aura moderada e magias de 5º círculo e itens mágicos maiores geram uma aura poderosa. Magias lançadas por um deus maior e artefatos geram uma aura avassaladora. Caso a aura esteja atrás de uma barreira, você sofre uma penalidade em seu teste (–5 para madeira ou pedra, –10 para ferro ou chumbo).' },
      { nome: 'Identificar Criatura', info: 'CD 15 + ND da Criatura',
        texto: 'Você analisa uma criatura mágica (construto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acredita que a criatura é vulnerável a fogo, quando na verdade é vulnerável a frio). Este uso gasta uma ação padrão.' },
      { nome: 'Identificar Item Mágico', info: '',
        texto: 'Você estuda um item mágico para identificar seus poderes. A CD é 20 para itens mágicos menores, 25 para médios e 30 para itens mágicos maiores. Este uso gasta uma hora. Você pode sofrer uma penalidade de –10 no teste para diminuir o tempo para uma ação completa.' },
      { nome: 'Identificar Magia', info: 'CD 15 + Custo em PM da Magia',
        texto: 'Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.' },
      { nome: 'Informação', info: '',
        texto: 'Você responde dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.' },
      { nome: 'Lançar Magia de Armadura', info: 'CD 20 + Custo em PM da Magia',
        texto: 'Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.' }
    ]
  },

  Nobreza: {
    cab: 'Int • Treinada',
    resumo: 'Você recebeu a educação de um nobre.',
    usos: [
      { nome: 'Etiqueta', info: 'CD 15',
        texto: 'Você sabe se portar em ambientes aristocráticos, como bailes e audiências.' },
      { nome: 'Informação', info: '',
        texto: 'Você responde dúvidas relativas a leis, tradições, linhagens e heráldica. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.' }
    ]
  },

  Ofício: {
    cab: 'Int • Treinada',
    resumo: 'Ofício na verdade são várias perícias diferentes. Cada uma permite fabricar itens de certas categorias:',
    usos: [
      { nome: '', info: '', texto: '',
        lista: [
          'Armeiro. Armas e Armaduras & Escudos.',
          'Artesão. Equipamento de Aventura, Ferramentas, Esotéricos e Veículos.',
          'Alquimista. Alquímicos.',
          'Cozinheiro. Alimentação.',
          'Alfaiate. Vestuário.' ],
        depois: 'Você pode inventar outros tipos de Ofício: carpinteiro, pedreiro, ourives, fazendeiro, pescador, estalajadeiro, escriba, escultor, pintor... Nesses casos, converse com o mestre para determinar que usos a perícia terá.' },
      { nome: 'Consertar', info: '',
        texto: 'Reparar um item destruído tem a mesma CD para fabricá-lo. Cada tentativa consome uma hora de trabalho e um décimo do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos (mas você pode tentar novamente).' },
      { nome: 'Fabricar', info: '',
        texto: 'Você produz um item gastando matéria-prima e tempo de trabalho. A matéria-prima custa um terço do preço do item. O tempo de trabalho depende do tipo de item: um dia para consumíveis (itens alquímicos, pergaminhos, poções, munições...); uma semana para não consumíveis comuns (armas, ferramentas...) e um mês para não consumíveis superiores e/ou mágicos. Para consumíveis, você pode sofrer –5 no teste para fabricar duas unidades do item no mesmo tempo (pagando o custo de ambas). A critério do mestre, itens muito simples e sem efeito mecânico podem levar menos tempo. Da mesma forma, itens muito grandes ou complexos, como uma casa ou ponte, podem demorar vários meses. A CD do teste é 15 para itens simples (equipamentos de aventura, armas simples, munições, armaduras leves, escudos, preparados, catalisadores e outros a critério do mestre) e 20 para itens complexos (armas marciais, exóticas ou de fogo, armaduras pesadas, ferramentas, vestuários, esotéricos, venenos...).' },
      { nome: 'Identificar', info: 'CD 20',
        texto: 'Você pode identificar itens raros e exóticos ligados ao seu Ofício. Se passar, descobre as propriedades do item e seu preço. Este uso gasta uma ação completa.' },
      { nome: 'Sustento', info: 'CD 15',
        texto: 'Com uma semana de trabalho e um teste de Ofício, você ganha T$ 1, mais T$ 1 por ponto que seu teste exceder a CD. Por exemplo, com um resultado 20, ganha T$ 6 pela semana de trabalho. Trabalhadores sem treinamento usam testes de atributo para sustento. De acordo com o mestre, outras perícias podem ser usadas para sustento, como Adestramento, Cura ou Sobrevivência.' },
      { nome: '', info: '', texto: 'Cada Ofício exige instrumentos de ofício específicos. Sem eles, você sofre –5 no teste.' }
    ]
  },

  Percepção: {
    cab: 'Sab',
    resumo: 'Você nota coisas usando seus sentidos.',
    usos: [
      { nome: 'Observar', info: '',
        texto: 'Você vê coisas discretas ou escondidas. A CD varia de 15, para algo difícil de ser visto (um livro específico em uma estante) a 30, para algo quase invisível (uma gota de sangue em uma folha no meio de uma floresta à noite). Para pessoas ou itens escondidos, a CD é o resultado do teste de Furtividade ou Ladinagem feito para esconder a pessoa ou o item. Você também pode ler lábios (CD 20).' },
      { nome: 'Ouvir', info: '',
        texto: 'Você escuta barulhos sutis. Uma conversa casual próxima tem CD 0 — ou seja, a menos que exista alguma penalidade, você passa automaticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +10. Você pode fazer testes de Percepção para ouvir mesmo que esteja dormindo, mas sofre –10 no teste; um sucesso faz você acordar. Perceber criaturas que não possam ser vistas tem CD 20, ou +10 no teste de Furtividade da criatura, o que for maior. Mesmo que você passe no teste, ainda sofre penalidades normais por lutar sem ver o inimigo.' }
    ]
  },

  Pilotagem: {
    cab: 'Des • Treinada',
    resumo: 'Você sabe operar veículos como carroças, barcos e balões.',
    usos: [
      { nome: 'Ações Simples', info: '',
        texto: 'Ações simples não exigem testes — você pode atrelar seus trobos a sua carroça e conduzi-la pela estrada, ou levantar âncora e velejar seu navio em águas tranquilas, automaticamente.' },
      { nome: 'Situações Ruins', info: 'CD 15',
        texto: 'Conduzir um veículo em situações ruins (terreno acidentado para veículos terrestres, chuva ou ventania para veículos aquáticos ou aéreos) exige uma ação de movimento e um teste de Pilotagem por turno ou cena, de acordo com o mestre. Se falhar, você avança metade do deslocamento. Se falhar por 5 ou mais, se acidenta de alguma forma.' },
      { nome: 'Situações Extremas', info: 'CD 25',
        texto: 'Situações extremas (terreno com obstáculos, tempestade...) aumentam a CD do teste de Pilotagem para 25.' }
    ]
  },

  Pontaria: {
    cab: 'Des',
    resumo: 'Você usa Pontaria para fazer ataques à distância. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.',
    usos: []
  },

  Reflexos: {
    cab: 'Des',
    resumo: 'Você usa esta perícia para resistir a efeitos que exigem reação rápida, como armadilhas e explosões. A CD é determinada pelo efeito. Você também usa Reflexos para evitar fintas.',
    usos: []
  },

  Religião: {
    cab: 'Sab • Treinada',
    resumo: 'Você possui conhecimento sobre os deuses e as religiões de Arton.',
    usos: [
      { nome: 'Identificar Criatura', info: 'CD 15 + ND da Criatura',
        texto: 'Você pode identificar uma criatura com origem divina (anjos, demônios, alguns mortos-vivos e construtos etc.). Veja a perícia Misticismo.' },
      { nome: 'Identificar Item Mágico', info: '',
        texto: 'Você pode identificar um item mágico de origem divina. Veja a perícia Misticismo.' },
      { nome: 'Informação', info: '',
        texto: 'Você responde dúvidas relativas a deuses, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.' },
      { nome: 'Rito', info: 'CD 20',
        texto: 'Você realiza uma cerimônia religiosa, como um batizado, casamento ou funeral. Isso inclui a cerimônia de penitência para redimir um devoto que tenha descumprido as Obrigações & Restrições de sua divindade. Uma cerimônia de penitência exige um sacrifício de T$ 100 por nível de personagem do devoto ou a realização de uma missão sagrada, de acordo com o mestre.' }
    ]
  },

  Sobrevivência: {
    cab: 'Sab',
    resumo: 'Você está em casa nos ermos.',
    usos: [
      { nome: 'Acampamento', info: '',
        texto: 'Você consegue abrigo e alimento para você e seu grupo por um dia (caçando, pescando, colhendo frutos...). A CD depende do terreno: 15 para planícies e colinas, 20 para florestas e pântanos, 25 para desertos ou montanhas e 30 para regiões planares perigosas ou áreas de Tormenta. Regiões muito áridas ou estéreis e clima ruim (neve, tempestade etc.) impõem penalidade cumulativa de –5. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM (veja a página 106). Este uso exige equipamento de viagem. Sem ele, você sofre –5 em seu teste.' },
      { nome: 'Identificar Criatura', info: 'CD 15 + ND da Criatura',
        texto: 'Você pode identificar um animal ou monstro. Veja a perícia Misticismo.' },
      { nome: 'Orientar-se', info: '',
        texto: 'Um personagem viajando pelos ermos precisa fazer um teste de Sobrevivência por dia para avançar. A CD depende do tipo de terreno (veja em “Acampamento”). Se passar, você avança seu deslocamento normal. Se falhar, avança apenas metade. Se falhar por 5 ou mais, se perde e não avança pelo dia. Num grupo, um personagem deve ser escolhido como guia. Personagens treinados em Sobrevivência podem ajudá-lo. Entretanto, se mais de um personagem quiser fazer o teste por si só, todos deverão rolar em segredo. Os jogadores devem decidir qual guia seguir antes de verem o resultado! Este teste é exigido apenas em jornadas perigosas (de acordo com o mestre).' },
      { nome: 'Rastrear', info: 'Apenas Treinado',
        texto: 'Você pode identificar e seguir rastros. A CD é 15 para solo macio (neve, lama), 20 para solo comum (grama, terra) e 25 para solo duro (rocha ou piso de interiores). A CD diminui em –5 se você estiver rastreando um grupo grande (dez ou mais indivíduos) ou criaturas Enormes ou Colossais, mas aumenta em +5 em visibilidade precária (noite, chuva, neblina...). Enquanto rastreia, seu deslocamento é reduzido à metade. Se falhar, pode tentar novamente gastando mais um dia. Porém, a cada dia desde a criação dos rastros, a CD aumenta em +1.' }
    ]
  },

  Vontade: {
    cab: 'Sab',
    resumo: 'Você usa esta perícia para resistir a efeitos que exigem determinação, como intimidação e encantamentos. A CD é determinada pelo efeito. Testes de Vontade são testes de resistência.',
    usos: []
  }
};
