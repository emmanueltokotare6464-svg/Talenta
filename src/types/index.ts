export type Dimension = 'sport' | 'spiritual' | 'social' | 'creative';

export interface PersonalityArchetype {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  dominantTraits: string[];
  biblicalAnchor: {
    verse: string;
    reference: string;
    teaching: string;
  };
  recommendedTalents: string[]; // talent IDs
  idealProjects: string[];
  growthAdvice: string;
  mindsetFormula: string;
}

export interface QuizOption {
  text: string;
  explanation: string;
  dimensionScores: {
    sport: number;
    spiritual: number;
    social: number;
  };
}

export interface QuizQuestion {
  id: number;
  theme: string;
  scenario: string;
  question: string;
  options: QuizOption[];
}

export interface Talent {
  id: string;
  title: string;
  category: Dimension;
  categoryLabel: string;
  shortSummary: string;
  fullDescription: string;
  image?: string;
  biblicalFoundation: {
    verse: string;
    reference: string;
    context: string;
  };
  keyQualities: string[];
  immediateAction: string;
  weeklySteps: string[];
  churchAndCommunityRole: string;
  selfEvaluationQuestions: string[];
  practicalChallenges: string[];
}

export interface ProjectBlueprint {
  id: string;
  title: string;
  dimensions: Dimension[];
  targetAudience: string;
  duration: string;
  difficulty: 'Accessible' | 'Intermédiaire' | 'Mobilisateur';
  pitch: string;
  biblicalAnchor: string;
  requiredTeam: string[];
  phases: {
    title: string;
    tasks: string[];
  }[];
  expectedImpact: string;
  proTips: string;
}

export interface DailyChallenge {
  day: number;
  week: number;
  weekTheme: string;
  title: string;
  dimension: Dimension;
  action: string;
  scripture: {
    reference: string;
    verse: string;
  };
  reflectionQuestion: string;
}

export interface ReflectionNote {
  id: string;
  date: string;
  title: string;
  content: string;
  associatedDimension?: Dimension;
}

export interface UserState {
  completedChallengeDays: number[];
  bookmarkedTalentIds: string[];
  completedQuizResult: {
    date: string;
    scores: {
      sport: number;
      spiritual: number;
      social: number;
    };
    archetypeId: string;
  } | null;
  notes: ReflectionNote[];
}
