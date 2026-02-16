
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: GameCategory;
  description: string;
  rating: number;
  plays: string;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  RETRO = 'Retro',
  STRATEGY = 'Strategy',
  SPORTS = 'Sports'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
