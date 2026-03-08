/**
 * Safe URL utility - Next.js equivalent of Angular's SafeUrlPipe
 * Validates and returns a safe URL string for use in iframe src attributes
 */
export function safeUrl(url: string | null | undefined): string {
  if (!url || typeof url !== 'string') {
    return '';
  }

  try {
    const urlObj = new URL(url);
    const allowedProtocols = ['http:', 'https:', 'data:'];
    if (!allowedProtocols.includes(urlObj.protocol)) {
      console.warn('Unsafe URL protocol detected:', urlObj.protocol);
      return '';
    }
    return url;
  } catch {
    console.warn('Invalid URL format:', url);
    return url;
  }
}
