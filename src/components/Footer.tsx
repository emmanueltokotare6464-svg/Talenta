import React from 'react';
import { Compass, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xl font-bold tracking-tight text-white font-display">
              Talenta
            </span>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Une initiative chrétienne dédiée à l'orientation et au déploiement des dons de la jeunesse. Réconcilier la vigueur du corps (sport), la profondeur de la foi (spirituel) et l'amour concret du prochain (social).
            </p>
            <div className="text-xs text-amber-400/90 font-serif italic">
              « Comme de bons dispensateurs des diverses grâces de Dieu, que chacun de vous mette au service des autres le don qu'il a reçu. » — 1 Pierre 4:10
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">
              Exploration
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('boussole')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Boussole des Talents (Test)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('talents')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Répertoire des Ministères
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('projets')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Idées & Projets d'Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('carnet')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Plan d'Action 30 Jours
                </button>
              </li>
            </ul>
          </div>

          {/* Core Pillars */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">
              Les Trois Piliers
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li>• <strong className="text-stone-200">Sportif :</strong> Discipline, fair-play, dépassement de soi.</li>
              <li>• <strong className="text-stone-200">Spirituel :</strong> Adoration, vérité biblique, intercession.</li>
              <li>• <strong className="text-stone-200">Social :</strong> Compassion, fraternité, paix et écoute.</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Talenta · Dédié à la jeunesse chrétienne francophone.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Créé pour inspirer et équiper chaque jeune avec amour</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
