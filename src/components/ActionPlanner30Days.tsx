import React, { useState } from 'react';
import { THIRTY_DAYS_CHALLENGES } from '../data/challengesData';
import { DailyChallenge, ReflectionNote, Dimension } from '../types';
import { CalendarCheck2, CheckCircle, Circle, BookOpen, Plus, Trash2, Activity, Church, HeartHandshake, Sparkles, Award } from 'lucide-react';

interface ActionPlannerProps {
  completedDays: number[];
  onToggleDay: (day: number) => void;
  notes: ReflectionNote[];
  onAddNote: (note: Omit<ReflectionNote, 'id'>) => void;
  onDeleteNote: (id: string) => void;
}

export const ActionPlanner30Days: React.FC<ActionPlannerProps> = ({
  completedDays,
  onToggleDay,
  notes,
  onAddNote,
  onDeleteNote
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteDimension, setNewNoteDimension] = useState<Dimension>('spiritual');

  const filteredChallenges = THIRTY_DAYS_CHALLENGES.filter(c => c.week === selectedWeek);

  const percentCompleted = Math.round((completedDays.length / THIRTY_DAYS_CHALLENGES.length) * 100);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    onAddNote({
      date: new Date().toISOString().split('T')[0],
      title: newNoteTitle.trim(),
      content: newNoteContent.trim(),
      associatedDimension: newNoteDimension
    });

    setNewNoteTitle('');
    setNewNoteContent('');
    setIsAddingNote(false);
  };

  const getDimensionIcon = (dim: Dimension) => {
    switch (dim) {
      case 'sport':
        return <Activity className="w-3.5 h-3.5 text-emerald-600" />;
      case 'spiritual':
        return <Church className="w-3.5 h-3.5 text-amber-600" />;
      case 'social':
        return <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-purple-600" />;
    }
  };

  return (
    <section className="py-12 bg-stone-50 min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-1">
            <span>Activation Quotidienne</span>
            <span aria-hidden="true">·</span>
            <span>Plan de 30 Jours</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 font-display">
            Le Parcours d'Éveil des Talents
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            Un défi par jour pour passer de l'hésitation à l'action. 4 semaines progressives pour forger la discipline physique, approfondir la vie de prière et servir concrètement ton prochain.
          </p>
        </div>

        {/* Global Progress Dashboard Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Progression Globale
              </div>
              <div className="text-2xl font-bold text-stone-900 font-display mt-0.5">
                {completedDays.length} sur {THIRTY_DAYS_CHALLENGES.length} défis accomplis
              </div>
            </div>

            <div className="flex items-center gap-2 text-amber-800 font-mono text-sm font-bold bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              <Award className="w-4 h-4 text-amber-600" />
              <span>{percentCompleted}% du parcours validé</span>
            </div>
          </div>

          <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${percentCompleted}%` }}
            />
          </div>
        </div>

        {/* Week Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs">
          {[1, 2, 3, 4].map(wk => {
            const countInWeek = THIRTY_DAYS_CHALLENGES.filter(c => c.week === wk && completedDays.includes(c.day)).length;
            const totalInWeek = THIRTY_DAYS_CHALLENGES.filter(c => c.week === wk).length;

            return (
              <button
                key={wk}
                onClick={() => setSelectedWeek(wk)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-colors whitespace-nowrap text-left flex items-center justify-between gap-3 ${
                  selectedWeek === wk
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>
                  {wk === 1 && "Semaine 1 : L'Inventaire des Dons"}
                  {wk === 2 && "Semaine 2 : Le Premier Pas & l'Humilité"}
                  {wk === 3 && "Semaine 3 : La Rigueur de l'Athlète"}
                  {wk === 4 && "Semaine 4 : Le Service & l'Impact"}
                </span>
                <span className={`font-mono text-[11px] tabular-nums ${selectedWeek === wk ? 'text-amber-300' : 'text-stone-400'}`}>
                  {countInWeek}/{totalInWeek}
                </span>
              </button>
            );
          })}
        </div>

        {/* Daily Challenges List */}
        <div className="space-y-4 mb-14">
          {filteredChallenges.map(challenge => {
            const isCompleted = completedDays.includes(challenge.day);
            return (
              <div
                key={challenge.day}
                className={`bg-white rounded-xl border p-5 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-stone-200 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Toggle button */}
                  <button
                    onClick={() => onToggleDay(challenge.day)}
                    className="mt-0.5 p-1 text-stone-400 hover:text-emerald-600 transition-colors shrink-0"
                    title={isCompleted ? "Marquer comme à faire" : "Valider le défi du jour"}
                    aria-label={isCompleted ? "Marquer comme à faire" : "Valider le défi du jour"}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-6 h-6 text-stone-300 hover:text-amber-500" />
                    )}
                  </button>

                  <div className="space-y-1.5 flex-1">
                    {/* Meta info (no static pills) */}
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="font-mono font-bold text-stone-800">Jour {challenge.day}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        {getDimensionIcon(challenge.dimension)}
                        <span className="capitalize">{challenge.dimension}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[11px] text-stone-400">{challenge.scripture.reference}</span>
                    </div>

                    <h4 className={`text-base font-bold text-stone-900 ${isCompleted ? 'line-through text-stone-500' : ''}`}>
                      {challenge.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {challenge.action}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200/60 text-xs text-stone-600 italic">
                      « {challenge.scripture.verse} » <strong className="not-italic text-stone-800">— {challenge.scripture.reference}</strong>
                    </div>

                    <div className="text-xs text-amber-900 font-medium pt-1">
                      💡 Question de réflexion : {challenge.reflectionQuestion}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onToggleDay(challenge.day)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors self-end sm:self-center ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                      : 'bg-stone-900 text-white hover:bg-amber-500 hover:text-stone-950'
                  }`}
                >
                  {isCompleted ? 'Accompli ✓' : 'Valider'}
                </button>
              </div>
            );
          })}
        </div>

        {/* SECTION : MON CARNET DE BORD & REFLEXIONS */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-100">
            <div>
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                Espace Personnel
              </div>
              <h3 className="text-2xl font-bold text-stone-900 font-display mt-0.5">
                Mon Journal des Talents & Prières
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Note tes victoires, tes déclics, tes prières de consécration et les encouragements reçus.
              </p>
            </div>

            <button
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors self-start sm:self-auto whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddingNote ? 'Fermer le formulaire' : 'Ajouter une note'}</span>
            </button>
          </div>

          {/* Form to add note */}
          {isAddingNote && (
            <form onSubmit={handleCreateNote} className="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">Titre de la note ou de la prière</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Déclic après l'entraînement avec Marc..."
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Dimension dominante</label>
                  <select
                    value={newNoteDimension}
                    onChange={(e) => setNewNoteDimension(e.target.value as Dimension)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="spiritual">Spirituel / Prière</option>
                    <option value="sport">Sport / Dépassement</option>
                    <option value="social">Social / Fraternité</option>
                    <option value="creative">Créatif / Médias</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Contenu de la réflexion</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Qu'est-ce que Dieu a mis sur ton cœur ? Quelles étapes as-tu franchies ?"
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNote(false)}
                  className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs rounded-lg transition-colors"
                >
                  Enregistrer ma note
                </button>
              </div>
            </form>
          )}

          {/* Notes List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map(note => (
              <div
                key={note.id}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      {note.associatedDimension && getDimensionIcon(note.associatedDimension)}
                      <span className="capitalize">{note.associatedDimension || 'Réflexion'}</span>
                    </span>
                    <span className="font-mono text-[11px] text-stone-400">{note.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 mb-1">
                    {note.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                    {note.content}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-200/60 flex justify-end">
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                    title="Supprimer cette note"
                    aria-label="Supprimer cette note"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
