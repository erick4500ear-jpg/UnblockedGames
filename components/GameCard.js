
import React from 'react';
import { Play, Star, TrendingUp } from 'lucide-react';

const GameCard = ({ game, onPlay }) => {
  return (
    <div 
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-violet-600/50 hover:-translate-y-2 cursor-pointer shadow-xl"
      onClick={() => onPlay(game)}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <div className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform shadow-xl shadow-violet-900/40">
            <Play className="w-6 h-6 fill-white ml-1" />
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 bg-slate-900/80 backdrop-blur-md rounded-md text-[10px] font-bold text-violet-400 border border-violet-900/50">
            {game.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg group-hover:text-violet-400 transition-colors truncate text-slate-100">
            {game.title}
          </h3>
          <div className="flex items-center text-yellow-500 gap-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold text-slate-300">{game.rating}</span>
          </div>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 mb-3 leading-relaxed">
          {game.description}
        </p>
        <div className="flex items-center justify-between border-t border-slate-800 pt-3">
          <div className="flex items-center gap-1.5 text-slate-500">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">{game.plays} PLAYS</span>
          </div>
          <button className="text-[10px] font-bold text-violet-400 uppercase tracking-widest hover:text-white transition-colors">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
