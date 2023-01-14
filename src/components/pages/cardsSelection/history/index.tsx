import { memo } from 'react';
import { Card } from '../../../card';
import './styles.css';

type Props = {
  selectedCards: number[];
};

export const History = memo(({ selectedCards }: Props) => {
  return (
    <div className="history">
      <h3>History</h3>
      <div className="history__content">
        {selectedCards.map((card, index) => (
          <>
            <div key={card}>
              <Card index={card} />
            </div>
            {index % 4 === 3 && <div className="history__break" />}
          </>
        ))}
      </div>
    </div>
  );
});
