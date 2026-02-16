
import React, { useState, useMemo } from 'react';
import { Gamepad2, Zap, Trophy, Flame } from 'lucide-react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import { GAMES } from './constants';
import { Game, GameCategory } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<GameCategory>(GameCategory.ALL);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = Object.values(GameCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header 
        onSearch={setSearchQuery} 
        onNavigateHome={() => {
          setSelectedGame(null);
          setSearchQuery('');
          setActiveCategory(GameCategory.ALL);
        }} 
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {!selectedGame ? (
          <>
            {/* Hero Section */}
            <section className="mb-12 relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-12 border border-slate-800 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-600/20 rounded-full border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Flame className="w-4 h-4" />
                  Free & Unblocked
                </div>
                <h2 className="text-4xl md:text-6xl font-rajdhani font-bold mb-4 tracking-tight">
                  Premium <span className="text-violet-500 neon-text">Gaming Hub.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                  Access a curated library of HTML5 games, optimized for performance and unblocked for your convenience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setSelectedGame(GAMES[0])}
                    className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/20"
                  >
                    Quick Play
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6">
                {[
                  { icon: <Zap className="text-yellow-500" />, label: "Low Latency" },
                  { icon: <Trophy className="text-violet-500" />, label: "Instant Load" },
                ].map((item, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-2xl flex items-center gap-4 border-white/5 w-64 translate-x-12 hover:translate-x-0 transition-transform duration-500">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              <div className="flex items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                      activeCategory === cat 
                        ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            {/* Games Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-100">
                  <div className="w-1.5 h-6 bg-violet-600 rounded-full" />
                  {activeCategory === GameCategory.ALL ? 'All Games' : `${activeCategory} Games`}
                </h3>
                <span className="text-xs text-slate-500 font-medium">{filteredGames.length} Available</span>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onPlay={setSelectedGame} 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
                  <Gamepad2 className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg font-medium italic opacity-50">No games match your search...</p>
                </div>
              )}
            </section>
          </>
        ) : (
          <GamePlayer game={selectedGame} onClose={() => setSelectedGame(null)} />
        )}
      </main>

      {/* Footer */}
      {!selectedGame && (
        <footer className="border-t border-slate-900 bg-slate-950 px-4 py-8 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-rajdhani font-bold tracking-tighter text-slate-100">NOVAARCADE</span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-violet-400 transition-colors">Games</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Contact</a>
            </div>

            <p className="text-slate-600 text-xs">
              © 2024 NovaArcade Hub.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
