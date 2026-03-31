/**
 * Lotus Rose Counseling — Contact Form Handler
 * Cloudflare Pages Function at /api/contact
 *
 * Sends:
 * 1. Notification email to Joy (via Resend)
 * 2. Confirmation email to the person who submitted the form (if email provided)
 *
 * Environment variables needed:
 * - RESEND_API_KEY: Resend API key
 * - NOTIFICATION_EMAIL: Where to send form notifications (e.g., info@lotusrosecounseling.com)
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    const name = (formData.get('name') || '').trim();
    const phone = (formData.get('phone') || '').trim();
    const email = (formData.get('email') || '').trim();
    const intent = (formData.get('intent') || '').trim();
    const service = (formData.get('service') || '').trim();
    const contactPref = (formData.get('contact_preference') || '').trim();
    const honeypot = (formData.get('website') || '').trim();

    // Honeypot — bots fill hidden fields
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate required fields
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Name and phone are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL || 'info@lotusrosecounseling.com';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Contact form is not configured yet. Please call (801) 642-4244.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Intent labels
    const intentLabels = {
      'new-client': 'New Client',
      'returning': 'Returning Client',
      'question': 'Question About Services',
      'insurance': 'Insurance Coverage Question',
      'other': 'Other',
    };

    const serviceLabels = {
      'postpartum': 'Postpartum Depression',
      'emdr': 'EMDR Therapy',
      'art': 'Accelerated Resolution Therapy',
      'grief': 'Grief & Loss',
      'anxiety-depression': 'Anxiety & Depression',
      'trauma': 'Trauma & PTSD',
      'teen-child': 'Teen or Child Therapy',
      'body-image': 'Body Image Concerns',
      'life-transitions': 'Life Transitions',
    };

    const contactPrefLabels = {
      'no-preference': 'No Preference',
      'call': 'Phone Call',
      'text': 'Text Message',
      'email': 'Email',
    };

    const intentLabel = intentLabels[intent] || intent || 'Not specified';
    const serviceLabel = serviceLabels[service] || service || 'Not sure yet';
    const contactPrefLabel = contactPrefLabels[contactPref] || contactPref || 'No preference';
    const firstName = name.split(' ')[0];

    // ── 1. Notification email to Joy ──
    const notificationHtml = `
    <div style="font-family: 'Nunito Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #F5D5CB; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #3D3330;">
          New Consultation Request
        </h1>
      </div>
      <div style="background: #ffffff; padding: 0; border: 1px solid #E8DDD8; border-top: 0; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #FFF8F3;">
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330; width: 140px; border-bottom: 1px solid #f0ebe4;">Name</td>
            <td style="padding: 14px 20px; color: #3D3330; border-bottom: 1px solid #f0ebe4;">${esc(name)}</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330; border-bottom: 1px solid #f0ebe4;">Phone</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ebe4;">
              <a href="tel:${esc(phone)}" style="color: #D4A574;">${esc(phone)}</a>
            </td>
          </tr>
          ${email ? `
          <tr style="background: #FFF8F3;">
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330; border-bottom: 1px solid #f0ebe4;">Email</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ebe4;">
              <a href="mailto:${esc(email)}" style="color: #D4A574;">${esc(email)}</a>
            </td>
          </tr>` : ''}
          <tr${email ? '' : ' style="background: #FFF8F3;"'}>
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330; border-bottom: 1px solid #f0ebe4;">Reason</td>
            <td style="padding: 14px 20px; color: #3D3330; border-bottom: 1px solid #f0ebe4;">${esc(intentLabel)}</td>
          </tr>
          <tr style="background: #FFF8F3;">
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330; border-bottom: 1px solid #f0ebe4;">Service</td>
            <td style="padding: 14px 20px; color: #3D3330; border-bottom: 1px solid #f0ebe4;">${esc(serviceLabel)}</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; font-weight: 700; color: #3D3330;">Contact Via</td>
            <td style="padding: 14px 20px; color: #3D3330;">${esc(contactPrefLabel)}</td>
          </tr>
        </table>
      </div>
      <p style="margin-top: 16px; font-size: 12px; color: #9B8A82; text-align: center;">
        Submitted via lotusrosecounseling.com/contact
      </p>
    </div>`;

    const intentSuffix = intent && intent !== 'new-client' ? ` — ${intentLabel}` : '';

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lotus Rose Website <noreply@lotusrosecounseling.com>',
          to: [NOTIFICATION_EMAIL],
          subject: `New Consultation Request — ${name}${intentSuffix}`,
          html: notificationHtml,
          reply_to: email || undefined,
        }),
      });
    } catch (e) {
      console.error('Notification email failed:', e);
    }

    // ── 2. Confirmation email to the person ──
    if (email) {
      // Small delay to avoid Resend rate limit (2 req/sec)
      await new Promise(r => setTimeout(r, 1000));

      const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
      <body style="margin: 0; padding: 0; background-color: #FFF8F3; font-family: 'Nunito Sans', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FFF8F3; padding: 40px 20px;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); overflow: hidden;">

              <!-- Header -->
              <tr>
                <td style="background: #F5D5CB; padding: 32px 40px; text-align: center;">
                  <h1 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; font-weight: 700; color: #3D3330;">
                    Lotus Rose Counseling
                  </h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="margin: 0 0 16px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #3D3330;">
                    ${esc(firstName)}, thank you for reaching out.
                  </h2>
                  <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.8; color: #6B5B54;">
                    We received your consultation request and will get back to you within one business day.
                  </p>
                  <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.8; color: #6B5B54;">
                    Your free 15-minute consultation is a chance to ask questions, learn about our approach, and see if Lotus Rose feels like the right fit. There's no commitment and no pressure.
                  </p>

                  <!-- What to Expect Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                    <tr>
                      <td style="background: #FFF8F3; border-left: 4px solid #D4A574; border-radius: 0 8px 8px 0; padding: 24px 28px;">
                        <p style="margin: 0 0 12px; font-weight: 700; font-size: 16px; color: #3D3330;">What happens next:</p>
                        <p style="margin: 0 0 8px; font-size: 15px; color: #6B5B54;">1. We'll reach out via your preferred contact method</p>
                        <p style="margin: 0 0 8px; font-size: 15px; color: #6B5B54;">2. A quick 15-minute conversation to answer your questions</p>
                        <p style="margin: 0; font-size: 15px; color: #6B5B54;">3. If we're a good fit, we'll help you schedule your first session</p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.8; color: #6B5B54;">
                    In the meantime, feel free to explore our <a href="https://lotusrosecounseling.com/services/" style="color: #D4A574;">services</a> or <a href="https://lotusrosecounseling.com/our-therapists/" style="color: #D4A574;">meet our therapists</a>.
                  </p>

                  <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.8; color: #6B5B54;">
                    Looking forward to connecting with you,
                  </p>
                  <p style="margin: 8px 0 0; font-size: 16px; font-weight: 700; color: #3D3330;">
                    The Lotus Rose Counseling Team
                  </p>
                  <p style="margin: 4px 0 0; font-size: 14px; color: #9B8A82;">
                    (801) 642-4244 · info@lotusrosecounseling.com
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: #F5D5CB; padding: 20px 40px; text-align: center;">
                  <p style="margin: 0; font-size: 13px; color: #6B5B54;">
                    237 W. 520 N. St, Orem, UT 84057
                  </p>
                  <p style="margin: 8px 0 0; font-size: 12px; color: #9B8A82;">
                    <a href="https://lotusrosecounseling.com/privacy-policy/" style="color: #9B8A82;">Privacy Policy</a>
                  </p>
                </td>
              </tr>

            </table>
          </td></tr>
        </table>
      </body>
      </html>`;

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Lotus Rose Counseling <noreply@lotusrosecounseling.com>',
            to: [email],
            subject: `${firstName}, thank you for reaching out`,
            html: confirmationHtml,
          }),
        });
      } catch (e) {
        console.error('Confirmation email failed:', e);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (e) {
    console.error('Contact form error:', e);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please call (801) 642-4244.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// HTML escape helper
function esc(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
