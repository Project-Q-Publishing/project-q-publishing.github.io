---
layout: page
title: "Contact Project Q Publishing"
# description: "Get in touch with Project Q Publishing"
body_class: "contact-page"
---

<div class="page-header">
  <p class="page-description">We welcome inquiries from readers and authors, anyone who wants to get in touch. You can use the contact form below or <a href="{{ site.social_links.linkedin }}" style="text-decoration: underline;" target="_blank" rel="noopener">connect with us on LinkedIn</a>. You can find code bundles and errata on our <a href="https://github.com/Project-Q-Publishing/" style="text-decoration: underline;" target="_blank" rel="noopener">GitHub pages</a>.</p>
</div>

<div class="contact-grid">
  <div class="contact-section publishing-inquiries">
    <h1>Publishing Inquiries</h1>    
   
    <p>If you have expertise in:</p>
    <ul>
      <li>Modern programming languages and frameworks</li>
      <li>Software development methodologies</li>
      <li>System design and architecture</li>
      <li>Emerging technologies and trends</li>
    </ul>
    
    <p>we'd love to hear from you. Just fill in the contact form and select "Publishing Inquiry". We'll get back to you about your writing proposal or manuscript.</p>
    
    <div class="submission-guidelines">
      <h2>Submission Guidelines</h2>
      <p>We're happy to discuss ideas at all stages of development. Our discussions aim to develop the following items:</p>
      <ul>
        <li>A detailed description outlining your concept</li>
        <li>A book outline with a table of contents</li>
        <li>Your technical background and relevant experience</li>
        <li>Target audience and initial market analysis</li>
      </ul>
      <p>We'd recommend you think about these aspects of your book as soon as you can. They help get the book off to the best possible start.</p>
    </div>
  </div>

  <div class="contact-section general-contact">
    <h1>Contact Form</h1>
    
    <div class="contact-form-container">
      <form action="https://formspree.io/f/xjkjvqpp" method="POST" class="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required aria-required="true">
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="_replyto" required aria-required="true">
        </div>

        <div class="form-group">
          <label for="inquiry-type">Inquiry Type</label>
          <select id="inquiry-type" name="inquiry_type">
            <option value="general">General Inquiry</option>
            <option value="manuscript">Publishing Inquiry</option>
            <option value="partnership">Partnership/Business</option>
            <option value="reader-support">Reader Support</option>
            <option value="media">Media Inquiry</option>
          </select>
        </div>

        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="_subject" required aria-required="true">
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required aria-required="true" placeholder="Please provide details about your inquiry..."></textarea>
        </div>

        <div class="form-group">
          <input type="hidden" name="_next" value="{{ site.url }}/contact-thank-you">
          <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
          <button type="submit" class="btn btn-primary">Send Message</button>
        </div>

        <p class="form-status" id="form-status"></p>
      </form>
    </div>
    
  </div>
</div>

<div class="contact-grid">
  <div class="contact-section readers">
    <h1>For Readers</h1>
      
      <p>Questions about our books, availability, or technical support? We're here to help.</p>
      
      <div class="contact-highlight">
        <p><strong>Reader Support</strong>: We provide ongoing support for technical questions related to our published books. You can find code bundles and errata on our <a href="https://github.com/Project-Q-Publishing/" style="text-decoration: underline;" target="_blank" rel="noopener">GitHub pages</a>.</p>
      </div>
  </div>

  <div class="contact-section business">
    <h1>Business Inquiries</h1>
    
    <p>Interested in partnership opportunities, bulk sales, or corporate training materials? Let's discuss how we can work together.</p>
    
    <div class="contact-highlight">
      <p><strong>Partnership Opportunities</strong><br>
      We're open to collaborations that advance technical education and development.</p>
    </div>
  </div>
</div>

<div class="page-footer">
  <em>We look forward to hearing from you.</em>
</div>