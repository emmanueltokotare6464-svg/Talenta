import React from 'react';
import { Compass, BookOpen, Flame, CalendarCheck2, HeartHandshake, Bookmark } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, savedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm backdrop-blur-md bg-stone-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={() => setActiveTab('boussole')}
          className="text-2xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors font-display text-left"
        >
          Talenta
        </button>

        {/* Zone 2: 4-6 clean text navigation links with subtle hover states */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('boussole')}
            className={`transition-colors pb-1 flex items-center gap-1.5 ${
              activeTab === 'boussole'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Boussole</span>
          </button>

          <button
            onClick={() => setActiveTab('talents')}
            className={`transition-colors pb-1 flex items-center gap-1.5 ${
              activeTab === 'talents'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Répertoire</span>
          </button>

          <button
            onClick={() => setActiveTab('projets')}
            className={`transition-colors pb-1 flex items-center gap-1.5 ${
              activeTab === 'projets'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Idées Projets</span>
          </button>

          <button
            onClick={() => setActiveTab('carnet')}
            className={`transition-colors pb-1 flex items-center gap-1.5 ${
              activeTab === 'carnet'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <CalendarCheck2 className="w-4 h-4" />
            <span>Défi 30 Jours</span>
          </button>

          <button
            onClick={() => setActiveTab('guides')}
            className={`transition-colors pb-1 flex items-center gap-1.5 ${
              activeTab === 'guides'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Guides & Foi</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('talents-favoris')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-300 px-3 py-2 rounded-lg border border-stone-700 hover:border-stone-500 transition-colors"
            title="Mes talents enregistrés"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Favoris ({savedCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('boussole');
              const el = document.getElementById('boussole-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Faire le Test
          </button>
        </div>
      </div>

      {/* Mobile nav bar for small screens */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-800 py-2.5 px-2 text-xs text-stone-300 overflow-x-auto">
        <button
          onClick={() => setActiveTab('boussole')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'boussole' ? 'text-amber-400 font-semibold' : ''}`}
        >
          Boussole
        </button>
        <button
          onClick={() => setActiveTab('talents')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'talents' ? 'text-amber-400 font-semibold' : ''}`}
        >
          Talents
        </button>
        <button
          onClick={() => setActiveTab('projets')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'projets' ? 'text-amber-400 font-semibold' : ''}`}
        >
          Projets
        </button>
        <button
          onClick={() => setActiveTab('carnet')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'carnet' ? 'text-amber-400 font-semibold' : ''}`}
        >
          30 Jours
        </button>
        <button
          onClick={() => setActiveTab('guides')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'guides' ? 'text-amber-400 font-semibold' : ''}`}
        >
          Guides
        </button>
      </div>
    </header>
  );
};
