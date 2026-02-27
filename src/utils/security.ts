/**
 * SecurityUtils — MAGBO STUDIO
 * 
 * Hardened input sanitization and security utilities.
 * Applied to all user inputs: Terminal CLI, Contact Form, Command Palette.
 */

/**
 * Strips all HTML tags and dangerous characters from a string.
 * Prevents XSS injection by converting HTML entities and removing script payloads.
 */
export function sanitizeHTML(input: string): string {
      if (!input || typeof input !== 'string') return '';

      return input
            // Strip HTML tags
            .replace(/<[^>]*>/g, '')
            // Encode dangerous characters
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            // Remove null bytes
            .replace(/\0/g, '')
            // Remove javascript: protocol
            .replace(/javascript:/gi, '')
            // Remove event handlers (onerror, onclick, etc.)
            .replace(/on\w+\s*=/gi, '')
            // Trim the result
            .trim();
}

/**
 * Sanitizes a command string for terminal processing.
 * More permissive than sanitizeHTML — allows safe terminal characters
 * but blocks injection attempts.
 */
export function sanitizeCommand(input: string): string {
      if (!input || typeof input !== 'string') return '';

      return input
            // Remove HTML tags
            .replace(/<[^>]*>/g, '')
            // Remove null bytes
            .replace(/\0/g, '')
            // Remove javascript: protocol
            .replace(/javascript:/gi, '')
            // Allow only safe terminal characters (alphanumeric, spaces, underscores, dashes, dots)
            .replace(/[^\w\s\-./]/g, '')
            // Collapse multiple spaces
            .replace(/\s+/g, ' ')
            // Trim and limit length (prevent DoS via extremely long input)
            .trim()
            .slice(0, 200);
}

/**
 * Validates that an email address follows a safe, standard pattern.
 */
export function validateEmail(email: string): boolean {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(email) && email.length <= 254;
}

/**
 * Rate limiter factory — prevents abuse of forms and CLI.
 * Returns a function that returns true if the action is allowed.
 */
export function createRateLimiter(maxAttempts: number, windowMs: number) {
      const attempts: number[] = [];

      return (): boolean => {
            const now = Date.now();
            // Remove expired attempts
            while (attempts.length > 0 && attempts[0] < now - windowMs) {
                  attempts.shift();
            }
            if (attempts.length >= maxAttempts) {
                  return false; // Rate limited
            }
            attempts.push(now);
            return true;
      };
}
