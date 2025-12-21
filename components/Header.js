import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <AppBar 
            position="static" 
            elevation={0} 
            sx={{ 
                backgroundColor: 'primary.main',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-20%',
                    right: '-20%',
                    bottom: '-50%',
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 60%),
                        repeating-conic-gradient(
                            from 0deg at 50% 50%,
                            transparent 0deg,
                            rgba(255, 255, 255, 0.03) 2deg,
                            transparent 4deg,
                            rgba(255, 255, 255, 0.02) 6deg,
                            transparent 8deg
                        )
                    `,
                    pointerEvents: 'none',
                    zIndex: 0,
                    animation: 'float 20s ease-in-out infinite',
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
                            0deg,
                            transparent,
                            transparent 2px,
                            rgba(255, 255, 255, 0.02) 2px,
                            rgba(255, 255, 255, 0.02) 4px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 3px,
                            rgba(255, 255, 255, 0.015) 3px,
                            rgba(255, 255, 255, 0.015) 6px
                        ),
                        radial-gradient(
                            ellipse 200% 100% at 0% 0%,
                            rgba(255, 255, 255, 0.05) 0%,
                            transparent 40%
                        ),
                        radial-gradient(
                            ellipse 200% 100% at 100% 100%,
                            rgba(255, 255, 255, 0.05) 0%,
                            transparent 40%
                        )
                    `,
                    pointerEvents: 'none',
                    zIndex: 0,
                },
                '@keyframes float': {
                    '0%, 100%': {
                        transform: 'translate(0, 0) rotate(0deg)',
                    },
                    '33%': {
                        transform: 'translate(10px, -10px) rotate(2deg)',
                    },
                    '66%': {
                        transform: 'translate(-10px, 10px) rotate(-2deg)',
                    },
                },
            }}
        >
            <Toolbar sx={{ 
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
            }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    SNDS WEB PORTAL
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Button 
                            color="inherit" 
                            sx={{ 
                                textTransform: 'none',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(10px)',
                                color: '#ffffff',
                                fontWeight: 600,
                                padding: '8px 20px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="/about" style={{ textDecoration: 'none' }}>
                        <Button 
                            color="inherit" 
                            sx={{ 
                                textTransform: 'none',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(10px)',
                                color: '#ffffff',
                                fontWeight: 600,
                                padding: '8px 20px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            About
                        </Button>
                    </Link>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <Button 
                            color="inherit" 
                            sx={{ 
                                textTransform: 'none',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(10px)',
                                color: '#ffffff',
                                fontWeight: 600,
                                padding: '8px 20px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Contact
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
