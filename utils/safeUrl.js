/**
 * Safe URL utility - Next.js equivalent of Angular's SafeUrlPipe
 * Validates and returns a safe URL string for use in iframe src attributes
 * 
 * @param {string} url - The URL to sanitize
 * @returns {string} - A safe URL string
 */
export function safeUrl(url) {
    if (!url || typeof url !== 'string') {
        return '';
    }

    // Basic URL validation - check if it's a valid URL format
    try {
        const urlObj = new URL(url);
        // Only allow http, https, and data URLs for security
        const allowedProtocols = ['http:', 'https:', 'data:'];
        if (!allowedProtocols.includes(urlObj.protocol)) {
            console.warn('Unsafe URL protocol detected:', urlObj.protocol);
            return '';
        }
        return url;
    } catch (e) {
        // If URL parsing fails, it might be a relative URL or malformed
        // For iframe src, we'll allow it but log a warning
        console.warn('Invalid URL format:', url);
        return url;
    }
}
