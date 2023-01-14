import { memo } from 'react';
import { Button } from '../../../common';
import './styles.css';

type Props = {
  onClearSelection: () => void;
  onUndo: () => void;
};

export const Toolbar = memo(({ onClearSelection, onUndo }: Props) => (
  <div className="cardStoring__toolbar">
    <Button onClick={onClearSelection}>Clear Selection</Button>
    <Button onClick={onUndo}>Undo Selection</Button>
  </div>
));
