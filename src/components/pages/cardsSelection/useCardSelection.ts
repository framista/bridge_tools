import { useState, useCallback } from 'react';
import { dropLast, insert, isEmpty, pipe, remove, without } from 'ramda';

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

  const reorderSelection = useCallback(
    (startIndex: number, endIndex: number) => {
      const newSelection = pipe<[number[]], number[], number[]>(
        remove(startIndex, 1),
        insert(endIndex, selectedCards[startIndex])
      )(selectedCards);
      setSelectedCards(newSelection);
    },
    [selectedCards]
  );

  return {
    selectedCards,
    onCardClick,
    onClearSelection,
    onUndo,
    reorderSelection,
  };
};
