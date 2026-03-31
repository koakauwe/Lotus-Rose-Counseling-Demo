/**
 * Middleware for Cloudflare Pages Functions
 * - Enforces POST-only on /api/* routes
 * - Adds CORS headers
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only apply to /api/* routes
  if (url.pathname.startsWith('/api/')) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': url.origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const response = await next();

  // Add CORS headers to API responses
  if (url.pathname.startsWith('/api/')) {
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', url.origin);
    return newResponse;
  }

  return response;
}
