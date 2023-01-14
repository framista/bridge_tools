import { useState, useCallback } from 'react';
import { dropLast, isEmpty, without } from 'ramda';

export const useCardSelection = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const onClearSelection = useCallback(() => {
    setSelectedCards([]);
  }, []);

  const onCardClick = useCallback((index: number) => {
    setSelectedCards((prev) =>
      prev.includes(index) ? without([index], prev) : [...prev, index]
    );
  }, []);

  const onUndo = useCallback(() => {
    if (isEmpty(selectedCards)) return;
    setSelectedCards((prev) => dropLast(1, prev));
  }, [selectedCards]);

  return {
    selectedCards,
    onCardClick,
    onClearSelection,
    onUndo,
  };
};
