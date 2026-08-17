export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, facility, sqft, notes, utm_source, utm_medium, utm_campaign, utm_content } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, phone',
        success: false
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email address',
        success: false
      });
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        error: 'Invalid phone number',
        success: false
      });
    }

    // Prepare email content
    const contactEmail = process.env.CONTACT_EMAIL || 'ops@thequotemasters.com';
    const timestamp = new Date().toISOString();

    const emailSubject = `New Quote Request from ${name}`;
    const emailBody = `
Quote Request Submission
========================

Timestamp: ${timestamp}

---
CONTACT INFORMATION
---
Name: ${name}
Email: ${email}
Phone: ${phone}

---
FACILITY DETAILS
---
Facility Type: ${facility || '(not specified)'}
Square Footage: ${sqft || '(not specified)'}
Notes: ${notes || '(none)'}

---
CAMPAIGN ATTRIBUTION
---
UTM Source: ${utm_source || '(direct)'}
UTM Medium: ${utm_medium || '(direct)'}
UTM Campaign: ${utm_campaign || '(none)'}
UTM Content: ${utm_content || '(none)'}

---
RESPONSE COMMITMENT
---
Respond by next business day to:
Email: ${email}
Phone: ${phone}

Hours: Mon–Fri 8:30am–5:00pm

This quote was submitted via the website quote form at ${process.env.NEXT_PUBLIC_SITE_URL || 'https://commercialcleaningtempe.com'}/request-a-quote/
    `.trim();

    // Send email (using simple approach with console for now)
    // For production, integrate with SendGrid, Resend, or similar
    console.log(`[QUOTE_SUBMISSION] ${timestamp}`);
    console.log(`To: ${contactEmail}`);
    console.log(`From: ${email}`);
    console.log(`Subject: ${emailSubject}`);
    console.log('---');
    console.log(emailBody);

    // In a production environment, you would:
    // 1. Send via SendGrid: await sendgrid.send({ ... })
    // 2. Save to database
    // 3. Create CRM record (HubSpot, Pipedrive, etc.)
    // 4. Send confirmation email to user

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully. We will respond by next business day.',
      id: `${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      error: 'Failed to submit quote request. Please try again or call (866) 958-8773.',
      success: false
    });
  }
}
