import { Box, Typography, Container } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                padding: 3,
                marginTop: 'auto',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        repeating-linear-gradient(
                            45deg,
                            transparent 0px,
                            transparent 24px,
                            rgba(255, 255, 255, 0.06) 24px,
                            rgba(255, 255, 255, 0.06) 28px
                        ),
                        repeating-linear-gradient(
                            45deg,
                            transparent 0px,
                            transparent 18px,
                            rgba(255, 255, 255, 0.05) 18px,
                            rgba(255, 255, 255, 0.05) 20px
                        ),
                        repeating-linear-gradient(
                            45deg,
                            transparent 0px,
                            transparent 12px,
                            rgba(255, 255, 255, 0.04) 12px,
                            rgba(255, 255, 255, 0.04) 14px
                        ),
                        repeating-linear-gradient(
                            45deg,
                            transparent 0px,
                            transparent 8px,
                            rgba(255, 255, 255, 0.03) 8px,
                            rgba(255, 255, 255, 0.03) 9px
                        ),
                        repeating-linear-gradient(
                            45deg,
                            transparent 0px,
                            transparent 4px,
                            rgba(255, 255, 255, 0.02) 4px,
                            rgba(255, 255, 255, 0.02) 5px
                        )
                    `,
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 0%',
                    pointerEvents: 'none',
                    zIndex: 0,
                    animation: 'waveFlow 60s linear infinite',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        repeating-linear-gradient(
                            -45deg,
                            transparent 0px,
                            transparent 20px,
                            rgba(255, 255, 255, 0.05) 20px,
                            rgba(255, 255, 255, 0.05) 24px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent 0px,
                            transparent 14px,
                            rgba(255, 255, 255, 0.04) 14px,
                            rgba(255, 255, 255, 0.04) 16px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent 0px,
                            transparent 10px,
                            rgba(255, 255, 255, 0.03) 10px,
                            rgba(255, 255, 255, 0.03) 11px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent 0px,
                            transparent 6px,
                            rgba(255, 255, 255, 0.02) 6px,
                            rgba(255, 255, 255, 0.02) 7px
                        )
                    `,
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 0%',
                    pointerEvents: 'none',
                    zIndex: 0,
                    animation: 'waveFlow 120s linear infinite reverse',
                },
                '@keyframes waveFlow': {
                    '0%': {
                        backgroundPosition: '0% 0%',
                    },
                    '25%': {
                        backgroundPosition: '10% 15%',
                    },
                    '50%': {
                        backgroundPosition: '20% 10%',
                    },
                    '75%': {
                        backgroundPosition: '15% 20%',
                    },
                    '100%': {
                        backgroundPosition: '0% 0%',
                    },
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} SNDS. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="span">
                        <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
                            Privacy Policy
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
