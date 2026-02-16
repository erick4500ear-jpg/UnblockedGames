
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col overflow-hidden">
      {/* Game Header Area */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <img src={game.thumbnail} className="w-10 h-10 rounded object-cover border border-slate-700" alt={game.title} />
          <div>
            <h2 className="font-bold text-lg">{game.title}</h2>
            <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">{game.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
            title="Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-red-900/30 hover:text-red-500 rounded-lg text-slate-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Game Iframe Area */}
      <div className="flex-1 bg-black relative">
        <iframe
          id="game-iframe"
          src={game.url}
          className="w-full h-full border-0"
          allowFullScreen
          title={game.title}
        />
      </div>

      {/* Game Footer Info */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 hidden md:block">
        <p className="text-slate-400 text-sm max-w-4xl mx-auto text-center">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GamePlayer;
