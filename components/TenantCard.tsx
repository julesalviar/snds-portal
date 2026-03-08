import { Card, CardContent, CardMedia, Typography, Button, Box, Stack, Avatar } from '@mui/material';
import Link from 'next/link';
import type { Tenant } from '../types';

interface TenantCardProps {
  tenant: Tenant;
}

export default function TenantCard({ tenant }: TenantCardProps) {
  const baseUrl = tenant.url;

  const getInitials = (name: string): string => {
    if (!name) return '?';
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      const first = words[0];
      const last = words[words.length - 1];
      const f = first?.[0];
      const l = last?.[0];
      if (f && l) return (f + l).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const hasLogo = tenant.logo && tenant.logo.trim() !== '';
  const tenantName = tenant.tenantName || tenant.title || 'Unknown';
  const initials = getInitials(tenantName);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {baseUrl ? (
            <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
              {hasLogo ? (
                <CardMedia
                  component="img"
                  image={tenant.logo}
                  alt={tenantName}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: 'contain',
                    borderRadius: 2,
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: 'primary.main',
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {initials}
                </Avatar>
              )}
            </Link>
          ) : (
            hasLogo ? (
              <CardMedia
                component="img"
                image={tenant.logo}
                alt={tenantName}
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: 'contain',
                  borderRadius: 2,
                }}
              />
            ) : (
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: 'primary.main',
                  fontSize: '2.5rem',
                  fontWeight: 600,
                }}
              >
                {initials}
              </Avatar>
            )
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.25 }}>
            {baseUrl ? (
              <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, cursor: 'pointer' }}>
                  {tenantName}
                </Typography>
              </Link>
            ) : (
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                {tenantName}
              </Typography>
            )}
            {baseUrl && (
              <Link
                href={baseUrl}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontSize: '0.75rem',
                    marginTop: 0.25,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {baseUrl}
                </Typography>
              </Link>
            )}
          </Box>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: 3, justifyContent: 'center' }}
        >
          {baseUrl && (
            <>
              <Link href={`${baseUrl}/sign-in`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: 'none', borderRadius: 3 }}
                >
                  Sign In
                </Button>
              </Link>
              <Link href={`${baseUrl}/about-us`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ textTransform: 'none', borderRadius: 3 }}
                >
                  Info
                </Button>
              </Link>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
