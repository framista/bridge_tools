import { range } from 'ramda';

export const ranks = '2 3 4 5 6 7 8 9 10 J Q K A'.split(' ');
export const suits = '♠︎ ♥︎ ♣︎ ♦︎'.split(' ');

export const emptyCardsArray = range(1, ranks.length * suits.length + 1);

export const getRank = (index: number) => ranks[index % 13];
export const getSuit = (index: number) => suits[(index / 13) | 0];
export const getColor = (index: number) =>
  ((index / 13) | 0) % 2 ? 'red' : 'black';
