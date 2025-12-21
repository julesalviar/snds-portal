import { Box, Typography, Container } from '@mui/material';

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
            }}
        >
            <Container>
                <Typography variant="body2">
                    © {new Date().getFullYear()} SNDS. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
