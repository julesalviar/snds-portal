'use client';

import { Box, Container } from '@mui/material';
import VisitorCounter from './VisitorCounter';

/** Transparent strip above the green footer; counter sits bottom-right over page content. */
export default function FooterVisitorStrip() {
  return (
    <Box component="div" className="portal-footer-visitor-bar" aria-hidden={false}>
      <Container maxWidth="lg" className="portal-footer-visitor-bar__container">
        <Box className="portal-footer-visitor-bar__inner">
          <VisitorCounter />
        </Box>
      </Container>
    </Box>
  );
}
