import { UserState } from '../types';

const STORAGE_KEY = 'talenta_user_state_v1';

const DEFAULT_STATE: UserState = {
  completedChallengeDays: [1], // day 1 checked as demo encouragement or empty
  bookmarkedTalentIds: ['coach-quartier', 'louange-musique'],
  completedQuizResult: null,
  notes: [
    {
      id: 'welcome-note',
      date: new Date().toISOString().split('T')[0],
      title: "Mon point de départ",
      content: "Je commence aujourd'hui mon exploration pour découvrir comment mes dons physiques, spirituels et relationnels peuvent servir Dieu et inspirer mes amis.",
      associatedDimension: 'spiritual'
    }
  ]
};

export function loadUserState(): UserState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      notes: Array.isArray(parsed.notes) ? parsed.notes : DEFAULT_STATE.notes
    };
  } catch (err) {
    console.error('Failed to load user state from localStorage', err);
    return DEFAULT_STATE;
  }
}

export function saveUserState(state: UserState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save user state to localStorage', err);
  }
}
