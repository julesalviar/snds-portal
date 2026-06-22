'use client';

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchTotalVisitorCount } from '../lib/visitor-count';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    fetchTotalVisitorCount().then((value) => {
      if (value === null) {
        setFailed(true);
        return;
      }
      setCount(value);
    });
  }, []);

  if (failed) {
    return null;
  }

  const digits = count === null ? ['-'] : count.toString().split('');

  return (
    <Box
      className={`portal-visitor-counter${
        visible ? ' portal-visitor-counter--visible' : ''
      }${count === null ? ' portal-visitor-counter--loading' : ''}`}
      aria-live="polite"
      aria-busy={count === null}
    >
      <Box component="span" className="portal-visitor-counter__label">
        Visitors
      </Box>
      <Box component="span" className="portal-visitor-counter__digits">
        {digits.map((digit, index) => (
          <Box
            component="span"
            key={`${index}-${digit}`}
            className={`portal-visitor-counter__digit${
              count === null ? ' portal-visitor-counter__digit--loading' : ''
            }`}
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            {digit}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
