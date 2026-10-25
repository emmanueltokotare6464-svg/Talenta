export interface GuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  scriptureReference: string;
  summary: string;
  keyTakeaways: string[];
  paragraphs: {
    heading: string;
    content: string;
  }[];
}

export const INSPIRING_GUIDES: GuideArticle[] = [
  {
    id: 'parabole-des-talents-jeunes',
    title: "La Parabole des Talents : Pourquoi l'erreur n'est pas d'échouer, mais de cacher son don",
    category: "Fondement Biblique",
    readTime: "5 min de lecture",
    scriptureReference: "Matthieu 25:14-30",
    summary: "Dans la parabole de Jésus, le serviteur condamné n'est pas celui qui a perdu de l'argent en tentant d'entreprendre : c'est celui qui a enterré son talent par peur et méfiance.",
    keyTakeaways: [
      "Dieu ne nous demande pas la même quantité de fruits, mais la même fidélité dans l'action.",
      "La peur du jugement des autres est le premier fossoyeur de nos dons divins.",
      "Le talent grandit quand on l'exerce ; il s'atrophie quand on le garde égoïstement pour soi."
    ],
    paragraphs: [
      {
        heading: "1. Un capital divin confié à chacun",
        content: "Dans le monde antique, un 'talent' n'était pas une aptitude, mais une somme d'argent colossale : l'équivalent de 15 à 20 années de salaire d'un ouvrier ! En racontant cette histoire, Jésus souligne la valeur inestimable de ce que Dieu dépose en chaque être humain : ton énergie sportive, ta voix, ton sens de l'amitié ou ta capacité d'analyse ne sont pas des détails anodins. Ce sont des pépites divines confiées pour fructifier."
      },
      {
        heading: "2. Le piège de la comparaison et de l'enfouissement",
        content: "Celui qui n'a reçu qu'un talent s'est dit : 'C'est trop peu par rapport aux autres, je ne sers à rien'. C'est le piège numéro 1 des réseaux sociaux : regarder les athlètes d'élite ou les grands prédicateurs et conclure qu'on est insignifiant. Mais le maître ne reproche pas au serviteur de n'avoir pas rapporté 5 talents ; il lui reproche son inertie. Dieu n'attend pas de toi que tu sois quelqu'un d'autre : Il attend que tu sois pleinement toi-même pour Sa gloire."
      },
      {
        heading: "3. Prendre le risque du premier pas",
        content: "Faire fructifier son talent implique toujours une part de risque : rater un tir décisif, chanter une note fausse, essuyer un refus lors d'une maraude. Mais dans le Royaume de Dieu, l'audace de l'amour est toujours bénie. Mieux vaut un essai imparfait animé par la foi qu'un silence parfait paralysé par l'orgueil."
      }
    ]
  },
  {
    id: 'sport-et-foi-chretiens',
    title: "Le Chrétien dans l'Arène : Concilier Compétition et Humilité",
    category: "Sport & Esprit",
    readTime: "6 min de lecture",
    scriptureReference: "1 Corinthiens 9:24-27",
    summary: "Le sport moderne pousse à écraser l'adversaire et à vénérer son propre ego. Comment un athlète chrétien peut-il viser l'excellence sportive tout en restant un serviteur de Dieu ?",
    keyTakeaways: [
      "L'adversaire n'est pas un ennemi à anéantir, mais un partenaire qui te pousse à donner le meilleur de toi-même.",
      "La victoire sur soi-même (maîtrise de ses colères et tricheries) est plus glorieuse qu'un trophée éphémère.",
      "La prière de l'athlète chrétien : 'Seigneur, que mon intensité sur le terrain reflète Ton feu, et que mon attitude reflète Ta grâce'."
    ],
    paragraphs: [
      {
        heading: "1. L'apôtre Paul, admirateur de la discipline sportive",
        content: "Loin de condamner le sport, le Nouveau Testament regorge de métaphores athlétiques : la course de vitesse, le combat de boxe, la couronne de laurier des Jeux Isthmiques de Corinthe. Paul admirait chez les athlètes cette capacité à s'astreindre à des régimes stricts, à se lever à l'aube et à supporter la douleur de l'acide lactique pour un objectif élevé. Si les sportifs sont capables de tant de sacrifices pour une coupe périssable, quelle devrait être notre ferveur pour le Royaume éternel ?"
      },
      {
        heading: "2. Le fair-play chrétien : une lumière dans les vestiaires",
        content: "La véritable identité d'un chrétien se révèle quand l'arbitre se trompe contre lui, ou quand l'adversaire donne un coup bas. Répondre par l'insulte ou la vengeance, c'est capituler devant les réflexes du monde. Répondre par une fermeté calme, un refus de la triche et le respect de la règle, c'est prêcher un sermon plus puissant que mille discours théologiques."
      },
      {
        heading: "3. Jouer pour un public de Un seul",
        content: "Quand tu cours ou tapes dans un ballon, joue pour le regard bienveillant de ton Père céleste. La défaite ne diminue pas ta dignité divine, et la victoire ne te rend pas supérieur aux autres. Cette liberté intérieure te permet de jouer sans la boule au ventre de la peur d'échouer : tu joues par pure joie et gratitude."
      }
    ]
  },
  {
    id: 'equilibre-trois-dimensions',
    title: "La Trinité Humaine : Pourquoi Foi, Sport et Liens Sociaux se nourrissent mutuellement",
    category: "Croissance Personnelle",
    readTime: "5 min de lecture",
    scriptureReference: "1 Thessaloniciens 5:23",
    summary: "Séparer sa vie chrétienne de son corps physique ou de sa vie sociale est une hérésie. Découvre comment équilibrer harmonieusement ces trois piliers au quotidien.",
    keyTakeaways: [
      "Un esprit sain dans un corps fortifié par l'exercice est plus disposé à persévérer dans la prière.",
      "La solitude prolongée refroidit la foi : c'est dans le frottement social et fraternel que le caractère chrétien s'affine.",
      "Le sport sans éthique spirituelle devient vanité ; la spiritualité sans engagement social devient désincarnée."
    ],
    paragraphs: [
      {
        heading: "1. Le mythe du chrétien désincarné",
        content: "L'Évangile n'est pas une doctrine purement intellectuelle pour les esprits sans corps. Jésus a marché des centaines de kilomètres à pied sous le soleil de Galilée, il a partagé d'innombrables repas conviviaux avec des foules joyeuses, et il a passé des nuits entières sur la montagne à prier. Il a vécu l'harmonie totale entre la vigueur corporelle, la profondeur mystique et la chaleur relationnelle."
      },
      {
        heading: "2. Quand le physique soutient le spirituel",
        content: "Quand ton corps est épuisé par la malbouffe, le manque de sommeil et les écrans bleus jusqu'à 2 heures du matin, ta capacité d'attention spirituelle s'effondre. Tu n'arrives plus à prier 5 minutes sans bailler, et la moindre contrariété relationnelle te fait exploser. En reprenant le contrôle de ton sommeil, de ton souffle et de ton activité sportive, tu donnes à ton âme un instrument affûté pour écouter Dieu."
      },
      {
        heading: "3. La dimension sociale comme terrain d'épreuve",
        content: "C'est facile de se croire très spirituel quand on est seul dans sa chambre ! Mais la réalité de notre sainteté se mesure quand nous sommes en équipe, face à un coéquipier maladroit, un voisin grincheux ou un adolescent en crise. La dimension sociale n'est pas un accessoire : c'est le laboratoire où notre foi devient amour concret."
      }
    ]
  }
];
