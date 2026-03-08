import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography, Box, Paper } from '@mui/material';
import { safeUrl } from '../utils/safeUrl';

export default function About() {
  const [mapUrl] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0069734418703!2d125.18419087565357!3d6.129762827612256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79e4c032de585%3A0xeafcf0b90e0f0abe!2sDepEd%20GENSAN%20Division%20Office!5e0!3m2!1sen!2sph!4v1759661556619!5m2!1sen!2sph');

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
          padding: { xs: 1, sm: 2, md: 3 },
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
            opacity: 0.2,
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
              position: 'relative',
            }}
          >
            <Typography
              variant="caption"
              component="p"
              sx={{
                position: 'absolute',
                top: { xs: 16, sm: 20, md: 24 },
                right: { xs: 16, sm: 20, md: 24 },
                fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.85rem' },
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              IPO Registration Certificate No. N-2021-00465
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                marginBottom: 3,
              }}
            >
              About Us
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: 5,
                marginTop: 2,
              }}
            >
              <Box
                component="img"
                src="https://media.mysnds.com/portal/logosnds-2.png"
                alt="SNDS Logo"
                sx={{
                  height: { xs: '80px', sm: '120px', md: '260px' },
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: 1,
                }}
              />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  marginBottom: 1,
                  fontSize: { xs: '1.75rem', sm: '2.3rem', md: '3rem' },
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                }}
              >
                SNDS
              </Typography>

              <Typography
                variant="h6"
                component="p"
                sx={{
                  fontWeight: 400,
                  color: 'text.primary',
                  fontStyle: 'italic',
                  marginBottom: 3,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Strengthening Network of Partners through Digitally-Driven System
              </Typography>
            </Box>

            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 3,
                color: 'text.primary',
              }}
            >
              The School Needs Data System (SNDS) is the official web-based partnership engagement
              system of the Schools Division Office of General Santos City&apos;s Social Mobilization and
              Networking Unit, located on Tiongson Street, Barangay Lagao. SNDS provides a centralized
              platform for collaboration between schools and external partners,
              including private sector entities, civil society organizations,
              and international organizations, to exchange information and provide
              feedback on local partnership activities.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 3,
                color: 'text.primary',
              }}
            >
              SNDS includes modules for managing partnership agreements, performance metrics, and
              financial reporting. With user-friendly dashboards, a powerful search engine, and
              report generation capabilities, SNDS is accessible to all stakeholders.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 3,
                color: 'text.primary',
              }}
            >
              By centralizing information and promoting collaboration, SNDS enhances transparency,
              public participation, and accountability among public schools, stakeholders, and the
              communities they serve. Currently, it is used by other divisions in the region. (see google map below).
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                marginTop: 4,
                marginBottom: 2,
              }}
            >
              What is School Needs Data System (SNDS)?
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 3,
                color: 'text.primary',
              }}
            >
              It is a web-based partnership system that serves as an information hub reflecting all
              the needs of the schools/learning centers as outlined in their respective Annual Implementation Plans (AIP).
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                marginTop: 4,
                marginBottom: 2,
              }}
            >
              School Needs Data Goal
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 3,
                color: 'text.primary',
              }}
            >
              Strengthen public-private partnerships to generate continuous support that is responsive to the needs of the learners.
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                marginTop: 4,
                marginBottom: 2,
              }}
            >
              What does SNDS offer?
            </Typography>

            <Box sx={{ marginBottom: 3, pl: 3 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  marginTop: 2,
                  marginBottom: 1,
                }}
              >
                School Level
              </Typography>
              <Box
                component="ul"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  pl: 3,
                  mb: 2,
                  '& li': { mb: 1 },
                }}
              >
                <li>serves as a relevant tool for resource and project management</li>
                <li>tracks utilization of funds coming from School MOOE, School Canteen, School IGP,
                  SPTA, BLGU, LGU, SEF, National Funded Programs & Projects, and other sources to
                  support the accomplishment of the AIP.</li>
                <li>ensures that stakeholders are working along with the plans indicated in the AIP</li>
                <li>consolidates generated resources and profiles stakeholders</li>
                <li>generates DPDS report</li>
              </Box>

              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  marginTop: 3,
                  marginBottom: 1,
                }}
              >
                Division Level
              </Typography>
              <Box
                component="ul"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  pl: 3,
                  mb: 2,
                  '& li': { mb: 1 },
                }}
              >
                <li>provide stakeholders with a clear picture of the educational needs of the schools,
                  districts, and divisions (school needs menu is categorized into infra and non-infra
                  and a special feature that profiles our senior high school learners)</li>
                <li>facilitates equitable distribution of resources</li>
                <li>monitor partnership initiatives entered by public schools/LCs and their
                  stakeholders</li>
                <li>consolidate generated resources at the school, district, & division level through
                  partnership</li>
                <li>consolidates stakeholders&apos; profile</li>
                <li>facilitates ease of monitoring and evaluation of program holders&apos; implementation
                  of their annual plans</li>
                <li>provides relevant information for our program holders that aids in providing
                  technical assistance and monitoring and evaluation.</li>
              </Box>

              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  marginTop: 3,
                  marginBottom: 1,
                }}
              >
                Stakeholder Level
              </Typography>
              <Box
                component="ul"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  pl: 3,
                  mb: 2,
                  '& li': { mb: 1 },
                }}
              >
                <li>provides access to relevant information for future engagements</li>
                <li>makes partnership engagement easier</li>
                <li>facilitates purposive engagement</li>
                <li>serves as a feedback mechanism between the school and stakeholders –
                  (i.e., the status of the program & transparency)</li>
              </Box>
            </Box>

            {mapUrl && (
              <Box
                sx={{
                  marginTop: 4,
                  marginBottom: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src={safeUrl(mapUrl)}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
