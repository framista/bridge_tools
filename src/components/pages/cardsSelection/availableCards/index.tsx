import { memo } from 'react';
import { Card } from '../../../card';
import { emptyCardsArray } from '../../../card/utils';
import './styles.css';

type Props = {
  selectedCards: number[];
  onCardClick: (index: number) => void;
};

export const AvailableCards = memo(({ selectedCards, onCardClick }: Props) => {
  return (
    <div className="availableCards">
      <div className="availableCards__content">
        {emptyCardsArray.map((_, index) => (
          <div key={index} onClick={() => onCardClick(index)}>
            <Card
              {...{
                key: index,
                index,
                isSelected: selectedCards.includes(index),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
