---
layout: default
title: "Project Q Publishing"
description: "Quality technical programming books for developers and engineers"
---

<div class="home-hero">
  <h1>Welcome to Project Q Publishing</h1>
  <p class="hero-tagline">Quality technical books for developers, engineers, and technology professionals</p>
</div>

<section class="featured-books">
  <h2>Featured Books</h2>
  {% assign featured_books = site.books | where: 'featured', true | sort: 'publication_date' | reverse %}
  {% if featured_books.size > 0 %}
    <div class="books-grid featured">
      {% for book in featured_books %}
        <article class="book-card featured">
          <div class="book-cover">
            <a href="{{ book.url }}">
              {% if book.cover_image %}
                <img src="{{ book.cover_image }}" alt="{{ book.title }} cover" loading="lazy">
              {% else %}
                <div class="placeholder-cover">
                  <span>{{ book.title | truncatewords: 2 }}</span>
                </div>
              {% endif %}
            </a>
          </div>

          <div class="book-info">
            <h3><a href="{{ book.url }}">{{ book.title }}</a></h3>
            {% if book.subtitle %}
              <p class="book-subtitle">{{ book.subtitle }}</p>
            {% endif %}

            <p class="book-author">by {{ book.author }}</p>

            <p class="book-description">{{ book.description | truncatewords: 20 }}</p>

            <div class="book-meta">
              {% if book.difficulty_level %}
                <span class="difficulty">{{ book.difficulty_level }}</span>
              {% endif %}

              {% if book.programming_languages %}
                <div class="languages">
                  {% for lang in book.programming_languages limit: 2 %}
                    <span class="language-tag">{{ lang }}</span>
                  {% endfor %}
                </div>
              {% endif %}

              {% if book.price %}
                <span class="price">
                  {% if book.currency == "USD" %}${{ book.price }}
                  {% elsif book.currency == "EUR" %}€{{ book.price }}
                  {% elsif book.currency == "GBP" %}£{{ book.price }}
                  {% else %}{{ book.currency }} {{ book.price }}
                  {% endif %}
                </span>
              {% endif %}
            </div>

            <div class="book-actions">
              <a href="{{ book.url }}" class="btn btn-primary">Learn More</a>
              {% if book.purchase_links.amazon %}
                <a href="{{ book.purchase_links.amazon }}" class="btn btn-secondary" target="_blank" rel="noopener">Buy Now</a>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
    <div class="view-all-books">
      <a href="/books" class="btn btn-outline">View All Books</a>
    </div>

  {% else %}
    <div class="coming-soon-notice">
      <p>Our books are currently in development. Check back soon for our first releases.</p>
    </div>
  {% endif %}

</section>

<section class="focus-areas">
  <h2>About Our Focus</h2>
  <p>We focus on creating comprehensive, practical programming resources that help developers:</p>
  <ul>
    <li>Master new programming languages and frameworks</li>
    <li>Understand complex technical concepts</li>
    <li>Apply best practices in real-world projects</li>
    <li>Stay current with evolving technology trends</li>
  </ul>
</section>

<section class="home-cta">
  <h2>Stay Connected</h2>
  <div class="cta-links">
    <a href="/about">Learn more about our mission</a>
    <a href="/books">Browse our upcoming catalog</a>
  </div>
  <div class="contact-cta">
    <p>For publishing inquiries and manuscript submissions:</p>
    <a href="/contact">Contact Us</a>
  </div>
</section>