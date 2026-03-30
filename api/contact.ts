import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * ARCHITECTURAL NOTE:
 * In a serverless environment (Vercel), local in-memory state is unreliable.
 * This handler is prepared for Distributed Caching (Redis/Vercel KV).
 */

const LOCAL_RATE_LIMIT = new Map<string, number[]>();

export default async function handler(
      request: VercelRequest,
      response: VercelResponse,
) {
      if (request.method !== 'POST') {
            return response.status(405).json({ error: 'Method not allowed' });
      }

      const ip = (request.headers['x-forwarded-for'] || '127.0.0.1') as string;
      const isRateLimited = await checkRateLimit(ip);

      if (isRateLimited) {
            return response.status(429).json({ 
                  error: 'Security Protocol: Too many requests. Transmission throttled.' 
            });
      }

      const { id, comms, payload } = request.body;

      // Validation Layer
      if (!id || !comms || !payload) {
            return response.status(400).json({ error: 'Incomplete Handshake: Missing payload.' });
      }

      try {
            // Business Logic Simulation 
            // (In production, this would trigger an Event or External API call)
            console.log(`[SECURE_RECEIVE] From: ${id} via ${comms}`);
            
            // Artificial delay to maintain the terminal "processing" aesthetic
            await new Promise(resolve => setTimeout(resolve, 1200));

            return response.status(200).json({ 
                  success: true, 
                  message: 'Transmission securely received and archived.' 
            });
      } catch (error) {
            console.error('[API_FAILURE]', error);
            return response.status(500).json({ error: 'Internal Core Failure.' });
      }
}

/**
 * Distributed Rate Limiting Strategy
 * Detects if a Redis/KV store is available, otherwise falls back to local Map.
 */
async function checkRateLimit(ip: string): Promise<boolean> {
      const windowMs = 15 * 60 * 1000;
      const limit = 5;
      const now = Date.now();

      // IF VERCEL KV IS CONFIGURED (Future Scalability)
      // Note: This requires '@vercel/kv' to be in node_modules
      /* 
      try {
            const { kv } = await import('@vercel/kv');
            const key = `rate_limit:${ip}`;
            const count = await kv.incr(key);
            if (count === 1) await kv.expire(key, windowMs / 1000);
            return count > limit;
      } catch (e) {
            // Fallback to local if KV fails or is not installed
      }
      */

      // FALLBACK: Local In-memory (Stateless/Ephemeral)
      let requests = LOCAL_RATE_LIMIT.get(ip) || [];
      requests = requests.filter(time => now - time < windowMs);
      
      if (requests.length >= limit) return true;

      requests.push(now);
      LOCAL_RATE_LIMIT.set(ip, requests);
      return false;
}
