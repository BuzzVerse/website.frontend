import { TypeWriter } from '@pages/ComingSoon/components/TypeWriter';
import { useState } from 'react';

enum TextToType {
  COMING_SOON = 'BuzzVerse coming soon'
}

export function ComingSoon() {
  const [isCompleted, setCompleted] = useState<boolean>(false);

  return (
    <div className="bg-primary h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="bg-secondary h-full flex flex-col justify-center items-center"
        style={{
          minWidth: isCompleted ? '100%' : '0',
          transition: 'min-width 0.2s ease-out 0s'
        }}>
        <div className="h-full flex flex-col justify-center items-center">
          <TypeWriter
            textToType={[TextToType.COMING_SOON]}
            className="text-5xl font-bold text-tertiary tracking-widest uppercase"
            onComplete={() => setCompleted(true)}
          />
        </div>
      </div>
    </div>
  );
}
