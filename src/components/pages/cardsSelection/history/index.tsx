import { memo, useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { Card } from '../../../card';
import { UseCardSelectionType } from '../types';
import './styles.css';

type Props = {
  selectedCards: number[];
  reorderSelection: UseCardSelectionType['reorderSelection'];
};

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

export const History = memo(({ selectedCards, reorderSelection }: Props) => {
  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      if (result.destination)
        reorderSelection(result.source.index, result.destination.index);
    },
    [reorderSelection]
  );

  return (
    <div className="history">
      <h3>History</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards" direction="horizontal">
          {(droppableProvided, snapshot) => (
            <div
              className="history__content"
              ref={droppableProvided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...droppableProvided.droppableProps}
            >
              {selectedCards.map((card, index) => (
                <Draggable
                  key={card}
                  draggableId={card.toString()}
                  index={index}
                >
                  {(provided) => (
                    <>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card index={card} />
                      </div>
                      {index % 4 === 3 && <div className="history__break" />}
                    </>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});
