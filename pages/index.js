import Header from "../components/Header";
import Footer from "../components/Footer";
import TenantCard from "../components/TenantCard";
import { Container, Typography, Box } from '@mui/material';

export async function getStaticProps() {
    const apiUrl = process.env.API_URL;
    const auth = Buffer.from(
        `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
    ).toString('base64');
    
    let tenants = [];
    
    try {
        const res = await fetch(apiUrl, {
            headers: { Authorization: `Basic ${auth}` },
        });
        
        if (res.ok) {
            tenants = await res.json();
        } else {
            console.warn(`API returned status ${res.status}. Using empty tenants array.`);
        }
    } catch (error) {
        console.warn('Failed to fetch tenants during build:', error.message);
        console.warn('Using empty tenants array. The page will build successfully.');
        // Return empty array to allow build to succeed
        tenants = [];
    }

    return {
        props: { tenants },
        // Revalidate every 3600 seconds (1 hour) to keep data fresh
        revalidate: 3600,
    };
}

export default function Home({ tenants }) {
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
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            marginBottom: 3,
                            color: 'primary.main',
                        }}
                    >
                        SNDS DIVISIONS
                    </Typography>
                    {tenants && tenants.length > 0 ? (
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(3, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                },
                                gap: 3,
                            }}
                        >
                            {tenants.map((tenant) => (
                                <TenantCard key={tenant.tenantName} tenant={tenant} />
                            ))}
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center', padding: 4 }}>
                            <Typography variant="body1" color="text.secondary">
                                No tenants available at the moment.
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}
