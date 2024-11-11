// components/TypingEffect.js
"use client";

import { useState, useEffect, useRef } from 'react';

export default function TypingEffect({ phrases }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex.current];
      if (isDeleting) {
        charIndex.current -= 1;
      } else {
        charIndex.current += 1;
      }

      setDisplayedText(currentPhrase.substring(0, charIndex.current));

      if (!isDeleting && charIndex.current === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex.current === 0) {
        setIsDeleting(false);
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      }
    };

    const typingSpeed = isDeleting ? 80 : 125;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isDeleting, phrases]);

  return (
    <span>
      <span className="text-cyan-400" style={{userSelect: 'none'}}>{displayedText}</span>
      <span className="blinking-cursor" style={{userSelect: 'none'}}>‎</span>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block; 
          width: 1px;
          background-color: cyan;
          animation: blink 0.7s steps(1) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
