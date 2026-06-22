'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import {
  fetchTotalVisitorCount,
  recordPortalVisitorHit,
} from '../lib/visitor-count';

const VISITOR_HIT_SESSION_PREFIX = 'snds:portal-visitor-hit:';

function getCurrentPathname(appPathname: string | null): string {
  if (appPathname) {
    return appPathname;
  }

  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }

  return '/';
}

function shouldRecordVisitorHit(pathname: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const key = `${VISITOR_HIT_SESSION_PREFIX}${pathname}`;
  if (sessionStorage.getItem(key)) {
    return false;
  }

  sessionStorage.setItem(key, '1');
  return true;
}

export default function VisitorCounter() {
  const appPathname = usePathname();
  const pathname = getCurrentPathname(appPathname);
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    const recordHit = shouldRecordVisitorHit(pathname);
    const countPromise = recordHit
      ? recordPortalVisitorHit()
      : fetchTotalVisitorCount();

    countPromise.then(async (value) => {
      if (value !== null) {
        setCount(value);
        return;
      }

      if (recordHit) {
        const fallbackCount = await fetchTotalVisitorCount();
        if (fallbackCount !== null) {
          setCount(fallbackCount);
          return;
        }
      }

      setFailed(true);
    });
  }, [pathname]);

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
