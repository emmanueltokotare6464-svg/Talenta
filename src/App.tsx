import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuizCompass } from './components/QuizCompass';
import { TalentDirectory } from './components/TalentDirectory';
import { TalentModal } from './components/TalentModal';
import { ProjectBlueprints } from './components/ProjectBlueprints';
import { ActionPlanner30Days } from './components/ActionPlanner30Days';
import { GuidesAndWisdom } from './components/GuidesAndWisdom';
import { Footer } from './components/Footer';
import { loadUserState, saveUserState } from './utils/storage';
import { Talent, UserState, ReflectionNote } from './types';
import { TALENTS_CATALOG } from './data/talentsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('boussole');
  const [userState, setUserState] = useState<UserState>(() => loadUserState());
  const [activeTalentModal, setActiveTalentModal] = useState<Talent | null>(null);

  // Sync state to local storage whenever it changes
  useEffect(() => {
    saveUserState(userState);
  }, [userState]);

  const handleToggleBookmark = (talentId: string) => {
    setUserState(prev => {
      const exists = prev.bookmarkedTalentIds.includes(talentId);
      return {
        ...prev,
        bookmarkedTalentIds: exists
          ? prev.bookmarkedTalentIds.filter(id => id !== talentId)
          : [...prev.bookmarkedTalentIds, talentId]
      };
    });
  };

  const handleSaveQuizResult = (
    scores: { sport: number; spiritual: number; social: number },
    archetypeId: string
  ) => {
    setUserState(prev => ({
      ...prev,
      completedQuizResult: {
        date: new Date().toISOString(),
        scores,
        archetypeId
      }
    }));
  };

  const handleToggleChallengeDay = (day: number) => {
    setUserState(prev => {
      const isDone = prev.completedChallengeDays.includes(day);
      return {
        ...prev,
        completedChallengeDays: isDone
          ? prev.completedChallengeDays.filter(d => d !== day)
          : [...prev.completedChallengeDays, day]
      };
    });
  };

  const handleAddNote = (newNoteData: Omit<ReflectionNote, 'id'>) => {
    const newNote: ReflectionNote = {
      ...newNoteData,
      id: `note-${Date.now()}`
    };
    setUserState(prev => ({
      ...prev,
      notes: [newNote, ...prev.notes]
    }));
  };

  const handleDeleteNote = (noteId: string) => {
    setUserState(prev => ({
      ...prev,
      notes: prev.notes.filter(n => n.id !== noteId)
    }));
  };

  const handleStartQuizFromHero = () => {
    setActiveTab('boussole');
    const el = document.getElementById('boussole-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTalentsFromHero = () => {
    setActiveTab('talents');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      {/* Strict 3-zone Header Navigation */}
      <Header
        activeTab={activeTab === 'talents-favoris' ? 'talents' : activeTab}
        setActiveTab={setActiveTab}
        savedCount={userState.bookmarkedTalentIds.length}
      />

      {/* Hero Banner only on Boussole/Home view to give strong visual entry */}
      {activeTab === 'boussole' && (
        <Hero
          onStartQuiz={handleStartQuizFromHero}
          onExploreTalents={handleExploreTalentsFromHero}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'boussole' && (
          <QuizCompass
            onSelectTalent={(talent) => setActiveTalentModal(talent)}
            onSaveResult={handleSaveQuizResult}
            savedArchetypeId={userState.completedQuizResult?.archetypeId}
          />
        )}

        {activeTab === 'talents' && (
          <TalentDirectory
            onOpenDetails={(talent) => setActiveTalentModal(talent)}
            bookmarkedTalentIds={userState.bookmarkedTalentIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'talents-favoris' && (
          <TalentDirectory
            onOpenDetails={(talent) => setActiveTalentModal(talent)}
            bookmarkedTalentIds={userState.bookmarkedTalentIds}
            onToggleBookmark={handleToggleBookmark}
            defaultFilter="all"
          />
        )}

        {activeTab === 'projets' && (
          <ProjectBlueprints />
        )}

        {activeTab === 'carnet' && (
          <ActionPlanner30Days
            completedDays={userState.completedChallengeDays}
            onToggleDay={handleToggleChallengeDay}
            notes={userState.notes}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
          />
        )}

        {activeTab === 'guides' && (
          <GuidesAndWisdom />
        )}
      </main>

      {/* Modal View for detailed talent breakdown */}
      {activeTalentModal && (
        <TalentModal
          talent={activeTalentModal}
          onClose={() => setActiveTalentModal(null)}
          isBookmarked={userState.bookmarkedTalentIds.includes(activeTalentModal.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {/* Footer with scripture and navigation */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
