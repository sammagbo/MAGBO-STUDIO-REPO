/**
 * Stealth Telemetry — MAGBO STUDIO
 * 
 * Lightweight event tracking utility for high-value user interactions.
 * Supports multiple backends: Google Analytics (gtag), PostHog, Vercel Analytics,
 * or falls back to a silent console log in development.
 * 
 * No third-party scripts are loaded by this module — it simply dispatches
 * to whichever analytics SDK is already present in the global scope.
 */

interface EventProperties {
      [key: string]: string | number | boolean;
}

/**
 * Dispatches a tracking event to the available analytics provider.
 */
export function trackEvent(eventName: string, properties?: EventProperties): void {
      try {
            // Vercel Analytics (via @vercel/analytics)
            const vercelTrack = (window as unknown as { va?: { track: (name: string, props?: EventProperties) => void } }).va;
            if (vercelTrack?.track) {
                  vercelTrack.track(eventName, properties);
                  return;
            }

            // Google Analytics 4 (gtag.js)
            const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
            if (gtag) {
                  gtag('event', eventName, properties);
                  return;
            }

            // PostHog
            const posthog = (window as unknown as { posthog?: { capture: (name: string, props?: EventProperties) => void } }).posthog;
            if (posthog?.capture) {
                  posthog.capture(eventName, properties);
                  return;
            }

            // Development fallback — silent log
            if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
                  console.log(`[TELEMETRY] ${eventName}`, properties || '');
            }
      } catch {
            // Swallow all errors — telemetry must never crash the app
      }
}

/**
 * ARCHITECTURAL OBSERVABILITY:
 * Tracks the duration of a specific system action (e.g., transition, lazy load).
 */
export function trackActionDuration(actionName: string, durationMs: number, properties?: EventProperties): void {
      trackEvent(`${actionName}_DURATION`, {
            ...properties,
            duration_ms: durationMs,
            performance_tier: durationMs < 300 ? 'optimal' : durationMs < 1000 ? 'nominal' : 'degraded'
      });
}

/**
 * ARCHITECTURAL HEALTH:
 * Tracks system health status (e.g., cold start, transition failure).
 */
export function trackHealthStatus(system: string, status: 'HEALTHY' | 'DEGRADED' | 'FAILED', details?: string): void {
      trackEvent('SYS_HEALTH', {
            system,
            status,
            details: details || 'No additional data.'
      });
}
