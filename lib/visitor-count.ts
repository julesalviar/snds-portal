export function getPortalApiUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';
}

export interface TotalVisitorCountResponse {
  success: boolean;
  data: { count: number };
  meta: { timestamp: string };
}

const PORTAL_ACTIVE_SESSION_STORAGE_KEY = 'snds:portal-visitor-session';
const PORTAL_VISITOR_HIT_RECORDED_STORAGE_KEY = 'snds:portal-visitor-hit-recorded';

async function parseTotalVisitorCountResponse(
  response: Response,
): Promise<number | null> {
  if (!response.ok) {
    return null;
  }

  const body = (await response.json()) as TotalVisitorCountResponse;
  return body.data.count;
}

export function getPortalVisitorSessionId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  let sessionId = sessionStorage.getItem(PORTAL_ACTIVE_SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `portal-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem(PORTAL_ACTIVE_SESSION_STORAGE_KEY, sessionId);
  }

  return sessionId;
}

export function hasRecordedPortalVisitorHitThisSession(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return sessionStorage.getItem(PORTAL_VISITOR_HIT_RECORDED_STORAGE_KEY) === '1';
}

export function markPortalVisitorHitRecordedThisSession(): void {
  if (typeof window === 'undefined') {
    return;
  }

  sessionStorage.setItem(PORTAL_VISITOR_HIT_RECORDED_STORAGE_KEY, '1');
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

export async function recordPortalVisitorHit(
  sessionId: string,
): Promise<number | null> {
  try {
    const response = await fetch(
      `${getPortalApiUrl()}/widgets/visitor-count/total/hit`,
      {
        method: 'POST',
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      },
    );

    return parseTotalVisitorCountResponse(response);
  } catch {
    return null;
  }
}
