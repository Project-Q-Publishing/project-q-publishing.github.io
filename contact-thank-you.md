---
layout: page
title: "Thank You"
description: "Thank you for contacting Project Q Publishing"
body_class: "thank-you-page"
---

<div class="page-header">
  <h1>Thank You for Your Message</h1>
  <p class="page-description">We've received your inquiry and will respond soon.</p>
</div>

<div class="thank-you-content">
  <div class="confirmation-message">
    <h2>What Happens Next</h2>
    <p>Your message has been successfully submitted to Project Q Publishing. Here's what you can expect:</p>
    
    <ul class="next-steps">
      <li><strong>Confirmation</strong>: You should receive an automated confirmation email shortly</li>
      <li><strong>Review</strong>: Our team will review your inquiry within {{ site.contact.response_time | default: "24-48 hours" }}</li>
      <li><strong>Response</strong>: We'll get back to you with a personalized reply</li>
    </ul>
  </div>
  
  <div class="additional-resources">
    <h3>While You Wait</h3>
    <div class="resource-links">
      <a href="/books" class="btn btn-outline">Browse Our Books</a>
      <a href="/about" class="btn btn-outline">Learn More About Us</a>
      {% if site.social_links.linkedin %}
        <a href="{{ site.social_links.linkedin }}" class="btn btn-outline" target="_blank" rel="noopener">Connect on LinkedIn</a>
      {% endif %}
    </div>
  </div>
  
  <div class="urgent-inquiries">
    <h3>Urgent Inquiries</h3>
    <p>For time-sensitive matters, you can reach us directly at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
  </div>
</div>

<div class="page-footer">
  <p><a href="/">Return to Homepage</a> | <a href="/contact">Send Another Message</a></p>
</div>