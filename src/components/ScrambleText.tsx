import React, { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';

interface ScrambleTextProps {
      text: string;
      active?: boolean;
      speed?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
      text,
      active = true,
      speed = 60
}) => {
      const [displayText, setDisplayText] = useState(text);

      useEffect(() => {
            if (!active) {
                  setDisplayText(text);
                  return;
            }

            const intervalId = setInterval(() => {
                  const scrambled = text
                        .split('')
                        .map(char => {
                              // Preserve spaces
                              if (char === ' ') return ' ';
                              // 30% chance to show a random cypher character, 70% chance to show the correct char
                              // This creates a glitching effect rather than a full scramble
                              return Math.random() > 0.7
                                    ? CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                                    : char;
                        })
                        .join('');
                  setDisplayText(scrambled);
            }, speed);

            return () => clearInterval(intervalId);
      }, [text, active, speed]);

      return (
            <>
                  <span className="sr-only">{text}</span>
                  <span aria-hidden="true" className="font-mono">{displayText}</span>
            </>
      );
};
