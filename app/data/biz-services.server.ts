import { Service } from "~/types";

const BIZ_SERVICES: Service[] = [
  {
    id: 1,
    name: "Massagem Relaxante",
    cardSubHeader: "O que é o massagem relaxante?",
    description:
      "O massagem relaxante é um tratamento que ajuda a relaxar os músculos e ajuda a melhorar a qualidade do sono. É indicada também para melhorar a circulação do sangue, reduzir o estresse, a ansiedade, aliviar as dores de cabeça, relaxar corpo e mente e promover bem-estar além de melhorar a elasticidade da pele.",
    image: "massagem-relaxante",
    slug: "massagem-relaxante",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 2,
    name: "Quick Massage",
    cardSubHeader: "O que é o Quick Massage?",
    description:
      "Quick Massage é uma técnica que prevê sessões rápidas para relaxamento muscular, melhorar a postura, equilibrar o fluxo energético do corpo. Muito utilizado em ambiente de trabalho para aliviar tensão e estresse dos funcionários.",
    image: "quick-massage",
    slug: "quick-massage",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 3,
    name: "Ventosa Terapia",
    cardSubHeader: "O que é a Ventosa Terapia?",
    description:
      "A ventosa terapia é um tratamento natural utilizado para melhorar a circulação sanguínea em um local do corpo, oxigenando assim os tecidos e permitindo a liberação de toxinas do sangue e do músculo.",
    image: "ventosa-terapia",
    slug: "ventosa-terapia",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 4,
    name: "Drenagem Linfatica",
    cardSubHeader: "O que é a Drenagem Linfatica?",
    description:
      "A drenajem linfatica ajuda o corpo a eliminar o excesso de líquidos e toxinas. É muito utilizada no pós-operatório de cirurgias, principalmente na cirurgia plástica. Facilita também o tratamento da celulite, inchaço ou linfedema.",
    image: "drenagem-linfatica",
    slug: "drenagem-linfatica",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 5,
    name: "Pedras Quentes",
    cardSubHeader: "O que é a Pedras Quentes?",
    description:
      "A pedras quentes é uma técnica que prevê o uso de pedras específicas durante a massagem que irão auxiliar no processo de relaxamento muscular,  principalmente nas regiões de maior contração muscular.",
    image: "pedras-quentes",
    slug: "pedras-quentes",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 6,
    name: "Bambú Terapia",
    cardSubHeader: "O que é a Bambú Terapia?",
    description:
      "A bambú terapia é uma técnica de massagem profissional que ajuda a estimular as glândulas, aliviar tensões musculares, diminuir inchaços e proporcionar um grande relaxamento físico.",
    image: "bambu-terapia",
    slug: "bambu-terapia",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },
  {
    id: 7,
    name: "Massagem Desportiva",
    cardSubHeader: "O que é a Massagem Desportiva?",
    description:
      "A massagem desportiva é uma forma para tratar a tensão muscular, é uma técnica muito eficaz para quem pratica esportes ou treinam pesado, sejam atletas ou pessoas que desejam ter mais qualidade de vida através das atividades físicas.",
    image: "massagem-desportiva",
    slug: "massagem-desportiva",
    categorySlug: "tecnicas-de-massoterapia",
    homepageLeafLevel: 1,
  },

  {
    id: 8,
    name: "Reflexoterapia",
    cardSubHeader: "O que é a Reflexoterapia?",
    description:
      "A reflextoreapia é indicada para pessoas estressadas, tensas, nervosas, com diversos tipos de dores e desequilíbrios do sistema. É uma técnica terapêutica que visa restabelecer o equilíbrio do organismo através de estímulos de pontos reflexos do corpo localizados  nos pés.",
    image: "reflexoterapia",
    slug: "reflexoterapia",
    categorySlug: "outras-terapias",
    homepageLeafLevel: 0,
  },
  {
    id: 9,
    name: "Calatonia",
    cardSubHeader: "O que é a Calatonia?",
    description:
      "A calatonia ajuda a promover um relaxamento profundo diminuindo assim tensões físicas e psíquicas, aliviando o estresse e favorecendo acesso a conteúdos inconscientes que impactam a vida cotidiana.",
    image: "calatonia",
    slug: "calatonia",
    categorySlug: "outras-terapias",
    homepageLeafLevel: 0,
  },
  {
    id: 10,
    name: "Terapia Floral",
    cardSubHeader: "O que é a Terapia Floral?",
    description:
      "A terapia floral auxilia no equilíbrio das emoções, trabalha personalidades e acalma estados mentais. As essências extraídas das flores transformam estados mentais  e emocionais negativos em positivos. Os florais são por mim selecionados para um tratamento pessoal e mirado",
    image: "terapia-floral",
    slug: "terapia-floral",
    categorySlug: "outras-terapias",
    homepageLeafLevel: 0,
  },
  {
    id: 11,
    name: "Terceira idade",
    cardSubHeader: "Como é feita uma aula de yoga para terceira idade?",
    description: "",
    image: "yoga-terceira-idade",
    slug: "yoga-terceira-idade",
    categorySlug: "yoga",
    homepageLeafLevel: 1,
  },
  {
    id: 12,
    name: "Adultos",
    cardSubHeader: "Como é feita uma aula de yoga para adultos?",
    description: "Para vocês que estão em busca da essência da vida",
    image: "yoga-adultos",
    slug: "yoga-adultos",
    categorySlug: "yoga",
    homepageLeafLevel: 1,
  },
  {
    id: 13,
    name: "Gestantes",
    cardSubHeader: "Como é feita uma aula de yoga para gestantes?",
    description: "Para vocês que estão criando uma nova vida",
    image: "yoga-gestantes",
    slug: "yoga-gestantes",
    categorySlug: "yoga",
    homepageLeafLevel: 1,
  },
  {
    id: 14,
    name: "Crianças",
    cardSubHeader: "Como é feita uma aula de yoga para crianças?",
    description: "Para vocês que a vida é uma descoberta diaria",
    image: "yoga-criancas",
    slug: "yoga-criancas",
    categorySlug: "yoga",
    homepageLeafLevel: 1,
  },
];

export default BIZ_SERVICES;
