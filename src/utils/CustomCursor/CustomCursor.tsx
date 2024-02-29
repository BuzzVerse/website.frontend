import { createContext, ReactNode, useState } from 'react';

type CursorManagerProps = {
  children: ReactNode;
};

export const CursorContext = createContext({
  size: 'small',
  setSize: (_value: string) => {}
});

export function CursorManager(props: CursorManagerProps) {
  const [size, setSize] = useState('small');
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  );
}
