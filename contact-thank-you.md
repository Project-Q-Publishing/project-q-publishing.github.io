---
layout: page
title: "Thank You for Your Message"
# description: "Thank you for contacting Project Q Publishing"
body_class: "thank-you-page"
---

<div class="page-header">
  <p class="page-description">We've received your inquiry and will respond soon.</p>
</div>

<div class="thank-you-content">
  <div class="confirmation-message">
    <h2>What Happens Next?</h2>
    <p>Your message has been successfully submitted to Project Q Publishing. Here's what you can expect:</p>
    
    <ul class="next-steps">
      <li><strong>Review</strong>: Our team will review your inquiry within {{ site.contact.response_time | default: "24-48 hours" }}</li>
      <li><strong>Response</strong>: We'll get back to you with a personalized reply</li>
    </ul>
  </div>
  
  <div class="additional-resources">
    <h3>While You Wait</h3>
    <div class="resource-links">
      <ul class="resource-list">
        <li><a href="/books" class="btn btn-outline">Browse Our Books</a></li>
        <li><a href="/about" class="btn btn-outline">Learn More About Us</a></li>
      {% if site.social_links.linkedin %}
        <li><a href="{{ site.social_links.linkedin }}" class="btn btn-outline" target="_blank" rel="noopener">Connect on LinkedIn</a></li>
      {% endif %}
      </ul>
    </div>
  </div>
</div>