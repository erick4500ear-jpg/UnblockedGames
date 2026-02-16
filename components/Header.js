
import React from 'react';
import { Gamepad2, Search, User, Menu } from 'lucide-react';

const Header = ({ onSearch, onNavigateHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onNavigateHome}
        >
          <div className="p-2 bg-violet-600 rounded-lg group-hover:bg-violet-500 transition-colors neon-border shadow-lg">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-rajdhani font-bold tracking-tighter hidden sm:block">
            NOVA<span className="text-violet-500">ARCADE</span>
          </h1>
        </div>

        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search unblocked games..."
            className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-violet-600/50 transition-all text-sm text-slate-200"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center cursor-pointer hover:border-violet-500 transition-all">
            <User className="w-5 h-5 text-slate-300" />
          </div>
          <button className="md:hidden p-2 text-slate-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
