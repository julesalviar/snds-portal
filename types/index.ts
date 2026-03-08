export interface Tenant {
  tenantName?: string;
  title?: string;
  url?: string;
  logo?: string;
  region?: string;
}

export interface RegionOption {
  name: string;
  type: 'region' | 'division';
}

export interface RegionData {
  name: string;
  active?: boolean;
  display?: boolean;
}
