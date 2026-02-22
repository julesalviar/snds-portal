import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography, Box, Paper } from '@mui/material';

export default function Privacy() {
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
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginBottom: 0.5,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                lineHeight: 1.3,
                            }}
                        >
                            Privacy Policy of the School Needs Data System (SNDS)
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                color: 'text.secondary',
                                marginBottom: 3,
                            }}
                        >
                            Last Updated: January 29, 2026
                        </Typography>

                        {/* SECTION 1 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Introduction
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
                            <p>The School Needs Data System (SNDS) is the official web-based partnership engagement system of the Schools Division Office of General Santos City’s Social Mobilization and Networking Unit. We are committed to protecting the privacy of all stakeholders in compliance with the Philippine Data Privacy Act of 2012 (RA 10173) and its Implementing Rules and Regulations.</p>
                            <p>This Privacy Policy explains how SNDS collects, uses, stores, and protects personal information of schools, stakeholders, and partners.</p>
                        </Typography>

                        {/* SECTION 2 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Scope and Applicability
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
                            <p>This Privacy Policy applies to all individuals and organizations who access or use the School Needs Data System (SNDS). Specifically, our users include:</p>
                        </Typography>

                        {/* SUBSECTION: Stakeholders */}
                        <Box sx={{ pl: { xs: 2, sm: 3, md: 4 } }}>
                            <Typography
                                variant="h6"
                                component="h3"
                                sx={{
                                    fontWeight: 600,
                                    color: 'primary.main',
                                    marginTop: 3,
                                    marginBottom: 2,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                }}
                            >
                                Stakeholders
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
                                <p>External partners such as private sector entities, civil society organizations, local government units (LGUs), barangay officials (BLGUs), international organizations, and other groups engaged in supporting schools and learners. Stakeholders use SNDS to access information, provide resources, monitor partnership activities, and give feedback on educational initiatives.</p>
                            </Typography>

                            {/* SUBSECTION: School Representatives */}
                            <Typography
                                variant="h6"
                                component="h3"
                                sx={{
                                    fontWeight: 600,
                                    color: 'primary.main',
                                    marginTop: 3,
                                    marginBottom: 2,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                }}
                            >
                                School Representatives
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
                                <p>Authorized personnel from public schools and learning centers, including principals, teachers, program holders, and administrative staff. School representatives use SNDS to manage Annual Implementation Plans (AIP), track resource utilization, monitor partnership agreements, and generate reports for accountability and transparency.</p>
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
                            <p>By defining these user groups, SNDS ensures that all data processing activities are transparent, legitimate, and proportionate to the needs of the education sector.</p>
                        </Typography>

                        {/* SECTION 5 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Consent
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
                            <p>By accessing and using SNDS, all stakeholders and school representatives voluntarily consent to the collection, use, storage, and processing of their personal and organizational data as described in this Privacy Policy.</p>
                            <p>Users acknowledge that their information will be processed solely for legitimate educational and partnership purposes.</p>
                            <p>Users may withdraw consent at any time by contacting the Data Protection Officer (DPO). Withdrawal of consent may affect the ability to fully access or use certain features of SNDS.</p>
                            <p>Continued use of SNDS after updates to this Privacy Policy constitutes acceptance of the revised terms.</p>
                        </Typography>

                        {/* SECTION 6 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Information We Collect
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                marginBottom: 2,
                                color: 'text.primary',
                            }}
                        >
                            SNDS may collect the following categories of data:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Personal Information:</Box>
                                    {' '}Names, contact details, organizational affiliation, and other identifiers provided during registration or partnership engagement.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>School and Partnership Data:</Box>
                                    {' '}Information on partnership agreements, performance metrics, financial reports, and school programs, projects, and activities as reflected in their Annual Implementation Plans (AIP).
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>School Division Office Program Holders:</Box>
                                    {' '}Information on partnerships, and details of their program, project, and activities for the year.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Usage Data:</Box>
                                    {' '}IP addresses, browser type, device information, and activity logs when accessing the system.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Stakeholder Feedback:</Box>
                                    {' '}Comments, suggestions, and evaluations submitted through the platform.
                                </Typography>
                            </Box>
                        </Box>
                        {/* SECTION 7 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Purpose of Data Processing
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
                            We process personal and organizational data for the following legitimate purposes:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Facilitate collaboration between schools and internal and external partners.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Manage partnership agreements, performance metrics, and financial reporting.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Provide transparency and accountability in resource utilization.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Generate reports for monitoring and evaluation of educational programs.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Enable stakeholders to access relevant information and provide feedback.
                                </Typography>
                            </Box>
                        </Box>

                        {/* SECTION 8 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Data Sharing and Disclosure
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
                            <p>SNDS does not sell personal information. Data may be shared only under these circumstances:</p>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Authorized Stakeholders:</Box>
                                    {' '}Schools, School Division Office, and program holders for legitimate educational purposes.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Government Agencies:</Box>
                                    {' '}When required by law or regulation.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Third-Party Service Providers:</Box>
                                    {' '}For technical support and system maintenance, bound by confidentiality agreements.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Usage Data:</Box>
                                    {' '}IP addresses, browser type, device information, and activity logs when accessing the system.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Legal Compliance:</Box>
                                    {' '}To protect rights, safety, and comply with lawful orders.
                                </Typography>
                            </Box>
                        </Box>

                        {/* SECTION 9 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Data Retention
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
                            <p>Personal and organizational data are retained only for as long as necessary to fulfill the purposes stated above or as required by law. Once retention periods lapse, data will be securely deleted or anonymized.</p>
                        </Typography>

                        {/* SECTION 10 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Security Measures
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
                            <p>SNDS implements organizational, physical, and technical safeguards to protect data, including:</p>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Secure servers and encrypted connections.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Access controls and authentication protocols.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    {' '}Regular monitoring and system audits.
                                </Typography>
                            </Box>
                        </Box>
                        {/* SECTION 11 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Your Rights Under the Data Privacy Act
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
                            <p>Stakeholders have the following rights:</p>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3, '& li': { mb: 1 } }}>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to be Informed:</Box>
                                    {' '}Know how your data is collected and processed.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to Access:</Box>
                                    {' '}Request a copy of your personal data held by SNDS.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to Rectification:</Box>
                                    {' '}Correct inaccurate or outdated information.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to Erasure or Blocking:</Box>
                                    {' '}Request deletion of data under certain conditions.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to Object:</Box>
                                    {' '}Decline processing of data for specific purposes.
                                </Typography>
                            </Box>
                            <Box component="li">
                                <Typography variant="body1" component="span" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                                    <Box component="span" sx={{ fontWeight: 600 }}>Right to Data Portability:</Box>
                                    {' '}Obtain and transfer your data in a structured format.
                                </Typography>
                            </Box>
                        </Box>
                        {/* SECTION 12 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Children&apos;s Privacy
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
                            <p>SNDS does not knowingly collect personal information from children under 13 without parental or guardian consent. If such data is inadvertently collected, we will take steps to delete it immediately.</p>
                        </Typography>

                        {/* SECTION 13 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Changes to This Policy
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
                            <p>We may update this Privacy Policy to reflect changes in laws, regulations, or system improvements. Updates will be posted on this page with a revised date.</p>
                        </Typography>

                        {/* SECTION 14 */}
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                marginTop: 4,
                                marginBottom: 2,
                                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                            }}
                        >
                            Contact Information
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
                            For questions, concerns, or to exercise your data privacy rights, please contact:
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
                            Data Protection Officer (DPO):
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: 'text.primary',
                                fontWeight: 600
                            }}
                        >
                            HERVEN A. ALLADO, MST, MAED, RN
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                            Senior Education Program Specialist
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                            Schools Division Office of General Santos City
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                            Tiongson Street, Barangay Lagao, General Santos City
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                            Email: depedgensan.smn@deped.gov.ph
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                            Phone: 09324963007
                        </Typography>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}
