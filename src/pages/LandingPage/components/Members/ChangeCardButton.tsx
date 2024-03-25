import React, { ReactNode } from 'react';

interface ButtonProps {
  style: React.CSSProperties;
  onClick: () => void;
  children: ReactNode;
}

export function Button({ style, children, onClick }: ButtonProps) {
  return (
    <button
      className="flex-shrink-0 px-10 py-2 rounded-lg border-none text-white text-lg bg-tertiary transition duration-200 ease-in-out m-2 font-semibold w-40 shadow-md hover:scale-105"
      style={style}
      onClick={onClick}>
      {children}
    </button>
  );
}
