import React, { memo } from 'react';
import './styles.css';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = memo(({ children, onClick }: Props) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
));
