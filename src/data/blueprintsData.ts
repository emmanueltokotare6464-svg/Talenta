import { ProjectBlueprint } from '../types';

export const PROJECT_BLUEPRINTS: ProjectBlueprint[] = [
  {
    id: 'tournoi-fraternel',
    title: "Tournoi Inter-Quartiers 'Coupe Fraternelle'",
    dimensions: ['sport', 'social', 'spiritual'],
    targetAudience: "Jeunes du quartier & églises locales (14-25 ans)",
    duration: "1 journée (Samedi ou Dimanche après-midi)",
    difficulty: "Mobilisateur",
    pitch: "Organiser un tournoi de football à 5 ou de streetball 3x3 où le fair-play rapporte des points au classement au même titre que les victoires. Un événement festif pour briser les rivalités de quartiers.",
    biblicalAnchor: "Que tout ce qui est vrai, tout ce qui est honorable, tout ce qui est juste, tout ce qui est pur... soit l'objet de vos pensées. (Philippiens 4:8)",
    requiredTeam: [
      "1 Coordinateur général (gestion des plannings et arbitrage)",
      "2 Arbitres / Médiateurs de terrain garants de l'esprit fraternel",
      "2 Responsables buffet / collation et hydratation gratuite",
      "1 Animateur micro et ambiance musicale",
      "1 Équipe d'accueil et discussion avec les spectateurs"
    ],
    phases: [
      {
        title: "Phase 1 : Préparation (J-20 à J-7)",
        tasks: [
          "Réserver un créneau sur un city-stade ou gymnase municipal municipal.",
          "Rédiger la 'Charte de Fraternité' (règles de respect, zéro insulte tolérée, poignée de main obligatoire).",
          "Ouvrir les inscriptions pour 6 à 8 équipes mixtes ou de quartier."
        ]
      },
      {
        title: "Phase 2 : Jour J (Matin & Après-midi)",
        tasks: [
          "Briefing général avec prière de bénédiction pour les joueurs et lecture de la charte.",
          "Phase de poules avec point bonus 'Carton Vert' pour chaque geste d'entraide remarquable.",
          "Buffet partagé à la mi-journée pour favoriser les échanges entre équipes adverses.",
          "Phases finales et remise des trophées (Trophée du Champion + Trophée du Plus Beau Fair-Play)."
        ]
      },
      {
        title: "Phase 3 : Post-Événement (J+1 à J+7)",
        tasks: [
          "Partager les photos et vidéos de célébration sur un groupe dédié.",
          "Proposer aux capitaines de maintenir un entraînement hebdomadaire ouvert."
        ]
      }
    ],
    expectedImpact: "60 à 100 jeunes réunis dans la joie, disparition des tensions territoriales, découverte de la foi chrétienne incarnée dans le sport.",
    proTips: "Ne faites pas payer l'inscription pour que l'argent ne soit un frein pour personne. Cherchez des sponsors locaux (boulangerie, supermarché) pour offrir des fruits et des boissons."
  },
  {
    id: 'maraude-pain-quotidien',
    title: "Maraude d'Écoute & Pain Quotidien",
    dimensions: ['social', 'spiritual'],
    targetAudience: "Personnes sans-abri et isolées du centre-ville",
    duration: "3 heures en soirée (20h - 23h)",
    difficulty: "Accessible",
    pitch: "Aller à la rencontre des personnes dans la rue non pas comme des distributeurs mécaniques, mais comme des frères et sœurs apportant une soupe fumante, une oreille attentive et une prière si souhaitée.",
    biblicalAnchor: "Si l'un de vous dit aux frères : Allez en paix, chauffez-vous et vous rassasiez ! et que vous ne leur donniez pas ce qui est nécessaire au corps, à quoi cela sert-il ? (Jacques 2:16)",
    requiredTeam: [
      "2 Binômes de maraude (4 personnes max par groupe pour ne pas intimider)",
      "1 Cuisinier en amont (préparation de soupe consistante et thermos de café/thé)",
      "1 Soutien logistique (sacs avec kits d'hygiène, chaussettes neuves, bonnets)"
    ],
    phases: [
      {
        title: "Phase 1 : Cadrage & Prière (19h30 - 20h00)",
        tasks: [
          "Temps de prière d'humilité : demander à Dieu des yeux d'amour sans jugement.",
          "Rappel des règles de sécurité et de respect de l'intimité des personnes (ne jamais réveiller quelqu'un qui dort profondément).",
          "Répartition des rôles et thermos."
        ]
      },
      {
        title: "Phase 2 : La Marche dans la Ville (20h00 - 22h30)",
        tasks: [
          "S'accroupir à hauteur des yeux, demander le prénom et proposer un repas.",
          "Prendre le temps d'écouter au moins 10 à 15 minutes chaque personne qui souhaite parler.",
          "Si la personne y est ouverte, proposer une bénédiction ou une prière simple pour sa santé et son réconfort."
        ]
      },
      {
        title: "Phase 3 : Débriefing & Dépôt (22h30 - 23h00)",
        tasks: [
          "Partager ce qui a touché chaque bénévole.",
          "Déposer dans la prière les situations lourdes entendues pour ne pas rentrer le cœur oppressé."
        ]
      }
    ],
    expectedImpact: "15 à 25 personnes sans-abri réchauffées et valorisées dans leur dignité d'enfants de Dieu, prise de conscience transformatrice pour les jeunes chrétiens.",
    proTips: "Ne donnez pas d'argent liquide. Privilégiez les aliments faciles à mâcher (soupe, pain moelleux, bananes) et les chaussettes en laine neuves."
  },
  {
    id: 'rando-sommet',
    title: "Trek de Sommet & Retraite 'Plein Ciel'",
    dimensions: ['sport', 'spiritual'],
    targetAudience: "Adolescents et jeunes adultes cherchant à déconnecter",
    duration: "2 jours / 1 nuit (Week-end bivouac ou refuge)",
    difficulty: "Intermédiaire",
    pitch: "Associer une ascension sportive de 600m à 1000m de dénivelé avec une déconnexion numérique complète, des temps de marche silencieuse et un culte au lever du soleil sur les hauteurs.",
    biblicalAnchor: "Jésus monta sur la montagne pour prier ; et il passa toute la nuit à prier Dieu. (Luc 6:12)",
    requiredTeam: [
      "1 Guide de randonnée expérimenté (connaissance de l'itinéraire et sécurité météo)",
      "1 Animateur spirituel (préparation des temps de méditation et psaumes)",
      "1 Responsable intendance et trousse de premiers secours"
    ],
    phases: [
      {
        title: "Phase 1 : Préparation & Consignes (J-15)",
        tasks: [
          "Vérifier le matériel de chacun (chaussures de marche adaptées, gourdes, lampe frontale, vêtements chauds).",
          "Fixer la règle : téléphones en mode avion dans le sac pendant 48 heures."
        ]
      },
      {
        title: "Phase 2 : L'Ascension & Le Soir au Camp (Jour 1)",
        tasks: [
          "Départ matinal, première étape rythmée par l'effort collectif et l'entraide pour porter les sacs.",
          "1 heure de marche silencieuse pour écouter les sons de la Création.",
          "Arrivée au camp, montage des tentes ou installation au refuge, repas chaud partagé.",
          "Feu de camp et veillée de témoignages intimes : chacun partage une épreuve et comment Dieu l'a soutenu."
        ]
      },
      {
        title: "Phase 3 : Le Lever du Soleil & Descente (Jour 2)",
        tasks: [
          "Réveil avant l'aube pour atteindre le promontoire à l'apparition de la lumière.",
          "Temps de louange a cappella et lecture du Psaume 121 face à l'immensité.",
          "Descente prudente et repas festif de clôture."
        ]
      }
    ],
    expectedImpact: "Lien fraternel indestructible forgé dans l'effort partagé, renouvellement spirituel profond par le silence et l'émerveillement.",
    proTips: "Vérifiez impérativement le bulletin météo 24h avant et prévoyez toujours un plan B de repli en cas d'orage."
  },
  {
    id: 'soiree-talents-or',
    title: "Veillée 'Talents d'Or' & Scène Ouverte",
    dimensions: ['creative', 'spiritual', 'social'],
    targetAudience: "Tous les jeunes de l'église, amis de fac et lycée",
    duration: "Soirée festive (19h30 - 23h00)",
    difficulty: "Accessible",
    pitch: "Une soirée chaleureuse où chacun est invité à monter sur scène pour présenter son talent (slam, chant, guitare, sketch biblique, démonstration de jongles acrobatiques, peinture en direct, témoignage).",
    biblicalAnchor: "Puisque nous avons des dons différents, selon la grâce qui nous a été accordée... que chacun s'attache à son ministère ! (Romains 12:6)",
    requiredTeam: [
      "1 Maître de cérémonie chaleureux et bienveillant",
      "1 Technicien son et lumières",
      "1 Équipe déco 'café-théâtre' (guirlandes lumineuses, petites tables)",
      "1 Équipe buffet de crêpes ou desserts maison"
    ],
    phases: [
      {
        title: "Phase 1 : Appel à Talents (J-30)",
        tasks: [
          "Lancer un appel sans pression : 'Quel que soit ton talent, même discret, cette scène est la tienne !'",
          "Encourager particulièrement les jeunes timides qui n'osent jamais se mettre en avant.",
          "Répétition générale technique la veille."
        ]
      },
      {
        title: "Phase 2 : La Soirée Scène Ouverte (Jour J)",
        tasks: [
          "Accueil musical chaleureux avec boissons chaudes.",
          "Passages de 5 minutes alternant humour, musique chrétienne, danse et arts visuels.",
          "Interdiction des huées : standing ovation bienveillante pour chaque participant !",
          "Clôture par un temps de louange collective unie."
        ]
      }
    ],
    expectedImpact: "Découverte de talents cachés dans la communauté, valorisation de l'estime personnelle des plus timides, ambiance fraternelle inoubliable.",
    proTips: "Prévoyez un 'filet de sécurité' : 2 artistes confirmés prêts à meubler si un numéro a un imprévu technique."
  },
  {
    id: 'parrainage-scolaire-fraternel',
    title: "Permanence Devoirs & Mentorat 'Grand Frère / Grande Sœur'",
    dimensions: ['social', 'spiritual'],
    targetAudience: "Collégiens et lycéens du quartier en difficulté",
    duration: "Programme continu (2h chaque mercredi ou samedi)",
    difficulty: "Mobilisateur",
    pitch: "Ouvrir les locaux de l'église ou une salle associative chaque semaine pour 1h30 de soutien scolaire bénévole dans une ambiance studieuse et fraternelle, suivie d'un goûter convivial et d'un temps de jeu ou discussion.",
    biblicalAnchor: "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ. (Galates 6:2)",
    requiredTeam: [
      "1 Coordinateur pédagogique (répartition des matières : maths, français, anglais)",
      "3 à 5 Tuteurs étudiants ou lycéens volontaires",
      "1 Parent ou bénévole en charge du goûter réconfortant"
    ],
    phases: [
      {
        title: "Phase 1 : Lancement & Binômes (Mois 1)",
        tasks: [
          "Créer des fiches d'inscription simples précisant les lacunes de chaque élève.",
          "Former des binômes fixes pour créer un vrai lien de confiance dans la durée.",
          "Aménager la salle avec du matériel (brouillons, stylos, calculatrices, dictionnaires)."
        ]
      },
      {
        title: "Phase 2 : Rituel Hebdomadaire",
        tasks: [
          "14h00 - 15h30 : Travail intensif sur les exercices et préparation des contrôles.",
          "15h30 - 16h00 : Goûter offert, temps informel de rigolade et discussions sur leurs projets d'avenir.",
          "Prière facultative en fin de séance pour bénir leurs examens."
        ]
      }
    ],
    expectedImpact: "Hausse notable des résultats scolaires, baisse du décrochage, création d'une communauté protectrice pour des adolescents vulnérables.",
    proTips: "Valorisez l'effort plutôt que la note finale. Un 11/20 arraché avec persévérance mérite autant d'applaudissements qu'un 18/20 facile."
  },
  {
    id: 'bootcamp-priere-course',
    title: "Bootcamp 'Courir pour le Royaume' & Prière Active",
    dimensions: ['sport', 'spiritual'],
    targetAudience: "Athlètes et coureurs amateurs (tous niveaux)",
    duration: "Séance hebdomadaire de 1h30 le dimanche matin ou samedi",
    difficulty: "Accessible",
    pitch: "Un entraînement de course à pied en fractionné ou endurance fondamentale dans les parcs de la ville, précédé d'un échauffement articulatoire et ponctué de stations de prière pour les quartiers traversés.",
    biblicalAnchor: "Courons avec persévérance dans la carrière qui nous est ouverte, ayant les regards sur Jésus. (Hébreux 12:1-2)",
    requiredTeam: [
      "1 Meneur d'allure (meneur de course à 10km/h pour le groupe principal)",
      "1 Serre-file (qui reste avec les coureurs débutants pour que personne ne soit lâché)",
      "1 Guide spirituel (qui annonce les intentions de prière à chaque pause)"
    ],
    phases: [
      {
        title: "Déroulé de la Session",
        tasks: [
          "10 min : Échauffement musculaire dynamique et courte méditation sur Hébreux 12.",
          "20 min : Footing en aisance respiratoire jusqu'à la première station (ex: devant un hôpital ou un lycée).",
          "5 min : Pause hydratation et prière silencieuse ou à voix haute pour les personnes dans ce lieu.",
          "25 min : Exercices de renforcement (fentes, montées d'escaliers) et retour au pas.",
          "15 min : Étirements lents et partage d'un jus de fruits frais."
        ]
      }
    ],
    expectedImpact: "Condition cardiovasculaire fortifiée, sanctification de l'effort physique, bénédiction active répandue sur la cité.",
    proTips: "Créez deux groupes de niveau (marche rapide & course) pour que même les débutants complets puissent participer sans complexe."
  }
];
