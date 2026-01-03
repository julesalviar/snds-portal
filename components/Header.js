import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Set current path after mount to avoid hydration mismatch
        setCurrentPath(router.asPath || router.pathname || '');
    }, [router.asPath, router.pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const isActive = (path) => {
        if (!currentPath) return false;
        // Handle exact match and root path
        if (path === '/') {
            return currentPath === '/' || currentPath === '';
        }
        return currentPath === path || currentPath.startsWith(path + '/');
    };
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
                    animation: 'waveFlow 150s linear infinite',
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)',
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
                    animation: 'waveFlow 300s linear infinite reverse',
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)',
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
            <Toolbar sx={{ 
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
            }}>
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                    }}
                >
                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                        SNDS WEB PORTAL
                    </Box>
                    <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                        SNDS
                    </Box>
                </Typography>
                
                {/* Desktop Navigation - M3 Style */}
                <Box sx={{ 
                    display: { xs: 'none', md: 'flex' }, 
                    gap: 1 
                }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Button 
                            variant={isActive('/') ? 'contained' : 'text'}
                            color="inherit" 
                            startIcon={<HomeIcon />}
                            sx={{ 
                                textTransform: 'none',
                                fontWeight: isActive('/') ? 600 : 500,
                                padding: '10px 24px',
                                borderRadius: '28px',
                                minWidth: 'auto',
                                backgroundColor: isActive('/') 
                                    ? 'rgba(255, 255, 255, 0.2)' 
                                    : 'transparent',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                },
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="/about" style={{ textDecoration: 'none' }}>
                        <Button 
                            variant={isActive('/about') ? 'contained' : 'text'}
                            color="inherit" 
                            startIcon={<InfoIcon />}
                            sx={{ 
                                textTransform: 'none',
                                fontWeight: isActive('/about') ? 600 : 500,
                                padding: '10px 24px',
                                borderRadius: '28px',
                                minWidth: 'auto',
                                backgroundColor: isActive('/about') 
                                    ? 'rgba(255, 255, 255, 0.2)' 
                                    : 'transparent',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                },
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            About
                        </Button>
                    </Link>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <Button 
                            variant={isActive('/contact') ? 'contained' : 'text'}
                            color="inherit" 
                            startIcon={<ContactMailIcon />}
                            sx={{ 
                                textTransform: 'none',
                                fontWeight: isActive('/contact') ? 600 : 500,
                                padding: '10px 24px',
                                borderRadius: '28px',
                                minWidth: 'auto',
                                backgroundColor: isActive('/contact') 
                                    ? 'rgba(255, 255, 255, 0.2)' 
                                    : 'transparent',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                },
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            Contact
                        </Button>
                    </Link>
                </Box>

                {/* Mobile Menu Button - M3 Style */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ 
                        display: { xs: 'block', md: 'none' },
                        padding: '12px',
                        borderRadius: '24px',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        },
                        transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer - M3 Navigation Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 320,
                        backgroundColor: 'primary.main',
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
                        `,
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.24)',
                    },
                }}
            >
                <Box sx={{ pt: 2 }}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            px: 3, 
                            py: 2, 
                            fontWeight: 600,
                            color: 'white',
                        }}
                    >
                        Navigation
                    </Typography>
                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
                    <List sx={{ px: 2, py: 1 }}>
                        <ListItem disablePadding>
                            <Link href="/" style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    selected={isActive('/')}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        borderRadius: '28px',
                                        mb: 0.5,
                                        backgroundColor: isActive('/') 
                                            ? 'rgba(255, 255, 255, 0.16)' 
                                            : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                            },
                                        },
                                        transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <HomeIcon sx={{ mr: 2, color: 'white' }} />
                                    <ListItemText 
                                        primary="Home" 
                                        sx={{ 
                                            color: 'white',
                                            '& .MuiListItemText-primary': {
                                                fontWeight: isActive('/') ? 600 : 500,
                                                fontSize: '0.9375rem',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link href="/about" style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    selected={isActive('/about')}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        borderRadius: '28px',
                                        mb: 0.5,
                                        backgroundColor: isActive('/about') 
                                            ? 'rgba(255, 255, 255, 0.16)' 
                                            : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                            },
                                        },
                                        transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <InfoIcon sx={{ mr: 2, color: 'white' }} />
                                    <ListItemText 
                                        primary="About" 
                                        sx={{ 
                                            color: 'white',
                                            '& .MuiListItemText-primary': {
                                                fontWeight: isActive('/about') ? 600 : 500,
                                                fontSize: '0.9375rem',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    selected={isActive('/contact')}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        borderRadius: '28px',
                                        backgroundColor: isActive('/contact') 
                                            ? 'rgba(255, 255, 255, 0.16)' 
                                            : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.16)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                                            },
                                        },
                                        transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <ContactMailIcon sx={{ mr: 2, color: 'white' }} />
                                    <ListItemText 
                                        primary="Contact" 
                                        sx={{ 
                                            color: 'white',
                                            '& .MuiListItemText-primary': {
                                                fontWeight: isActive('/contact') ? 600 : 500,
                                                fontSize: '0.9375rem',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}
