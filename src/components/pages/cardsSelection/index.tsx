import { memo } from 'react';
import { AvailableCards } from './availableCards';
import { Toolbar } from './toolbar';
import { History } from './history';
import { useCardSelection } from './useCardSelection';
import './styles.css';

export const CardsSelection = memo(() => {
  const { selectedCards, onClearSelection, onCardClick, onUndo } =
    useCardSelection();

  return (
    <div className="cardsSelection">
      <Toolbar {...{ onClearSelection, onUndo }} />
      <AvailableCards {...{ selectedCards, onCardClick }} />
      <History {...{ selectedCards }} />
    </div>
  );
});
