import { memo } from 'react';
import { isEmpty, not } from 'ramda';
import { AvailableCards } from './availableCards';
import { Toolbar } from './toolbar';
import { History } from './history';
import { useCardSelection } from './useCardSelection';
import './styles.css';

export const CardsSelection = memo(() => {
  const {
    selectedCards,
    onClearSelection,
    onCardClick,
    onUndo,
    reorderSelection,
  } = useCardSelection();

  return (
    <div className="cardsSelection">
      <Toolbar {...{ onClearSelection, onUndo }} />
      <AvailableCards {...{ selectedCards, onCardClick }} />
      {not(isEmpty(selectedCards)) && (
        <History {...{ selectedCards, reorderSelection }} />
      )}
    </div>
  );
});
