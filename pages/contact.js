import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography, Box, Paper, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Contact() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'background.default',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(https://sdogensan.mysnds.com/assets/sndslogo2.jpg)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        opacity: 0.20,
                        zIndex: 0,
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: { xs: 3, sm: 4, md: 6 },
                            marginTop: 4,
                            marginBottom: 4,
                            borderRadius: 3,
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginBottom: 3,
                            }}
                        >
                            Contact Us
                        </Typography>
                        
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                marginBottom: 4,
                                color: 'text.primary',
                            }}
                        >
                            If SNDS sounds like something you'd like to know more about, please get in touch.
                            We're always happy to discuss it!
                        </Typography>

                        <Box
                            sx={{
                                marginTop: 4,
                                marginBottom: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 3,
                                backgroundColor: 'grey.50',
                                borderRadius: 2,
                            }}
                        >
                            <Avatar
                                src="https://media.mysnds.com/about-us/gensan/sdogensan-1.png"
                                alt="Contact Person"
                                sx={{
                                    width: 200,
                                    height: 200,
                                    marginBottom: 2,
                                    border: '4px solid',
                                    borderColor: 'primary.main',
                                }}
                            />
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    fontWeight: 600,
                                    color: 'primary.main',
                                    marginBottom: 1,
                                    textAlign: 'center',
                                }}
                            >
                                HERVEN A. ALLADO, MST, MAED, RN
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                sx={{
                                    fontSize: '1rem',
                                    color: 'text.secondary',
                                    marginBottom: 2,
                                    textAlign: 'center',
                                }}
                            >
                                Senior Education Program Specialist
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5,
                                    alignItems: 'center',
                                    marginTop: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                    }}
                                >
                                    <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        sx={{
                                            fontSize: '0.95rem',
                                            color: 'text.primary',
                                        }}
                                    >
                                        depedgensan.smn@deped.gov.ph
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                    }}
                                >
                                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        sx={{
                                            fontSize: '0.95rem',
                                            color: 'text.primary',
                                        }}
                                    >
                                        (083) 552-8909
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                    }}
                                >
                                    <PhoneAndroidIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        sx={{
                                            fontSize: '0.95rem',
                                            color: 'text.primary',
                                        }}
                                    >
                                        +63 932 496 3007
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}
