import clsx from 'clsx';
import { suitPositions } from '../constants';
import { getColor, getRank, getSuit } from '../utils';

const createSuit = (suit: string) => (pos: (number | boolean)[]) => {
  const [x, y, mirrored] = pos as [number, number, boolean];
  const mirroredClass = mirrored ? 'card-suit mirrored' : 'card-suit';
  return (
    <div
      className={mirroredClass}
      style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
    >
      {suit}
    </div>
  );
};

export const createCard = (index: number, isSelected: boolean) => {
  const rank = getRank(index);
  const suit = getSuit(index);

  return (
    <div className={clsx('card', getColor(index), isSelected && 'selected')}>
      <div className="card-suits">
        {suitPositions[index % 13].map(createSuit(suit))}
      </div>
      <div className="card-topleft">
        <div className="card-corner-rank">{rank}</div>
        <div className="card-corner-suit">{suit}</div>
      </div>
      <div className="card-bottomright">
        <div className="card-corner-rank">{rank}</div>
        <div className="card-corner-suit">{suit}</div>
      </div>
    </div>
  );
};
