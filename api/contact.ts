import type { VercelRequest, VercelResponse } from '@vercel/node';

// Extremely basic in-memory rate limiting.
// In a true production environment with 100k+ users, this would use Redis (Upstash/Vercel KV).
// But this is much better than client-side rate limiting which can be bypassed.
const rateLimit = new Map<string, number[]>();

export default function handler(
      request: VercelRequest,
      response: VercelResponse,
) {
      if (request.method !== 'POST') {
            return response.status(405).json({ error: 'Method not allowed' });
      }

      // Get IP (Vercel sets this header)
      const ip = request.headers['x-forwarded-for'] || 'unknown';
      const ipString = Array.isArray(ip) ? ip[0] : ip;

      // Rate limit: Max 5 requests per 15 minutes per IP
      const now = Date.now();
      const windowMs = 15 * 60 * 1000;

      if (ipString !== 'unknown') {
            let requests = rateLimit.get(ipString) || [];
            requests = requests.filter(time => now - time < windowMs);

            if (requests.length >= 5) {
                  return response.status(429).json({ error: 'Too many requests, please try again later.' });
            }

            requests.push(now);
            rateLimit.set(ipString, requests);
      }

      // Example payload processing (in a real app, this would use Resend / SendGrid / Formspree)
      const { id, comms, payload } = request.body;

      if (!id || !comms || !payload) {
            return response.status(400).json({ error: 'Missing required fields' });
      }

      // Simulate network delay to maintain the terminal aesthetic feel
      setTimeout(() => {
            return response.status(200).json({ success: true, message: 'Transmission securely received.' });
      }, 1500);
}
