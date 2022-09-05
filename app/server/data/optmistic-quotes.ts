const OPTIMISTIC_QUOTES = [
  {
    text: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    author: "Roberto Shinyashiki",
    totalShare: 9900,
  },
  {
    text: "Fiquei magoado, não por me teres mentido, mas por não poder voltar a acreditar-te.",
    author: "Friedrich Nietzsche",
    totalShare: 9700,
  },
  {
    text: "Tudo vale a pena quando a alma não é pequena.",
    author: "Fernando Pessoa",
    totalShare: 7400,
  },
  {
    text: "Imagine uma nova história para sua vida e acredite nela.",
    author: "Paulo Coelho",
    totalShare: 6200,
  },
  {
    text: "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    author: "Helen Keller",
    totalShare: 4200,
  },
  {
    text: "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!",
    author: "Desconhecido",
    totalShare: 3900,
  },
  {
    text: "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
    author: "Nemo Nox",
    totalShare: 3600,
  },
  {
    text: "Que vantagem têm os mentirosos? A de não serem acreditados quando dizem a verdade.",
    author: "Aristóteles",
    totalShare: 2200,
  },
  {
    text: "Não posso acreditar num Deus que quer ser louvado o tempo todo.",
    author: "Friedrich Nietzsche",
    totalShare: 1600,
  },
  {
    text: "Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.",
    author: "Roberto Simonsen",
    totalShare: 1400,
  },
  {
    text: "Otimismo é a mania de sustentar que tudo está bem quando tudo está mal.",
    author: "Voltaire",
    totalShare: 1200,
  },
  {
    text: "A única forma de chegar ao impossível é acreditar que é possível.",
    author: "Alice no País das Maravilhas",
    totalShare: 1100,
  },
  {
    text: "Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si.",
    author: "Lucille Ball",
    totalShare: 890,
  },
  {
    text: "A esperança é um alimento da nossa alma, ao qual se mistura sempre o veneno do medo.",
    author: "Voltaire",
    totalShare: 889,
  },
  {
    text: "O interesse que tenho em acreditar numa coisa não é a prova da existência dessa coisa.",
    author: "Voltaire",
    totalShare: 848,
  },
  {
    text: "Conserve os olhos fixos num ideal sublime e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida.",
    author: "Desconhecido",
    totalShare: 782,
  },
  {
    text: "Os velhos acreditam em tudo, as pessoas de meia idade suspeitam de tudo, os jovens sabem tudo.",
    author: "Oscar Wilde",
    totalShare: 750,
  },
  {
    text: "Quer você acredite que consiga fazer uma coisa ou não, você está certo.",
    author: "Henry Ford",
    totalShare: 597,
  },
  {
    text: "Acredite na justiça, mas não a que emana dos demais e sim na tua própria.",
    author: "Código Samurai",
    totalShare: 524,
  },
  {
    text: "Não se pode acreditar que é possível ser feliz procurando a infelicidade alheia.",
    author: "Sêneca",
    totalShare: 448,
  },
  {
    text: "Acreditar que não acreditamos em nada é crer na crença do descrer.",
    author: "Millôr Fernandes",
    totalShare: 391,
  },
  {
    text: "Eu acredito, eu luto até o fim: não há como perder, não há como não vencer.",
    author: "Oleg Taktarov",
    totalShare: 356,
  },
  {
    text: "É tão arriscado acreditar em tudo como não acreditar em nada.",
    author: "Denis Diderot",
    totalShare: 321,
  },
  {
    text: "Cabeça erguida\nque seu caminho\né subida",
    author: "desconhecido",
    totalShare: 282,
  },
  {
    text: "Ninguém é assim tão velho que não acredite que poderá viver por mais um ano.",
    author: "Cícero",
    totalShare: 282,
  },
  {
    text: "O homem pode acreditar no impossível, mas nunca pode acreditar no improvável.",
    author: "Oscar Wilde",
    totalShare: 260,
  },
  {
    text: "Só acredito naquilo que posso tocar. Não acredito, por exemplo, em Luiza Brunet.",
    author: "Luis Fernando Veríssimo",
    totalShare: 216,
  },
  {
    text: "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
    author: "Ralph Waldo Emerson",
    totalShare: 211,
  },
  {
    text: "Aquele que acreditar que o dinheiro fará tudo pode bem ser suspeito de fazer tudo por dinheiro.",
    author: "Benjamin Franklin",
    totalShare: 168,
  },
  {
    text: "Você tem um sonho?\nNão deixe os outros te derrubarem, lute por aquilo que você acredita.",
    author: "Justin Bieber",
    totalShare: 143,
  },
  {
    text: "No desespero e no perigo, as pessoas aprendem a acreditar no milagre. De outra forma não sobreviveriam.",
    author: "Erich Remarque",
    totalShare: 137,
  },
  {
    text: "É errado quando acreditas em cada um, mas também é errado quando não acreditas em ninguém.",
    author: "Sêneca",
    totalShare: 130,
  },
  {
    text: "Acredita que vale a pena viver, e a tua convicção ajudará a criar esse fato.",
    author: "William James",
    totalShare: 115,
  },
  {
    text: "Não seja melhor que ninguém, seja apenas diferente e lute pelos seus objetivos.",
    author: "Ananda de Almeida Fonseca",
    totalShare: 113,
  },
  {
    text: "Uma verdade deixa de ser verdadeira quando mais de uma pessoa acredita nela.",
    author: "Oscar Wilde",
    totalShare: 88,
  },
  {
    text: "[Em arte] o impossível verossímil é preferível ao possível não acreditável.",
    author: "Aristóteles",
    totalShare: 84,
  },
  {
    text: "Para os cristãos, encontrar algo inacreditável é uma bela ocasião para acreditar.",
    author: "Michel de Montaigne",
    totalShare: 82,
  },
  {
    text: "Os homens que realmente acreditam em si mesmos estão todos em asilos de loucos.",
    author: "G. K. Chesterton",
    totalShare: 79,
  },
  {
    text: "O apetite de saber nasce da dúvida. Deixa de acreditar e instrui-te!",
    author: "André Gide",
    totalShare: 76,
  },
  {
    text: "Acreditar que um ser não sofre quando os olhos nada exprimem é erro fácil de cometer.",
    author: "Graham Greene",
    totalShare: 59,
  },
  {
    text: "O ritmo tem algo mágico; chega a fazer-nos acreditar que o sublime nos pertence.",
    author: "Johann Goethe",
    totalShare: 54,
  },
  {
    text: "Não lute tanto para ser perfeito demais, pois nesta luta você pode se autodestruir .",
    author: "Destinus",
    totalShare: 53,
  },
  {
    text: "Cuidado : O bajulador sempre vai lamber o chão que você pisa, até te fazer escorregar...",
    author: "Cecilia Sfalsin",
    totalShare: 49,
  },
  {
    text: "Ame mesmo que isso cause sofrimento, mesmo que todo mundo fale para desistir. Lute pelo que você quer.",
    author: "tumblr",
    totalShare: 48,
  },
  {
    text: "Valorize quem te quer bem, lute por seus ideais, não desista dos seus sonhos!",
    author: "Roni Alves",
    totalShare: 33,
  },
  {
    text: "Aprenda a valorizar a si mesmo, o que significa: lute pela sua felicidade.",
    author: "Ayn Rand",
    totalShare: 30,
  },
  {
    text: "Acredite em seus ideais e lute por eles, até que eles se tornem um dogma para você.",
    author: "Norman Vincent Peale",
    totalShare: 28,
  },
  {
    text: "Amanhã será melhor um dia novo virá\nLute pelo bem que a luz não se apagará.",
    author: "Mato seco",
    totalShare: 27,
  },
  {
    text: "A Bíblia é um livro para ser acreditado pelo cego e não discutido.",
    author: "Stendhal",
    totalShare: 27,
  },
  {
    text: "Se tantas pessoas dizem que você é capaz, então acredite, lute e conquiste, pois você consegue.",
    author: "Odenir Alves de Oliveira Junior",
    totalShare: 27,
  },
  {
    text: "A vida vale a pena viver, desde que haja riso nela.",
    author: "L.M. Montgomery",
    totalShare: 26,
  },
  {
    text: "O que quer que você lute, você fortalece, e o que você resiste, persiste.",
    author: "Eckhart Tolle",
    totalShare: 25,
  },
  {
    text: "Ninguém pode ser feliz o tempo inteiro, mas nada nos impede de manter o otimismo.",
    author: "Davi Khouri",
    totalShare: 18,
  },
  {
    text: "Um doido é aquele que acredita em tudo que lhe vem à cabeça.",
    author: "Émile-Auguste Chartier",
    totalShare: 16,
  },
  {
    text: '"Uma lição de otimismo é a melhor herança que um pai pode deixar aos seus filhos."',
    author: "tamires",
    totalShare: 13,
  },
  {
    text: "Não lute contra o imutável, busque modificar suas causas ou conseqüências.",
    author: "Borges C.",
    totalShare: 10,
  },
  {
    text: "Lute pela sua felicidade pois a dificuldade é só um obstáculo que poderá ser vencido!",
    author: "Júlia Carvalho",
    totalShare: 10,
  },
  {
    text: "Se você tem o sonho de fazer algo, lute por ele, pois ninguém lutará pra você.",
    author: "Daniele Oliveira",
    totalShare: 9,
  },
  {
    text: "Não é bom pensar que amanhã é um novo dia sem erros nele ainda?",
    author: "L.M. Montgomery",
    totalShare: 8,
  },
  {
    text: "Tudo na vida vale apena, apenas lute , pois você vencera !",
    author: "Luccas Corrêa Freire",
    totalShare: 5,
  },
  {
    text: "É nas coletividades que encontramos reservatórios de esperança e otimismo.",
    author: "Angela Davis",
    totalShare: 5,
  },
  {
    text: "Não há tempo ruim quando se tem fé, determinação e otimismo no coração.",
    author: "Anderson Martins",
    totalShare: null,
  },
  {
    text: "Quando estiver melhor lute para o seu melhor. Se não estiver bem, lute com o seu melhor.",
    author: "Swami Paatra Shankara",
    totalShare: 5,
  },
  {
    text: "Lute pelo que quer assim como luta pela própria vida! Pois só assim poderá dizer que viveu.",
    author: "Diego Ferreira",
    totalShare: null,
  },
  {
    text: "Lute sempre, não desista nunca. Simples assim. Vencer é uma questão de escolha.",
    author: "fernando action",
    totalShare: 0,
  },
  {
    text: '"O otimismo não é apenas esperar bons momentos, é tirar algo de bom dos maus."',
    author: "Desconheço o Autor",
    totalShare: null,
  },
  {
    text: "Lute como um Leão por sua felicidade, acredite você é capaz de mudar a sua vida.",
    author: "PAULO LEAO",
    totalShare: null,
  },
  {
    text: "Otimismo é a força que faz a vida realmente acontecer. Quem não acredita em si mesmo não merece o futuro.",
    author: "Renée Venâncio",
    totalShare: 4,
  },
  {
    text: "Não acho que tenhamos outra alternativa senão permanecer otimistas. O otimismo é uma necessidade absoluta.",
    author: "Angela Davis",
    totalShare: null,
  },
  {
    text: "Não desista da vida, você pode chegar onde quiser, tenha fé e lute.",
    author: "F.Black",
    totalShare: null,
  },
  {
    text: "Todo mundo acredita muito facilmente em qualquer coisa que tema ou deseje.",
    author: "Jean de La Fontaine",
    totalShare: 362,
  },
  {
    text: "Tomo cuidado pra que os desequilibrados não abalem minha fé, pra eu enfrentar com otimismo essa loucura.",
    author: "Chorão",
    totalShare: 239,
  },
  {
    text: "O real não é nunca aquilo em que se poderia acreditar, mas é sempre aquilo em que deveríamos ter pensado.",
    author: "Gaston Bachelard",
    totalShare: 230,
  },
  {
    text: "O que tem sido acreditado por todos, e sempre, e em toda a parte, tem toda a probabilidade de ser falso.",
    author: "Paul Valéry",
    totalShare: 26,
  },
  {
    text: "Você é a junção de tudo o que você quer ser, então seja você, lute, siga seus sonhos!",
    author: "Neisantos",
    totalShare: 4,
  },
  {
    text: "Sempre que alguma porcaria falar que você não pode, lute ate o fim porque você será capaz",
    author: "vinicius ritter",
    totalShare: null,
  },
  {
    text: "Só se deverá acreditar num Deus que ordene aos homens a justiça e a igualdade.",
    author: "George Sand",
    totalShare: 93,
  },
  {
    text: "OTIMISMO!\namanhã é um novo dia, faça dele um jeito melhor de viver.",
    author: "Sérgio Cancioneiro",
    totalShare: null,
  },
  {
    text: "Estabeleça metas em tua vida , ouse nos teus sonhos e lute com o melhor que você tem.",
    author: "Willian Mateus",
    totalShare: null,
  },
  {
    text: "Como nenhum político acredita no que diz, fica sempre surpreso ao ver que os outros acreditam nele.",
    author: "Charles de Gaulle",
    totalShare: 141,
  },
  {
    text: "Lute pelo que quer, não desista, pois só desiste quem não acredita",
    author: "Lucas Lemos",
    totalShare: null,
  },
  {
    text: "Tenha fé, otimismo e ação. Sua vida só você a vive, faça de seus pensamentos a força de que está precisando.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "O mentiroso deveria ter em mente que, para ser acreditado, precisa apenas dizer as mentiras necessárias.",
    author: "Italo Svevo",
    totalShare: 27,
  },
  {
    text: "Nunca lute com um porco. Você ficará sujo e o porco gosta.",
    author: "Desconhecido",
    totalShare: 24,
  },
  {
    text: "Apenas acredito nas histórias cujas testemunhas estivessem dispostas a deixar-se degolar.",
    author: "Blaise Pascal",
    totalShare: 23,
  },
  {
    text: "O otimismo só será possível apartir do momento em que você ter o amor próprio.",
    author: "Wibson Albuquerque",
    totalShare: null,
  },
  {
    text: "Sonhe Com O Inimaginável, Sempre Lute As Vezes O Que Você Menos Espera Acontece",
    author: "Isac Tarquino",
    totalShare: null,
  },
  {
    text: "Ainda que você tenha só 1% de otimismo vale apena acreditar que a mudança é possível.",
    author: "Nilton Mendonça",
    totalShare: null,
  },
  {
    text: "Lute para fazer com que alguém que antes não dava nada por você, agora dê tudo e muito mais",
    author: "Marcos Awinsto",
    totalShare: null,
  },
  {
    text: "Corra, lute pelo seu futuro, pois quando ele se tornar passado , não podera muda-lo",
    author: "Imortais do Templo",
    totalShare: null,
  },
  {
    text: "Não deixe o amor da sua vida ir embora. Lute por ele, mesmo sem forças. Na verdade, é com ele que você quer estar",
    author: "AqeleFeio",
    totalShare: null,
  },
  {
    text: "Se você não tem uma chance para lutar , lute para ter uma chance",
    author: "Isadora Maria",
    totalShare: null,
  },
  {
    text: "O otimismo na vida é o motor que move o Homem para suas mais puras realizações!!!!",
    author: "Frater Edinilson Santos, SAC",
    totalShare: null,
  },
  {
    text: "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    author: "Tumblr",
    totalShare: 2700,
  },
  {
    text: "Nem que eu lute contra mim todos os dias. As coisas vão mudar.",
    author: "Caio Fernando Abreu",
    totalShare: 360,
  },
  {
    text: "Onde você está é resultado de quem você era, mas para onde você vai depende inteiramente de quem você escolhe ser.",
    author: "Hal Elrod",
    totalShare: 13,
  },
  {
    text: "'' Lute pelos seus objetivos pois o passado não volta mas o futuro ainda estar por vim ''",
    author: "Ingrid Luanna",
    totalShare: null,
  },
  {
    text: "A melhor vitoria, é quando se trava uma batalha com ousadia e otimismo de vence-la.",
    author: "Joao Paulo Felinto",
    totalShare: null,
  },
  {
    text: "Pensamentos positivos sempre. O otimismo torna a vida mais leve e fácil de conduzir.",
    author: "Diogo Maia de Alencar",
    totalShare: null,
  },
  {
    text: "Otimismo é a expectativa positiva pelo destino. Fé é a confiança em quem o faz!",
    author: "Reinaldo Ribeiro - O poeta do Amor",
    totalShare: null,
  },
  {
    text: "Lute, Tenha Fé e Acredite sempre coisas boas Vem para quem sabe sonhar !",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    author: "Desconhecido",
    totalShare: 874,
  },
  {
    text: "É difícil acreditar que um homem está a dizer a verdade quando você sabe que mentiria se estivesse no lugar dele.",
    author: "H. L. Mencken",
    totalShare: 488,
  },
  {
    text: "Nem que me corte, nem que eu sofra,\nnem que eu lute contra mim todos os dias.\nAs coisas vão mudar!",
    author: "Caio Fernando Abreu",
    totalShare: 87,
  },
  {
    text: "Em tempos difíceis, não se entregue, mas lute com tudo que restar de você.",
    author: "Diego Elias",
    totalShare: 63,
  },
  {
    text: "Se quer tudo o que tanto sonha em alcançar, pare de dormir e acorde pra lutar.",
    author: "Ednaldo Correia Mariano Júnior",
    totalShare: 5,
  },
  {
    text: "Lute!\nE proporcione a si mesmo,\no que de melhor a vida pode\nlhe oferecer.",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "Contos de fadas podem se tornar realidade. Basta que a princesa não lute contra a própria felicidade.",
    author: "Carina Rissi",
    totalShare: 11,
  },
  {
    text: "Observe com otimismo as dificuldades que apareçam, interpretando-as por lições necessárias!",
    author: "André Luiz",
    totalShare: 3,
  },
  {
    text: "Não lute por tudo e por todos. Se você não lutar por você e pelo que você ama, então ninguém lutará.",
    author: "Flávio Cardoso",
    totalShare: null,
  },
  {
    text: "E cada um acredita, facilmente, no que teme e no que deseja.",
    author: "Jean de La Fontaine",
    totalShare: 44,
  },
  {
    text: "Não queira sangrar\nLute seu inimigo\nMude sua alma\nPara que ela seja livre",
    author: "Serj tankian",
    totalShare: 2,
  },
  {
    text: "Não trate a sua paz como se fosse de responsabilidade alheia, lute você por ela.",
    author: "Vida Erin Zurich - Escritora",
    totalShare: 2,
  },
  {
    text: "A vida é curta demais para esperar, faça, pode ser a sua última chance.",
    author: "João Victor Pereira Barbosa",
    totalShare: 2,
  },
  {
    text: "Otimismo é a bandeira da alma que deve estar sempre hasteada.",
    author: "Anderson Martins",
    totalShare: 0,
  },
  {
    text: "Enquanto você não caminhar com suas próprias pernas, você não estará livre.",
    author: "Patrezy Breno",
    totalShare: null,
  },
  {
    text: "Acreditar sempre e manter o otimismo é o combustível de esperança na vitória.",
    author: "Sandro Luis",
    totalShare: null,
  },
  {
    text: "A traição sempre vem de onde a gente já espera acontecer, mas o otimismo nubla tudo.",
    author: "Swami Paatra Shankara",
    totalShare: null,
  },
  {
    text: "Mensagens de otimismo são para ler com otimismo. Se duvida de si mesmo, isso é com você e não com quem escreveu.",
    author: "Swami Paatra Shankara",
    totalShare: null,
  },
  {
    text: "Qual seu ideal de vida, lute por ele. Pois o sucesso esta mais perto do imagina.",
    author: "Reinaldo Junior",
    totalShare: null,
  },
  {
    text: "Se é isso que você realmente quer lute, persista, mas nunca desista.",
    author: "Brenna Coelho",
    totalShare: 2,
  },
  {
    text: "Lute pelo que você quer até o final de sua vida, se você não conquista-lo, pode ter certeza que chegou bem perto.",
    author: "Daximmous",
    totalShare: null,
  },
  {
    text: "Quem não sabe nada tem de acreditar em tudo.",
    author: "Jan Neruda",
    totalShare: 2500,
  },
  {
    text: "O otimismo não é capaz de mudar os acontecimentos, mas, certamente, muda a forma como lidamos com eles.",
    author: "Suely Buriasco",
    totalShare: 4,
  },
  {
    text: "Otimismo é como batom em\nbolsa de mulher, não pode\nfaltar em nenhuma ocasião.",
    author: "Jovol",
    totalShare: 2,
  },
  {
    text: "Não seja forte por ninguém, mas por você.Lute por você,não desista de você.",
    author: "Aline Pinheiro",
    totalShare: null,
  },
  {
    text: "Ser derrotado não é vergonha\nVergonha é não lutar\nPor algo que se quer...",
    author: "Paulo Locateli",
    totalShare: null,
  },
  {
    text: "Lute,morra mas não se esqueça que existem pessoas que ainda te amam. Lute e morra por essas pessoas.",
    author: "Artur Urban Borbely",
    totalShare: null,
  },
  {
    text: "Lute a tempestade e a batalha ou queda tem pedras; força no caminho, refaça-se.",
    author: "Almir paulino",
    totalShare: null,
  },
  {
    text: "Certos momentos da vida, as soluções não vem da inteligência, e sim do otimismo.",
    author: "Tamires Soares",
    totalShare: null,
  },
  {
    text: "Lute e empurre fortemente para o que você acredita, você ficará surpreso, você é muito mais forte do que pensa.",
    author: "Lady Gaga",
    totalShare: 112,
  },
  {
    text: "Se um dia a razão te pedir para desistir e o coração te mandar lutar, lute pois não é a razão que bate pra você viver e sim o coração.",
    author: "Cello Menezes",
    totalShare: 111,
  },
  {
    text: "Infeliz daquele que, nos primeiros instantes de uma ligação amorosa, não acredita que ela vai ser eterna!",
    author: "Benjamin Constant",
    totalShare: 87,
  },
  {
    text: "Lute para ser um ser humano melhor, e não para ser o melhor dos seres humanos.",
    author: "Cirio Fernandes",
    totalShare: 17,
  },
  {
    text: "O otimismo e a coragem são a base para a construção de um grande sonho.",
    author: "Lucas Moreira",
    totalShare: null,
  },
  {
    text: "“” Aceite que você tem o que merece e lute para merecer mais e melhor...””",
    author: "Oscar de Jesus Klemz",
    totalShare: null,
  },
  {
    text: "O verdadeiro maluco é aquele que se encontra no infinito estágio de otimismo.",
    author: "Lucas Primo",
    totalShare: null,
  },
  {
    text: "A fé e a nossa perseverança despertam o otimismo, que conduz à vitória final.",
    author: "tamires",
    totalShare: 110,
  },
  {
    text: "Não lute apenas para ter grandes clientes. Trabalhe para conquistar bons e fieis amigos",
    author: "Fernando Guifer",
    totalShare: 38,
  },
  {
    text: "Lute como um bravo, não seja um escravo\nNinguém manda em você, não há o que temer",
    author: "Red hot chili peppers",
    totalShare: 5,
  },
  {
    text: "A forma que você lida com seus medos diz muito sobre qual tipo de pessoa você é.",
    author: "Thiago Limano",
    totalShare: 2,
  },
  {
    text: "Lute por aquilo que vale a pena, busque-o,\nNão iluda-se, com o que não vale, desista...",
    author: "Sérgio o Cancioneiro",
    totalShare: null,
  },
  {
    text: "lute por aquilo que você quer, mostre que você é capais de vencer...",
    author: "Yago Ladislau De Araujo",
    totalShare: null,
  },
  {
    text: "Nunca desista dos seus sonhos, lute até o fim, porque não há vitória sem luta.",
    author: "Erick donalt",
    totalShare: null,
  },
  {
    text: "Sonhe, lute, busque, não desista de seus objetivos, quem acredita, sempre alcança",
    author: "Júnior Recalcati",
    totalShare: null,
  },
  {
    text: "É uma doença natural no homem acreditar que possui a verdade.",
    author: "Blaise Pascal",
    totalShare: 787,
  },
  {
    text: "Não fique se lamentando esperando que tudo aconteça, lute e faça com que tudo aconteça.",
    author: "Sérgio o Cancioneiro",
    totalShare: 2,
  },
  {
    text: "Lute contra os teus limites, não contra as pessoas. Assim vencerás todas as lutas!",
    author: "Walmor Santos",
    totalShare: null,
  },
  {
    text: "Para sermos fortes, Deus testa nossas fraquezas; fé e otimismo levam à superação!",
    author: "Sebastian Striquer",
    totalShare: null,
  },
  {
    text: "Agradeça todos os dias pelas coisas que tens . E lute incansavelmente por tudo que desejar.",
    author: "Julio_kilpp",
    totalShare: null,
  },
  {
    text: "Os homens tendem a acreditar sobretudo naquilo que menos compreendem.",
    author: "Michel de Montaigne",
    totalShare: 213,
  },
  {
    text: "Acredito cada vez mais que não se deve julgar o bom Deus por este mundo, pois foi um estudo dele que saiu errado.",
    author: "Vincent van Gogh",
    totalShare: 159,
  },
  {
    text: "Se a vida te afastar, lute por cada centímetro.",
    author: "A cinco passos de você",
    totalShare: 105,
  },
  {
    text: "Eis o melhor conselho para um homem razoável: não acredites numa mulher, ainda que ela esteja a dizer a verdade.",
    author: "Eurípedes",
    totalShare: 38,
  },
  {
    text: "Já faz algum tempo que a vida me ensinou a voar, então é inútil tentar tirar o meu chão.",
    author: "Ney Mombach",
    totalShare: 35,
  },
  {
    text: "Lute pelo que é importante para você, jamais para que você seja importante para os outros.",
    author: "Sandra Regina da Luz Inacio",
    totalShare: 9,
  },
  {
    text: "Lute pelo que você quiser, não se esqueça de agradecer a Deus pela força que levou a conseguir.",
    author: "Claudiney Ribeiro",
    totalShare: 8,
  },
  {
    text: "— Abre o jogo então! O que você quer que eu faça?\n— Eu quero que você lute por mim, é isso que eu quero!”",
    author: "Gigantes de Aço.",
    totalShare: 3,
  },
  {
    text: "Se você acredita realmente que seus sonhos possam dar certo, vá em frente. Lute!\nLembre-se que se você não fizer por você, ninguém vai...",
    author: "Matheus Rocha",
    totalShare: 2,
  },
  {
    text: 'Lute pelo que você deseja. As coisas boas nem sempre são fáceis"',
    author: "Emilsen Lemes",
    totalShare: 2,
  },
  {
    text: '"Lute por seus propósitos sim, mas saiba também dar tempo ao tempo"',
    author: "Danilo Ramiro",
    totalShare: null,
  },
  {
    text: "Se você a ama de verdade, lute por ela. Mais nunca pense em desistir.",
    author: "Ana Luiza Schroeder",
    totalShare: null,
  },
  {
    text: "Pra você... pra mim... pra nós...\num dia assim ohhh! carregadinho de otimismo e muita fé.",
    author: "Sueli Matochi",
    totalShare: null,
  },
  {
    text: "Não reze pra que venha um mundo melhor... lute e faça do nosso mundo,um mundo melhor para todos.",
    author: "Adenilson Almeida",
    totalShare: null,
  },
  {
    text: "Lute pra conseguir seus objetivos.\nOu alguém vai fazer você lutar pra conseguir os dele.",
    author: "Wilian Gonçalves",
    totalShare: null,
  },
  {
    text: "Poderosa arma é o otimismo. Ele não é prova de felicidade, mas é sintoma de força!",
    author: "Reinaldo Ribeiro - O poeta do Amor",
    totalShare: 2,
  },
  {
    text: "Cada despertar é um prazer,\nporque é vida para viver com otimismo.",
    author: "Urban Walter",
    totalShare: null,
  },
  {
    text: "Não deixe que teu sonho seja tua realidade, mas lute para que ele se torne",
    author: "Tainã Marinelli",
    totalShare: null,
  },
  {
    text: "Lute pelo que você quer desde que isso não te faça mal",
    author: "Lucas Lemos",
    totalShare: null,
  },
  {
    text: "Não lute por aquilo que para você é só um capricho...\ngaste seu tempo com coisas que podem mudar sua vida para melhor.",
    author: "Silvia CF Iop",
    totalShare: null,
  },
  {
    text: "Viva, grite, lute, corra, brinque, ame, xingue, a vida é um só e estamos aqui para ser feliz",
    author: "Enéas",
    totalShare: 2,
  },
  {
    text: "Nunca lute contra o que você é apenas para agradar pessoas que não gostam de você como verdadeiramente é.",
    author: "Flávio Cardoso",
    totalShare: null,
  },
  {
    text: "Eu descobri que o otimismo não me bastava no dia em que Cristo me ensinou o significado da fé!",
    author: "Reinaldo Ribeiro - O poeta do Amor",
    totalShare: null,
  },
  {
    text: "Sonhe, lute , acredite siga os seus pensamentos e não o que você sente e no final você estará aonde você deve estar",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "Lute pelos seus sonhos,se você acredita na sua escolha,vá em frente,nada vem sozinho.",
    author: "Bruna Vitória",
    totalShare: null,
  },
  {
    text: "Se por acaso não tem certezas do que queira de verdade não lute em vão;",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "E mesmo se as pessoas te desanimarem, lute pelo que você quer....",
    author: "Isabela Martins",
    totalShare: null,
  },
  {
    text: "Lute até não poder lutar mais não deixe a vida te derrubar",
    author: "Anderson Ricardo Cruz",
    totalShare: null,
  },
  {
    text: "Os adversários acreditam que nos refutam quando repetem a própria opinião e não consideram a nossa.",
    author: "Johann Goethe",
    totalShare: 36,
  },
  {
    text: "Não sorria para os seus problemas, encare-os com a certeza de que você é capaz de vencê-los.",
    author: "Dirlei osório",
    totalShare: null,
  },
  {
    text: "Não lute contra sua própria Natureza mais a domine pro seu próprio bem",
    author: "Hilkias oliveira",
    totalShare: 2,
  },
  {
    text: "Nunca existe o fim, quem pensa é privado de si mesmo. Há recomeço, liberta-se e lute.",
    author: "Diogo Denski",
    totalShare: 2,
  },
  {
    text: "Teu talismã, são as suas dores; não lute para que elas cessem, cresça (...).",
    author: "Maycon Robert",
    totalShare: 2,
  },
  {
    text: "Afaste-se daqueles que minam seu otimismo e entusiasmo; ainda que isso lhe faça sofrer.",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "O otimismo é espelho, a bondade é reflexo, mas o sofrimento do outro lhe parece ilusão.",
    author: "Francis Cirino",
    totalShare: null,
  },
  {
    text: "Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas!",
    author: "Machado de Assis",
    totalShare: 5500,
  },
  {
    text: "Diga o que você pensa com esperança.\nPense no que você faz com fé.\nFaça o que você deve fazer com amor!",
    author: "Ana Carolina",
    totalShare: 1100,
  },
  {
    text: "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
    author: "Daniel Godri",
    totalShare: 962,
  },
  {
    text: "Os tristes acham que o vento geme;\nOs alegres acham que ele canta",
    author: "Luis Fernando Verissimo",
    totalShare: 630,
  },
  {
    text: '"Magia é acreditar em um mundo melhor, mesmo que ele piore a cada dia."',
    author: "magia otimismo",
    totalShare: 207,
  },
  {
    text: "Cultivar amizades verdadeiras ajuda a recarregar a vida com ânimo e otimismo.",
    author: "Thiago Saraiva",
    totalShare: 27,
  },
  {
    text: "Tenha fé, seja feliz, não desanime. As coisas vão dar certo.",
    author: "Gordon B. Hinckley",
    totalShare: 22,
  },
  {
    text: "Quem não vive segundo o que acredita não acredita.",
    author: "Thomas Fuller",
    totalShare: 18,
  },
  {
    text: "Às vezes, sua alegria é a fonte do seu sorriso, mas às vezes, o seu sorriso pode ser a fonte da sua alegria.",
    author: "Thich Nhat Hanh",
    totalShare: 17,
  },
  {
    text: '"NUnca desista, sempre lute, pois somente os lutadores merecem vencer!"',
    author: "Marlon Silva",
    totalShare: 15,
  },
  {
    text: "A sua energia positiva torna o mundo um lugar melhor.",
    author: "Vin Diesel",
    totalShare: 15,
  },
  {
    text: "Não lute para ser o melhor , lute parar ser diferente , melhores tem muitos mais poucos fazem a diferença",
    author: "Deyvid Dias",
    totalShare: 5,
  },
  {
    text: "Perder não é vergonha, mas sim motivação para lutar com otimismo e vencer pela insistência.",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "Simplesmente acredite em seu sonhos, lute muito e uma dia de alguma forma você chegará onde sempre desejou.",
    author: "Chef Di Manno",
    totalShare: null,
  },
  {
    text: "Lute ate que a espada se torne parte do seu corpo. e você tenha vencido a guerra.",
    author: "Israel Souza",
    totalShare: null,
  },
  {
    text: "Faça o que tem que fazer derrube as críticas deixe que falem trabalhe,lute,conquiste",
    author: "Iran Mnr",
    totalShare: 14,
  },
  {
    text: "Meu otimismo foi tudo que precisava para meus objetivos tornarem reais.",
    author: "Uilder César",
    totalShare: 10,
  },
  {
    text: "A mente que vê sempre o lado positivo, isto é, otimismo, é a base para realizar o que quer seje. Sem esperança, nada poderá ser conseguido.",
    author: "Helen Keller",
    totalShare: 6,
  },
  {
    text: "''Mate lute xingue? Não! Martin Luther King irmão!.''",
    author: "Fabio Brazza",
    totalShare: 6,
  },
  {
    text: "Otimismo é sabedoria!\nAcorde com alegria, não reclame da vida, agradeça, sorria, abrace seu dia e seja feliz!",
    author: "Sol Pinheiro",
    totalShare: 5,
  },
  {
    text: "Siga adiante, viva, sonhe, lute, arrisque e aprenda... tudo não passa do jogo da vida!",
    author: "desconhecido",
    totalShare: 3,
  },
  {
    text: "Ame sem medo de errar e lute ate o fim pelo amor de quem você sabe que ao seu lado vai ti fazer feliz",
    author: "ismael Llima",
    totalShare: 2,
  },
  {
    text: "Não adiantar ficar na sua mente\nVocê tem que agir,lute pelo o que é seu conquiste o que você deseja.",
    author: "Maicon Heberth O. Cruz",
    totalShare: 2,
  },
  {
    text: "E se o céu fosse uma ilusão?\nAssim mesmo eu escolheria o otimismo da esperança!",
    author: "NannyeDias",
    totalShare: 0,
  },
  {
    text: "O otimismo faz parte da trajetória de um vencedor, e a luta o consagra.",
    author: "Emanuel Coelho Guedes",
    totalShare: null,
  },
  {
    text: 'É lutando que se consegue o que se quer.Lute pelos bens que você deseja."',
    author: "U. S. Andersen",
    totalShare: null,
  },
  {
    text: "Lute por quem te merece e não disperdice a vida para chorar e sim para buscar o verdadeiro amor",
    author: "João Victor Da Silva Freitas",
    totalShare: null,
  },
  {
    text: '"O melhor é ser, antes de tudo, realista. O otimismo é fase subsequente à razão sensível."',
    author: "Luiselza Pinto",
    totalShare: null,
  },
  {
    text: "Se quiser algo,lute,corra,conquiste, e se não der certo... amanha tente denovo",
    author: "PaulloRobert",
    totalShare: null,
  },
  {
    text: "Lute, enfrente e acredite\nNunca você fracassa quando está debaixo da palavra de Deus!",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "Corra, lute pelo seu futuro, pois quando ele se tornar passado não tera o poder de muda-lo.",
    author: "DomSalome",
    totalShare: null,
  },
  {
    text: "Se Deus determinar algo sobre sua vida, ninguém pode impedir o seu crescimento. Acredite e lute até o fim :).",
    author: "Fábio Cordeiro",
    totalShare: null,
  },
  {
    text: "Não se esforçe por pessoas que não dão a minima por você, mais lute por quem esta ao seu lado sempre.",
    author: "PeehTwist",
    totalShare: null,
  },
  {
    text: "Lute contra si mesmo e fique feliz por nunca precisar brigar com ninguém",
    author: "Flávio Rodrigues",
    totalShare: null,
  },
  {
    text: "Quando perder a vontade de lutar por si lute pela pessoa que mais ama. Porque o importante na vida é nunca parar de lutar.",
    author: "Laguna de Jesus",
    totalShare: null,
  },
  {
    text: "Perguntaram um dia a alguém se havia ateus verdadeiros. Você acredita, respondeu ele, que haja cristãos verdadeiros?",
    author: "Denis Diderot",
    totalShare: 84,
  },
  {
    text: "Lute e morra, lute pelo que você acredita, e morra por quem você ama.",
    author: "Tiago Portela Silva",
    totalShare: 2,
  },
  {
    text: "Lute todos os dias para tentar ser aquilo que você cobra que os outros sejam.",
    author: "Hudson Pessini",
    totalShare: null,
  },
  {
    text: "Lute, levante, fique de pé. O maior risco que corre é conseguir o que quer!",
    author: "Matheus Siqueira",
    totalShare: null,
  },
  {
    text: "Mesmo que à adversidade seja maior não se intimide, cresça, lute e vença.",
    author: "Wigton Gerald",
    totalShare: null,
  },
  {
    text: "Acreditar nos sonhos das pessoas não é apenas otimismo, e sim acreditar que a humanidade ainda tem salvação.",
    author: "Eduardo Schmidt",
    totalShare: null,
  },
  {
    text: "O otimismo é o ato de acreditar que em meio as lutas e dificuldades, a vitória nos espera no fim.",
    author: "Walison Ricardo",
    totalShare: null,
  },
  {
    text: "Se você quer, você pode. Lute e conquiste a sua vitória!",
    author: "Anne Plank",
    totalShare: null,
  },
  {
    text: "Acreditar em seus sonhos não é errado, desde que você lute até o fim para conquistar os seus objetivos.",
    author: "Gabriela Rodrigues",
    totalShare: null,
  },
  {
    text: "Nada acontece por acaso, por isso, lute em prol dos seus sonhos:produtividade é fruto de trabalho árduo.",
    author: "Cristina Deutsch",
    totalShare: null,
  },
  {
    text: "Lute pelo que você acredita, mas saiba que isso vai incomodar muita gente...",
    author: 'Karin Raphaella Silveira - autora de "O Palco Das Flores"',
    totalShare: null,
  },
  {
    text: "O equilíbrio emocional de qualquer ser, está na capacidade mental do otimismo e auto-estima.",
    author: "Sérgio o Cancioneiro",
    totalShare: null,
  },
  {
    text: "Lute sempre pelo que acredita, a fé e a esperança movem até aquilo que parece impossível",
    author: "Jclezz",
    totalShare: null,
  },
  {
    text: "Pensamento positivo, otimismo e fé são o combustível de uma mente sadia.",
    author: "Desconhecido",
    totalShare: null,
  },
  {
    text: "Não espere o amanhã. Faça hoje, lute hoje, seja feliz hoje.",
    author: "Isadora Alvarenga",
    totalShare: 2,
  },
  {
    text: "A verdade e o amor morreram num só dia, para provarem que existem a honestidade e o otimismo.",
    author: "Mauro94",
    totalShare: null,
  },
  {
    text: "Ame,\nsonhe,\nlute,\nconquiste,\npois a vida não tem retorno, somente recordações",
    author: "Harumy Yamaguchi Fernandes",
    totalShare: null,
  },
  {
    text: '"Nunca pense em desistir se alguém te dizer que você não consegue apenas lute e prove o quanto mereceu"',
    author: "Rodolfo Pereira Moreira",
    totalShare: null,
  },
  {
    text: "O otimismo é a chave que abre o cadeado da porta da inteligência.",
    author: "José Noé de Abreu Cavalcante",
    totalShare: null,
  },
  {
    text: "Lute com 100 homem em uma batalha, mas nao discuta com uma mulher em T.P.M .",
    author: "Diego Sabbadini",
    totalShare: null,
  },
  {
    text: 'Fugir é a pior "liberdade" do mundo, não sinta medo, lute pelo o que você acredita e seja livre.',
    author: "Antônio Merá Lee",
    totalShare: null,
  },
  {
    text: "Lute sempre, vença talvez, mais jamais desistar de seus sonhos e objetivos.",
    author: "Diego Rafael",
    totalShare: null,
  },
  {
    text: "Se embriague de sobriedade, se drogue de otimismo, e tenha uma overdose de esperança!",
    author: "Paulo Victor",
    totalShare: null,
  },
  {
    text: "As pessoas felizes não acreditam em milagres.",
    author: "Johann Goethe",
    totalShare: 31,
  },
  {
    text: "O dia de hoje amanheceu assim, sombrio, mas você pode torná-lo alegre e prazeroso com teu otimismo e teu sorriso :)",
    author: "valdetepss",
    totalShare: 5,
  },
  {
    text: "Lute pelos seus ideais e se entregue por quem merece, caso contrário, a vida não valerá a pena.",
    author: "Paulo Cuba",
    totalShare: 2,
  },
  {
    text: "Trocamos o Consolo do Pai (convencer do pecado, justiça e juízo) pelo otimismo.",
    author: "Thiago Figueiredo",
    totalShare: null,
  },
  {
    text: "O trabalho dignifica o homem, o sonho faz com que ele lute pelos seus ideais e objetivos.",
    author: "Adrianozig (AJS)",
    totalShare: null,
  },
  {
    text: "Quanto mais um homem se aproxima de suas metas, tanto mais crescem as dificuldades, Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior",
    author: "Paulo Ricardo",
    totalShare: null,
  },
  {
    text: "Lute para que fatores externos te influenciem somente o suficiente pra não acabar com teu dia.",
    author: "Itarcio A. L.",
    totalShare: null,
  },
  {
    text: "Otimismo\n\nO mundo\nNão vai mudar\nA escolha é sua:\nVai sorrir\nOu vai chorar?",
    author: "Jean Carlo Barusso",
    totalShare: null,
  },
  {
    text: "Não deixo o cansaço, tomar conta da minha satisfação e nem do meu otimismo!!!!",
    author: "NEY JUVENT",
    totalShare: null,
  },
  {
    text: "Lute sempre pelo que você deseja. Não se deixe abater por pessoas que nada somam a tua vida. Pessoas vazias não merecem tanta atenção assim.",
    author: "Clarissa Guerra Medeiros",
    totalShare: 180,
  },
  {
    text: "Cada um é tão infeliz quanto acredita sê-lo.",
    author: "Sêneca",
    totalShare: 178,
  },
  {
    text: "Se você realmente acredita em algo, lute pela sua fé!",
    author: "Diego Elias",
    totalShare: null,
  },
  {
    text: "Lute por aquilo que você acredita, não espere! A única pessoa que pode fazer a vida valer a pena é você mesma! Aprenda a se desafiar…",
    author: "Bellah Menina",
    totalShare: 135,
  },
  {
    text: "É acreditando nas rosas que as fazemos desabrochar.",
    author: "Anatole France",
    totalShare: 46,
  },
  {
    text: "a lagrima de hoje pode ser o sucesso do amanha,lute,espere, e alcançarar.",
    author: "camila lima",
    totalShare: 10,
  },
  {
    text: "Estudo e otimismo fazem a pessoa ser quem ela quiser. É uma arma que ninguém consegue tirar, apenas Deus.",
    author: "Dérick Lucas",
    totalShare: null,
  },
  {
    text: "Não olhe para trás e lute pela sua vida porque o pior ainda está começando.Então não julgue ninguém antes de conheçer",
    author: "LuanaMaggot",
    totalShare: null,
  },
  {
    text: "E tens o direito de ser livre\nninguém nesse mundo pode impedir\nPorém não espere por esse direito\nAcorde, Levante, Lute!",
    author: "Edson Gomes",
    totalShare: 66,
  },
  {
    text: "Eu acredito que a disseminação do catolicismo é o meio mais horrível de degradação política e social deixado no mundo.",
    author: "Charles Dickens",
    totalShare: 48,
  },
  {
    text: "Eu acredito no prazer da carne e na solidão irremediável da alma.",
    author: "Hjalmar Soderberg",
    totalShare: 46,
  },
  {
    text: "Muitas vezes é preciso, para servirmos os amigos, não acreditarmos em tudo o que eles dizem, nem fazer sempre o que eles querem.",
    author: "Madeleine Scudéry",
    totalShare: 40,
  },
  {
    text: "Ainda que eu seja um otimista melancólico, sou um otimista.",
    author: "Leandro Karnal",
    totalShare: 25,
  },
  {
    text: "Não fique com pena de si mesmo, lute, trabalhe, estude e redescubra o potencial que existe dentro de você.",
    author: "Gil Nunes",
    totalShare: 8,
  },
  {
    text: '"Sonhe alto, crie condição para concebê-lo e lute para realiza-lo."',
    author: "Nélio Wanderley",
    totalShare: 2,
  },
  {
    text: "Se de fato for amor, lute por ele. Porque se for da vontade de Deus, não importa a vontade dos outros.",
    author: "Ingrid Tomazzia",
    totalShare: null,
  },
  {
    text: "Se Um Dia Já Luto Por Amor Nao Lute Por Ele! Aliaz Amor Nao Vem De Lutas Mais Sim De Conquistas",
    author: "Rafavcom",
    totalShare: null,
  },
  {
    text: "Atrevasse a pensar com otimismo e vá em frente, atitudes são os próximos passos.",
    author: "José Marcos Mantovan",
    totalShare: null,
  },
  {
    text: '"Desenvolva o otimismo. Enxergue o copo meio cheio em vez de meio vazio."',
    author: "Johnny De' Carli",
    totalShare: null,
  },
  {
    text: '"Lute ferozmente contra as tentações da carne."',
    author: "São Padre Pio de Pietrelcina",
    totalShare: 607,
  },
  {
    text: "Acredito que, em última análise, a função do líder é espalhar esperança.",
    author: "Bob Galvin",
    totalShare: 47,
  },
  {
    text: "Não deixe sua vida passar em branco, lute pelos seus ideais, sem perder a força de vontade e nem o brilho nos olhos.",
    author: "Léo Bueno",
    totalShare: 4,
  },
  {
    text: "Não tenho espaço para o otimismo, todos se preencheram de frustrações.",
    author: "Itarcio A. L.",
    totalShare: null,
  },
  {
    text: "“Capoeira Leva Eu - Lute pela vida, arte, cultura e cidadania”",
    author: "Ronan Marrom",
    totalShare: null,
  },
  {
    text: "Lute pelos seus sonhos, construa seus objetivos e busque o topo, afinal lá é o seu lugar.",
    author: "Lucas Toledo",
    totalShare: null,
  },
  {
    text: 'Faça do "impossível" uma motivação para que se torne possível. Lute!',
    author: "Fellippe Street",
    totalShare: null,
  },
  {
    text: "A fé, a esperança e o otimismo, dão a minha vida mais leveza para suportarem as turbulências do dia a dia.",
    author: "Rosicler Ceschin",
    totalShare: null,
  },
  {
    text: "Todos se dizem amigos; mas doido é quem acredita: nada há de mais banal que esse nome; nada é mais raro do que isso.",
    author: "Jean de La Fontaine",
    totalShare: 198,
  },
  {
    text: "E depois de tudo dar errado... Cá estou cheio de otimismo.",
    author: "Avelino Filho",
    totalShare: 2,
  },
  {
    text: "Viver\ncom otimismo,\ntorna a vida mais agradável,\no corpo curado e a mente sã!",
    author: "Rosangela Zorio",
    totalShare: null,
  },
  {
    text: "Renunciar ao amor parecia-me tão insensato como desinteressarmo-nos da saúde porque acreditamos na eternidade.",
    author: "Simone de Beauvoir",
    totalShare: 149,
  },
  {
    text: "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
    author: "Cynthia Kersey",
    totalShare: 2,
  },
  {
    text: "Este otimismo que nos joga pra frente é ótimo! Coragem pra nos expor à alegria e à felicidade!",
    author: "Edu Lazaro",
    totalShare: null,
  },
  {
    text: "Otimismo é abrir a única janela de possibilidades e enxergar em cada dia um cenário mais bonito.",
    author: "Daniel Polcaro",
    totalShare: null,
  },
  {
    text: "A verdade é a melhor camuflagem. Ninguém acredita nela.",
    author: "Max Frich",
    totalShare: 118,
  },
  {
    text: '"Na vida você só pode escolher dois caminhos. Se errar na primeira escolha, na segunda você acerta".',
    author: "Lorena G. Andrade",
    totalShare: 7,
  },
  {
    text: "Lute por Amor\nPois o quanto voce lutou por ele,\né o tanto que voce o merece!",
    author: "Deborah Oliveira",
    totalShare: 6,
  },
  {
    text: "''Lute para obter o que queres. E saberás o verdadeiro valor de uma luta, e de um sonho.''",
    author: "Lubs__",
    totalShare: 2,
  },
  {
    text: "'' lute por quem voce mais ama e mostre o quanto o valoriza, pois um dia algem ira lutar pelo seu amor.''",
    author: "carlos vieira do rosario",
    totalShare: null,
  },
  {
    text: "Você sabe que tambem quer isso, entao não lute contra seus sentimentos e vamos se ver logo e acabar com essa agonia.",
    author: "wesleysilva",
    totalShare: null,
  },
  {
    text: "Lute para que seus ideais sejam repletos de satisfação, coragem, alegria e prazer.",
    author: "Francisco José Gregório de Andrade",
    totalShare: 2,
  },
  {
    text: "Faça a vida valer a pena, lute por uma causa justa, apaixone-se por alguém, conte a sua história, escreva um livro.",
    author: "Acássio Bernardo",
    totalShare: 0,
  },
  {
    text: "Não lute para conquistar os de fora, conquiste os de dentro que os de fora virá automaticamente.",
    author: "Flauberte de Jesus",
    totalShare: null,
  },
  {
    text: "lute pelos seus sonhos, por que não e s`o do\nPão Que vive o homem!",
    author: "Hilton Santos",
    totalShare: null,
  },
  {
    text: "Lute contra o pecado para não ficar de luto com a vida .",
    author: "Willian Mateus",
    totalShare: null,
  },
  {
    text: "Escolha não esperar. Decida, lute sempre! A luta adiada retarda o mérito, e nos deixa a mercê do acaso.",
    author: "Edmilson Silveira",
    totalShare: 2,
  },
  {
    text: "Grite, enlouqueça, lute, mas nunca deixe-os tirarem de você os seus sonhos.",
    author: "Gabriel Caetano",
    totalShare: 2,
  },
  {
    text: "Mantenha o otimismo e fortaleça a sua fé, pois essas são as melhores armas contra qualquer dificuldade.",
    author: "Desconhecido",
    totalShare: null,
  },
  {
    text: "Lute pelas pessoas, mesmo essas sendo más, corruptas e até medíocres, lute e aprenda a amá-las.",
    author: "Vinícius T. Parente",
    totalShare: null,
  },
  {
    text: "Se você acredita no seu potencial lute por aquilo que realmente te pertence e por aquilo que não te pertence também.",
    author: "Lara Padilla",
    totalShare: null,
  },
  {
    text: '"Nunca pense em desistir se alquem te dizer que você não conseque apenas lute e prove o quanto mereceu"',
    author: "Elias De Souza",
    totalShare: null,
  },
  {
    text: "A ciência não é uma ilusão, mas seria uma ilusão acreditar que poderemos encontrar noutro lugar o que ela não nos pode dar.",
    author: "Sigmund Freud",
    totalShare: 371,
  },
  {
    text: "Às vezes acredito que há vida em outros planetas às vezes eu acredito que não. Em qualquer dos casos, a conclusão é assombrosa.",
    author: "Carl Sagan",
    totalShare: 209,
  },
  {
    text: "Acredito que estou no inferno, portanto estou nele.",
    author: "Arthur Rimbaud",
    totalShare: 102,
  },
  {
    text: "Se você sonha em ter algo, corra atrás, lute, conquiste, vença! E se você quer mesmo algo nunca desista!",
    author: "Felipe de Souza Silva",
    totalShare: 77,
  },
  {
    text: "Enquanto houver esperança, corra atrás, lute e não desista, para vencer basta acreditar em você.",
    author: "Larissa Helen",
    totalShare: 2,
  },
  {
    text: "Seja um realista que vê com otimismo o seu inconformismo por dias melhores.",
    author: "Lucas Paiva de Oliveira",
    totalShare: 0,
  },
  {
    text: "Antes realista que otimista. De nada adianta otimismo se a real situação for irreversível.",
    author: "afonso claudio de meireles",
    totalShare: null,
  },
  {
    text: "Vá em frente, lute pelo que você realmente quer, afinal nada vai chegar até você sem primeiro você buscar.",
    author: "AninhaBia",
    totalShare: null,
  },
  {
    text: "O otimismo é o ímã da felicidade. Se você for positivo, coisas boas e pessoas boas serão atraídas para você. Saúde e Paz!",
    author: "Luiz Motivador",
    totalShare: null,
  },
  {
    text: "Lute! Não tenha medo! Sem batalha não há vida!",
    author: "Iara Schmegel",
    totalShare: null,
  },
  {
    text: "Entre uma dose e outra, de otimismo, a gente vai tentando sobreviver ao caos.",
    author: "Verinha Sfalsin",
    totalShare: null,
  },
  {
    text: "Lute!\nAinda que o sonho pareça grande;\nDesistir é coisa dos derrotados.",
    author: "Jorge Tolim",
    totalShare: 2,
  },
  {
    text: "A derrocada caminha lado a lado com uma grande vitória. Apenas Lute.",
    author: "Allan Pitz",
    totalShare: null,
  },
  {
    text: "Não lute sozinho, no final você não terá forças.",
    author: "Thiago Cartaxo",
    totalShare: null,
  },
  {
    text: '"Creia no seu potencial,você é o melhor de Deus;lute,conquiste,vença....BRILHE!"',
    author: "Débora Carvalho",
    totalShare: null,
  },
  {
    text: "Amanheça o dia com alegria. Ela é contagiante e lhe dá energia para aceitar com otimismo as adversidades do dia.",
    author: "Damião Maximino",
    totalShare: null,
  },
  {
    text: "Que a força do medo que tenho não me impeça de ver o que anseio.\nQue a morte de tudo que acredito não me tape os ouvidos e a boca.",
    author: "Oswaldo Montenegro",
    totalShare: 521,
  },
  {
    text: "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
    author: "Coleman Cox",
    totalShare: 448,
  },
  {
    text: "É à noite que é belo acreditar na Luz.",
    author: "Edmond Rostand",
    totalShare: 104,
  },
  {
    text: "Lute pelos sonhos, busque seus objetivos; batalhe pelos seus ideais e mostre que você é um guerreiro.",
    author: "desconhecido",
    totalShare: 57,
  },
  {
    text: "Sonhe, lute, corra atrás, realize. Mas nunca desista, pois nada é impossível quando temos força, foco e fé.",
    author: "Lourran Gustavo",
    totalShare: 43,
  },
  {
    text: "O Amigo quer te matar? Deixe.\nO Inimigo quer te matar? Lute.",
    author: "Kevin Jorge",
    totalShare: 2,
  },
  {
    text: "A sua felicidade só depende de você, busque, acredite e lute por ela. Você nasceu para vencer, deixe a sua estrela brilhar.",
    author: "Renata Medeiros dos Reis",
    totalShare: null,
  },
  {
    text: "A fé, a justiça, a esperança, o amor e a persistência são uns dos ingredientes do otimismo",
    author: "desconhecido",
    totalShare: null,
  },
  {
    text: "O otimismo trabalha dentro dos possíveis. É preciso estar com os pés no chão até para sermos otimistas.",
    author: "Jeozadaque Martins",
    totalShare: null,
  },
  {
    text: "nao espere pelo melhor,lute para que o melhor aconteca,pois nem tudo depende do tempo,mais apenas de voce.",
    author: "maria do socorro ferreira de sousa pereira",
    totalShare: 2,
  },
  {
    text: "Pensa em um cara que te levanta e o seu otimismo te contagia... Pensou! Esse cara, NÃO SOU EU.",
    author: "Ronei Porto da Rocha",
    totalShare: null,
  },
  {
    text: '"Não feche seus olhos a um eclipse mas abre ele no clarear do dia e lute por seus objetivos"',
    author: "Rodrigo Veiss",
    totalShare: null,
  },
  {
    text: "A sorte\nnada tem a ver com\notimismo.\nSua Fé\né que deve ser\notimista.",
    author: "Raphael Campos",
    totalShare: null,
  },
  {
    text: "A verdadeira amizade substitui palavras de otimismo por ações concretas.",
    author: "Maurício Cavalheiro - Pindamonhangaba",
    totalShare: null,
  },
  {
    text: "Seja qual for sua dor, lute contra ela antes que seja dominado pela mesma.",
    author: "Felipe Santana Lima",
    totalShare: null,
  },
  {
    text: "Viva a vida com entusiasmo e otimismo!\nPrepare o coração para receber as bênçãos de Deus!",
    author: "Marta Souza",
    totalShare: null,
  },
  {
    text: "Ponha metas na sua vida e lute por elas. Este é um único meio para você acreditar que elas se tornarão realidade.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "O otimismo é a disposição para um dia de vitória",
    author: "Sérgio o Cancioneiro",
    totalShare: null,
  },
  {
    text: "Acredito muito na sorte; verifico que quanto mais trabalho mais a sorte me sorri.",
    author: "Coleman Cox",
    totalShare: 301,
  },
  {
    text: "Aqui mora a fé, a sublime qualidade dos que jamais deixarão de acreditar na força superior do bem.",
    author: "Eurípedes Barsanulfo",
    totalShare: 142,
  },
  {
    text: "Sonhe, Lute, Conquiste, Tudo e possivel, Você nasceu para Vencer.",
    author: "Andy Orlando",
    totalShare: 128,
  },
  {
    text: "Não use as pessoas como degrau para o seu sucesso! Lute, conquiste,e vença por suas próprias mãos.",
    author: "Ted Willian Jacinto",
    totalShare: 32,
  },
  {
    text: "Lute por quem você ama, dê valor por quem você quer perto.",
    author: "Deborah Rossony",
    totalShare: 7,
  },
  {
    text: "quando estiver na frente de seu inimigo, mesmo que custe braços ou pernas, lute!",
    author: "Kureo Mado",
    totalShare: 7,
  },
  {
    text: '" Lute por você, pois sempre se pode tentar de novo, enquanto em nossas entranhas pulsar um coração.."',
    author: "simonevreis",
    totalShare: 2,
  },
  {
    text: "OTIMISMO\n\nCarregue na algibeira dos seus\nDias a insone vontade do vencer.",
    author: "Vantuilo Gonçalves",
    totalShare: null,
  },
  {
    text: "Lute contra todo lixo do mundo e não deixe que ele o afete.",
    author: "Renilmar Fernandes",
    totalShare: null,
  },
  {
    text: "a vida e dura se voçe for mole emtaõ lute sempre",
    author: "dominio publico",
    totalShare: 2,
  },
  {
    text: "Se não tem força para lutar, lute para consegui-la.",
    author: "Shad-Murilo",
    totalShare: null,
  },
  {
    text: "Se tiver que lutar, lute por uma causa, não por uma coisa.",
    author: "Hermes Fernandes",
    totalShare: null,
  },
  {
    text: "Se você tiver um sonho e quer realiza-lo, não permita que ninguém interfira, lute por aquilo que você quer e acredita...",
    author: "Sérgio o Cancioneiro",
    totalShare: null,
  },
  {
    text: "Não seja um canoa virada,lute por quem vc ama,lute pela sua vida.",
    author: "LuanaMaggot",
    totalShare: null,
  },
  {
    text: "O mal não venci nunca, a menos que você não lute.",
    author: "David Makongo Sebastião",
    totalShare: null,
  },
  {
    text: "A paz habita onde se planta o amor\n\n\n\nTexto de julho/2013- Página Caminho de Otimismo",
    author: "r.s.v",
    totalShare: null,
  },
  {
    text: "Usando caneta, e não lápis, para responder palavras cruzadas - eu a isso chamo Otimismo!",
    author: "Henrique de Souza Martins",
    totalShare: null,
  },
  {
    text: "Acredita na sua fidelidade: farás com que seja fiel.",
    author: "Sêneca",
    totalShare: 69,
  },
  {
    text: "Não olhe o ontem... Lute o hoje... Para então superar o amanhã!",
    author: "Julio Aukay",
    totalShare: 2,
  },
  {
    text: "Revejam o Motivo ao qual te move e Lute com todas as suas forças .",
    author: "Edenilson montessi",
    totalShare: 0,
  },
  {
    text: "Cada pessoa possui uma estrela, não importa o quão distante ela esteja, LUTE ATÉ ALCANÇA-LA!",
    author: "Cezar Fruhauf",
    totalShare: null,
  },
  {
    text: "Lute sempre enquanto vivo...jamais desista dos seus sonhos...pois nunca é demasidamente tarde para alcançá-los !",
    author: "adelmar",
    totalShare: null,
  },
  {
    text: "Não lute na vida pra mostrar aos outros que você é bem sucedido. Faça por você. Antes ser feliz com pouco, do que tentar ser feliz com muito!",
    author: "Joyce Xavier",
    totalShare: null,
  },
  {
    text: '"Jamais lute contra a pessoa, e sim contra os movimentos dela"',
    author: "Carlos Gracie",
    totalShare: 12,
  },
  {
    text: "Não é otimismo em si, mas a atitude de 'eu posso' que faz a grande diferença nos resultados que você pode alcancar.\n30/03/2006.",
    author: "Mr. Mistério",
    totalShare: 2,
  },
  {
    text: "Nasci preguiçosa, mas nunca deixei de escrever uma mensagem de otimismo",
    author: "Gisela Batista",
    totalShare: null,
  },
  {
    text: "Junte mudança, otimismo e perseverança. E veja no que dá.",
    author: "Pedro Felipe B. Silva.",
    totalShare: 2,
  },
  {
    text: "A vitória virá para aqueles que têm paciência, competência e uma boa dose de otimismo.",
    author: "João Carlos",
    totalShare: null,
  },
  {
    text: "(Sobre Hitler)\nEste homem é perigoso - ele acredita no que diz.",
    author: "Joseph Coebbels",
    totalShare: 65,
  },
  {
    text: "Quando se tem\notimismo e fé;\ntodo restante é apenas\nconsequência!",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "Os dois grandes fatores do homem vitorioso são: otimismo e entusiasmo.",
    author: "Paulo G. Freitas",
    totalShare: null,
  },
  {
    text: "Sempre lute com garra e determinação pelos seus ideais.\nO verdadeiro campeão é aquele que acredita na vitória!",
    author: "Izzo Rocha",
    totalShare: 166,
  },
  {
    text: "O seu cansaço de hoje, reflete no seu sucesso do amanhã. Erre, sofra, persista, conquiste!",
    author: "Tássio Noronha",
    totalShare: null,
  },
  {
    text: "O homem é aquilo em que acredita.",
    author: "Anton Tchekhov",
    totalShare: 34,
  },
  {
    text: "Ninguem no mundo te conhecerá tão bem quanto você mesmo, por isso seja seu melhor amigo, não lute contra você, lute a seu favor.",
    author: "Nancy Medina",
    totalShare: 31,
  },
  {
    text: "Entre todas as insanidades da mente humana,\neu fico com o otimismo.",
    author: "Luis Alberto Pontes",
    totalShare: 18,
  },
  {
    text: '"Lute como um tigre e vença com a sutileza de um gato doméstico"',
    author: "Daniela Lacerda",
    totalShare: 8,
  },
  {
    text: "Nada cai do céu...\nA não ser :\nBenção de Deus e chuva.\nLute ...\nCorra atrás do que você procura.",
    author: "Sophia Vargas",
    totalShare: 2,
  },
  {
    text: "Lute a cada instante, persista insista pois a vida é um jogo onde cabe a você utilizar as peças certas em busca da vitoria.",
    author: "Ronaldo Barbosa",
    totalShare: null,
  },
  {
    text: "Lute por uma causa que não te traga benefícios\nentão saberá o que esta causa te proporcionou.",
    author: "Tailan Kerusso",
    totalShare: null,
  },
  {
    text: "Uns são otimismo.\nOutros nos jogam em abismos.\n\n__Sophia Vargas ♥\n\n03/01/2010",
    author: "Sophia Vargas",
    totalShare: null,
  },
  {
    text: "Lute! Porque mesmo que não vença o desejado, frutos colherá.",
    author: "COSTA GARCIA",
    totalShare: 2,
  },
  {
    text: '"Lute,Pois Sua luta um dia chega à um final feliz".',
    author: "Thalles",
    totalShare: null,
  },
  {
    text: "Procure espalhar a alegria e o otimismo , mesmo com a fúria de uma tempestade dentro de si...",
    author: "reisec",
    totalShare: null,
  },
  {
    text: "Confie em si mesmo. Se você acredita naquilo que almeja, vai em frente. Sua confiança e seu otimismo vão te ajudar a conquistar.",
    author: "Lostvilla",
    totalShare: null,
  },
  {
    text: "Dois corações separados por um abismo, e unidos no eterno otimismo.",
    author: "Açucena Polizel",
    totalShare: null,
  },
  {
    text: "Lute constantemente pela vida do que perder tempo, discutindo com o diabo como fazer isso ou aquilo.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "Se você ama, lute até conseguir a pessoa amada.",
    author: "Ana Luiza Schroeder",
    totalShare: null,
  },
  {
    text: "O lugar onde o otimismo mais floresce é o manicômio.",
    author: "Lakykrea",
    totalShare: null,
  },
  {
    text: "Faça dos seus objetivos sua profissão, seja o seu próprio patrão.",
    author: "Modesto Cordeiro",
    totalShare: null,
  },
  {
    text: "Não fique pensando na possibilidade; lute pela realização!",
    author: "Andreza Filizzola",
    totalShare: null,
  },
  {
    text: "Faça tudo o que puder. Lute! Seja humilde. Conquiste o mundo.",
    author: "Cynthia Meneses",
    totalShare: 27,
  },
  {
    text: '"Não importa o quanto eu lute contra isso\nNão posso negar\nSimplesmente não posso esquecê-la"',
    author: "douglaslf",
    totalShare: 2,
  },
  {
    text: "Seu otimismo deixa a vida amorosa mais animada. Embora, no fundo, goste de ter o comando da relação.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "Se um dia a razão te pedir para desistir e o coração te mandar lutar, lute pois não é a razão que bate pra você viver e sim o coração!\nPenso assim..",
    author: "Ivanio Lima Martins",
    totalShare: null,
  },
  {
    text: "Tenha Personalidade Lute por aquilo que você acredita\nnão deixe que Mandem em você se fizer isso será Bem mais feliz",
    author: "Bruna Albano",
    totalShare: null,
  },
  {
    text: "LUTE POR AQUILO QUE REALMENTE TEM VALOR. LUTE POR VOCÊ E A FAVOR DO SEU PRÓXIMO. PENSE NISSO!",
    author: "Valdinei Arruda",
    totalShare: null,
  },
  {
    text: "O riso é um veneno para o medo.",
    author: "George R.R. Martin",
    totalShare: 9,
  },
  {
    text: "Não baixe a cabeça, erga-a, lute, não desista, pois nunca vi um vencedor desanimar diante das adversidades.",
    author: "Valdiclayton Pontes",
    totalShare: 2,
  },
  {
    text: '"Sonhe para acreditar,lute para conseguir e reze para agradecer"',
    author: "Expedita Figueiredo",
    totalShare: null,
  },
  {
    text: "Lute, Ganhe, Perca, Sofra, derrote, mas nunca se entregue à desistência.",
    author: "Albert Squilter",
    totalShare: null,
  },
  {
    text: "Atrás de uma grande montanha, há um grande tesouro.\nNão desista!",
    author: "Fellippe Street",
    totalShare: null,
  },
  {
    text: "EIS UM FATO: A luta é a prova de que o inimigo não conquistou você. Então, volte ao combate e lute. NÃO DESISTA.",
    author: "Franklin Martins",
    totalShare: null,
  },
  {
    text: "Lute e conquiste, supere seus medos. Acredite em seus sonhos.",
    author: "Aislan Dlano",
    totalShare: null,
  },
  {
    text: "A hora mais escura do dia é a que vem antes do sol nascer.",
    author: "Provérbio árabe",
    totalShare: 216,
  },
  {
    text: "Mergulhe em sua alma e invista em você, nos seus desejos. A prosperidade é seu direito. Lute, peça, seduza.",
    author: "Vaniafranca",
    totalShare: 2,
  },
  {
    text: "Sonhe o quanto você puder,e lute até quando você quiser!",
    author: "Richard Campos Magalhães",
    totalShare: null,
  },
  {
    text: "Todo otimismo sem naturalidade é indoletemente negligente.",
    author: "Murillo Leal",
    totalShare: null,
  },
  {
    text: "Com fé, todo sonho é possível! Acredite e confie!",
    author: "Liahna Mell",
    totalShare: 37,
  },
  {
    text: "As armas do jornalista são as palavra e a escrita, lute com elas.",
    author: "Ketlyn de Campos Martins",
    totalShare: 2,
  },
  {
    text: "Não tenho um cego otimismo, tenho uma Fé descomunal!",
    author: "Eduardu Ssidadi",
    totalShare: null,
  },
  {
    text: "Tente, lute, sue muito. Não perca a fé, não perca as forças e nem a esperança, mas por favor não desista!",
    author: "Mirelle Negreiros",
    totalShare: 2,
  },
  {
    text: "Mesmo ainda sem saber o motivo, lute por nós.",
    author: "Silvio Antonio Corrêa Junior",
    totalShare: 2,
  },
  {
    text: "Quem acredita em derrotas, nunca se torna um vencedor... Lute pelos seus ideais.",
    author: "Aline Lopes - (Pensamentos Aline Lopes)",
    totalShare: null,
  },
  {
    text: "Lute contra tudo e contra todos para conquistar seus ideais.",
    author: "WeltonGomes",
    totalShare: null,
  },
  {
    text: "Nunca abandone seus sonhos, nunca abandone seu caminho, lute por eles, mesmo que os cães ladrem.",
    author: "Mara Oliveira - Caruaru - PE",
    totalShare: 2,
  },
  {
    text: '"Não Lute por Pessoas que não lutam por Você".',
    author: "Rodrigo Lacerda De Assis",
    totalShare: null,
  },
  {
    text: "Se voce voce caiu,levante-se e lute e numca se esquecendo que muitos já cairam tentando derrubar você!",
    author: "Dique alberto",
    totalShare: 2,
  },
  {
    text: "Lute,vença,cresça. Só olhe pra trás pra ver a cara daqueles que um dia disseram que você não ia conseguir.",
    author: "Isabel França",
    totalShare: null,
  },
  {
    text: "Lute,sem falhar,ame por gostar,mas nao sinta o ódio no coração.",
    author: "LuanaMaggot",
    totalShare: null,
  },
  {
    text: "Arrisque, persevere e nunca desista! Lute por aquilo que acredita!",
    author: "Jean Araújo",
    totalShare: null,
  },
  {
    text: "Encarar as coisas com otimismo podem não melhora-las mas certamente fará com que as coisas pareçam melhores.",
    author: "Marcos Muniz San",
    totalShare: null,
  },
  {
    text: "Mensagens de otimismo sempre levanta defunto na fé.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "O otimismo é a melhor arma para felicidade!",
    author: "Marluã Rodrigues",
    totalShare: null,
  },
  {
    text: "A esperança não será a prova de um sentido oculto da Existência, uma coisa que merece que se lute por ela?",
    author: "Ernesto Sábato",
    totalShare: 289,
  },
  {
    text: "Até os fortes caem um dia, mas se levantam ainda mais fortes no outro. Nada como cair na lama pra dar valor a água limpa!",
    author: "Desconhecido",
    totalShare: 171,
  },
  {
    text: "Quanto mais se discute Deus, menos somos levados a acreditar nele.",
    author: "Étienne Jodelle",
    totalShare: 44,
  },
  {
    text: "Somos do tamanho que nos permitimos ser... Sonhe, trabalhe, lute, insista ... Permita-se...",
    author: "Gilberto Vieira E",
    totalShare: 35,
  },
  {
    text: "O otimismo é uma estratégia para criar um futuro melhor. Porque a menos que você acredite que o futuro pode ser melhor, é improvável que você assuma a responsabilidade de criá-lo.",
    author: "Noam Chomsky",
    totalShare: 27,
  },
  {
    text: "Viva a harmonia! O amor faz um bem enorme ao coração e a nossa alma. Compartilhe esperança e fé. Acredite e confie, o importante é ser feliz!",
    author: "Liahna Mell",
    totalShare: 6,
  },
  {
    text: "Nunca desista de você mesma(o).\nLute por você ,não aceite viver uma vida de qualquer jeito.\nAfinal só se vive uma vez.",
    author: "Ana Chahin",
    totalShare: 2,
  },
  {
    text: "Quando na manhã o dia se fizer presente;\nLevante-se e vá à luta com otimismo;\nPois quem lhe deu a vida, espera muito de você.",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "'mesmo que voçê lute\nmesmo que voçê perca..\nnao pare continue tentando pois um dia voçê vai conseguir.",
    author: "gabriel dogustonn",
    totalShare: null,
  },
  {
    text: "Conserve os olhos fixos num ideal sublime, dedique se ao máximo e lute sempre pelo que deseja, não esmoreça conquiste, pois só os fracos desistem e só quem luta é digno de sentir o sabor da vitória.",
    author: "Marco Aurélio Santos - PU5REI",
    totalShare: 97,
  },
  {
    text: "O maior engano do espírito é acreditarmos nas coisas porque queremos que elas aconteçam, e não porque tenhamos visto que elas existem de fato.",
    author: "Jacques Bossuet",
    totalShare: 21,
  },
  {
    text: "Um carinho?\nSim... é sempre bem-vindo, porque o que vem com amor e alegrias chega na medida exata que o coração precisa!",
    author: "Liahna Mell",
    totalShare: 16,
  },
  {
    text: "Lute por tudo aquilo que você acredita, não deixe a insegurança te fazer perder a esperança de ser feliz vá em busca do que é seu, lute até o fim.",
    author: "Paulinho Gonçalves",
    totalShare: 6,
  },
  {
    text: "Então querer è poder,portanto que se lute para ter o que quer!",
    author: "Tauan costa",
    totalShare: 2,
  },
  {
    text: "Se você tem um sonho mano, lute que Deus ilumina.",
    author: "Ricardo Wallas",
    totalShare: null,
  },
  {
    text: "Uma porta pode se fechar, mas nunca será o final! Acredite, lute, trabalhe, pois esta porta será aberta.",
    author: "Rogério Mendes Pereira Júnior",
    totalShare: 2,
  },
  {
    text: "Ser realistaé acreditar no que se pode ver, entretanto prefiro o poder da esperança que o otimismo traz.",
    author: "Nephtaly Filho",
    totalShare: null,
  },
  {
    text: "Otimismo é a chave,\nMotivação a porta\ne potencial o caminho\npara a grande conquista que se chama sonho.",
    author: "Diego Éboli",
    totalShare: 60,
  },
  {
    text: "VIBRE E CONQUISTARÁ...\nA luz que te guia,\né mais forte que todas as\nadversidades que te cerca.",
    author: "Simone Gomes Pedrolli",
    totalShare: 30,
  },
  {
    text: "Invejo sua capacidade de substituir a realidade pelo otimismo.",
    author: "Série Bones",
    totalShare: 13,
  },
  {
    text: "O otimismo está intimamente ligado a felicidade.",
    author: "Mirna Rosa",
    totalShare: 2,
  },
  {
    text: "O pássaro é seu, mas se abrir a porta da gaiola ele vai embora e te esquece. Lute sempre pelo o que DEUS te reservou.",
    author: "Eslley Alves",
    totalShare: 2,
  },
  {
    text: "Otimismo é uma droga que\nnão devemos largar o vício.",
    author: "Jovol",
    totalShare: null,
  },
  {
    text: "Otimismo não é ingenuidade, é ver a vida como algo que pode sim dar certo. E isso não é bobagem, nem crime nenhum. Só te fará o maior bem possível.",
    author: "Gritos Suaves",
    totalShare: null,
  },
  {
    text: '"Lute pois a vida é plena, enfrente pois a vida é bela, sorria pois a vida é curta"\n(Carol Oliveira)',
    author: "Carollyne Dayane",
    totalShare: null,
  },
  {
    text: "Se poder Lutar, Lute.\nSe ajudem.\nSe preparem para tudo.",
    author: "Joãolole",
    totalShare: null,
  },
  {
    text: "Lute hoje como se não existisse o amanhã !",
    author: "Luccas Corrêa Freire",
    totalShare: null,
  },
  {
    text: "Que nosso otimismo seja como o sol\nGrande, forte e imponente!",
    author: "Pedro SRS",
    totalShare: null,
  },
  {
    text: "Meu otimismo e uma dadiva que se transforma em Paz interior\nProtege o consciente de um mundo assustador",
    author: "TiagoCoutinho",
    totalShare: null,
  },
  {
    text: "Acredito nos jovens que trazem sempre no rosto um fio de otimismo e alegria, como lamparina dentro do coração e o transmitem aos outros.",
    author: "Indira Gandhi",
    totalShare: 24,
  },
  {
    text: "Tudo vai dar certo.Não é otimismo,é fé.",
    author: "Cobbie",
    totalShare: 2,
  },
  {
    text: "HOJE é completamente diferente de ONTEM.\nTer isso em mente, te fará alcançar propósitos que a rotina não permite.",
    author: "Nino Milanêz",
    totalShare: null,
  },
  {
    text: "Nunca lute apenas pelo seu amor, mas pelo amor de ambos!",
    author: "Reinaldo Ribeiro - O poeta do Amor",
    totalShare: null,
  },
  {
    text: "Otimismo! Ingrediente necessário para chegar ao resultado almejado...",
    author: "Nayara Potarcio",
    totalShare: null,
  },
  {
    text: "Insegurança , as vezes é apenas coisa da sua mente,se arrisque, mostre o que você sente, lute pela liberdade dos seus sonhos.",
    author: "Juliana Santana",
    totalShare: null,
  },
  {
    text: "Se Você Tem Um Sonho Não Desista Dele !!",
    author: "Tiago Henrique",
    totalShare: null,
  },
  {
    text: "Acreditamos ficar tristes pela morte de uma pessoa, quando na verdade é apenas a morte que nos impressiona.",
    author: "Gabriel Meilhan",
    totalShare: 152,
  },
  {
    text: "Lute por seu ideal,seja você mesmo,esqueça os outros.",
    author: "Rodolfo.",
    totalShare: 12,
  },
  {
    text: '"Quando quiser algo lute pois antes a tristeza de não ter vencido do que a vergonha de não ter lutado!"',
    author: "Desconhecido",
    totalShare: 8,
  },
  {
    text: "Lute vá à frente e não desista por nada.",
    author: "Michel Franklly",
    totalShare: 4,
  },
  {
    text: "Lute por dias melhores, mas nunca mate a esperança dos outros.",
    author: "Célio Faria",
    totalShare: 2,
  },
  {
    text: "O guerreiro é aquele que enfrenta todos os dissabores da vida com garra e otimismo, não desiste nunca e sempre está pronto para o combate.",
    author: "Damião Maximino",
    totalShare: 0,
  },
  {
    text: "Se fosse impossível, Deus não teria posto essa barreira no teu caminho. Tente, Lute, Acredite, Consiga. Você é capaz!",
    author: "Italo Pinheiro",
    totalShare: null,
  },
  {
    text: "Ver as coisas pelo lado positivo é um exercício de otimismo!",
    author: "Persio Cordeiro",
    totalShare: null,
  },
  {
    text: "Por mais que tudo esteja difícil sempre é possível mudar a situação... otimismo e paciência sempre é a melhor opção...",
    author: "wagneraraujoleite",
    totalShare: null,
  },
  {
    text: "Não lute pela verdade, e só rejeitar a mentira",
    author: "Pastor Fabiano do Carmo",
    totalShare: 2,
  },
  {
    text: "Não importa o peso da armadura, melhor suportá-la do que entrar desprevenido no campo de batalha.",
    author: "Sara Criss",
    totalShare: null,
  },
  {
    text: "daí, nóix nao lute pelos nossos direitos, pra v\nse nóix abaixa a cabeça os vacilão daa rasteira",
    author: "anahAlice",
    totalShare: null,
  },
  {
    text: "O otimismo realista é a virtude dos campeões.",
    author: "Thiago Tombini",
    totalShare: null,
  },
  {
    text: "O otimismo sem atitude competente é suicídio.",
    author: "Thiago Tombini",
    totalShare: null,
  },
  {
    text: "O otimismo representa meia batalha vencida.",
    author: "tamires",
    totalShare: 33,
  },
  {
    text: "Se você sonha e quer realizar, lute e nunca deixe de caminhar, pois a realidade de seu sonho esta em algum lugar esperando você chegar",
    author: "Rosa Marques",
    totalShare: null,
  },
  {
    text: "Não queira ser melhor que ninguém, apenas lute para ser o que você é e torne-se uma pessoa autêntica e verdadeira.",
    author: "GISÊLDA M",
    totalShare: null,
  },
  {
    text: "Sei que posso contar com minha fé, com meu otimismo, com minha positividade, com minha esperança, com minhas crenças e com meus amores.",
    author: "tumblr",
    totalShare: 2,
  },
  {
    text: "Mesmo que a tua vida não esteja da forma como sempre sonhou, improvise, lute, porque assim acaba despistando a inveja que o atrapalha.",
    author: "desconhecido",
    totalShare: null,
  },
  {
    text: "O otimismo é a chave para perseverança, enriquece e fortalece e faz acontecer, é a base maior para construção de um sonho.",
    author: "Sara Lopes",
    totalShare: null,
  },
  {
    text: "Pense sempre com otimismo,\ncom esperança,\nPense sempre com fé,\ne faça da vida sempre,\nO que deve fazer com amor..",
    author: "Sérgio o Cancioneiro",
    totalShare: null,
  },
  {
    text: "otimismo, otimismo... Como pode ser?? Se a cada dia criamos um mundo cada vez mais semelhante aos quintos dos infernos...",
    author: "Márcio Antônio",
    totalShare: null,
  },
  {
    text: "Sonhe, lute e conquiste você nasceu pra vencer!",
    author: "Borlone",
    totalShare: 2,
  },
  {
    text: "O motivo do nosso empenho em julgar bem o próximo é que temos medo de nós mesmos: a base do otimismo é puro receio.\n\n(O retrato de Dorian Gray)",
    author: "Oscar Wilde",
    totalShare: null,
  },
  {
    text: "Acredite. Lute. Conquiste. E acima de tudo, seja feliz. Insista, persista e nunca desista. Cada um é o que é e oferece aquilo que tem para oferecer.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "Beber é encontrar otimismo nas coisas. Cerveja com gelo já me dá uma ilusão de que o trem tá melhorando.",
    author: "charles canela",
    totalShare: null,
  },
  {
    text: "Quando você quiser algo, lute por ele, porque em algum dia você vai consegui-lo e vai ter a certeza de que tudo q fez valeu à pena...",
    author: "Thaís Campos",
    totalShare: 100,
  },
  {
    text: "Lute mesmo sem forças. Acredite mesmo sem esperanças.",
    author: "Aline Aparecida Rocha",
    totalShare: 87,
  },
  {
    text: "Não lute para desvendar\nOs mistérios do universo\nProcure desvendar a si mesmo\nAtravés da sabedoria do seu coração.",
    author: "Nildo Lage",
    totalShare: 2,
  },
  {
    text: "Quando nada sobrar, apenas lute, derrotas são feitas de homens que acreditam na sua incapacidade de vencer.",
    author: "Reinaldo Vasconcelos Pereira",
    totalShare: null,
  },
  {
    text: "Hoje é o dia de ser você mesmo.",
    author: "Pr. Luciano Souza",
    totalShare: null,
  },
  {
    text: "Os filósofos que acreditam na lógica absoluta da verdade nunca tiveram de travar uma discussão cerrada com uma mulher.",
    author: "Cesare Pavese",
    totalShare: 32,
  },
  {
    text: "A mente pode ir em mil direções, mas neste caminho bonito, eu ando em paz. A cada passo, o vento sopra. A cada passo, uma flor cresce.",
    author: "Thich Nhat Hanh",
    totalShare: 26,
  },
  {
    text: "Ame sempre, lute bastante, sonhe, mais viva esse amor!",
    author: "junior menthys",
    totalShare: 3,
  },
  {
    text: "''Lute sempre, vença se Possível, desistir Jamais.''",
    author: "Douglas Carvalho.",
    totalShare: null,
  },
  {
    text: "ﺀ.\n.\n.\n. Não Importa O Que As Pessoas Pensam, Se\nVocê Acredita Que Vale A Pena, Então Lute Por\n.Isso\n.\n.",
    author: "Vitosboy",
    totalShare: null,
  },
  {
    text: "Quando alguém duvidar da sua capacidade, lute se desafie e vença.\nMostre que você pode tudo e limitado àquele que te limita.",
    author: "Aline Pinheiro",
    totalShare: null,
  },
  {
    text: "Apesar dos dissabores e dificuldades que a vida apresenta,podemos vencer tudo com otimismo,boa vontade e fé!",
    author: "Samuel Ranner",
    totalShare: null,
  },
  {
    text: "Engole a esperança e o otimismo a seco mesmo. Agora pode parecer ruim, mas já vem o efeito positivo em forma de um novo tempo feliz (Nelson Locatelli/escritor)",
    author: "Nelson Locatelli, escritor",
    totalShare: null,
  },
  {
    text: "A vida tem quatro sentidos:\nAmar, sofrer, lutar e vencer.\nPor isso ame muito, sofra pouco, lute bastante e vença sempre.",
    author: "desconhecido",
    totalShare: 288,
  },
  {
    text: "Sejam debatedores (as) de idéias. Lute pelo que vocês amam.",
    author: "EvertonLuiz",
    totalShare: null,
  },
  {
    text: "O homem acredita mais com os olhos do que com os ouvidos. Por isso longo é o caminho através de regras e normas, curto e eficaz através do exemplo.",
    author: "Sêneca",
    totalShare: 164,
  },
  {
    text: "Todas as manhãs quando levanto dou a mim mesma uma injeção de otimismo, digo: Vai, vai ser trouxa na vida",
    author: "marcia lailin",
    totalShare: 2,
  },
  {
    text: "Acredite, lute se esforce e nunca deixe a fé",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "Lute de forma sutil e vença de forma honrosa .",
    author: "Willian Mateus",
    totalShare: null,
  },
  {
    text: "Lute para ter um sonho! Depois lute para alcança-lo!",
    author: "Israel Ziller",
    totalShare: 2,
  },
  {
    text: "Lute com disposição e acerte o alvo com determinação, usando sua força, sua destreza e sua confiança.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "'Ta difícil então lute porque vale a pena.''",
    author: "Daniel Neto",
    totalShare: null,
  },
  {
    text: "Não deixe que ninguém atrapalhe sua felicidade, corra atras, lute e mostre que você é muito mais do além que as pessoas podem imaginar.",
    author: "Diego Vieira",
    totalShare: null,
  },
  {
    text: "Não acredites nem nos que pedem emprestado, nem nos que emprestam; porque muitas vezes, perde-se o dinheiro e o amigo... e o empréstimo.",
    author: "William Shakespeare",
    totalShare: 465,
  },
  {
    text: "Otimismo é quando você coloca a música mais fofa no despertador. É a palma da mão do tempo mostrando que dias melhores virão.",
    author: "Fernanda Estellita",
    totalShare: 5,
  },
  {
    text: "Se você é bom em algo,lute por isto,não importa o que os outros digam,façam ou pensem,pois nunca tirarão isso de você.",
    author: "Marcelo Rodrigo Martins de Oliveira",
    totalShare: null,
  },
  {
    text: "Não deixe o fracasso roubar os teus sonhos e esterilizar tua vivacidade. Viva ! Lute contra as derrotas da vida. Seja e aconteça.",
    author: "Thayane Furtado",
    totalShare: null,
  },
  {
    text: "Tudo o que é demais não é bom,\npor exemplo... otimismo demais, cega.\nÀs vezes, não deixa ver a realidade da situação!",
    author: "A. Higa",
    totalShare: null,
  },
  {
    text: "Não pense em vencer... Pense como não ser vencido",
    author: "desconhecido",
    totalShare: null,
  },
  {
    text: "Nenhum vencedor acredita no acaso.",
    author: "Friedrich Nietzsche",
    totalShare: 118,
  },
  {
    text: "Otimismo, mesmo que hoje o\nsol não passe por aqui!",
    author: "Heredion Castro",
    totalShare: 0,
  },
  {
    text: "Acredite e lute por seus sonhos, pois às vezes você pode ter a chance de realizá-los, mas não contribuiu o bastante para ele virar real.",
    author: "Brunna Arievilo",
    totalShare: null,
  },
  {
    text: "Lute pelo o que te faz sorrir.Desista do que te faz chorar.",
    author: "Matheus araujo",
    totalShare: null,
  },
  {
    text: "Quando a gente vive com fé, otimismo e esperança, de onde menos se espera brota algo novo e lindo!\n\nNão desista e... espere!",
    author: "Rosane Fortes",
    totalShare: null,
  },
  {
    text: '"Otimismo é o imã da felicidade. Se você ficar positivo, coisas boas e boas pessoas serão atraídas para você."',
    author: "Mary Lou Retton",
    totalShare: null,
  },
  {
    text: "Pense em você ou pense nos outros, lute por você ou lute pelos outros mas, encontre-se, ou fique perdido para sempre.",
    author: "Ricardo De Brito",
    totalShare: null,
  },
  {
    text: "Acredite!\nInvente!\nEnfrente!\nLute!\nPodes tudo!\nJesus te Ama!",
    author: "Deusnete",
    totalShare: null,
  },
  {
    text: "Encare o presente com otimismo: sobrevivendo, dias piores virão!",
    author: "Alessandro Gil Jochem",
    totalShare: null,
  },
  {
    text: "Lute, insista , persista , mas nunca desista .",
    author: "LuuhColognesi",
    totalShare: null,
  },
  {
    text: "Se você começou não desista , recomece , tente , lute , pois um dia você vai conseguir tudo o que quiser , mais pra isso você tem que ter determinação...",
    author: "Aysha Melissa Retamiro",
    totalShare: null,
  },
  {
    text: "Não se abstenha da tua opinião, lute pelo o que acredita. Não seja figurante da tua história e sim o protagonista.",
    author: "Gluszczak,Fernando",
    totalShare: null,
  },
  {
    text: "Lute pelos seus ideais e pelo que você acredita.",
    author: "Dhener",
    totalShare: null,
  },
  {
    text: "Lute pelo que você acredita até o último momento e até as suas forças se esvaírem, mesmo que no final nada dê certo.",
    author: "Vitor Mestriner",
    totalShare: null,
  },
  {
    text: '" O sol do meu otimismo nunca se põe. "',
    author: "Beto Silveira",
    totalShare: null,
  },
  {
    text: "Lute bravamente pelos seus sonhos. Usufrua das suas conquistas. Mas nunca, jamais, perca a simplicidade.",
    author: "Helen Kit",
    totalShare: 5,
  },
  {
    text: "Na vida, otimismo é sinônimo de vitória.",
    author: "Gleisson de Freitas",
    totalShare: 2,
  },
  {
    text: '"Se num sonho acreditar, por ele lute e tente sem desistir, pois somente realizar-se-á tornando-o projeto."',
    author: "Antônio de Pádua Elias de Sousa",
    totalShare: null,
  },
  {
    text: "Não dê tempo ao tempo, lute pelos seus objetivos. O tempo pode ser nosso amigo, mas de uma hora para outra pode virar nosso inimigo.",
    author: "Alamberg Medeiros",
    totalShare: 2,
  },
  {
    text: "Lute diante das coisas mais dificeis de sua vida, com amor e sabedoria. Para que um dia, você possa olhar pra trás e dizer:valeu a pena lutar...",
    author: "Jhon Alex S Jesus",
    totalShare: null,
  },
  {
    text: "A VIDA E BELA , QUANDO VEMOS COM OLHOS DE OTIMISMO",
    author: "JOENE",
    totalShare: null,
  },
  {
    text: "Eu não desisti só estou deixando que a vida lute por mim, e que um dia mesmo só, você aprenda o que tentei ensinar quando estávamos juntos,amar!",
    author: "Williame Silva",
    totalShare: null,
  },
  {
    text: "nao importa o que as pessoas falem lute por isso.",
    author: "bianca",
    totalShare: null,
  },
  {
    text: "Que DEUS me ajuda para que eu não perca o OTIMISMO, mesmo sabedo que o futuro que nos espera pode não ser tão alegre.",
    author: "Rafinha Alves",
    totalShare: null,
  },
  {
    text: "Nem todo trabalho que nos é dado, é bem visto mas, todo trabalho realizado com entusiamo e otimismo será abençoado e inesquecível.",
    author: "Anoar Silveira",
    totalShare: null,
  },
  {
    text: "Lute pelo seu ideal e nunca perdera a luta",
    author: "Gabriel lázaro",
    totalShare: null,
  },
  {
    text: "Lute!\nAinda há vida,\nNão desista dos teus sonhos.\nErga os olhos ao céu e creia:\nQuem ele pintou tudo pode em sua vida realizar.",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "Nada melhor, que alimentar nossos dias,\ncom palavras de otimismo. Além de fazer um bem danado, acabamos contagiando outras pessoas também!",
    author: "Alexsandra Zulpo",
    totalShare: 2,
  },
  {
    text: "Sonhe, lute, busque, não desista de seus objetivos, quem acredita, sempre alcança por que quem tenta sempre consegue.",
    author: "mateus borges",
    totalShare: null,
  },
  {
    text: "Doses diárias de otimismo é a solução para muitos dos nossos problemas, e com um detalhe: não têm contraindicação.",
    author: "Celso Kasprzak",
    totalShare: null,
  },
  {
    text: "Jamais desista das pessoas que ama. Jamais desista de ser feliz. Lute sempre pelos seus sonhos. Seja profundamente apaixonado pela vida. Pois a vida é um espetáculo imperdível.",
    author: "Augusto Cury",
    totalShare: 483,
  },
  {
    text: "Se a vitória for impossível, lute pelo empate.",
    author: "Félix Tuyama",
    totalShare: 36,
  },
  {
    text: "A vida é curta de mais para viver e longa de mais para se passar sozinho, lute por amor para nunca se arrepender de sua vida ...",
    author: "LJSilva",
    totalShare: null,
  },
  {
    text: "Não desanime. Lute. Corra atrás do seu sonho. Enquanto você luta os problemas cairão no esquecimento e a solução aparecerá.",
    author: "Rita Padoin - Do Livro ''A Cor do Infinito",
    totalShare: null,
  },
  {
    text: '" Já temos muitos obstáculos e muitas pessoas fazem de suas vidas seu próprio obstáculo. Lute sem cessar."',
    author: "LuanGleisson",
    totalShare: null,
  },
  {
    text: '"Seja mais você, ame-se e valorize-se!! Lute, sonhe, conquiste e realize, mas se for preciso desista."',
    author: "Martha.Sil",
    totalShare: 9,
  },
  {
    text: "Resta-nos um opaco otimismo: olharmos para os microcópios da biogenética como uma saída salvífica",
    author: "voltairehodierno",
    totalShare: null,
  },
  {
    text: "A vida é como um game\nCheia de fases e etapas",
    author: "Tauz",
    totalShare: 5,
  },
  {
    text: "A imaginação é a principal fonte de otimismo",
    author: "Dafne Barbalho",
    totalShare: null,
  },
  {
    text: "Manter o otimismo, mesmo nas situações mais difíceis, é o segredo para afastar a tristeza e os aborrecimentos.",
    author: "Completude",
    totalShare: null,
  },
  {
    text: "Devo enfrentar com esperança essa loucura, não desando por falta de opção para lutar com otimismo e muita motivação;",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "“Sonhe, apesar das ilusões. Caminhe, apesar dos obstáculos. Lute, apesar das barreiras e, acima de tudo, acredite em você mesmo.”",
    author: "Larissa Guerreiro.",
    totalShare: 73,
  },
  {
    text: "Supere os desafios, bata recordes.\nO céu é o limite dos guerreiros.\nLute contra todas as suas limitações.",
    author: "Vagner Xavier",
    totalShare: 62,
  },
  {
    text: "Lute para que seus sonhos se tornem realidades !",
    author: "Rodrigo Neves",
    totalShare: null,
  },
  {
    text: "Quando substituímos o filosófico otimismo pela cristocêntrica fé, descobrimos a chave para tocar no impossível!",
    author: "Reinaldo Ribeiro - O poeta do Amor",
    totalShare: null,
  },
  {
    text: "Faça do hoje o seu dia mais especial... de coração radiante receba todas as maravilhas desta quinta-feira abençoada! Bom dia, Vida!",
    author: "Liahna Mell",
    totalShare: 35,
  },
  {
    text: "Lute pelo que é seu. A natureza somos nós...",
    author: "India Anara Delrey",
    totalShare: 2,
  },
  {
    text: "+ Ternura\n+ Empatia\n+ Amor\n+ Mansidão\n+ Otimismo",
    author: "Ademar Ribeiro",
    totalShare: null,
  },
  {
    text: "Uma mente geniosa é aquela que te incentiva a vencer",
    author: "Nino Milanêz",
    totalShare: null,
  },
  {
    text: "Nunca coloque em cheque uma relação por nenhum motivo,lute",
    author: "Joemar Rios",
    totalShare: null,
  },
  {
    text: "Na vida nada e dificil, apenas falta percistencia nas pessoas. Lute, precista e acredite, mais tarde veras que tudo e facil nesse mundo.",
    author: "Florentino Uatala",
    totalShare: null,
  },
  {
    text: "Encontre motivação e otimismo e descubra que muitas vezes ser feliz é só uma questão de mudar seu jeito de ver a vida e os problemas.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "Amo a vida... amo minha linda filha; meu amado marido e meus idolatrados pais... eles são o otimismo do meu dia a dia!",
    author: "jackluize",
    totalShare: 2,
  },
  {
    text: "Quando acreditamos que merecemos, nada é impossível.\nBusque seus sonhos, lute por seus objetivos e cultive seus desejos!!!",
    author: "Damaris Ester Dalmas",
    totalShare: null,
  },
  {
    text: "Levante, lute e faça!\nNada acontece sem força,\nsem princípios, sem vontade.\nDesculpas são brindes ao fracasso.",
    author: "Henrique Denner - Tosho Gakushu",
    totalShare: 2,
  },
  {
    text: "Enfrente seus medos, vá em frente, erga a cabeça e lute!",
    author: "Bruna Rafaela.",
    totalShare: null,
  },
  {
    text: "Há coisas em nossa vida que só cabem a Deus saber, quando revelamos nossos problemas a pessoas erradas corremos o risco de criar um novo problema....pense nisto......",
    author: "Cecilia Sfalsin",
    totalShare: 16,
  },
  {
    text: "Otimismo é a base para qualquer recomeço.",
    author: "Jeffrey Golves",
    totalShare: 2,
  },
  {
    text: "Lute, Ame e Viva ..\nLembre-se , Temos pouco Tempo!",
    author: "Rauny Joe",
    totalShare: 2,
  },
  {
    text: "OTIMISMO\n\nNunca veja os obstáculos tão inalcáçaveis ao ponto\nDe não caberem na ínfima porta dos seus sonhos.",
    author: "Vantuilo",
    totalShare: null,
  },
  {
    text: "Não lute! Saiba que a vitória pode ser alcançada de qualquer forma, quando se tem a decência de saber os motivos da escolha",
    author: "Ricardo Lima",
    totalShare: null,
  },
  {
    text: "Sem essa de até que a morte os separe...não existe um lugar? um paraíso? um céu? então, te quero por lá também.",
    author: "Ney Mombach",
    totalShare: 3,
  },
  {
    text: "Sonhe orando, lute acreditando e realize louvando.",
    author: "Élis Rocha",
    totalShare: null,
  },
  {
    text: "Alimente seu otimismo e não se deixe levar por pessoas negativas, lembre-se que positividade atrai coisas boas, sempre!(Priscilla Rodighiero)",
    author: "Priscilla Rodighiero",
    totalShare: null,
  },
  {
    text: "Lute. Tente. Arrisque. Corra. Mude. Sensualize. Insista. Melhore. Evolua. Cresça. Chore. Pense. Mas, nunca pare.",
    author: "Ariadne Motta",
    totalShare: 80,
  },
  {
    text: 'Oqe será que Charles Chaplin quer dize:\n"Perca com classe, lute com ousadia"?\nSimplesmente nunca desistir daquilo que se quer.',
    author: "Vitoria Cirilo",
    totalShare: 2,
  },
  {
    text: "Comecei meu dia com pensamento positivo trouxe comigo a fé e tudo deu certo.\nO otimismo estará sempre por perto.\nE meu coração sempre grato a Deus.",
    author: "Devanir Silva",
    totalShare: 0,
  },
  {
    text: "Quando quiser algo lute! Pois antes a tristeza de ter perdido, do que a de nunca ter tentado ou desistido.",
    author: "Leticia Gilbert",
    totalShare: null,
  },
  {
    text: "Ignore, Não chore pois deus esta Contigo.",
    author: "Sabrina Oliveira",
    totalShare: null,
  },
  {
    text: "Lute por uma causa. Apaixone-se. Escreva um livro.",
    author: "John Carter",
    totalShare: 2,
  },
  {
    text: "Todo o meu otimismo era uma ilusão.\n\n(Stanley)",
    author: "Magia ao Luar",
    totalShare: 2,
  },
  {
    text: 'LUTAR.\n"Lute por aquilo em que acredita e que tenha convicção. Se assim não for, será tempo perdido e de nada ter valido a pena de lutar".',
    author: "Márcio Souza",
    totalShare: 2,
  },
  {
    text: "A esperança é o otimismo da alma.",
    author: "Jackson Oliveira",
    totalShare: 2,
  },
  {
    text: "Quando sua mente acredita, seu corpo se prepara,Não desanime,reaja,\nLute com fé e sorria,flores para alegrar o seu dia",
    author: "maria de fatima",
    totalShare: null,
  },
  {
    text: "Acredite em você! Invista em você! Lute por você!\nE você vai chegar aonde sempre sonhou!!! E talvez até onde nunca sonhou em chegar!!!",
    author: "Damaris Ester Dalmas",
    totalShare: null,
  },
  {
    text: "Arrisque tudo quando o amor te pegar pela mão: ande na corda bamba, mergulhe no mar, lute com os leões, mas não se arrependa.",
    author: "Sidiney Breguêdo",
    totalShare: null,
  },
  {
    text: "Lute até o fim por algo que voce acredita!",
    author: "Ronaldo Souza",
    totalShare: null,
  },
  {
    text: "Pense em você ou pense nos outros,lute por você ou lute pelo os outros, mas encontre - se ou fique perdido pra sempre...",
    author: "S.O.J.A",
    totalShare: 2,
  },
  {
    text: "O otimismo é a saúde da alma...",
    author: "Roseli de Abreu",
    totalShare: null,
  },
  {
    text: "Lute diante das coisas mais difíceis da sua vida...para que um dia possa olhar para trás e dizer:\n-Foi difícil..Mas eu consegui!!!",
    author: "Desconhecido",
    totalShare: 25,
  },
  {
    text: "Para cada sonho e desafio que estejam nos teus planos para 2019, o NÃO já existe. Por isso lute pelo SIM, este depende você.",
    author: "Eliabe Serafim",
    totalShare: null,
  },
  {
    text: "Perca hoje e viva, lute amanhã e vença!",
    author: "Jhony Rodrigues",
    totalShare: 35,
  },
  {
    text: "Se esforce, lute e busque o seu melhor\nPois Deus está contigo pra te acompanhar\nSe algo não deu certo\nÉ por que tem coisa melhor vindo por aí",
    author: "Laila Cristina",
    totalShare: null,
  },
  {
    text: "Creio que a alegria e o otimismo andam de mãos dadas... Tente separá -los só pra ver o que acontece...\n\nmel - ((*_*))",
    author: "melania ludwig",
    totalShare: null,
  },
  {
    text: '"Lute por teu sonhos, pelos teus ideais. Não abaixa a cabeça diante de pessoas hipocretas que dizem que você não é capaz"',
    author: "Nathália Gomes",
    totalShare: null,
  },
  {
    text: "Pense primeiro,repense outra vez,e viva sua reflexão.",
    author: "Hytallo Maciel",
    totalShare: null,
  },
  {
    text: "Bom dia 02/11\nSe quiser manter seu otimismo a tona, precisa focar-se em sua determinação, potencial e fé. Essa fusão dá resultado.",
    author: "ALE VILLELA",
    totalShare: null,
  },
  {
    text: "° ೋ✿ Bonito mesmo é quando o coração sente a essência\nÉ quando a alma abraça\nE o sorriso brilha lindo iluminando os nossos olhos !",
    author: "Liahna Mell",
    totalShare: 7,
  },
  {
    text: "Na vida lute por alguma coisa, ou qualquer coisa ira te derrubar !!!\nUm homem sem objetivo, fé ou esperança sera so uma casca vasia sem alma !",
    author: "Denner Dangelo",
    totalShare: null,
  },
  {
    text: "Acredite em si. Engate a mente na sua boa estrela e reconheça que a sua luz interior o conduzirá sempre para cima e para a frente.",
    author: "Desconhecido",
    totalShare: 389,
  },
  {
    text: "Se um dia você se apaixonar e a razao pedir pra você desistir e o coraçao para você lutar, lute...\npois não é a razão que bate para você existir.",
    author: "Desconhecido",
    totalShare: 195,
  },
  {
    text: "Cada novo dia é uma dádiva especial para você ser feliz... receba... sorria... acredite... o dom da felicidade está dentro do seu coração.",
    author: "Jared Hassan",
    totalShare: 109,
  },
  {
    text: "Tem gente que não gosta do meu otimismo, mas eu sou corintiano, católico, brasileiro e ainda sou presidente do país. Como eu poderia não ser otimista?",
    author: "Luiz Inácio Lula da Silva",
    totalShare: 24,
  },
  {
    text: "Lute mesmo que ainda parecendo derrotado",
    author: "Luciano Junior",
    totalShare: 21,
  },
  {
    text: "Se for para alcançar o êxito na conquista de um objetivo não importa o tempo que leve, se for para ser virá até a pessoa.",
    author: "desconhecido",
    totalShare: 8,
  },
  {
    text: "O otimismo é uma disposição alegre que permite que um bule de chá assovie apesar de estar com água quente até o nariz.",
    author: "Desconhecido",
    totalShare: 5,
  },
  {
    text: "Sejas firme na fé, acredite nos seu sonhos; Lute por aquilo que faz bem.\nSer feliz é uma questão de escolha\nSejas positivo, fuja do que é negativo.",
    author: "Devanir V Silva",
    totalShare: 2,
  },
  {
    text: "Não fique aí parado(a) esperante que tudo venha chegar ate você, lute pelo seus sonhos e objetivos sempre.Pois nada chega ate a gente sem esforço.",
    author: "Julianna Machado.",
    totalShare: 2,
  },
  {
    text: "Para termos otimismo, é preciso de amor",
    author: "Neto",
    totalShare: 2,
  },
  {
    text: 'Não espere a vitória vir até você; Pegue a "espada" e lute...Só assim você será capaz de vencer e de conquistar o mundo.',
    author: "Cleonice Paulino",
    totalShare: 2,
  },
  {
    text: "Lute, siga em frente, tente não chorar, siga o seu coração, nunca olhe para trás, jamais desista, sempre siga em frente.",
    author: "Daniel Lima De Jesus",
    totalShare: null,
  },
  {
    text: "Sonhos\nSeus sonhos , sua vida!!!!\nLute!!!!!",
    author: "Raimundo Grossi",
    totalShare: null,
  },
  {
    text: "Seu sonho é algo que ninguém pode lhe tirar.\nLute! Vá em frente!\nCorra atrás dos seus sonhos e nunca deixe ninguém destruí-los!",
    author: "Ilana Alves",
    totalShare: null,
  },
  {
    text: 'Sonhos...\nAcredite, lute e conquiste!"',
    author: "Martha.Sil",
    totalShare: null,
  },
  {
    text: "Aspire o mundo e não seja aspirado por ele.",
    author: "Jeison Morais",
    totalShare: null,
  },
  {
    text: "LUTE POR SEUS DIREITOS, NUNCA RASTEJE POR MIGALHAS.",
    author: "RUBENS BRUCH",
    totalShare: null,
  },
  {
    text: "Quero agradecer aos meus patrocinadores:Fé em Deus,Esperança,Otimismo,e a Paciência....... por me sustentar até aqui",
    author: "Edelzia Oliveira",
    totalShare: null,
  },
  {
    text: "Assim como o mentiroso está condenado a não ser acreditado quando diz a verdade, é privilégio de quem goza de boa reputação ser acreditado mesmo quando mente.",
    author: "Miguel de Cervantes",
    totalShare: 76,
  },
  {
    text: "Ame para colheres amor, lute e venceras, bata e abriram-se-a portas, o sentido da vida também define-se pelas conquistas alcançadas!",
    author: "Rafael Katiavala",
    totalShare: 2,
  },
  {
    text: "Lute e acredite, Eis uma receita infalível",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "Aprendi a enfrentar tudo com otimismo, luto ate o fim e se eu cair 20 vezes vou levantar 21 com um sorriso no rosto e um brilho no olhar...",
    author: "Sylas Aguiar Maraiada",
    totalShare: null,
  },
  {
    text: "Lembre-se,Pessoas que nasceram para fracassar não precisam de nenhuma ajuda para perder,Lute para não ser uma dessas pessoas.",
    author: "Jefferson Souza",
    totalShare: null,
  },
  {
    text: "Ame,\nmesmo que sofra,\nmesmo que chore,\nmesmo que lute,\nPara que no final possa dizer...\nSofri, chorei, lutei, mas, amei!!!",
    author: "Anônimo",
    totalShare: null,
  },
  {
    text: "O otimismo pode nos levar a lugares que o medo jamais nos levaria. Ter medo é uma questão de sobrevivência e ser otimista é uma questão de coragem.",
    author: "Maria Angélica Carnevali Miquelin",
    totalShare: 35,
  },
  {
    text: "Então não desanime, lute, acredite, tenha esperança, e quando superar mais uma dificuldade, desfrute da vitória (...).",
    author: "Maycon Robert",
    totalShare: 26,
  },
  {
    text: "Sonhe alto amigo, mas lute pelo que você acredita, se não der certo, espere ser qualquer coisa no futuro, sendo trabalhador é o que importa.",
    author: "Jerónimo Virgílio.",
    totalShare: 2,
  },
  {
    text: "Faça planos e lute para realizá-los com o coração feliz. Acredite ainda mais no seu sucesso. Você pode e sempre será capaz de construir algo bem melhor para a sua vida (Nelson Locatelli, escritor)",
    author: "Nelson Locatelli, escritor",
    totalShare: null,
  },
  {
    text: "Não lute para TER, lute para SER!",
    author: "Élida Pereira Jerônimo",
    totalShare: null,
  },
  {
    text: "Cuidado com a melancolia em demasia ou o otimismo. Pessoas azedas e tristes são chatíssimas, as alegres demais, também.",
    author: "Swami Paatra Shankara",
    totalShare: null,
  },
  {
    text: "A democracia surgiu quando, devido ao fato de que todos são iguais em certo sentido, acreditou-se que todos fossem absolutamente iguais entre si.",
    author: "Aristóteles",
    totalShare: 380,
  },
  {
    text: "Lute até o fim por aquilo que for recíproco. Caso contrário mesmo com o coração apertado, deixe o vento levar... Isso não é desistência, isso é sabedoria.",
    author: "Natalia Felix",
    totalShare: 37,
  },
  {
    text: "Vá em busca dos seus sonhos, lute pelo pelos seus ideais. Você não precisa que ninguém acredite em você, confie em si mesmo, siga em frente de cabeça erguida e seja um vencedor.",
    author: "Prof Lourdes Duarte",
    totalShare: null,
  },
  {
    text: "O tempo é como um rio só corre em uma direção , por isso trabalhe, lute, mas não esqueça a família os amigos e a diversão, não passe pela vida terrena, viva ela!",
    author: "Fábio Cristiano Silva",
    totalShare: null,
  },
  {
    text: "Ressuscite os heróis que o mundo baniu e lute.",
    author: "Zoncro",
    totalShare: null,
  },
  {
    text: "O mais tolo de todos os erros ocorre quando jovens inteligentes acreditam perder a originalidade ao reconhecer a verdade já reconhecida por outros.",
    author: "Johann Goethe",
    totalShare: 787,
  },
  {
    text: "Eu sou forte......\n\nO forte chora , o forte sente dor, o forte sofre, o forte esmorece , o forte chega até a desfalecer na fé, mas o bonito de tudo é que o forte não desiste...",
    author: "Cecilia Sfalsin",
    totalShare: 107,
  },
  {
    text: "Grandes líderes mudam de estilo para levantar a autoestima de suas equipes. Se as pessoas acreditam nelas mesmas, é impressionante o que elas conseguem realizar.",
    author: "Sam Walton",
    totalShare: 54,
  },
  {
    text: "Lutador,\nLuta dor,\nVencedor,\nVence dor,\nLuta com fé,\nVença com paz,\nLute sem dor,\nVença com amor,\nSei que é capaz.",
    author: "Gabriel Almeida",
    totalShare: 15,
  },
  {
    text: "Tente, siga em frente.\nLute, não desista.\nMude, se aprimore.\nCuide, valorize.\nSonhe, persista.\nViva, insista.",
    author: "Proezo",
    totalShare: 7,
  },
  {
    text: "Onde Encontro Otimismo. Nas Mentiras Dessentes Realismo,Tento Viver Sem Almenos\nMencionar Futuro Você. Para Que Sofrer.",
    author: "Diego Oliveira",
    totalShare: 2,
  },
  {
    text: "Espere pouco, busque mais, persevere, lute, pois o caminho sempre será difícil mais quem define a vitória ou derrota somos nos mesmo.",
    author: "Chef Di Manno",
    totalShare: 2,
  },
  {
    text: "Olhe no espelho, meu bem. A motivação q vc precisa está la.\nLute! Mude! Não pare até que ele reflita o q antes estava dentro da sua mente.",
    author: "Rê Thaís",
    totalShare: 2,
  },
  {
    text: "Tente não se importar com o que as pessoas pensam... O importante é você acreditar naquilo que quer... E se sentir que realmente vale a pena, vá em frente e lute por seus objetivos!!",
    author: "Margarethe Megui Mezzaroba",
    totalShare: 2,
  },
  {
    text: "Em tempos de guerra nunca pare de lutar!",
    author: "Diego Elias",
    totalShare: 2,
  },
  {
    text: "BOM DIA AMIGOS!!!\nComeçando a segunda com otimismo\nMuita força de vontade\nE um bocado de dinamismo...\n\nmel - ((*_*))",
    author: "melanialudwig",
    totalShare: null,
  },
  {
    text: "Seu otimismo permitirá que mesmo diante das mais dificeis situações encontre um lado positivo e anime todos à sua volta.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "O dia dos namorados foi feito pra amar se voce ama alguem lute até o ultimo segundo por sua amada(o) se voce perder perca com dignidade !!",
    author: "Henrique Gelli",
    totalShare: null,
  },
  {
    text: "Otimismo é o brilho da fé, a força da esperança, e o desejo dos bons corações de que tudo tem seu lugar, e mesmo o mal se recolhe diante da positividade",
    author: "Rita Celi",
    totalShare: null,
  },
  {
    text: "A pior tragédia que existe não é lutar e não conseguir vencer, é parar de lutar por ter perdido uma única vez e lembrar disso pelo resto da vida.",
    author: "Géssica Silva Itaquera",
    totalShare: null,
  },
  {
    text: "Esperança, otimismo, perseverança, determinação... tudo isso a cada amanhecer. E se hoje não der certo? Amanhã acordo e tento novamente! Quem sabe um dia eu acerto!?",
    author: "Adriana Araujo Leal",
    totalShare: null,
  },
  {
    text: "Não abaixe a cabeça diante das provações,mas lute e vença.Deus te fez especial e mais do que vencedor independente da situação.",
    author: "Débora Carvalho",
    totalShare: 2,
  },
  {
    text: "Lute por tudo aquilo que acredita e conseguirá alcançar seus objetivos, não para mostrar aos outros, mas para legitimar a nobre pessoa que existe em você.",
    author: "Sergio Oliveira de Souza",
    totalShare: null,
  },
  {
    text: "Você sempre fala:\nLute por tudo aquilo que acredita.\nE agora? o que eu faço?..\nSe isso é tudo que acredito!.\nEu luto, ou desisto?\nMe diz!.",
    author: "Paulo Batista dos Santos",
    totalShare: null,
  },
  {
    text: "Ame!!!\nMesmo que sofra;\nMesmo que chore;\nMesmo que lute;\nPara que um dia possa dizer...\n...Sofri, chorei, e lutei...\nMas Amei!!!",
    author: "Mirley",
    totalShare: null,
  },
  {
    text: "Jamais desista, seja perseverante, lute, acredite, o alcance dos seus OBJETIVOS só sera possível com o fruto do seu trabalho.",
    author: "Joilton Nogueira da Rosa",
    totalShare: null,
  },
  {
    text: "248. A esperança é o nosso combustível para acreditarmos que a vida tem sentido. Lute diante da sua adversidade.\n\nReflexões Chá da Vida",
    author: "Hupomone Vilanova",
    totalShare: null,
  },
  {
    text: "Sabe quando você se sente esgotada,\nE não uma há uma gota de otimismo,\nHoje to assim seca.\nMais ao mesmo tempo,\nUm mar de inquietação.",
    author: "Juliana Serafim",
    totalShare: null,
  },
  {
    text: "Só mais um round!",
    author: "Rocky Balboa",
    totalShare: 72,
  },
  {
    text: "CS - Renovo minha alma, nas letras e nos versos, otimismo e sagaçidade, só se vê através dos olhos daqueles que conheçem à verdade da realidade.",
    author: "CaioCS",
    totalShare: null,
  },
  {
    text: "Não deixe que as pessoas tirem os sonhos de você,lute,acredite e tenha fé,porque se é pra ser seu,não há nada nem ninguém que roube de você a sua felicidade.",
    author: "Samira Lima",
    totalShare: null,
  },
  {
    text: "SE você algum dia, já pensou em desitir de tudo , não faça isso, lute por aqueles que depositaram todas sua sesperanças sobre você e amor pra você estar ali, mostre-se digno de confiança",
    author: "Isabela",
    totalShare: 2,
  },
  {
    text: "tudo o que somos e temos hoje é resultado daquilo que pensamos e sentimos no passado.\nnão lute contra a fome, mas a favor de que todos tenham o que comer.",
    author: "michel beckwith",
    totalShare: null,
  },
  {
    text: "Joga pra vida o teu otimismo.\nAcredita.!\nAproveita sem receio.\nViva e deixa o teu sol também brilhar lá fora.\n\n✻FranXimenes ✻",
    author: "FranXimenes",
    totalShare: null,
  },
  {
    text: "Dentro de todo otimismo existe uma certa convicção. Vivamos mais nossas certezas e menos nossas dúvidas que nos são traidoras.",
    author: "Leandro M. Cortes",
    totalShare: null,
  },
  {
    text: "Uma fez e outra tendo semear a paz e otimismo, digo que penso e nunca espero o melhor do ser humano por isso dia a dia se apego mais com deus.",
    author: "Diego Oliveira",
    totalShare: null,
  },
  {
    text: "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
    author: "Augusto Branco",
    totalShare: 1700,
  },
  {
    text: "Lute com honra e morra com honra.",
    author: "Raphael Michael",
    totalShare: null,
  },
  {
    text: "Com otimismo enxergamos o lado positivo de qualquer situação e com fé acreditamos, lutamos e conseguimos superar as piores situações.",
    author: "Desconhecido",
    totalShare: null,
  },
  {
    text: '"Desperta desse sono Profundo que te atormenta,que alimenta a dor.Lute, seja lá pelo que for, Lute." (Patrick 80)',
    author: "Patrick 80",
    totalShare: null,
  },
  {
    text: '"Nunca duvide da possibilidade de que o otimismo por desejo sempre é Educar as pessoas e as coisas, mas importante da nossa qualidade de viver”.',
    author: "Ewerton Santana",
    totalShare: null,
  },
  {
    text: "Lute, acredite, sonhe e vença !",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: '"Lute, Sonhe, e Acredite. E se por um acaso alguém duvidar do seu sonho, não deixe de sonhar. Apenas mude as pessoas que estavam próximas ao seu sonho!"',
    author: "Orlando Fermino",
    totalShare: null,
  },
  {
    text: "Jamais espere chegar no seu limite...\n\nDeixe algo guardado...\n\nem secreto... e lute,\nlute por você sempre, em primeiro lugar você...",
    author: "sonia solange da silveira Ssolsevilha poetisa do cerrado",
    totalShare: 3,
  },
  {
    text: "Cada vez que sorrimos, os nossos olhos irradiam purpurinas de otimismo e amor a quem com nosso olhar cruzar.\nVamos sorrir mais?\n\nmel - ((*_*))",
    author: "melanialudwig",
    totalShare: null,
  },
  {
    text: "'Que eu seja mais positiva, construtiva e intuitiva.\nO otimismo é um pequeno fio maior condutor para chegar ao exito.'\n\n—By Coelhinha",
    author: "(Abnizia) By Coelhinha",
    totalShare: null,
  },
  {
    text: "Quero, um dia, poder dizer às pessoas que nada foi em vão... que o AMOR existe, que vale a pena se doar às amizades a às pessoas, que a vida é bela sim, e que eu sempre dei o melhor de mim... e que valeu a pena!",
    author: "Adriana Britto",
    totalShare: 2300,
  },
  {
    text: "É um erro popular muito comum acreditar que aqueles que fazem mais barulho a lamentarem-se a favor do público sejam os mais preocupados com o seu bem-estar..",
    author: "Edmund Burke",
    totalShare: 280,
  },
  {
    text: "Levar insidiosamente o próximo a uma boa opinião de nós e, depois, acreditar piamente nessa boa opinião: quem consegue imitar nesta habilidade as mulheres?",
    author: "Friedrich Nietzsche",
    totalShare: 143,
  },
  {
    text: "Tudo na vida acontece em função do melhor! Acredite, a sua amargura de hoje é, com certeza, a sementinha da sua alegria de amanhã!",
    author: "Mariluci Carvalho de Souza",
    totalShare: 131,
  },
  {
    text: "Passa-se a acreditar naquilo que se repete frequentemente para si mesmo, quer seja verdade ou mentira. Isso passa a ser um pensamento dominante na mente.",
    author: "Robert Collier",
    totalShare: 90,
  },
  {
    text: "Ame, acredite, pense, grite, sonhe, conquiste, lute, batalhe, tenha força, tenha foco, tenha fé. Sorria e agradeça a Deus por mais um dia.",
    author: "Bruna Martins",
    totalShare: 86,
  },
  {
    text: "Transforme o trabalho em prazer.E seja um vagabundo feliz e produtivo.E lute para que ninguem te transforme num trabalhador triste e improdutivo.",
    author: "Moacir Soledade",
    totalShare: 57,
  },
  {
    text: "° ೋ✿ Ainda que tenha as mais difíceis e dolorosas provações, permaneço a minha fé e a minha esperança sempre vivas pois : Tudo posso naquele que me fortalece !",
    author: "Liahna Mell",
    totalShare: 35,
  },
  {
    text: "° ೋ✿ E que as coisas boas se multipliquem\nMais risos , mais alegrias , muita paz e harmonia\ntodo amor do mundo aos nossos corações!",
    author: "Liahna Mell",
    totalShare: 15,
  },
  {
    text: '"nunca duvide da possibilidade de que o otimismo por desejo sempre é Educar as pessoas e as coisas mas importante da nossa qualidade de viver"',
    author: "Lord Cury",
    totalShare: 3,
  },
  {
    text: "Plante apenas otimismo e amor, e com certeza amanhã colherá os frutos de alegria e felicidade.\nPois iremos colher tudo aquilo que plantarmos em nossa vida.",
    author: "Alberto Jorge Mesquita da Costa",
    totalShare: 2,
  },
  {
    text: 'Queria enxergar as coisas com mais otimismo, ser mais decidida, falar mais o que penso e não somente "empurrar o tempo com a barriga".',
    author: "Hosana Amaro",
    totalShare: null,
  },
  {
    text: "*Não fique parado esperando que as coisas caiam do céu, mexa-se, lute pelos seus objetivos, não conseguiremos nada se não agirmos... e rápido!",
    author: "Beth Albano",
    totalShare: 2,
  },
  {
    text: '..."Palavras de otimismo são antídotos para os males, os nossos atos e a nossa fé o remédio para a cura."...- Ricardo Fischer -.',
    author: "Ricardo Fischer",
    totalShare: null,
  },
  {
    text: "Para vencer na perfeição\nLute com coragem\nE determinação\nAcredite em si mesmo;\n\nPara se preencha\nO seu próprio\nCoração;",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "OTIMISMO\n\nOlhe pra mim\nSorria\nVocê está sendo filmado\nPelo sentimento amor\nPois estou disposto a lutar por você\nA qualquer custo que for",
    author: "Juhmar Divino",
    totalShare: null,
  },
  {
    text: "Lute, Persista, Conquista e Vença!",
    author: "Diego Vinicius de Morais",
    totalShare: null,
  },
  {
    text: "É impressionante como a vida pode ser paradoxal ! Para alguns, é vista com otimismo, esperança, imprescindibilidade... para outros, é um fardo difícil de carregar!",
    author: "IDOT",
    totalShare: null,
  },
  {
    text: "Se ainda for cedo pra desistir, lute, por tudo e por todos e não se renda por mais dura que seja a barreira o gosto da derrota ainda é mais amargo que o da vitória.",
    author: "Alonso Piccoli",
    totalShare: null,
  },
  {
    text: "Lute por um espaço no mundo",
    author: "Eduardo Cezario",
    totalShare: null,
  },
  {
    text: "Ter esperança e otimismo,\nestudar e trabalhar são chaves\npara o êxito e sucesso.\nPorém, acreditar que a vida\né fácil, é um engano!",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "Defenda o que acredita,\nLute pelo que sonha,\nGuarde seus princípios,\nSeja fiel a si mesmo.\n\nIsto se chama personalidade definida!",
    author: "Jones Donizette",
    totalShare: null,
  },
  {
    text: "Subestimamos ou Superestimamos um desafio: quando embriagados pelo excesso de otimismo ou quando angustiados pelo excesso de pessimismo.",
    author: "Opper Raijic",
    totalShare: null,
  },
  {
    text: "Lute sempre por algo que traga crescimento ou aperfeiçoamento, principalmente que te leve a Deus e ao céu, não simplesmente por vaidade ou status.",
    author: "Ailton Nascimento",
    totalShare: null,
  },
  {
    text: '"Feliz daquele que vê\nazul num dia qualquer.\nA vida, em resposta ao\nseu otimismo, concede-lhe\nsorrisos largos e céus coloridos."',
    author: "Lavínia Lins",
    totalShare: null,
  },
  {
    text: "Lute incessantemente pelos seus sonhos, supere-se, arrisque, mas quando alcançar seu objetivo, lembre-se do preço de continuar no pódio.",
    author: "Cotidiano Filosófico",
    totalShare: 45,
  },
  {
    text: "Não se perca na frustração da não realização de seus sonhos. Lute, vá adiante. Sonhe, e entenda que sonhos que se sonha é visto pelo divino. Viva feliz!",
    author: "W.Ercya",
    totalShare: 16,
  },
  {
    text: "Sonhe, lute e agradeça!",
    author: "Conquista de Valor",
    totalShare: 15,
  },
  {
    text: "Não confunde otimismo com idiotice. Só quem age pode se nutrir de esperança. Quem conforma com o que o não esperou não é resignado. É um covarde.",
    author: "Charles Canela",
    totalShare: 2,
  },
  {
    text: "Lute por sua felicidade, pela não falência de sua vida, por sua família e amigos. Lute pela empresa que trabalhe, porque dela vem o sustento de você e dos seus.",
    author: "Mestre Ariévlis",
    totalShare: 2,
  },
  {
    text: "ame...\nmesmo que sofra\nmesmo que chore\nmesmo que lute\npara que no final\npossa dizer...\nsofri,chrei,lutei,\nmas\nAMEI!!!!!!",
    author: "INGRID MEDEIROS",
    totalShare: null,
  },
  {
    text: "Não criem expectativas naquilo que não podes conquistar,mas lute desesperadamente para conquistar aquilo que verdadeiramente queres...(Azevedo Silva).",
    author: "Azevedo Silva",
    totalShare: null,
  },
  {
    text: "Lute para ser um campeão!",
    author: "Iury Marcelo",
    totalShare: 2,
  },
  {
    text: "Não deixe seus sonhos desfalecerem, lute por eles, acredite mais em você e confie na sua capacidade de superação. Deus te fez um vencedor; creia Nele e no Seu poder...",
    author: "Edna Andrade",
    totalShare: null,
  },
  {
    text: "Para você vencer a dor, sorria, lute...para não perder a felicidade, não deixe se levar pela ilusão. Seja firme, forte...porque se você cair, só você pode se levantar.",
    author: "Daniela Santos",
    totalShare: null,
  },
  {
    text: "Momento de reflexão:\nIncentivo dado, decisão tomada com otimismo e motivação, mas nunca esqueça dê dar valor a tudo, até mesmo às pequenas vitórias.",
    author: "Cassia Guimarães",
    totalShare: null,
  },
  {
    text: '"Lute por seu sonhos"',
    author: "Martina Stoessel",
    totalShare: 3,
  },
  {
    text: "Não fique dormindo deixando o tempo passar sem nada fazer, lute pelos seus sonhos, almeije à sabedoria e conhecimento, não deixe a vida passar em vão, seja a mudança que voçê quer.",
    author: "Ricardo Rodrigues",
    totalShare: null,
  },
  {
    text: "Terça feira\n\nVamos tecer uma terça de alegrias com os fios dourados do otimismo! (outros bons fios se entrelaçam e se ajustam).",
    author: "Rayme Soares",
    totalShare: null,
  },
  {
    text: "Sonhe,lute e realize-o .",
    author: "Maroka.",
    totalShare: null,
  },
  {
    text: "Mais vale a lágrima da derrota,do que a vergonha de não ter lutado.Por isso lute por tudo aquilo que sonhastes,mesmo que te custe uma lágrima derramada!!!",
    author: "MonroeSy",
    totalShare: null,
  },
  {
    text: "Quero paz. Quer guerra? Lute contra o frio, contra o desamor, contra a injustiça... Mas jamais contra teus semelhantes ou contra teus objetivos.",
    author: "Carol Gray",
    totalShare: null,
  },
  {
    text: "A dor passa\nO amor decepciona\nA vida nos ensina\nO otimismo ajuda\nOs amigos somem\nA família ajuda\nE a única coisa que a gente faz é amar a si mesmo",
    author: "Zilda Roque turbiani",
    totalShare: 0,
  },
  {
    text: "Um propósito para amanhã?\nVamos espalhar flores\nDe carinho\nDe bondade\nDe gratidão\nDe otimismo\nDe alegria\nDe amor...\nmel - ((*_*))",
    author: "melanialudwig",
    totalShare: null,
  },
  {
    text: "Por um mundo onde a humildade e o otimismo sejam moedas de troca, tornando o egocentrismo e o pessimismo blasfêmias inteiramente repudiada.",
    author: "Amanda N. S. Moraes",
    totalShare: null,
  },
  {
    text: "Um espírito renovado se percebe quando o otimismo toma conta de tudo.\nquando se acorda com vontade de viver o hoje melhor que ontem;\nquando tudo que nos acerca é visto com bons olhos.",
    author: "Devanir Silva",
    totalShare: null,
  },
  {
    text: "Sonhe, lute, corra atrás, insista, persista, acredite!!!\nDe tanto insistir, até água mole em pedra dura tanto bate até que fura.",
    author: "Tukley",
    totalShare: null,
  },
  {
    text: "Lute, acredite, vença e siga",
    author: "Risia Brenda",
    totalShare: null,
  },
  {
    text: "Seja feliz... abrace com alegria o dia especial que é hoje... é único... é um presente de Deus preparado com o mais puro e sincero carinho para você...",
    author: "Jared Hassan",
    totalShare: 176,
  },
  {
    text: "Acredite no seu sonho, lute por ele, e quando tiver a oportunidade aproveite como se fosse um momento único em sua vida, e, acredite, ele pode não ser único, mas vai ser inesquecível.",
    author: "Heitor Levinski",
    totalShare: 54,
  },
  {
    text: "Quero que lembre quem você é, apesar de todas as coisas ruins que estão acontecendo com você. Porque essas coisas ruins não são você. São apenas coisas ruins que aconteceram com você.",
    author: "Colleen Hoover",
    totalShare: 21,
  },
  {
    text: "Se o inimigo for mais forte que você, fuja! Se ele te alcançar, lute! Se ele vencer, não se sinta culpada! Levante-se e esconda-o, onde jamais possa ser encontrado!",
    author: "Gina",
    totalShare: 21,
  },
  {
    text: "Se você tem um sonho, lute por ele, mesmo que todos te chamem de louco, sonhador e tentem te impedir de realizá-lo. Afinal, o sonho é teu, e o único que deve acreditar nele é você.",
    author: "P.C Brunório",
    totalShare: 20,
  },
  {
    text: "Nascemos para vencer, por isso lute pelos seus sonhos. Enquanto houver vontade de lutar haverá esperança de dias melhores. Lute bastante e vença sempre!",
    author: "Prof lourdes Duarte",
    totalShare: 17,
  },
  {
    text: "Pedir desculpas apenas\nse desfaz daquela culpa.\nPedir perdão é a ação,\nfazendo toda mágoa cair\nno esquecimento, e começar\ndo zero.",
    author: "Francine Friedrich",
    totalShare: 16,
  },
  {
    text: "Nunca despreze sua vida, lute com garra e determinação.\nNunca esqueça suas origens.\nSomente assim deixara para suas próximas gerações belos exemplos a serem seguidos.",
    author: "Gislene Pascutti",
    totalShare: 15,
  },
  {
    text: "Faça hoje, lute hoje, acerte hoje, erre hoje, sorria hoje, chore hoje, arrisque hoje, se declare hoje, ame hoje, seja feliz hoje , não deixe nada pra amanha , viva o hoje, pois o amanha talvez não venha",
    author: "Deyvid Dias",
    totalShare: 14,
  },
  {
    text: "O cristianismo foi pregado por ignorantes e acreditado por sábios. O fato da sua instituição é humanamente impossível; logo, essa religião é divina.",
    author: "Xavier Maistre",
    totalShare: 12,
  },
  {
    text: '"Quer ser feliz? Então compreenda de uma vez por todas, enquanto tiver e cultivar expectativas na vida, estará indo em direção contrária."',
    author: "Belcrei",
    totalShare: 7,
  },
  {
    text: "Não importa o quanto você lute, você cai. E isso dá um medo dos infernos. Há uma única coisa boa nessa queda-livre. Ela é uma chance que você dá aos seus amigos de lhe ampararem",
    author: "Meredith Grey",
    totalShare: 6,
  },
  {
    text: "Lute pela sua felicidade, ama quem te ama.\nQuanto ao resto, bom, ninguém nunca precisou de restos para ser feliz. Basta que lute e aguarde um novo amanhecer.",
    author: "Pâmela Rugoni Belin",
    totalShare: 3,
  },
  {
    text: "Vou te contar um segredo... ainda há tempo para ser muito... muito feliz... viva... ame com toda intensidade deste seu coração magnificamente lindo...",
    author: "Jared Hassan",
    totalShare: 3,
  },
  {
    text: "Lute todos os dias constantemente pelos seus sonhos,ninguém nunca conseguiu realiza-los esperando sentado em casa que batesse na sua porta.",
    author: "Roni Santos.",
    totalShare: 2,
  },
  {
    text: "Nosso coração é jóia em lapidação. Encha-o de otimismo e bondade, amor e caridade. Ele rapidamente irá se transformar em diamante precioso enfeitando sua alma.",
    author: "Mirna Rosa",
    totalShare: null,
  },
  {
    text: "Sonhe seus sonhos e acorde para realizá-los...\nDesate os seus medos e lute como um gladiador...\nPorque a vitória só é dada a quem a merece e não a quem deseja...",
    author: "Julio Aukay",
    totalShare: 2,
  },
  {
    text: "Lute meu amigo você não pode desistir Deus esta do teu lado te ajudando te fortalecendo Ele acredita em você Ele bem sabe que você pode sair dessa basta perseverar. Você é vencedor acredite não pare de lutar.",
    author: "Vanderlei G Alves",
    totalShare: 2,
  },
  {
    text: "Em um aniversário de amigos é uma excelente oportunidade para trazer uma mensagem de otimismo, ensinando ao aniversariante como ser padrão dos fiéis.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "Otimismo tenho de sobra para usar com quase todo mundo, menos comigo mesma. incrível essa capacidade humana de querer ajudar ao outro sem saber ajudar a si mesmo.",
    author: "letys",
    totalShare: null,
  },
  {
    text: "Não reclame, lute!",
    author: "Allan Garrido",
    totalShare: null,
  },
  {
    text: "Aguarde a hora certa, o momento oportuno. Lute e trabalhe continuamente sem desanimar, até seu momento acontecer, pois ele virá! Na verdade, chegará mais cedo do que o esperado!",
    author: "Bispo Rodovalho",
    totalShare: 7,
  },
  {
    text: "Se é pra agir, aja!, se é pra lutar, lute!, se é pra viver, viva!, mas quando você achar que é a hora de desistir... não desista! é sinal que você já está bem perto da vitória.",
    author: "Vandson Silva",
    totalShare: 2,
  },
  {
    text: '"Ainda que a vida te bata mais e mais, você rebaterá ainda mais forte, lute, viva, sonhe, o que te faz o melhor, brota de dentro de ti e atinge o mundo".',
    author: "Miqueias Alves",
    totalShare: 2,
  },
  {
    text: "Lute pelo seu Amor.",
    author: "Douglas Ferrari - Médico Intensivista e Humanista",
    totalShare: null,
  },
  {
    text: "Boa Noite.........\nQuando tudo parece estar ao contrário, na verdade é quando coloco mais otimismo, fé e esperança para cumprir meus objetivos metas e realizações.",
    author: "ALE VILLELA",
    totalShare: null,
  },
  {
    text: 'Cuidado para que o otimismo e a esperança não te faça confiar demais no que ou em quem não se deve. O famoso "vai dar certo" talvez não passe de uma ilusão.',
    author: "Vando Lima",
    totalShare: null,
  },
  {
    text: "Sonhe, lute, conquiste.",
    author: "Lucas Iori",
    totalShare: 2,
  },
  {
    text: "lute,conquiste,busque seus objetivos,mas nunca deixe que ninguém diga que você não consegue que você é um covarde... você NÃO é um covarde você é melhor do que isso",
    author: "Guilherme Jordão",
    totalShare: null,
  },
  {
    text: "O otimismo é um sentimento revolucionário\nquando induz à consciência do ambiente e à\nconsciência do que se é, pois assim se pode tanto avaliar o que está ocorrendo, quanto crescer.",
    author: "Tom Cruise",
    totalShare: null,
  },
  {
    text: "Quem se enche com otimismo, trás pra si coisas maravilhosas, basta ter paciência e determinação, além do ingrediente da fé para dar um melhor sabor da vitória de sua vida.",
    author: "Sergio Paixão",
    totalShare: null,
  },
  {
    text: 'O sonho e a fé quando juntos, caminham no terreno do improvável...Já o objetivo e o otimismo quando juntos, podem transformar o "improvável" em factível.',
    author: "Moacir Soledade",
    totalShare: null,
  },
  {
    text: "Sonhe, apesar das ilusões. Caminhe, apesar dos obstáculos. Lute, apesar das barreiras e, acima de tudo, acredite em você mesmo guerreiro porque a batalha está só começando e a GUERRA não termina nunca!.",
    author: "Jean Bezerra",
    totalShare: null,
  },
  {
    text: "Se começou em Deus, lute para que permaneça nele... Pois o que começa em Deus e permanece em Deus é para sempre! Saiba viver, esperar, acreditar... Isso sim é amor de verdade...",
    author: "Patricia Felix",
    totalShare: null,
  },
  {
    text: "Se você quer realmente algo de verdade,corra atrás não se envergonhe do que vai acontecer ,lute vá em busca de seu objetivo antes que seja tarde demais ai se envergonhe por não ter feito nada .",
    author: "Rodolfo nolli",
    totalShare: 2,
  },
  {
    text: "Viva a vida com otimismo e determinação. Otimismo em valorizar os pontos positivos e esquecer os negativos. Determinação para buscar sempre o melhor que a vida te oferece.",
    author: "Damião Maximino",
    totalShare: 0,
  },
  {
    text: "Ao invés de se lamentar pelo que não conseguiu, lute, siga outro caminho e a sua batalha por dias melhores, mostrará que é o melhor para ser feliz e alcançar seis ideais.",
    author: "Prof lourdes Duarte",
    totalShare: null,
  },
  {
    text: "Que sejam verdadeiras mesmo que não seja fácil. Deseje e lute com tudo. fácil é somar um mais um. verdadeiro é o ar que você não vê mas é verdadeiramente essencial a sua vida.",
    author: "Mestre Ariévlis",
    totalShare: null,
  },
  {
    text: "Lute por aquilo que você acredita. Se os insetos da vida, criticarem você deixe que o tempo responda a eles. Quem critica os outros dão um passo para o fracasso e um dia cairá no abismo.",
    author: "Maycon Oliveira",
    totalShare: null,
  },
  {
    text: "Guarda em seu coração as alegrias que chegam de mansinho e iluminam toda a sua caminhada.\nQue estas bênçãos fiquem para sempre gravadas em sua alma!",
    author: "Liahna Mell",
    totalShare: 17,
  },
  {
    text: "Não queria as coisas fáceis, lute pelas difíceis, pois tudo que vem fácil vai rápido, e aquilo que se demora adquirir, não irá embora tão facilmente, verá que vai valer mais a pena.",
    author: "Israel Moreira",
    totalShare: 2,
  },
  {
    text: "Lute ou morra.",
    author: "Dom Lorenzo Scupoli",
    totalShare: null,
  },
  {
    text: "Seja o calor que o frio teme se deparar,\ndeixe o abraço te acalentar e o otimismo ser seu mapa no caminho onde andas perdido mas teima em continuar!",
    author: "Thiago Limano",
    totalShare: null,
  },
  {
    text: "Até que o sol não brilhe, ascenda uma vela. O fim justifica o meio. Agradeça. Ore. Lute. Acorde. Levante. Force um sorriso. Aprenda a lidar com a dor. Forje um gladiador dentro de si.",
    author: "Leonardo Beraldi",
    totalShare: 2,
  },
  {
    text: "❝ ...que todo otimismo...que a fé... a esperança e o amor... sejam as bençãos divinas que escrevem a história maravilhosa da sua vida..... ❞",
    author: "Jared Hassan",
    totalShare: 2,
  },
  {
    text: "Lute pelo que você acredita e jamais permita que alguém destrua seus sonhos é necessário sonhar para viver e acreditar para fazer acontecer.\n\n\nFrase de Islene Souza\nConteúdo seguro",
    author: "Islene Souza",
    totalShare: null,
  },
  {
    text: "Lute com toda sua força por sua independência seja ela qual for, acredite em você e apenas em você, a vida costuma surpreender e às vezes as surpresas chegam de onde você menos espera.",
    author: "Reinaldo Vasconcelos Pereira",
    totalShare: null,
  },
  {
    text: "Vocês romantizam as coisas para parecerem menos dolorosas, otimismo não é sinal de superioridade, apenas mostra como você é satisfeito com o fracasso que circunda sua órbita.",
    author: "Eternall Pain",
    totalShare: 0,
  },
  {
    text: "Diante de tantos acontecimentos de seu ano, olhe para frente, lute com vontade, conquiste seus sonhos, vá até seus objetivos, tenha foco e não disperdício ! boas festas",
    author: "Lucas Lemos",
    totalShare: null,
  },
  {
    text: "O otimismo e a confiança na sua capacidade de executar qualquer função tornam maiores as chances de alcançar a vitória esperada. Realize com amor e dedicação.",
    author: "Rose Bona",
    totalShare: null,
  },
  {
    text: "Respeite apenas quem o respeita.\nLute por quem lutou por você.\nAme que o ama.\nViva com que vive com você.\nMais nunca perda a espera de encontrar uma alma gemia.",
    author: "marcosboniek",
    totalShare: null,
  },
  {
    text: "Toda mudança traz consequências dolorosas, mesmo assim ela é necessária. Não lute contra a mudança. Aceite-a com muita alegria e confiança. O resultado será sempre o nosso crescimento.",
    author: "Damião Maximino",
    totalShare: 2,
  },
  {
    text: "No fim das contas, o otimismo não é um sentimento oco. É um catalisador que instiga à persistência, nos estabiliza durante nossos desafios e alimenta a confiança de que podemos influenciar nossos arredores.",
    author: "Daniel Pink",
    totalShare: 0,
  },
  {
    text: "Lute, mesmo que a luta seja árdua, sonhe, mesmo que os sonhos sejam impossíveis, acredite, mesmo que você seja cético ao ponto de não ver que a vida é única e não cabe ensaio.",
    author: "Reinaldo Vasconcelos Pereira",
    totalShare: null,
  },
  {
    text: "Quando encontrares um verdadeiro amor,\nQue reciprocamente a ti está amando,\nLute por ela, mesmo sem força ou sem ego,\nSe for pra perder a luta, que morra lutando.",
    author: "Aysllan Ferreira",
    totalShare: null,
  },
  {
    text: "Quem sabe um dia eu ACERTO!\nEsperança, otimismo, perseverança, determinação... tudo isso a cada amanhecer. E se hoje não der certo? Amanhã acordo e tento novamente! Quem sabe um dia eu acerto!?",
    author: "Adriana Araujo Leal",
    totalShare: null,
  },
  {
    text: "Ame...\nmesmo que sofra,\nmesmo que chore,\nmesmo que lute,\npara que no final diga:\nsofri, chorei, lutei.",
    author: "desconhecido",
    totalShare: 74,
  },
  {
    text: "Sorria para a vida, diga não a tristeza, ultrapasse seus limites, vença suas dificuldades, agradeça a Deus por viver e tenha um lindo e doce DIA! Priscilla Rodighiero",
    author: "Priscilla Rodighiero",
    totalShare: 22,
  },
  {
    text: '“" De passageiro do barco da vida passe a ser capitão , lute pelo que acredita , mas com verdade ! Tudo na vida deve ser baseado na verdade , o que não é baseado não verdade não se sustenta "”',
    author: "Paulo Jordao",
    totalShare: null,
  },
  {
    text: "Em todas as situações, eleja o otimismo como primeira opção.\nPrefira ver o lado melhor em todos os momentos.\nViva como se a vida fosse teu maior presente, e ela é.",
    author: "Mirna Rosa",
    totalShare: null,
  },
  {
    text: "Um dia a vida me disse: ‘Vá em busca do que lhe pertecence, lute pelo o que é seu e por direito. Ela me ensinou a nunca abaixar a cabeça para os demais, e sempre seguir em frente de cabeça erguida.",
    author: "Talita S. Santos.",
    totalShare: null,
  },
  {
    text: "Dica de Hoje.....\n\nNão permita que a ignorância alheia, roube a delicadeza do seu sorriso e nem a sensibilidade do seu coração... isto é ter equilibrio, isto é ter pés no chão, isto é saber viver",
    author: "Cecilia Sfalsin",
    totalShare: 141,
  },
  {
    text: 'Não se engane, nenhuma história de amor tem final feliz...ninguém vive para sempre, aproveite intensamente o intervalo entre "era uma vez" e "fim".',
    author: "Ney Mombach",
    totalShare: 82,
  },
  {
    text: "Lembre-se sempre: Cada dia nasce de um novo amanhecer, e cada novo amanhecer traz uma nova oportunidade de recomeçar. Tenha uma Excelente Segunda-feira! (Priscilla Rodighiero)",
    author: "Priscilla Rodighiero",
    totalShare: 23,
  },
  {
    text: "OTIMISMO\n\nAlgumas derrotas em nossas vidas\nÉ como uma porta de larga entrada,\nQue ao se abrir dar guarida aos\nQue acreditam em um recomeço.",
    author: "Vantuilo Gonçalves",
    totalShare: null,
  },
  {
    text: "Você vê o que eles fazem com você?\nComo você deixa isso acontecer?\nLute pelo o que você acredita. Lute pela sua vida, filho da mãe, você precisa lutar pela sua vida. Não se censure, censura é pra politico.",
    author: "MyllaPayne",
    totalShare: null,
  },
  {
    text: "Vista-se a cada dia com otimismo e alegria, assim o seu\nestilo e a sua roupa terão o brilho e um “quê” de encanto\ne de magia que nunca sairão de moda.\n(Lorenzo Li)",
    author: "Lorenzo Li",
    totalShare: null,
  },
  {
    text: "Impossível é só uma palavra que usam com o objetivo de deter quem tem a ousadia de sonhar. Lute pelos seus sonhos, se você acredita que pode ou não pode alcançar algo, em ambas as opções você está certo.",
    author: "Diego Bagatini",
    totalShare: null,
  },
  {
    text: "Todos os carinhos são especiais quando são sinceros, são verdadeiros quando vêm da alma e refletem nosso bem maior: a amizade e o amor.",
    author: "Jared Hassan",
    totalShare: 78,
  },
  {
    text: "Por mais que tente, por mais que lute,\nnão consigo esconder os meus sentimentos.\nA dor que me percorre a alma é uma luta desigual\ncom a palavra que um dia alguém inventou e\nchamou de AMOR.",
    author: "Ricardo Baskaville Berenguer",
    totalShare: 69,
  },
  {
    text: "Eu comecei a acreditar que o mundo inteiro é um enigma, um enigma inofensivo que se torna terrível pela nossa própria tentativa furiosa em interpretá-lo como se ele tivesse uma verdade secreta.",
    author: "Umberto Eco",
    totalShare: 62,
  },
  {
    text: '"Não podemos mudar nosso passado nem prever nosso futuro, mas temos uma coisa a nosso favor; O presente. É nele que superamos o passado e construímos um futuro."',
    author: "Kassio Murta",
    totalShare: 21,
  },
  {
    text: "Que sejam dias de muitas alegrias, sorrisos e carinhos.\nQue todo amor nos contagie.\nQue toda paz nos habite.\nE que a nossa fé seja maior que todas as provações!",
    author: "Liahna Mell",
    totalShare: 15,
  },
  {
    text: "Lute, Levante\nE siga a diante\nNão espere\nque o acaso\nAconteça\nPlante a semente\nDepois regue\nE então, espere.\nQue por fim você colhe!\nOlhando sempre em frente",
    author: "Juliana Rossi Cordeiro",
    totalShare: 8,
  },
  {
    text: "Desfrute de cada momento da sua vida sem medo, não crie muitas expectativas e não lute por uma felicidade eterna. É melhor se surpreender, do que se decepcionar.\nProfª Lourdes Duarte",
    author: "Prof Lourdes Duarte",
    totalShare: null,
  },
  {
    text: "Os problemas sempre existirão. Se forem solucionáveis, temos de resolvê-los. Se não temos condições de resolvê-los, precisamos aceitar nossas limitações. Mas jamais devemos gravitar na órbita deles.",
    author: "Augusto Cury",
    totalShare: 6,
  },
  {
    text: "Não espere as coisas cairem do céu em suas mãos...\nCorra atrás, lute! Lute pelo que é seu e pelo que você julga ser certo.\nNão se acomode... se ponha a procurar suas metas!",
    author: "Clarissa Guerra Medeiros",
    totalShare: 2,
  },
  {
    text: "Qual fé, e que temperatura tem seu coração? Se acredita no amor, não deixe esfriar, lute, não esmoreça... porem, deverá na cautela vigiar e orar para não entrar em tentação...",
    author: "JMPessanha",
    totalShare: null,
  },
  {
    text: "O ânimo e o otimismo são capazes de trazer o gosto da vitória\nantes mesmo do início do objetivo pretendido;\nEles são os principais elementos na vida dos grandes vencedores.",
    author: "Jorge Tolim",
    totalShare: null,
  },
  {
    text: "O otimismo tem o poder magnético de atrair a felicidade.\nSe você pensa positivo, boas coisas e boas pessoas vão\naparecer em sua vida. Ser otimista diante de um problema\njá o torna um vencedor!",
    author: "desconheço autoria",
    totalShare: null,
  },
  {
    text: "A vida é uma peça teatral que não vós permite ensaios\nou vc decide ir a frente e ser uma estrela.\nOu vc fica na plateia , aplaudindo pelo\no esforço de outra pessoa ,\nque poderia ser vc!",
    author: "Por Nayr Ketlem Anselmo",
    totalShare: null,
  },
  {
    text: "Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior. Garra é ter consciência do presso que se pode pagar, é mesmo assim prosseguir em frente. Saber equilibrar essas três coisas é saber viver a vida buscando seus objetivos .",
    author: "Wender Dultra",
    totalShare: null,
  },
  {
    text: "Sou demasiado orgulhoso para acreditar que um homem me ame: seria supor que ele sabe quem sou eu. Também não acredito que possa amar alguém: pressuporia que eu achasse um homem da minha condição.",
    author: "Friedrich Nietzsche",
    totalShare: 857,
  },
  {
    text: "Não quero ser apenas o seu melhor amigo, quero poder ouvir suas frustrações e além de oferecer meu abraço, também te pegar no colo, te beijar e dizer que sempre estarei aqui, do seu lado.",
    author: "Ney Mombach",
    totalShare: 24,
  },
  {
    text: "DISTONIA\n\nDesabitado\nde sonhos\ne otimismo,\ndesligado\nda vida\ne de tudo,\ncircundado\nde ruínas,\ninerte,\napodrecia\nenclausurado\nno ostracismo.",
    author: "R.M. Cardoso",
    totalShare: null,
  },
  {
    text: "Lute, sonhe e acredite\nMuralhas podem ser derrubadas,\nExércitos podem ser vencidos,\nNada poderá impedir sua vitória,\nSe fizer da coragem sua companheira de jornada.",
    author: "Dark Poet",
    totalShare: null,
  },
  {
    text: "Se há algo que é muito valioso para você, conserve, lute, proteja e não perca. Faça o que for preciso! Porque conquistar é mais fácil do que Reconquistar, e manter, mais fácil do que reparar.",
    author: "Gustavo Lacerda",
    totalShare: null,
  },
  {
    text: "Olhe para frente\nViva constantemente\nSonhe e realize\nFaça de seus sonhos realidade\nLute e conquiste\nPersista e insista\nErre e Aprenda com seus erros.",
    author: "Nick Dias",
    totalShare: null,
  },
  {
    text: "Eu desejo que a sua alma tenha a paz que o seu coração precisa... que a felicidade esteja brilhando nos seus sorrisos... e que a doçura da vida seja plena em todos os seus dias.",
    author: "Jared Hassan",
    totalShare: 60,
  },
  {
    text: "Lute! Mas lute com coragem e não deixe se abater por pequenas coisas que tentam nos desestabilizar. A luta pode ser amarga como um fel, mas a vitória de quem luta com coragem e sabedoria é doce como um mel.",
    author: "CleberStatzmann",
    totalShare: 2,
  },
  {
    text: "Não acredito em sorte, acredito em mérito, se vc tem um sonho, lute por ele, acredite, NUNCA desista, humildade sempre, respeito, entregue a Deus. Vc vai merecer, todos nós merecemos.",
    author: "Matheus Costa",
    totalShare: null,
  },
  {
    text: "Precisamos manter o otimismo e a esperança, ouvir um ‘você consegue’ quando as coisas estão difíceis, fazem maravilhas com nosso ânimo!\nE vamos em frente, sempre!",
    author: "Isa Martins",
    totalShare: null,
  },
  {
    text: "Se os seus sonhos são grandes, lute por eles, pois desistir não é bom, acredite em você mesmo, mas sempre com a certeza de que Deus é maior que todas as coisas, e com Ele todos os sonhos perdidos se tornam sonhos renovados e realizados!",
    author: "Tarcísio Custódio",
    totalShare: 34,
  },
  {
    text: "Otimismo é quando, sendo primavera do lado de fora,nasce a primavera do lado de dentro.\n\nEsperança é quando, sendo inverno do lado de fora, a despeito dele brilha o Sol de verão no lado de dentro.",
    author: "Rubem Alves",
    totalShare: 4,
  },
  {
    text: "Há momentos agradáveis e desagradáveis na vida. Não lute contra a realidade, seja amigo. A aceitação é a melhor forma de auto-ajuda. A vida no presente, é o melhor caminho para um despertar espiritual.",
    author: "Mailon de lara vaz Schmitt",
    totalShare: 2,
  },
  {
    text: "O grande desafio para aquele que nasce no seio de uma família sofredora, é acender a luz do otimismo que existe dentro de cada um e acreditar que não existe falta de sorte, e sim desânimo de lutar.",
    author: "Aurea Gervasio",
    totalShare: 2,
  },
  {
    text: "Há em nós uma pequena chama,\ncujo nome é Otimismo,\nque precisa permanecer acesa,\na fim de manter aquecida a alma\npara enfrentar\nos invernos da desesperança.\nCika Parolin",
    author: "Cika Parolin 18 de abril de 2016",
    totalShare: null,
  },
  {
    text: "Lute e relute, busque a felicidade em um lugar desconhecido, onde mora a sua razão, que insiste em procurar na emoção uma explicação não tão lógica para suas escolhas.",
    author: "Reinaldo Vasconcelos Pereira",
    totalShare: null,
  },
  {
    text: "Não dê ouvidos a pessoas negativas. As neuroses de pessoas assim asfixiam a alma.\nLute pelos seus sonhos. E desistir? Nem pensar!\nAcredite primeiro que Deus é por você e depois acredite no seu potencial.",
    author: "Michele Dumont",
    totalShare: 103,
  },
  {
    text: "Jamais desista, seja perseverante, empreender é preciso, lute, acredite, o fruto do seu trabalho resultará em vitória pelo alcance dos seus objetivos.",
    author: "Gil Nunes",
    totalShare: 9,
  },
  {
    text: "lute para ter inteligencia do que conhecimento. pois a inteligencia é a capacidade que o Homem tem para resolver teus problemas Em qualquer situação. Já o, conhecimento é estatico",
    author: "jahar",
    totalShare: 2,
  },
  {
    text: "Eu te desejo uma doce tarde!\nRecheada de surpresas,\nRepleta de paz, cheia de\nalegria e otimismo, para\nque assim, voce possa vencer\nas poucos horas do dia que\nainda faltam.\nBoa Tarde!",
    author: "Priscilla Rodighiero",
    totalShare: null,
  },
  {
    text: "Se possui algum sonho, alguma vontade, lute, porque só seu esforço te levará ao êxito. As pessoas ao seu redor, salvo exceções, só querem tua derrota. Supere-os e garanta sua vitória.",
    author: "Gigas Bellator",
    totalShare: 2,
  },
  {
    text: "Cada um de nós têm a responsabilidade de impulsionar um olhar para o horizonte com otimismo e perseverança inabalável, cujo norte do sucesso resplenderá com os louros da vitória.",
    author: "Alexander Man-Fu",
    totalShare: null,
  },
  {
    text: "Aconteça o que acontecer, seja sempre você.\nLute pelos seus ideais.\nCorra atrás do seus desejos e realize-os.\nVerás que o troféu da sua vitória é o resultado da sua conquista.",
    author: "Cláudio M. Assunção",
    totalShare: 48,
  },
  {
    text: "Quando de outro se nutre\nsua infelicidade e pequenez\nToda batalha que se lute\nNão será vencida uma vez\nPois em toda luta\nSua força apequena\nE a verdade justa\nSurge serena",
    author: "Ricardo Sodré",
    totalShare: 2,
  },
  {
    text: "Humildade é minha primeira força. Escola preferida é a vida. Liberdade só no pensamento. Otimismo temos que ter. Inteligência é superficial. Sabedoria é sustentável. Amor é renovável.",
    author: "Heloisa Maria Perpétuo",
    totalShare: null,
  },
  {
    text: "Não espere de braços cruzados por mudanças. Lute, tenha fé e corra atrás do que deseja. Nada nem ninguém pode ser tão forte como seu pensamento. Ele sim pode ser forte o bastante, para mudar a sua vida.",
    author: "Gabriel Moreth de Souza",
    totalShare: 2,
  },
  {
    text: 'As pessoas costumam dizer "lute pelo o que você ama".Mas não lute,se esse amor ,desmanchar seu coração,aniquilar seus planos,devastar seu sorriso e abater o brilho do seu ohar.',
    author: "Danielle Gomez",
    totalShare: null,
  },
  {
    text: "Lute pelos seus sonhos, acredite que tem um Deus maravilhoso cuidando de todos. Retire os espinhos do caminho com fé. Finalmente, saindo deles descobrirás o quão maravilhoso é Deus. Não desista jamais!",
    author: "Prof Lourdes Duarte",
    totalShare: null,
  },
  {
    text: "Até onde abdicaria de sua realidade para conquistar seus sonhos? Quanto pagaria para tê-los em mãos? Seria capaz de deixar de ser tudo oq foi um dia para se tornar parte de algo q sempre quis?",
    author: "Yasmin Nicolle",
    totalShare: null,
  },
  {
    text: "° ೋ✿ Lindo fim de semana para você !\nPara você : uma dose extra de otimismo ,um carinho especial de amizade sincera e um sorriso radiante te contagiando de alegria!\n° ೋ✿ Liahna Mell",
    author: "Liahna Mell",
    totalShare: null,
  },
  {
    text: "Arrisque-se. Busque. Lute por aquilo em que acredita. Não espere que as coisas simplesmente caiam do céu. Percorra passo a passo o caminho da realização. A vida pertence a quem se atreve!",
    author: "Alexsandra Zulpo",
    totalShare: 2,
  },
  {
    text: "OTIMISMO.\nMárcio Souza.08.06.17\nOLHE SEMPRE PARA FRENTE, REALIZANDO O PRESENTE E COM OS OLHOS VOLTADOS AO FUTURO, PARA A CONCRETIZAÇÃO DE SEUS SONHOS PESSOAIS.\ntexto Marcio Souza.",
    author: "Marcio Souza",
    totalShare: null,
  },
  {
    text: "Lute por tudo o que acreditas não viu nada continue em frente todo esta dando volta siga o caminho esta escuro não tenha medo que ao amanhecer vai trazer um um belo sol para você por isso nunca desista.",
    author: "Rafael B.",
    totalShare: null,
  },
  {
    text: "Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu.",
    author: "Sarah Westphal",
    totalShare: 3400,
  },
  {
    text: "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?",
    author: "Fernando Pessoa",
    totalShare: 2600,
  },
  {
    text: "Pois todas as nossas misérias verdadeiras são íntimas e causadas por nós mesmos. Acreditamos erradamente que elas vêm de fora, mas formamo-las dentro de nós, da nossa própria substância.",
    author: "Anatole France",
    totalShare: 73,
  },
  {
    text: "Devemos semear otimismo e plantar a semente da paz e da esperança, ser dignos e fazer tudo com amor. Empenhar-nos a cada dia para sermos melhores, mesmo que os outros não reconheçam, pois bondade também se aprende.",
    author: "Prof Lourdes Duarte",
    totalShare: 34,
  },
  {
    text: 'Não desista,Lute!\nNão desanime,Batalhe!\nNão retraia,Avante!\nNão somos donos do mundo mas somos filhos do criador dele.\n" se Deus é por nós,quem será contra nós? "',
    author: "Anderson Cordeiro",
    totalShare: 23,
  },
  {
    text: "Atitude é uma escolha. Felicidade é uma escolha. Otimismo é uma escolha. Simpatia é uma escolha. Dar é uma escolha. Respeito é uma escolha. A escolha que você fizer, fará você. Escolha com cuidado.",
    author: "Roy T. Bennett",
    totalShare: null,
  },
  {
    text: "Você quer, então lute.\nVocê luta e cai, então levante.\nVocê levanta e cai,\nLevante-se outra vez.\n\nPersistência sempre.\n\nO esforço no presente trará vitórias no futuro.",
    author: "Lucas Mansueto",
    totalShare: 22,
  },
  {
    text: "Se o destino não te dá mais uma chance, não desista. Lute pelo que é seu, vença, pois os maiores vencedores são aqueles que vivem na pressão do dia a dia e pelo fim da tarde ainda tem forças para começar uma nova vitória.",
    author: "ÈlliBrito",
    totalShare: 19,
  },
  {
    text: "❝... A você uma noite linda ... um carinho trazendo paz ... e com harmonia agradecer por todas as bênçãos deste dia ... Esperança ... luz e fé ... e que o dia de amanhã venha abençoado de muitas alegrias ! ... ❞",
    author: "Jared Hassan",
    totalShare: 11,
  },
  {
    text: 'As pessoas so reconhecerão quem você é , quando você deixar o que elas querem que você seja e voltar a ser você mesmo.Querer agradar a todos é ignorar o que você tem de mais precioso... "A personalidade ".....',
    author: "Cecilia Sfalsin",
    totalShare: 7,
  },
  {
    text: '"Não esconda o coração que pulsa sem ter culpa, lute como briga, entenda a disputa. Com os pés na realidade, os mesmos que te seguem eterno aprendiz, corrige os erros e segue."',
    author: "Cal Will",
    totalShare: null,
  },
  {
    text: "Bom dia meus bons amigos!!!\nAcenda sorrisos\nAqueça corações\nSemeie sonhos\nSolte otimismo\nIncentive amigos\nInunde gratidão\nDissolva a dor\nDesperte amor...\n\nmel - ((*_*))",
    author: "melanialudwig",
    totalShare: null,
  },
  {
    text: "Menina, saiba de uma coisa... Não se importe com algo perfeito, apenas lute por sua felicidade e lembre-se que até nos contos de fadas as princesas passam por dificuldades até chegar ao seu final feliz.",
    author: "Laryssa Pinheiro",
    totalShare: null,
  },
  {
    text: "Não desista do que acredita, e nem discuta as razões pela qual batalha por isso! Apenas lute, e leve contigo o que for importante e lhe der forças. Muitas pessoas são exigentes e muito pouco presentes.",
    author: "Edmilson Silveira",
    totalShare: null,
  },
  {
    text: "Aflições vão e vem , mas o que determina nossa capacidade de supera -las é nosso otimismo, determinação e fé, erga sua cabeça , acredite e verá o quão forte você é e como as aflições não eram nada perante sua força!",
    author: "Wilma de Cassia Ribeiro",
    totalShare: null,
  },
  {
    text: "Não importa a dificuldade de lutar. Lute! Procure forças, sinta-se forte, não importa o tempo que dura sua luta, faça sua parte. Lute sabendo que no final a vitória sempre vem e quanto maior for a luta, maior será a sua vitória.",
    author: "Ana Meira",
    totalShare: 24,
  },
  {
    text: "Ninguém pode estragar o seu dia, ninguém pode tirar o seu sorriso, ninguém é forte o bastante pra te jogar no chão, ninguém, mas ninguém mesmo pode te parar, a não ser que você permita. Porque no coração que Deus está, o mal jamais prevalecerá.",
    author: "Cecilia Sfalsin",
    totalShare: 6,
  },
  {
    text: "Lute pelos seus ideais;\nTenha ideias e inove seus conceitos;\nSeja grato e eleve seus pensamentos;\nReflita e sinta paz;\nEncontre as respostas em suas reflexões;\nCrie soluções; você é capaz.",
    author: "Nara Nubia Alencar Queiroz",
    totalShare: 2,
  },
  {
    text: "Quem pesquisa autoria r.s.v\n\nTrata-se de uma administradora da página Caminho de Otimismo criada em março de 2013 para levar mensagens de otimismo, esperança e fé!\n(Rosângela Soares Valência)",
    author: "r.s.v",
    totalShare: null,
  },
  {
    text: "Não desista de você, lute contra a sua falta de fé, contra a sua falta de amor próprio, lute por tudo que é e por tudo o que pode ser. Lute por seus sonhos. Não espere o próximo trem, para saber qual a estação certa para realizar seus sonhos.",
    author: "Tatyane Nicklas",
    totalShare: null,
  },
  {
    text: "Não impota o que tenha acontecido, se levante e lute.. ta mal e tá no fundo do poço? eu já tive no subsolo do poço com um sorriso enorme no rosto.. a luta não acaba quando você perde, acaba quando você desiste!",
    author: "Augusto Cesar Muniz Mota",
    totalShare: null,
  },
  {
    text: "As coisas são do jeito que são, você acaba se adaptando a situação, mas quando tiver de lutar LUTE, mas saiba a hora de recuar, pois quem vence a guerra não é quem sempre ataca, é quem pensa na estratégia e faz sem erro.”",
    author: "Vivian Schunke",
    totalShare: null,
  },
  {
    text: "Sonhe, acredite, pense, lute, levante-se e aja. Apenas não desista. A vitória requer suor e esforço. A única coisa que não requer esforço, é a ilusão. E nesse mundo, estão todos fartos de se iludir.",
    author: "288N",
    totalShare: null,
  },
  {
    text: 'NÃO ESPERE...BUSQUE\n\nNÃO SONHE...LUTE\n\nNÃO PESSA...DÊ\n\nNÃO PARE...CORRA\n\nNÃO RESPONDA...PERGUNTE\n\nNÃO JULGUE...AME\n\nNÃO ESQUEÇA...TENHA SEMPRE DEUS NO CORAÇÃO"',
    author: "JULINHA",
    totalShare: 2,
  },
  {
    text: "Que cada dia\nda nossa semana\nseja regado com gotas\nde fé, otimismo,\nesperança e sabedoria.\nPara que os obstáculos que\nencontrarmos pelo caminho\nnão roubem nossos\nsorrisos e nossa alegria\nde viver.",
    author: "Sueli Matochi",
    totalShare: null,
  },
  {
    text: "Nau se cale duante a guerra mais ´proteste.para que vc venha amar\nJa mais se cale lute para vencer nau desita\nSe numa gura mandarem vc recuar siga enfrente porque vencerar\nDurante uma guerra nau e valo por nada",
    author: "Flaviane castro",
    totalShare: null,
  },
  {
    text: "Oração de Otimismo\nSei que tudo é uma aprendizagem, minha dor serve para me fortificar como um embalsamo, minha angustia passará e logo o céu vai clarear, tudo posso naquela que me fortalece, filosofia.",
    author: "Luan Pensador",
    totalShare: null,
  },
  {
    text: "Gosto de gestos simples e de carinhos sinceros... mesmo que distantes... amizades verdadeiras são sempre especiais... e com a intensidade das palavras tocamos os corações mais puros...",
    author: "Jared Hassan",
    totalShare: 80,
  },
  {
    text: "Que o nosso dia seja abençoado... que nenhum medo alcance os nossos corações... que a esperança seja forte... e que a fé seja inabalável... quebrando todas as barreiras das dificuldades.",
    author: "Jared Hassan",
    totalShare: 75,
  },
  {
    text: "Seja uma pessoas simples, mas seja quem realmente você quer ser, livre de opiniões alheias, livre de imposições, livre de modismo, livre de certas inquietações , livre de prisões.... seja aquela pessoa que vive por merecer e não para que o outro venha te perceber",
    author: "Cecilia Sfalsin",
    totalShare: 21,
  },
  {
    text: "Para que nada seja em vão, só\nlute pelo que mereça a sua dedicação\ne o seu esforço !\n\n\n                ",
    author: "Emile Quéssia",
    totalShare: 13,
  },
  {
    text: "Se quer algo, corre atrás... Lute pelo o que você quer. Não fica sentado esperando essa historinha de destino. Realmente pode até ser o seu destino, mas você vai ter que batalhar por isso, nada vem de graça. E pode ter certeza, se veio fácil, também vai fácil.",
    author: "Hareeý Araújo.",
    totalShare: 3,
  },
  {
    text: "Aqueles frutos maduros que teu vizinho colhe às vezes a cantar, na certa custaram-lhe trabalhos penosos de alguém que sabia que nunca em sua vida os colheria, mas que nem por isso os deixou de plantar.",
    author: "Desconhecido - retirado da Bíblia do Otimismo",
    totalShare: 2,
  },
  {
    text: "Para mim o segredo do otimismo está na automotivação, uma pessoa para ser otimista precisa conhecer de fato seus valores e ter claros seus objetivos, assim conseguirá vencer qualquer barreira imposta pelas variáveis da vida.",
    author: "Tathiane PJ. Silva",
    totalShare: null,
  },
  {
    text: "Cultive uma atitude de felicidade. Cultive um espírito de otimismo. Caminhe com fé, se alegre com as belezas da natureza, a bondade das pessoas que você ama, o testemunho das coisas divinas que você carrega em seu coração.",
    author: "Gordon B. Hinckley",
    totalShare: 2,
  },
  {
    text: "• ೋ ✿ • Vista-se hoje de alegrias e otimismo , abuse da estampa da felicidade e sinta a alegria fluir . Que a delicadeza do carinho toque com doçura a sua alma e faça vibrar emoções lindas em seu coração! • ೋ ✿ •",
    author: "Liahna Mell",
    totalShare: null,
  },
  {
    text: "O mundo sempre vai dizer que você não é capaz, mas se você sonha lute para realizar. Os fracos somente observam a batalha dos fortes. Lembre-se, quando o mundo diz que você não vai conseguir, Deus te faz um vencedor! Depende de você. #bySauloRodrigo",
    author: "Saulo Rodrigo",
    totalShare: null,
  },
  {
    text: "Seja livre de espírito, busque a paz e todo e qualquer caminho que você trilhar será iluminado. Apesar das pedras e dos espinhos que estão por aí, a beleza da sua essência resplandecerá pelas estradas da vida.",
    author: "liberdade, otimismo, luz",
    totalShare: 21,
  },
  {
    text: "Uma lição valiosa de vida: aprenda com seu passado e lute pelo seu futuro sem deixar de aproveitar o momento presente. Um sábio aprende com seus erros e se mantém consciente em cada passo dado rumo ao seu objetivo.",
    author: "Bruno Marcussi",
    totalShare: 2,
  },
  {
    text: "Para vencer na vida lute, seja persistente, supere os obstáculos um a um, diariamente. Os problemas passam, mas desistir é para sempre. O mundo costuma ser cruel com aqueles que desistem, pense nisso.\nProfª Lourdes Duarte",
    author: "Prof lourdes Duarte",
    totalShare: null,
  },
  {
    text: "O problema do Ser Humano não é o Negativismo, mas sim o 'falso Otimismo'. Pensar: \"Tudo vai dar certo\", não por assim acreditar, mas pra se consolar previamente porque no fundo, não acredita que as coisas realmente darão certo no final.",
    author: "Priscila Arantes",
    totalShare: null,
  },
  {
    text: "Lute pelo que é seu, não deixe seus sonhos morrerem, mas deixem que brotem muito mais no seu coração, como o amor que se torna mais forte a cada dia.\nLembre-se nossos sonhos não morrem e nem desaparecem, só se renovam a cada dia assim como nosso amor.\nObrigado, Deus!",
    author: "WESF",
    totalShare: null,
  },
  {
    text: "F ale menos,\nE scute mais,\nL eia bons livros,\nI mite boas ações,\nC ultive o otimismo,\nI lumine a escuridão,\nD eseje o bem para todos,\nA legre-se com o êxito dos outros,\nD ê o melhor de si e\nE vite os excessos.",
    author: "desconhecido",
    totalShare: 149,
  },
  {
    text: "Seja humilde o bastante pra\nreconhecer seus erros, forte\no bastante pra enfrentá-los,\nsábio o bastante pra corrigi-los\ne inteligente o bastante pra\nsaber que é humano, sujeito\na erros e capacitado a começar\nde novo.",
    author: "Cecilia Sfalsin",
    totalShare: 66,
  },
  {
    text: "Não adianta lamentar os problemas da vida, o segredo do bem estar, está no quanto de amor e otimismo empregamos na retirada das pedras do caminho, sem nos deixar influenciar pela energia negativa. Pois hoje estamos aqui, porém amanhã quem sabe?",
    author: "Fábio Lopes Sampaio",
    totalShare: 2,
  },
  {
    text: "Tudo na vida que vem facil vai facil.. portanto lute pelos seus objetivos.\nNao deixe que pedras no caminho te façam desistir, mas use elas para construir sua fortaleza!\nAproveite enquanto há tempo e lute hoje, lute como se amanha fosse tarde pra lutar!",
    author: "Jordan de Brito Silva Oliveira",
    totalShare: null,
  },
  {
    text: "Realize mil atos de sucesso,ajuda, companheirismo, otimismo e não será lembrado ou reverênciado, cometa um único erro, e será crucificado eternamente, pois o ser humando esquece de quem ajuda mas lembra de quem erra.",
    author: "Yhulds Bueno",
    totalShare: null,
  },
  {
    text: "Um homem pode ser tão grande quanto ele queira ser. Se você acredita em si mesmo e tem coragem, determinação, dedicação, iniciativa competitiva e se você está disposto a sacrificar as pequenas coisas da vida e pagar o preço pelas coisas que valem a pena, isso pode ser feito.",
    author: "Vince Lombardi",
    totalShare: 50,
  },
  {
    text: "Não importa o quão desolador seja o sentimento de derrota. Não desista, siga em frente, faça com que essa força existente dentro de você o impulsione. Lute, entre em vias de fato com o seu orgulho, chore, sangre, mas não desista.",
    author: "Alamberg Medeiros",
    totalShare: null,
  },
  {
    text: "Lute, não desista! Está doendo? Aguenta! Você consegue! Nada é impossível. Lute mais! Lutar, como? Orando, jejuando, louvando e evangelizando.\n\nSeja como Jó, homem íntegro e reto, temente a deus e que se desviava do mal.",
    author: "Pr_pedro silva",
    totalShare: 2,
  },
  {
    text: "Não seja boba, moça. Amor se faz com amor, recalque se faz com ofensas. Lute por você, não deixe ninguém pisar no seu pé. Você é linda, linda mesmo. Amar significa aceitar os defeitos, se ele não aceita os seus, procure outro rapaz. Você merece algo bem melhor, eu garanto.",
    author: "Mithiane Cardozo Lins",
    totalShare: null,
  },
  {
    text: "Jamais desista da luta que te proporcionará alegria ao final... Lute com um sorriso nos lábios, pois não conheces a força que tens...\nApenas saiba do quanto és capaz de ser feliz para não dar o gosto a quem torce contra de sorrir primeiro que você;",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "... Que seja uma noite de descanso e paz ... abençoada de harmonia e tranquilidade ... sempre agradecendo as bênçãos e alegrias que fizeram deste dia muito especial ... toda serenidade de Deus ao seu coração ...",
    author: "Jared Hassan",
    totalShare: 26,
  },
  {
    text: "Viva, lute e vença.\nPersevere em manter a esperança no amanhã.\nEstimule o vigor e use toda esta energia, energia para amar e dar o seu melhor ao amanhecer.\nSeja, cresça e tenha a fé na certeza de que Deus tem o melhor para você!",
    author: "Marcos Vinícius Trindade - Pensador",
    totalShare: 2,
  },
  {
    text: "Se quer realmente alguma coisa , lute e corra atrás do que você quer sempre focado em seu objetivo , ..lute contra tudo que vier de obstáculo e dificuldade no seu caminho , seja humilde , mais ao mesmo tempo forte para que ninguém possa te pisar e pra nunca estar abaixo de ninguém' !",
    author: "Allan Felix de Queiroz",
    totalShare: null,
  },
  {
    text: "As melhores mensagens de otimismo, fé, confiança, altruísmo e tudo que se relaciona as vitórias cristãs estão inseridas na Bíblia, porque Deus descreve as necessidades dos homens em todos os níveis de sua vida terrena e espiritual.",
    author: "Helgir Girodo",
    totalShare: null,
  },
  {
    text: "Lute como um nobre guerreiro até o fim\nNunca se entregue perante a dor\nE nem se detenha perante nenhum obstáculo\nPois verdadeiro orgulho nem sempre está no objetivo alcançado\nMas sim na capacidade de tentar até conquistá-lo",
    author: "Tulio Magno",
    totalShare: null,
  },
  {
    text: "❝ ... nesta caminhada linda da vida .. que nada possa limitar meus passos ... que todas as dificuldades possam me ensinar a ter cada vez mais fé e mais esperanças ... pois nenhum mal pode ser maior do que os planos que eu sei que Deus tem para mim ❞",
    author: "Jared Hassan",
    totalShare: 29,
  },
  {
    text: "Um dos segredos da vida é acolher o que de bom ela apresenta.\nO otimismo é a alavanca para que nosso dia seja bom e produtivo.\nSe desejo um bom dia pra ti é que o meu começou bom.\nOs acontecimentos da vida são ensinamento para a própria vida.",
    author: "Devanir Silva",
    totalShare: null,
  },
  {
    text: "Otimismo\nDentro de cada um de nós existe um alguém adormecido querendo despertar.\nDesperta a bailarina, a equilibrista. o palhaço, o malabarista.Desperta o canto, o riso, a poesia, a fantasia, a razão que te faz viver.",
    author: "Cleuza Fernandes",
    totalShare: null,
  },
  {
    text: "Amanheça por dentro\ne por fora, acorde abraçado(a)\naos seus sonhos , vista-se de\nfé, calce as sandálias da\nesperança , se enfeite de\nforça , coloque um sorriso no\nrosto e va viver com gratidão\no dia lindo que Deus preparou\npra você.",
    author: "Cecilia Sfalsin",
    totalShare: 32,
  },
  {
    text: "Vitória\n\n\nSe estiver sem forças, lute,\nSe estiver sem fé, acredite!\nSe todos estiverem rindo de você, supere-se\nSe seus inimigos estão vencendo, surpreenda\nSe estiver com medo, enfrente\nSó vencemos o que enfrentamos!",
    author: "Vitor Rafael",
    totalShare: 32,
  },
  {
    text: "Aos meus inimigos eu deixo o meu melhor sorriso...\nPorque não existe melhor vingança para derrubar\num inimigo. A sua alegria, a sua felicidade\ne o seu sorriso são armas poderosas e devem ser o\nseu passaporte para sucesso.",
    author: "Priscilla Rodighiero",
    totalShare: 11,
  },
  {
    text: "O que é uma pessoa sem esperança? É alguém sem sonhos, sem ideais, sem futuro… É alguém sem otimismo, que não sente vontade de lutar. Quando não há esperança, o desespero ocupa seu lugar. O pensamento derrotista se apodera da pessoa e sobrevém o fracasso.",
    author: "Luelson Fienes",
    totalShare: 2,
  },
  {
    text: "O otimismo é um sentimento de poderosa força que a vida nos oferece pra nos ajudar na capacidade que temos de fazer o que é mau virar bom, o que é ineficaz e imperfeito, se tornar eficaz e perfeito.\n\nUm grande beijo em seu coração.\n\nPerazza.'.",
    author: "Luiz Fernando Perazza",
    totalShare: 0,
  },
  {
    text: "Não importa o quanto eu lute pelo seu amor.\nA verdade é que eu entrei nessa busca sem armas.\nApenas com o meu coração na mão.\nEu sempre soube que não iria ganhar,\nMas tive a esperança de que você notasse que na luta do amor não é necessário armas e sim um coração.",
    author: "David C. Haubert",
    totalShare: null,
  },
  {
    text: "Otimismo\n\nViva  com alegria e otimismo !!! . \nSei que não é fácil, mas passe a  ver somente o lado positivo   em tudo que acontece com você!!!!  Pense, olhe com olhar otimista !!! . Você verá que dará certo !!! \nProjete sempre para melhor aquilo que vc vê !!!!!!! ",
    author: "Raimundo Grossi",
    totalShare: null,
  },
  {
    text: "O otimismo nem sempre é o que faz uma pessoa decidida, pois a raiva também é capaz de fazer essa pessoa tomar seu decisão, alguns outros sentimentos tem o mesmo efeito, o importante é que precisando sempre desse empurrãozinho para explodir, seja lá da maneira que for.",
    author: "Joab Ramiro",
    totalShare: null,
  },
  {
    text: "Bom dia pra você que acordou disposto\n(a) a vencer mais esse dia. Que não\nfalte otimismo e disposição para\nenfrentar toda e qualquer dificuldade\nque aparecer na jornada. Agradeça\na Deus pela oportunidade de escrever\nmais uma página no livro da vida.",
    author: "Priscilla Rodighiero",
    totalShare: null,
  },
  {
    text: "Criar intimamente, grandes ondas de otimismo. As quais possam impulsionar a autoestima eficazmente e com, muito mais, positividade. Isto somente ocorre, quando há uma pré-disposição para que, esse fator torne-se realidade.",
    author: "Regis Assunção",
    totalShare: null,
  },
  {
    text: "A essência do otimismo é que não leva em conta o presente, sendo uma fonte da inspiração, da vitalidade e da esperança que os outros abdicaram. O otimismo permite que uma pessoa mantenha sua cabeça erguida, para reivindicar um futuro para si mesma e não o abandonar.",
    author: "Dietrich Bonhoeffer",
    totalShare: null,
  },
  {
    text: "Bom mesmo é ter problema na cabeça, sorriso na boca e paz no coração!\n\nAliás, entregue os problemas nas mãos de Deus e que tal um cafezinho gostoso agora?\n\nA vida é uma peça de teatro que não permite ensaios. Por isso cante, chore, dance e viva intensamente antes que a cortina se feche!",
    author: "Ailin Aleixo",
    totalShare: 498,
  },
  {
    text: "❝... a vida nos foi dada como um presente divino.... para que juntos possamos amar... para que multipliquemos a nossas alegrias... nada mais lindo do que compartilhar carinhos e afetos com amigos ... a vida é uma graça especial e juntos podemos cultivar a harmonia linda da felicidade ... ❞",
    author: "Jared Hassan",
    totalShare: 63,
  },
  {
    text: "Espalhe, transmita o positivismo... sonhe, acredite no otimismo, procure, busque a conquista, examine-se, ache o real valor da vida!\nReflita sobre suas ações... ame intensamente, respeite opiniões, neutralize o negativismo seja alma, mente, coração, mas com os pés cravados ao chão, auto avalie-se... e viva!",
    author: "Desconhecido",
    totalShare: 43,
  },
  {
    text: "Resiliência\n\nResiliência é a capacidade de sair de dentro de si mesmo naqueles momentos em que tudo parece estar muito ruim e encarar o mundo do lado de fora de cabeça erguida, olho no olho e com o maior sorriso que tiver em seu arsenal de sorrisos.",
    author: "J.W.Papa",
    totalShare: 36,
  },
  {
    text: "Palavras revelam sentimentos , mas são nossas atitudes que revelam nosso caráter, é o que a gente faz que demonstra quem realmente somos ,e ´por ela que as verdades são descobertas. Portanto estejam sempre atentos ao que você fala e ao que você faz para que uma não venha trair a outra",
    author: "Cecilia Sfalsin",
    totalShare: 36,
  },
  {
    text: "Uma semana maravilhosa e abençoada está chegando! Que os nossos dias sejam radiantes, com alegrias e sorrisos... que as dificuldades nos fortaleçam e nos façam crescer espiritualmente como pessoas de bem, compartilhando sempre muitas esperanças!",
    author: "Liahna Mell",
    totalShare: 34,
  },
  {
    text: '"Quem pouco luta, tão pouco conquista, então lute por seus objetivos sejam eles quais forem, sua dedicação deve ser maior que suas conquistas, pois nunca paramos de sonhar, nunca estamos satisfeitos, cada sonho realizado é mais um motivo de continuar sonhando".',
    author: "betinho vieira",
    totalShare: 21,
  },
  {
    text: '"Aqui reformam-se sonhos, remendam-se corações, alinhava-se otimismo, costuram-se desilusões. Borda-se carinho, pregam-se esperanças, confecciona-se amor, presponta-se ternura, remodelam-se almas.Aceitam-se encomendas.',
    author: "Marilene A. Branquinho",
    totalShare: 15,
  },
  {
    text: "Por mais que o mundo tente destruir o que você tem de melhor, persista, lute até morrer, mas continue puro em sua essência, honre a Deus com toda sua alma, entendimento e todo seu coração e viva para fazer o bem e nunca o mal! Pois os perfeitos não sabem amar.............",
    author: "Adomiran Bastos",
    totalShare: null,
  },
  {
    text: 'Nunca se entregue ao acaso...\nLute sempre com vontade\nViva com emoção\nRespeite sempre "Deus e seus irmãos"\nO verdadeiro guerreiro só é conhecido diante de sua morte\nPelo números de pessoas que tentam segurar a alça de seu caixão!!!',
    author: "ANTONIO CARLOS DE OLIVEIRA - NENE POLICIA",
    totalShare: null,
  },
  {
    text: "OTIMISMO: As pessoas que tem pensamento positivo, já sai na frente na corrida da vida para o alcance do sucesso, ver as coisas boas que temos na vida atrai mais coisas boas, positivo atrai positivo, erremos, porém, sempre na tentativa de acertar.",
    author: "Sérgio Pinheiro",
    totalShare: null,
  },
  {
    text: "❝ ... Que a alegria das coisas mais simples ... te tragam o brilho de sorrisos intensos ... de felicidades compartilhadas com amor e verdade ... que a nossa fé seja hoje ainda mais forte ... e que haja harmonia e paz dentro dos nossos corações ...❞",
    author: "Jared Hassan",
    totalShare: 9,
  },
  {
    text: "... e segue a vida... ressurgindo a cada novo amanhecer... que venha um dia muitas vitórias... realizações e conquistas... que em seu coração a fé e amor prevaleçam... que a plenitude da paz pulse na mais perfeita harmonia... Vem Felicidade... Bom dia!",
    author: "Jared Hassan",
    totalShare: 9,
  },
  {
    text: "É muito difícil passar por certas situações e manter a fé. Não blasfemar, manter a paz interior, mesmo em meio a adversidade parece impossível! No entanto, penso que sem Deus, tais situações seriam a nossa própria morte. Só suportamos graças a sua infinita misericórdia.",
    author: "Rosicarmen Xavier",
    totalShare: 5,
  },
  {
    text: "A felicidade cabe a quem sabe desfrutar cada segundo que nos foi concedido, então; lute, busque , realize, idealize, caia, levante a cabeça e siga diante. Não deixe que pequenos tropeços te impeçam de sorrir, pois a história do seu amanhã so cabe a você dirigir ...",
    author: "Thaís Alves Vieira de Aquino",
    totalShare: 2,
  },
  {
    text: "LUTE!\nEnquanto você ainda tem forças.\nCANTE!\nEnquanto você ainda tem sua voz.\nDANCE!\nEnquanto suas pernas ainda resistem.\nBRINQUE!\nAinda existem uma criança dentro de você.\n\nEstamos aqui de passagem, Logo é hora de embarcar de volta!.",
    author: "Paulo Batista dos Santos",
    totalShare: null,
  },
  {
    text: "... que seu coração esteja aberto e possa receber as bençãos mais lindas ... carinhosamente preparadas por Deus ... que seja um dia de muitas realizações ... e que as provações se tornem aprendizados ... que haja harmonia e serenidade ... Gratidão e humildade !",
    author: "Jared Hassan",
    totalShare: 32,
  },
  {
    text: "Eu sou otimista e foi o otimismo que me fez ficar vivo. Se eu não tivesse otimismo num certo momento, eu teria dançado. Eu consegui ver que eu mereço ser feliz, porque eu achava que não merecia. Eu era muito culpado, por isso fiquei mal, não conseguia ser feliz. Era muito feliz para o lado de fora, o 'exagerado' da rua, mas comigo mesmo não.",
    author: "Cazuza",
    totalShare: 5,
  },
  {
    text: "... e que seja abençoada esta noite linda que chega ... que esteja plenamente em paz o nosso coração ... que haja esta gratidão imensa fortalecendo nossa fé ... e uma esperança viva ... de que a felicidade nos espera a cada amanhecer ...",
    author: "Jared Hassan",
    totalShare: 3,
  },
  {
    text: "Tomo cuidado pra que os desequilibrados não abalem minha fé pra eu enfrentar com otimismo essa loucura\nOs homens podem falar mas os anjos podem voar\nQuem é de verdade sabe quem é de mentira.\nNão menospreze o dever que a consciência te impõe, não deixe pra depois, valorize a vida.",
    author: "Charlie Brown Jr",
    totalShare: 2,
  },
  {
    text: "Em tudo somos capazes, nada é barreira ,isto porque somos mais que vencedores em Cristo Jesus.\nlute, persista, e não desista, porque nós somos como o diamantes, e também como o ouro que tem um grande valor. Portanto nunca pare de lutar, pois, você é um combatente em busca do seu troféu.",
    author: "RENATA MENDES FERREIRA SÃO LUIS-MA",
    totalShare: null,
  },
  {
    text: "Corra,caminhe,lute e nunca desista de lutar por aquilo que é útil para você e para os seus semelhantes.Faça por si que Deus ajudará sempre e nunca espere que o milagre caia lá do céu.O esforço é nosso.O mérito é nosso.Lutemos,pois, sempre com Deus no comando.",
    author: "adelmar marques marinho",
    totalShare: null,
  },
  {
    text: "Um dia magnificamente lindo... com muitas alegrias... vitórias e realizações... que a fé e a esperança possam guiar os nossos corações e que assim possamos compartilhar mais amor e mais harmonia... muitas bençãos esperam por você! Bom dia!",
    author: "Jared Hassan",
    totalShare: 25,
  },
  {
    text: "Pra mim pouco importa o que falem ou pensem a meu respeito... acredito que pensar e falar o que não é bom , sempre será uma tentativa desesperadora de quem quer descobrir o que tem de interessante na gente, este é um dos motivos que me faz prosseguir sem atentar para insignificancias .",
    author: "Cecilia Sfalsin",
    totalShare: 23,
  },
  {
    text: "Não existe glória na guerra e sim dor, medo e tristeza.\nLute por sua família e seus amigos e seja apenas mais uma de tantas estrelas no céu que morrem, enquanto novas estrelas nascem, e você é esquecido como poeira estelar no espaço, pelas novas gerações.",
    author: "Lucas Lopes",
    totalShare: 2,
  },
  {
    text: "Não pense que a morte seria a solução dos problemas, eles sempre permanecerão e ela causaria um impacto de tristeza enorme nas vidas daqueles que estão ao seu redor. Então não puxe o seu tapete, assim como, também não puxaria daqueles que o amam. Você é importante sim! Lute!",
    author: "Guilherme Alcantara",
    totalShare: 0,
  },
  {
    text: "Você é desafiado a vencer todos os dias! Lutas são necessárias para te impulsionar a reagir, porém, elas não podem te vencer! Tenha espírito de garra e guerreie contra toda a negatividade, contra todo sofrimento, contra toda dor... Você é forte!",
    author: "Rogério Macena",
    totalShare: null,
  },
  {
    text: "Amamos por otimismo do Amor e assim confiamos em seus significados cegamente. O Amor se torna a fonte de esperança, pura e clara, e o comprometimento livre que nos toma em demasiado prometendo-nos tal sentimento em detrimento a uma felicidade eterna e infinita.",
    author: "Rafael Bastos Ferreira",
    totalShare: null,
  },
  {
    text: "Meu amigo ainda é muito cedo, pra desistir, vai em frente lute com gara e determinação,mesmo se as condições de equilíbrio não São favoráveis,lembre se os amadores construíram a ARCA DE NOE e os profissionais construíram o TITANIC, e tu podes fazer melhor que isso, podes ter a certeza",
    author: "Simao Hortencio",
    totalShare: null,
  },
  {
    text: "Sonhe a vida e viva o seu sonho na sua própria realidade, lute pelo que almejas e vença por mérito absoluto...\nCaminhe com determinação e supere para fortalecer o seu coração... Ame-se em quais querem as circunstâncias e sejas paciente com sua vida...",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "Lute para que sua vida no futuro, seja a mesma que planejou!!! E isso não é por ninguém, é simplesmente pelas noites em claro que passou, por todos problemas que superou, por todo não que converteu em sim, por cada dia que passou, por cada centavo que gastou, pelo seu tempo...",
    author: "Leonardo Siqueira",
    totalShare: null,
  },
  {
    text: "A alegria e o incentivo são o oxigênio da alma. Otimismo é vida. É o que nos mantem fortes e aptos a encarar os desafios. Seja vida para outra pessoa. Seja o empurrão para frente, nunca o pontapé para trás. Conseguir se realizar na alegria dos outros é a chave de nossa felicidade!",
    author: "Cleonio Dourado",
    totalShare: 2,
  },
  {
    text: "Por mais longa que seja a estrada da vida, nunca desista, se doe ao máximo, lute, tenha esperança, solte o lado gladiador que há dentro ti.\nPois no final ti podes olhar para tráz e ver que todo o esforço valeu a pena e vai poder dizer sem rancor: EU VENCI.",
    author: "Diogo de los Antos",
    totalShare: 2,
  },
  {
    text: "Viva com mais leveza, espalhe amor... otimismo... fé... esperança... faça um buquê de doçuras, de delicadezas e arremate com um lindo laço de alegria e felicidade. Espalhe flores de paz e ternura por onde passar, faça da sua sua vida um caminho de luz!",
    author: "Yara Uchôa Barreto",
    totalShare: null,
  },
  {
    text: "OTIMISMO FÉ e AÇÃO\n\nAs energias positivas incorporadas numa postura otimista representam a fé em ação. Algumas ações terão êxito de imediato, outras necessitarão de ajustes ao longo do percurso; mas qualquer ação bem intencionada é melhor que a inatividade do medo.\nLuiz Aquino",
    author: "Luiz Aquino",
    totalShare: null,
  },
  {
    text: "Todo dia de manhã,\nFalo pra mim mesmo.\nTerei um dia cheio de felicidade.\nO otimismo para agir como esplendor.\nVivendo a vida com carinho.\nÉ necessário otimismo a todo instante.\nA vida passa em brancas nuvens envolventes.\nLevante amigo(a), caminha sempre para frente.",
    author: "Alexsandra Zulpo",
    totalShare: null,
  },
  {
    text: "Viver vai além de se contentar com o pouco,\nÉ ter otimismo e visão do futuro.\nProjetar a vida enfrentando os próprios sentimentos,\nE buscar a felicidade no simples da vida.\nTer segurança para filtrar as criticas,\nTirando de cada experiência uma lição.",
    author: "Bianca Ferreira",
    totalShare: 2,
  },
  {
    text: "Nada que me digam ou me critiquem não abalará o meu otimismo, para enfrentar minhas dificuldades e superá-las com o melhor da minha motivação;\nMeus sentimentos não se fazem difíceis de serem entendidos, mas o meu caminho é uma ponte inabalável que vai em direção a felicidade;",
    author: "Julio Aukay",
    totalShare: null,
  },
  {
    text: "Não tenha medo, enfrente os seus desafetos, lute contra os seus adversários, quebre as muralhas que te impedem de ultrapassar as outras fases da tua vida. Se ajoelhe diante do Criador, fale com Jesus e Ele te guiará e te direcionará para o caminho certo, para a vitória em Cristo.",
    author: "Júlio di Paula",
    totalShare: null,
  },
  {
    text: "Vou permanecer com o que eu tenho de melhor: meu otimismo, minha vontade de viver e minha coragem em admitir que errei quando eu errar, em admitir que preciso de ajuda quando eu precisar, que não sei o que fazer quando eu não souber, que amo mesmo quando eu já não for amada.",
    author: "Line Lua",
    totalShare: null,
  },
  {
    text: "Uma nova oportunidade de ser feliz. Uma semana linda que se inicia, que seja abençoada de muitas realizações, que seja intensa em alegrias e paz, que haja muita humildade e harmonia em nossos corações. Força e fé para as grandes superações. Que sejam assim todos os nossos dias!",
    author: "Jared Hassan",
    totalShare: 8,
  },
  {
    text: "❝ ... E que venham os dias abençoados de paz e alegrias ... que os momentos sejam de intensas emoções ... que permaneça em nós somente o que nos edifica e nos faz feliz ... harmonia e serenidade para com nossos semelhantes ... gratidão e fé para com Deus ... sempre ... ❞",
    author: "Jared Hassan",
    totalShare: 5,
  },
  {
    text: "Permitir... A conversa, o abraço, o perdão, o desabafo, a tolerância, a humildade, otimismo, relevância, carinho, riso, afago, liberdade, compaixão, o que foi abalado, arrancado e proibido. Para que os erros passados não tragam remorso do que já foi e não pode ser recuperado.",
    author: "Jéssica Davian",
    totalShare: 2,
  },
  {
    text: 'Antes de ser "direita" ou "esquerda" seja um democrata, lute por liberdade e assim evite defender ditaduras; seja qual for a ideologia política. Tenha maturidade e saiba que é relevante a \'Interação\' entre ambas ideologias para a saúde da democracia.\n- Luan Sousa',
    author: "Luan Pensador",
    totalShare: 0,
  },
  {
    text: "Uma história se torna incrível quando o otimismo sobrepõe as divergências entre as partes.\nE quando isso acontece, as lembranças se tornam linhas do livro da vida de quem intensamente a viveu, tendo como recompensa o orgulho em contar fielmente a biografia de uma linda história de amor.",
    author: "Leivânio Rodrigues",
    totalShare: null,
  },
  {
    text: 'Desejo à você muitos risos,\nmuitos planos e muito otimismo.\nDesejo que a fé seja seu guia\npara avançar sempre adiante,\nrumo aos seus objetivos.\nDesejo que Deus te oriente em seus passos.\nE desejo, principalmente,\nque você consiga ouvi-lo,\ndentro do seu próprio coração."',
    author: "Célia Cristina Prado",
    totalShare: 2,
  },
];

export default OPTIMISTIC_QUOTES;
