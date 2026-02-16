
let games = [];
let activeCategory = 'All';
let searchQuery = '';

const CATEGORIES = ['All', 'Action', 'Puzzle', 'Retro', 'Strategy', 'Sports'];

// DOM Elements
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-input');
const categoryFilters = document.getElementById('category-filters');
const gameCountLabel = document.getElementById('game-count');
const currentCategoryLabel = document.getElementById('current-category-label');
const logo = document.getElementById('logo');

const playerContainer = document.getElementById('game-player-container');
const playerIframe = document.getElementById('game-iframe');
const playerTitle = document.getElementById('player-title');
const playerThumb = document.getElementById('player-thumb');
const playerCategory = document.getElementById('player-category');
const playerDesc = document.getElementById('player-desc');
const closeBtn = document.getElementById('close-player');
const fullscreenBtn = document.getElementById('toggle-fullscreen');

// Initialize
async function init() {
  try {
    const response = await fetch('./games.json');
    games = await response.json();
    renderCategories();
    renderGames();
    lucide.createIcons();
  } catch (err) {
    console.error('Failed to load games:', err);
    gamesGrid.innerHTML = `<p class="col-span-full text-center py-20 text-red-500">Error loading games. Check your network.</p>`;
  }
}

function renderCategories() {
  categoryFilters.innerHTML = CATEGORIES.map(cat => `
    <button 
      onclick="setCategory('${cat}')"
      class="whitespace-nowrap px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
        activeCategory === cat 
          ? 'bg-violet-600 border-violet-500 text-white shadow-lg' 
          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
      }"
    >
      ${cat}
    </button>
  `).join('');
}

window.setCategory = (cat) => {
  activeCategory = cat;
  currentCategoryLabel.innerHTML = `
    <div class="w-1.5 h-6 bg-violet-600 rounded-full"></div>
    ${cat === 'All' ? 'Top Picks' : cat + ' Games'}
  `;
  renderCategories();
  renderGames();
};

function renderGames() {
  const filtered = games.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || g.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  gameCountLabel.textContent = `${filtered.length} Games Available`;

  if (filtered.length === 0) {
    gamesGrid.innerHTML = `
      <div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
        <p class="text-lg font-medium opacity-50">No matches found...</p>
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = filtered.map(g => `
    <div 
      onclick="openGame('${g.id}')"
      class="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-violet-600/50 hover:-translate-y-2 cursor-pointer shadow-xl"
    >
      <div class="aspect-video overflow-hidden relative">
        <img src="${g.thumbnail}" alt="${g.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <div class="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform">
             <i data-lucide="play" class="w-6 h-6 fill-white ml-1"></i>
          </div>
        </div>
        <div class="absolute top-2 right-2">
          <span class="px-2 py-0.5 bg-slate-900/80 backdrop-blur-md rounded-md text-[10px] font-bold text-violet-400 border border-violet-900/50">
            ${g.category}
          </span>
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-1">
          <h3 class="font-bold text-lg group-hover:text-violet-400 transition-colors truncate text-slate-100">${g.title}</h3>
          <div class="flex items-center text-yellow-500 gap-1">
            <i data-lucide="star" class="w-3 h-3 fill-current"></i>
            <span class="text-xs font-bold text-slate-300">${g.rating}</span>
          </div>
        </div>
        <p class="text-slate-400 text-xs line-clamp-2">${g.description}</p>
      </div>
    </div>
  `).join('');
  
  lucide.createIcons();
}

window.openGame = (id) => {
  const game = games.find(g => g.id === id);
  if (!game) return;

  playerIframe.src = game.url;
  playerTitle.textContent = game.title;
  playerCategory.textContent = game.category;
  playerThumb.src = game.thumbnail;
  playerDesc.textContent = game.description;

  playerContainer.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = () => {
  playerContainer.classList.add('hidden');
  playerIframe.src = '';
  document.body.style.overflow = 'auto';
};

fullscreenBtn.onclick = () => {
  if (playerIframe.requestFullscreen) {
    playerIframe.requestFullscreen();
  }
};

searchInput.oninput = (e) => {
  searchQuery = e.target.value;
  renderGames();
};

logo.onclick = () => {
  window.setCategory('All');
  searchInput.value = '';
  searchQuery = '';
  renderGames();
};

init();
