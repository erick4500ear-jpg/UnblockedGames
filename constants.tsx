
import { Game, GameCategory } from './types';

export const GAMES: Game[] = [
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    url: 'https://play2048.co/',
    category: GameCategory.PUZZLE,
    description: 'Join the numbers and get to the 2048 tile!',
    rating: 4.8,
    plays: '1.2M'
  },
  {
    id: 'hextris',
    title: 'Hextris',
    thumbnail: 'https://picsum.photos/seed/hextris/400/300',
    url: 'https://hextris.io/',
    category: GameCategory.PUZZLE,
    description: 'A fast-paced puzzle game inspired by Tetris.',
    rating: 4.5,
    plays: '850K'
  },
  {
    id: 'pacman',
    title: 'Pac-Man',
    thumbnail: 'https://picsum.photos/seed/pacman/400/300',
    url: 'https://macek.github.io/google_pacman/',
    category: GameCategory.RETRO,
    description: 'The classic arcade game where you munch dots and dodge ghosts.',
    rating: 4.9,
    plays: '2.5M'
  },
  {
    id: 'snake',
    title: 'Classic Snake',
    thumbnail: 'https://picsum.photos/seed/snake/400/300',
    url: 'https://snake.io/',
    category: GameCategory.RETRO,
    description: 'The nostalgic snake game. Eat to grow longer.',
    rating: 4.4,
    plays: '1.1M'
  },
  {
    id: 'stack',
    title: 'Stack',
    thumbnail: 'https://picsum.photos/seed/stack/400/300',
    url: 'https://www.google.com/logos/2010/pacman10-i.html', // Placeholder for similar simple web games
    category: GameCategory.STRATEGY,
    description: 'Stack up the blocks as high as you can!',
    rating: 4.2,
    plays: '600K'
  },
  {
    id: 'slope',
    title: 'Slope',
    thumbnail: 'https://picsum.photos/seed/slope/400/300',
    url: 'https://slope.io/',
    category: GameCategory.ACTION,
    description: 'Drive a ball down a steep slope while avoiding obstacles.',
    rating: 4.7,
    plays: '3.1M'
  },
  {
    id: 'flappy',
    title: 'Flappy Bird',
    thumbnail: 'https://picsum.photos/seed/flappy/400/300',
    url: 'https://flappybird.io/',
    category: GameCategory.ACTION,
    description: 'Tap to flap and fly through pipes without hitting them.',
    rating: 4.3,
    plays: '900K'
  },
  {
    id: 'chess',
    title: 'Chess Pro',
    thumbnail: 'https://picsum.photos/seed/chess/400/300',
    url: 'https://lichess.org/embed/game/TvA7b0p4?theme=auto&bg=auto',
    category: GameCategory.STRATEGY,
    description: 'Challenge yourself with the ultimate game of strategy.',
    rating: 4.8,
    plays: '400K'
  }
];
