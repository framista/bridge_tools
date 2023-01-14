import { memo } from 'react';
import clsx from 'clsx';
import { suitPositions } from './constants';
import { getColor, getRank, getSuit } from './utils';
import './styles.css';

const createSuit = (suit: string) => (pos: (number | boolean)[]) => {
  const [x, y, mirrored] = pos as [number, number, boolean];
  const mirroredClass = mirrored
    ? 'card__suit card__suit--mirrored'
    : 'card__suit';
  return (
    <div
      className={mirroredClass}
      style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      key={`${x}-${y}`}
    >
      {suit}
    </div>
  );
};

type Props = {
  index: number;
  isSelected?: boolean;
};

export const Card = memo(({ index, isSelected }: Props) => {
  const rank = getRank(index);
  const suit = getSuit(index);

  return (
    <div className={clsx('card', getColor(index), isSelected && 'selected')}>
      <div className="card__suits">
        {suitPositions[index % 13].map(createSuit(suit))}
      </div>
      <div className="card__topleft">
        <div className="card__corner--rank">{rank}</div>
        <div className="card__corner--suit">{suit}</div>
      </div>
      <div className="card__bottomright">
        <div className="card__corner--rank">{rank}</div>
        <div className="card__corner--suit">{suit}</div>
      </div>
    </div>
  );
});
