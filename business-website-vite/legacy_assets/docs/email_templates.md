# HubSpot Automation Email Templates

## 1. The "Immediate Value" Welcome Email
**Trigger:** Sent immediately after a lead fills out the `LeadForm` on the website.
**Goal:** Confirm receipt, validate the pain point, and push for the demo (if they haven't booked yet).

---

**Subject:** Re: Your Revenue Recovery Inquiry
*(Note: "Re:" increases open rates by implying a continuing conversation)*

**Preview Text:** Here is how we will automate your guest responses...

**Body:**

Hi {{contact.firstname}},

Thanks for inquiring about Nocturn AI.

You are likely here because you’ve noticed a gap in your operations: **Guests are asking questions when your team isn’t there to answer.**

In today’s on-demand economy, a 2-hour delay isn't just a delay—it's a lost booking.

**Here is what happens next:**

1.  **If you booked a demo:** Great. I look forward to showing you exactly how much revenue we can recover for {{contact.company}} specifically.
2.  **If you haven’t booked yet:** I strongly recommend finding a 15-minute slot on my calendar. We will run a quick audit of your current response times and show you the potential ROI of 24/7 AI coverage.

[**Book Your 15-Minute Audit Here**]({{contact.hubspot_owner_meeting_url}})

In the meantime, feel free to reply to this email if you have specific questions about our integration with your PMS or WhatsApp.

Best regards,

**Ahmad Basyir Azahari**
Founder, Nocturn AI
*Capturing bookings while you sleep.*

---

## 2. The "Nudge" (Sent 24 Hours Later if no demo booked)
**Trigger:** 1 day after form submission if `Lifecycle Stage` is not "Opportunity" or "Customer".
**Goal:** Overcome hesitation.

**Subject:** One question about {{contact.company}}

**Body:**

Hi {{contact.firstname}},

I'm writing this while reviewing some of our recent inquiry data.

We're seeing that for hotels similar to {{contact.company}}, nearly **40% of WhatsApp inquiries come in after 6 PM.**

Are you currently staffing your reservation desk 24/7?

If not, you are almost certainly leaving revenue on the table every single night.

Let's fix that this week.

[**Grab a time for a quick demo here →**]({{contact.hubspot_owner_meeting_url}})

Best,

Ahmad Basyir Azahari
Nocturn AI
