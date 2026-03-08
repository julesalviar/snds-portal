import { useState, useMemo, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TenantCard from '../components/TenantCard';
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { Tenant, RegionData, RegionOption } from '../types';

interface HomeProps {
  tenants: Tenant[];
  regionsData: RegionData[];
}

export async function getStaticProps() {
  const apiUrl = process.env.API_PUBLIC_TENANT_URL;
  const apiRegionUrl = process.env.API_REGION_URL;
  const auth = Buffer.from(
    `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
  ).toString('base64');

  let tenants: Tenant[] = [];
  let regionsData: RegionData[] = [];

  try {
    const res = await fetch(apiUrl!, {
      headers: { Authorization: `Basic ${auth}` },
    });

    if (res.ok) {
      tenants = await res.json();
    } else {
      console.warn(`API returned status ${res.status}. Using empty tenants array.`);
    }
  } catch (error) {
    console.warn('Failed to fetch tenants during build:', (error as Error).message);
    console.warn('Using empty tenants array. The page will build successfully.');
    tenants = [];
  }

  if (apiRegionUrl) {
    try {
      const regionRes = await fetch(apiRegionUrl, {
        headers: { Authorization: `Basic ${auth}` },
      });

      if (regionRes.ok) {
        regionsData = await regionRes.json();
      } else {
        console.warn(`Region API returned status ${regionRes.status}. Using empty regions array.`);
      }
    } catch (error) {
      console.warn('Failed to fetch regions during build:', (error as Error).message);
      console.warn('Using empty regions array. The page will build successfully.');
      regionsData = [];
    }
  }

  return {
    props: { tenants, regionsData },
  };
}

export default function Home({ tenants, regionsData }: HomeProps) {
  const regionOptions = useMemo((): RegionOption[] => {
    if (!regionsData || regionsData.length === 0) return [];

    const options: RegionOption[] = [];

    regionsData.forEach((region) => {
      if (region.active === true && region.display === true) {
        options.push({
          name: region.name,
          type: 'region',
        });
      }
    });

    return options;
  }, [regionsData]);

  const defaultRegion = useMemo(() => 'all', []);

  const [selectedRegion, setSelectedRegion] = useState('all');
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && regionOptions.length > 0) {
      setSelectedRegion(defaultRegion);
      hasInitialized.current = true;
    }
  }, [regionOptions, defaultRegion]);

  const filteredTenants = useMemo(() => {
    if (!tenants || tenants.length === 0) return [];
    if (selectedRegion === 'all') return tenants;

    const selectedOption = regionOptions.find((opt) => opt.name === selectedRegion);
    if (!selectedOption) return tenants;

    return tenants.filter((tenant) => {
      const tenantRegion = tenant.region;
      if (!tenantRegion) return false;

      if (selectedOption.type === 'region') {
        return tenantRegion === selectedOption.name;
      }

      if (selectedOption.type === 'division') {
        return tenantRegion === selectedOption.name;
      }

      return false;
    });
  }, [tenants, selectedRegion, regionOptions]);

  const tenantsByRegion = useMemo(() => {
    if (!filteredTenants || filteredTenants.length === 0) return [];

    const grouped: Record<string, Tenant[]> = {};

    filteredTenants.forEach((tenant) => {
      const region = tenant.region || 'Unknown';
      if (!grouped[region]) {
        grouped[region] = [];
      }
      grouped[region].push(tenant);
    });

    return Object.entries(grouped)
      .map(([region, tenants]) => ({ region, tenants }))
      .sort((a, b) => a.region.localeCompare(b.region));
  }, [filteredTenants]);

  const displayRegion = useMemo(() => {
    if (selectedRegion === 'all') {
      return 'ALL';
    }
    return selectedRegion.toUpperCase();
  }, [selectedRegion]);

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              marginBottom: 3,
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              {displayRegion} {displayRegion === 'PRACTICE SITE' ? '' : 'DIVISIONS'}
            </Typography>
            {regionOptions.length > 0 && (
              <FormControl
                sx={{
                  minWidth: { xs: '100%', sm: 200 },
                }}
                size="small"
              >
                <InputLabel id="region-select-label">Filter by Region</InputLabel>
                <Select
                  labelId="region-select-label"
                  id="region-select"
                  value={selectedRegion}
                  label="Filter by Region"
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <MenuItem value="all">All Regions</MenuItem>
                  {regionOptions.map((option) => (
                    <MenuItem key={`${option.type}-${option.name}`} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
          {tenantsByRegion && tenantsByRegion.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tenantsByRegion.map(({ region, tenants }) => (
                <Box key={region} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {selectedRegion === 'all' && (
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        marginBottom: 1,
                        textTransform: 'uppercase',
                      }}
                    >
                      {region}
                    </Typography>
                  )}
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
                    {tenants.map((tenant, index) => (
                      <TenantCard key={tenant.tenantName ?? tenant.title ?? index} tenant={tenant} />
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', padding: 4 }}>
              <Typography variant="body1" color="text.secondary">
                {selectedRegion === 'all'
                  ? 'No divisions available at the moment.'
                  : 'No divisions found for the selected region.'}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
