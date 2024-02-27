import { ReactElement } from 'react';
import { ReactTyped } from 'react-typed';

interface TypeWriterProps {
  textToType: string[];
  typespeed?: number;
  className?: string;
  children?: ReactElement | undefined;
  onComplete?: () => void;
}

export function TypeWriter({
  textToType,
  typespeed = 100,
  className,
  onComplete
}: TypeWriterProps) {
  return (
    <p className={className}>
      <ReactTyped
        strings={textToType}
        typeSpeed={typespeed}
        onComplete={onComplete}
      />
    </p>
  );
}
