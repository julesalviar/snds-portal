export function getPortalApiUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';
}

export interface TotalVisitorCountResponse {
  success: boolean;
  data: { count: number };
  meta: { timestamp: string };
}

async function parseTotalVisitorCountResponse(
  response: Response,
): Promise<number | null> {
  if (!response.ok) {
    return null;
  }

  const body = (await response.json()) as TotalVisitorCountResponse;
  return body.data.count;
}

export async function fetchTotalVisitorCount(): Promise<number | null> {
  try {
    const response = await fetch(
      `${getPortalApiUrl()}/widgets/visitor-count/total`,
      { credentials: 'omit' },
    );

    return parseTotalVisitorCountResponse(response);
  } catch {
    return null;
  }
}

export async function recordPortalVisitorHit(): Promise<number | null> {
  try {
    const response = await fetch(
      `${getPortalApiUrl()}/widgets/visitor-count/total/hit`,
      {
        method: 'POST',
        credentials: 'omit',
      },
    );

    return parseTotalVisitorCountResponse(response);
  } catch {
    return null;
  }
}
