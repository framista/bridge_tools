import { emptyCardsArray } from './utils';
import { createCard } from './singleCard';
import { useCardSelection } from './useCardSelection';
import './styles.css';

export const Cards = () => {
  const { selectedCards, clearSelection, onCardClick, undo } =
    useCardSelection();

  return (
    <>
      <button onClick={clearSelection}>Clear selection</button>
      <button onClick={undo}>Undo selection</button>
      <h3>Available cards</h3>
      <div className="deck">
        {emptyCardsArray.map((_, index) => (
          <div key={index} onClick={() => onCardClick(index)}>
            {createCard(index, selectedCards.includes(index))}
          </div>
        ))}
      </div>
      <h3>History of moves</h3>
      <div className="history">
        {selectedCards.map((s, index) => (
          <>
            <div key={s}>{createCard(s, false)}</div>
            {index % 4 === 3 && <div className="break"></div>}
          </>
        ))}
      </div>
    </>
  );
};
