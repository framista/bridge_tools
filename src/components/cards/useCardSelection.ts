import { dropLast, without } from 'ramda';
import { useState, useCallback } from 'react';

const isAnyCardSelected = (cards: number[]) => cards.length > 0;

export const useCardSelection = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const clearSelection = useCallback(() => {
    setSelectedCards([]);
  }, []);

  const onCardClick = useCallback((index: number) => {
    setSelectedCards((prev) =>
      prev.includes(index) ? without([index], prev) : [...prev, index]
    );
  }, []);

  const undo = useCallback(() => {
    if (!isAnyCardSelected(selectedCards)) return;
    setSelectedCards((prev) => dropLast(1, prev));
  }, [selectedCards]);

  return {
    selectedCards,
    clearSelection,
    onCardClick,
    undo,
  };
};
