import { QuizQuestion, PersonalityArchetype } from '../types';

export const PERSONALITY_ARCHETYPES: PersonalityArchetype[] = [
  {
    id: 'athlete-temoin',
    name: "L'Athlète Messager & Mentor",
    badge: "Discipline & Foi en Action",
    tagline: "Tu glorifies Dieu à travers l'intensité de l'effort physique, la persévérance et le témoignage du fair-play.",
    description: "Tu possèdes une énergie débordante, un amour du dépassement de soi et une conscience aiguë que ton corps est le temple du Saint-Esprit. Sur le terrain comme dans la vie, tu ne cherches pas à écraser l'adversaire mais à révéler que la vraie force chrétienne réside dans l'humilité, le respect des règles et le courage face à l'adversité.",
    dominantTraits: ["Énergie & Dépassement physique", "Discipline de vie régulière", "Leadership par l'exemple", "Témoignage sans compromis"],
    biblicalAnchor: {
      verse: "J'ai combattu le bon combat, j'ai achevé la course, j'ai gardé la foi.",
      reference: "2 Timothée 4:7",
      teaching: "La vie chrétienne comme un marathon où la fidélité et la pureté d'intention valent plus qu'une victoire éphémère."
    },
    recommendedTalents: ['coach-quartier', 'capitaine-fraternel', 'sante-temple-esprit', 'guide-randonnee-nature'],
    idealProjects: ['tournoi-fraternel', 'bootcamp-priere-course', 'rando-sommet'],
    growthAdvice: "Veille à nourrir ton esprit dans la méditation silencieuse autant que tes muscles. Ne laisse pas les performances sportives définir ta valeur aux yeux de Dieu : tu es Son enfant avant d'être un vainqueur.",
    mindsetFormula: "Effort athlétique + Pureté de cœur = Rayonnement pour le Royaume"
  },
  {
    id: 'berger-solidaire',
    name: "Le Berger d'Impact & Éveilleur d'Espérance",
    badge: "Compassion & Parole Vivante",
    tagline: "Tu as un cœur vibrant pour consoler les cœurs brisés, transmettre la Parole et accompagner les personnes vulnérables.",
    description: "Sensible aux détresses que les autres ne remarquent pas, tu es habité par l'amour compassionnel du Christ. Tu aimes la profondeur spirituelle, la prière sincère et le contact humain authentique. Pour toi, la foi n'est pas une théorie : elle s'exprime dans une tasse de thé partagée avec un sans-abri, une prière murmurée pour un ami malade ou un verset partagé au moment juste.",
    dominantTraits: ["Empathie & Écoute active", "Sensibilité spirituelle", "Fidélité dans le secret", "Dévouement aux plus petits"],
    biblicalAnchor: {
      verse: "Toutes les fois que vous avez fait ces choses à l'un de ces plus petits de mes frères, c'est à moi que vous les avez faites.",
      reference: "Matthieu 25:40",
      teaching: "Le Christ se laisse rencontrer intimement dans le service des personnes brisées et démunies."
    },
    recommendedTalents: ['maraude-solidarite', 'sentinelle-intercession', 'partage-parole-jeunes', 'visiteur-aines-solitude'],
    idealProjects: ['maraude-pain-quotidien', 'parrainage-scolaire-fraternel', 'ateliers-solidaires'],
    growthAdvice: "Attention à ne pas porter seul le poids de toutes les souffrances du monde. Apprends à te décharger quotidiennement sur le Seigneur dans la prière et à préserver des temps de repos physique réparateur.",
    mindsetFormula: "Profondeur biblique + Amour pratique = Restauration des âmes"
  },
  {
    id: 'capitaine-rassembleur',
    name: "Le Capitaine Bienveillant & Mobilisateur",
    badge: "Collectif & Joie Fraternelle",
    tagline: "Tu excelles à créer une synergie d'équipe, insuffler la bonne humeur et mobiliser les jeunes vers un but commun.",
    description: "Tu as l'enthousiasme communicatif d'un chef d'orchestre ou d'un meneur d'équipe. Rien ne te rend plus heureux que de voir des personnalités différentes collaborer dans la joie pour un projet commun, qu'il s'agisse d'un grand match inter-quartiers ou d'un événement festif solidaire. Tu valorises chaque membre du groupe sans laisser personne au bord de la route.",
    dominantTraits: ["Intelligence collective", "Dynamisme relationnel", "Sens de l'organisation agile", "Inclusion des plus timides"],
    biblicalAnchor: {
      verse: "Deux valent mieux qu'un, parce qu'ils tirent un bon salaire de leur travail. Car s'ils tombent, l'un relève son compagnon.",
      reference: "Ecclésiaste 4:9-10",
      teaching: "La fraternité solidaire et la complémentarité des dons démultiplient l'impact de chaque initiative."
    },
    recommendedTalents: ['capitaine-fraternel', 'coach-quartier', 'hospitalite-accueil', 'mediateur-paix'],
    idealProjects: ['tournoi-fraternel', 'soiree-talents-or', 'olympiades-solidaires'],
    growthAdvice: "Prends garde à ne pas dépendre de l'approbation du groupe. Cultive des temps d'intimité personnelle avec Dieu loin du bruit et de la foule pour ressourcer tes motivations profondes.",
    mindsetFormula: "Unité des cœurs + Action collective = Témoignage éclatant"
  },
  {
    id: 'eclaireur-integral',
    name: "L'Éclaireur Intégral (Trinité Corps, Âme, Esprit)",
    badge: "Équilibre Holistique",
    tagline: "Tu incarnes l'harmonie entre santé physique, enracinement spirituel profond et engagement sociétal rayonnant.",
    description: "Ton profil présente un équilibre remarquable entre les trois dimensions. Tu aimes bouger et te dépasser physiquement, tu chéris la méditation biblique et la prière, et tu te soucies spontanément de la justice et de l'aide à ton prochain. Tu es le profil idéal pour bâtir des ponts entre des mondes qui s'ignorent (sportifs, croyants, militants associatifs).",
    dominantTraits: ["Équilibre corps-esprit-relations", "Polyvalence inspirante", "Sens de la mesure", "Capacité d'adaptation totale"],
    biblicalAnchor: {
      verse: "Jésus croissait en sagesse, en stature, et en grâce, devant Dieu et devant les hommes.",
      reference: "Luc 2:52",
      teaching: "Le modèle parfait de la croissance intégrale : intellectuelle, corporelle, spirituelle et relationnelle."
    },
    recommendedTalents: ['guide-randonnee-nature', 'sante-temple-esprit', 'coach-quartier', 'maraude-solidarite'],
    idealProjects: ['bootcamp-priere-course', 'tournoi-fraternel', 'maraude-pain-quotidien'],
    growthAdvice: "Parce que tu as des affinités multiples, le piège est de te disperser. Choisis 1 ou 2 talents prioritaires à perfectionner en profondeur cette année plutôt que de tout survoler.",
    mindsetFormula: "Corps fort + Foi vivante + Cœur ouvert = Vie féconde"
  },
  {
    id: 'chantre-adorateur',
    name: "L'Artiste de la Présence & Créateur Inspiré",
    badge: "Beauté & Adoration",
    tagline: "Tu as reçu le don de capter la beauté divine et de la rendre sensible à travers l'art, la louange et les médias.",
    description: "Tu ressens les choses avec une intensité rare. Qu'il s'agisse de musique, d'écriture, de vidéo ou d'arts visuels, tu as soif d'exprimer la splendeur de Dieu d'une manière contemporaine et percutante. Ton talent réveille les âmes endormies et ouvre les cœurs les plus endurcis à la grâce divine.",
    dominantTraits: ["Sensibilité esthétique & spirituelle", "Créativité originale", "Intimité de prière", "Capacité à émouvoir droitement"],
    biblicalAnchor: {
      verse: "Dieu l'a rempli de l'Esprit de Dieu, de sagesse, d'intelligence et de savoir pour toutes sortes d'ouvrages d'art.",
      reference: "Exode 35:31",
      teaching: "L'art et la technique mis au service du tabernacle : la créativité est un don divin sacré."
    },
    recommendedTalents: ['louange-musique', 'createur-media-chretiens', 'partage-parole-jeunes', 'hospitalite-accueil'],
    idealProjects: ['soiree-talents-or', 'capsules-temoignages-video', 'veillee-acoustique'],
    growthAdvice: "Veille à ce que ton art ne devienne jamais un prétexte pour fuir les réalités pratiques de la communauté. Reste enraciné dans l'humilité et le service concret des coulisses.",
    mindsetFormula: "Sensibilité d'esprit + Rigueur créative = Brèche pour la gloire de Dieu"
  },
  {
    id: 'batisseur-paix',
    name: "L'Artisan de Réconciliation & Fraternité",
    badge: "Médiation & Solidarité",
    tagline: "Tu as la grâce de pacifier les tempêtes relationnelles, défendre la justice et retisser les liens brisés.",
    description: "Là où d'autres alimentent les ragots ou fuient les conflits, toi tu interviens avec calme, douceur et fermeté morale. Tu as une capacité innée à écouter deux adversaires sans prendre parti à la légère, à faire tomber les rancunes et à redonner une chance à la réconciliation sincère.",
    dominantTraits: ["Sagesse relationnelle", "Patience apaisante", "Courage moral", "Défense des opprimés"],
    biblicalAnchor: {
      verse: "Heureux les artisans de paix, car ils seront appelés fils de Dieu !",
      reference: "Matthieu 5:9",
      teaching: "Travailler activement à la réconciliation humaine est la signature même des enfants du Très-Haut."
    },
    recommendedTalents: ['mediateur-paix', 'tuteur-scolaire-mentor', 'visiteur-aines-solitude', 'hospitalite-accueil'],
    idealProjects: ['parrainage-scolaire-fraternel', 'ateliers-dialogue-paix', 'maraude-pain-quotidien'],
    growthAdvice: "Ne confonds pas la paix avec le silence complaisant devant le mal. La paix biblique (Shalom) exige parfois de dénoncer l'injustice avec vérité et amour.",
    mindsetFormula: "Écoute bienveillante + Vérité dans l'amour = Victoire sur la division"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    theme: "Le Samedi Idéal",
    scenario: "C'est samedi matin, le soleil brille et tu as une journée entièrement libre pour toi.",
    question: "Quelle activité te donne spontanément le plus d'énergie et de joie intérieure ?",
    options: [
      {
        text: "Enfiler mes baskets pour un run matinal intense ou rejoindre des amis pour un match disputé.",
        explanation: "Mon corps a besoin de se dépenser et l'effort physique me libère l'esprit.",
        dimensionScores: { sport: 3, spiritual: 0, social: 1 }
      },
      {
        text: "M'isoler dans un coin paisible avec ma Bible, un carnet et de la bonne musique de louange pour prier et méditer.",
        explanation: "J'ai soif de paix intérieure et d'intimité personnelle avec Dieu avant tout.",
        dimensionScores: { sport: 0, spiritual: 3, social: 0 }
      },
      {
        text: "Organiser un grand brunch ou proposer mon aide à un ami en galère de déménagement ou révision.",
        explanation: "Être utile et créer du lien chaleureux avec les autres est ce qui me remplit le cœur.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Partir en randonnée en montagne ou forêt avec 2 ou 3 camarades en discutant de foi et de vie.",
        explanation: "J'adore combiner l'effort au grand air, la contemplation et les partages fraternels profonds.",
        dimensionScores: { sport: 2, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 2,
    theme: "Soutien dans l'Épreuve",
    scenario: "Un jeune de ton entourage vit une rupture familiale difficile ou traverse un gros épisode d'anxiété.",
    question: "Quel réflexe as-tu naturellement pour lui venir en aide ?",
    options: [
      {
        text: "L'emmener faire du sport (boxe, vélo, basket) pour l'aider à évacuer la pression et reprendre confiance en son corps.",
        explanation: "Le mouvement et le sport aident à briser le cercle de la rumination mentale.",
        dimensionScores: { sport: 3, spiritual: 0, social: 1 }
      },
      {
        text: "Le porter chaque jour dans mes prières secrètes et lui envoyer un verset ou une promesse de paix bien ciblée.",
        explanation: "Je crois profondément que seul Dieu peut guérir les plaies intérieures.",
        dimensionScores: { sport: 0, spiritual: 3, social: 1 }
      },
      {
        text: "Lui proposer un café, m'asseoir en silence et l'écouter vider son sac pendant 1 heure sans lui couper la parole.",
        explanation: "Offrir une oreille sans jugement est le premier pas vers la consolation.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "L'inviter à la maison pour partager un repas chaud, prier doucement avec lui et lui montrer qu'il n'est plus seul.",
        explanation: "Combiner l'amour fraternel pratique et le soutien spirituel pour l'entourer.",
        dimensionScores: { sport: 0, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 3,
    theme: "Mobilisation en Équipe",
    scenario: "Ton groupe de jeunes ou ton église prépare un grand rassemblement de rentrée pour 150 personnes.",
    question: "À quel poste te sens-tu le plus utile et motivé pour t'investir ?",
    options: [
      {
        text: "Organiser les tournois sportifs de l'après-midi, le parcours d'obstacles ou les défis physiques collectifs.",
        explanation: "Le sport est le meilleur brise-glace pour souder les participants et créer une ambiance festive.",
        dimensionScores: { sport: 3, spiritual: 0, social: 1 }
      },
      {
        text: "Préparer la louange musicale, la régie son ou un temps de témoignage fort et d'enseignement biblique.",
        explanation: "Mon cœur bat pour que chaque participant vive une véritable rencontre avec Dieu.",
        dimensionScores: { sport: 0, spiritual: 3, social: 1 }
      },
      {
        text: "Gérer l'accueil des personnes isolées, le buffet convivial et veiller à ce que personne ne reste assis dans un coin.",
        explanation: "Un accueil chaleureux est ce qui donne envie aux gens de revenir et de s'intégrer.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Concevoir des vidéos de présentation, animer les temps forts au micro et veiller à l'esprit d'équipe général.",
        explanation: "J'aime coordonner, insuffler l'énergie et donner du sens à ce que nous vivons.",
        dimensionScores: { sport: 1, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 4,
    theme: "Dilemme & Intégrité",
    scenario: "Lors d'un match de compétition ou d'une épreuve collective, l'adversaire triche ostensiblement et l'arbitre ne voit rien.",
    question: "Quelle est ta réaction intérieure et extérieure face à cette provocation ?",
    options: [
      {
        text: "Je redouble d'intensité physique légale et d'engagement pour faire la différence par la pureté du jeu et l'endurance.",
        explanation: "Répondre par l'excellence sportive et la rigueur morale sur le terrain.",
        dimensionScores: { sport: 3, spiritual: 1, social: 0 }
      },
      {
        text: "Je respire profondément, je demande intérieurement à l'Esprit la maîtrise de moi-même et je prie pour ne pas pécher en parole.",
        explanation: "Garder son cœur pur est plus important que le score du match.",
        dimensionScores: { sport: 1, spiritual: 3, social: 0 }
      },
      {
        text: "Je vais parler calmement au capitaine adverse et à mes coéquipiers pour apaiser les esprits et éviter la bagarre générale.",
        explanation: "Désamorcer l'escalade de la violence et protéger la dignité de chacun.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Je rappelle à notre équipe les valeurs de respect du Christ : même si on perd le match, on ne perdra pas notre témoignage.",
        explanation: "Transformer une injustice en opportunité de grandir dans la stature chrétienne.",
        dimensionScores: { sport: 1, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 5,
    theme: "Expression de la Foi",
    scenario: "Quand tu penses à ta manière la plus vivante d'honorer Dieu au quotidien...",
    question: "Qu'est-ce qui résonne le plus profondément en toi ?",
    options: [
      {
        text: "Pousser mon corps au bout de l'effort physique avec gratitude pour le souffle de vie et la santé que Dieu m'accorde.",
        explanation: "Chaque goutte de sueur et chaque foulée devient une prière incarnée.",
        dimensionScores: { sport: 3, spiritual: 1, social: 0 }
      },
      {
        text: "Chanter de tout mon être, me prosterner dans la prière et me laisser instruire par la profondeur des Écritures.",
        explanation: "L'adoration en esprit et en vérité est le centre battant de ma vie.",
        dimensionScores: { sport: 0, spiritual: 3, social: 0 }
      },
      {
        text: "Donner un sourire, aider une grand-mère, distribuer de la nourriture et faire du bien à ceux qui n'ont rien.",
        explanation: "La foi sans les œuvres est morte : aimer son prochain est ma façon d'aimer Dieu.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Partager l'Évangile à travers l'amitié, la loyauté dans le sport et le soutien quotidien de mes camarades.",
        explanation: "Vivre une foi contagieuse qui touche toutes les facettes de l'existence.",
        dimensionScores: { sport: 2, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 6,
    theme: "Défis & Frustrations",
    scenario: "Qu'est-ce qui t'attriste ou te révolte le plus quand tu regardes la jeunesse d'aujourd'hui ?",
    question: "Quel constat te donne envie de te lever et d'agir immédiatement ?",
    options: [
      {
        text: "L'affalement sur les écrans, la léthargie corporelle, le manque de discipline et l'obésité précoce.",
        explanation: "Je veux réveiller l'énergie physique, le goût de l'effort et la vitalité chez les jeunes.",
        dimensionScores: { sport: 3, spiritual: 0, social: 1 }
      },
      {
        text: "Le vide spirituel, la perte de repères moraux, le désespoir existentiel et l'ignorance de l'amour de Dieu.",
        explanation: "Je veux leur apporter la lumière de l'Évangile qui libère et donne un vrai sens à la vie.",
        dimensionScores: { sport: 0, spiritual: 3, social: 0 }
      },
      {
        text: "La solitude, le harcèlement scolaire, l'indifférence face aux pauvres et la méchanceté gratuite sur les réseaux.",
        explanation: "Je veux construire des refuges de bienveillance, de protection et de solidarité concrète.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Le manque de modèles de vie complets, équilibrés et courageux à qui les ados peuvent s'identifier.",
        explanation: "Je veux incarner une foi vivante qui unit force, sainteté et amour fraternel.",
        dimensionScores: { sport: 2, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 7,
    theme: "Projet de Cœur",
    scenario: "On te confie un budget et 6 mois pour monter une initiative pour les 15-25 ans de ta ville.",
    question: "Quel projet choisis-tu de lancer sans hésiter ?",
    options: [
      {
        text: "Une ligue sportive de rue chrétienne avec entraînements gratuits, tournois le weekend et valeurs de respect.",
        explanation: "Le sport rassemble toutes les origines et inculque le dépassement de soi.",
        dimensionScores: { sport: 3, spiritual: 1, social: 1 }
      },
      {
        text: "Un festival de louange jeunesse, avec des ateliers d'écriture de chants, de prédication et des veillées d'intercession.",
        explanation: "Créer un espace puissant où le Saint-Esprit transforme les cœurs et suscite des vocations.",
        dimensionScores: { sport: 0, spiritual: 3, social: 1 }
      },
      {
        text: "Un café solidaire pour jeunes et maraudes hebdomadaires, couplé à un service d'aide aux devoirs pour les collégiens défavorisés.",
        explanation: "Venir en aide aux plus vulnérables et témoigner de l'amour du Christ par des actes concrets.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Un camp itinérant mêlant trek en montagne, bivouac sous tente, chantiers d'entraide dans les villages et feux de camp spirituels.",
        explanation: "L'aventure complète qui forge le corps, le caractère, la fraternité et la foi.",
        dimensionScores: { sport: 2, spiritual: 2, social: 2 }
      }
    ]
  },
  {
    id: 8,
    theme: "Dans les Moments Secrets",
    scenario: "Quand tu es seul chez toi et que personne ne te regarde...",
    question: "Quelle activité spontanée te fait perdre la notion du temps ?",
    options: [
      {
        text: "Faire des séries de pompes/tractions, étudier une tactique sportive ou regarder des analyses d'athlètes inspirants.",
        explanation: "La quête de progression corporelle et la rigueur du geste m'animent.",
        dimensionScores: { sport: 3, spiritual: 0, social: 0 }
      },
      {
        text: "Écouter des prédications passionnantes, gratter des accords sur ma guitare en priant ou dévorer des livres de foi.",
        explanation: "Mon esprit a soif de nourriture céleste et de communion avec le Père.",
        dimensionScores: { sport: 0, spiritual: 3, social: 0 }
      },
      {
        text: "Prendre des nouvelles d'amis par message vocal, écrire un mot d'encouragement ou préparer une surprise pour un proche.",
        explanation: "Prendre soin de ceux que j'aime me procure un bonheur immense.",
        dimensionScores: { sport: 0, spiritual: 1, social: 3 }
      },
      {
        text: "Planifier des sorties, monter une vidéo inspirante ou réfléchir à comment améliorer notre groupe de jeunes.",
        explanation: "J'aime bâtir des projets qui élèvent les gens et donnent envie d'avancer ensemble.",
        dimensionScores: { sport: 1, spiritual: 2, social: 2 }
      }
    ]
  }
];

export function calculateQuizResult(answers: number[]) {
  let sportScore = 0;
  let spiritualScore = 0;
  let socialScore = 0;

  answers.forEach((chosenOptionIndex, questionIdx) => {
    const question = QUIZ_QUESTIONS[questionIdx];
    if (question && question.options[chosenOptionIndex]) {
      const { sport, spiritual, social } = question.options[chosenOptionIndex].dimensionScores;
      sportScore += sport;
      spiritualScore += spiritual;
      socialScore += social;
    }
  });

  const total = sportScore + spiritualScore + socialScore || 1;
  const sportPct = Math.round((sportScore / total) * 100);
  const spiritualPct = Math.round((spiritualScore / total) * 100);
  const socialPct = Math.round((socialScore / total) * 100);

  // Determine Archetype
  let archetypeId = 'eclaireur-integral';

  const diffMaxMin = Math.max(sportPct, spiritualPct, socialPct) - Math.min(sportPct, spiritualPct, socialPct);

  if (diffMaxMin <= 15) {
    archetypeId = 'eclaireur-integral';
  } else if (sportPct >= spiritualPct && sportPct >= socialPct) {
    if (socialPct >= spiritualPct) {
      archetypeId = 'capitaine-rassembleur';
    } else {
      archetypeId = 'athlete-temoin';
    }
  } else if (spiritualPct >= sportPct && spiritualPct >= socialPct) {
    if (socialPct >= sportPct) {
      archetypeId = 'berger-solidaire';
    } else {
      archetypeId = 'chantre-adorateur';
    }
  } else {
    // Social is highest
    if (spiritualPct >= sportPct) {
      archetypeId = 'batisseur-paix';
    } else {
      archetypeId = 'capitaine-rassembleur';
    }
  }

  const archetype = PERSONALITY_ARCHETYPES.find(a => a.id === archetypeId) || PERSONALITY_ARCHETYPES[0];

  return {
    scores: {
      sport: sportPct,
      spiritual: spiritualPct,
      social: socialPct
    },
    rawScores: {
      sport: sportScore,
      spiritual: spiritualScore,
      social: socialScore
    },
    archetype
  };
}
