---
layout: page
title: "Books"
description: "Browse our catalog of technical programming books"
body_class: "books-page"
---

<div class="page-header">
  <h1>Our Book Catalog</h1>
  <p>Quality technical programming books for developers and engineers</p>
</div>

{% comment %} Collect all unique topics and languages for filters {% endcomment %}
{% assign all_topics = '' | split: '' %}
{% assign all_languages = '' | split: '' %}
{% for book in site.books %}
  {% if book.topics %}
    {% assign all_topics = all_topics | concat: book.topics %}
  {% endif %}
  {% if book.programming_languages %}
    {% assign all_languages = all_languages | concat: book.programming_languages %}
  {% endif %}
{% endfor %}
{% assign unique_topics = all_topics | uniq | sort %}
{% assign unique_languages = all_languages | uniq | sort %}

{% if site.books.size > 0 %}
<div class="filter-sort-controls">
  <div class="controls-header">
    <h3>Filter & Sort Books</h3>
    <button id="clear-filters" class="clear-filters" disabled>Clear All Filters</button>
  </div>

  <div class="sort-controls">
    <label for="sort-select">Sort by:</label>
    <select id="sort-select">
      <option value="date-desc">Newest First</option>
      <option value="date-asc">Oldest First</option>
      <option value="title-asc">Title (A-Z)</option>
      <option value="title-desc">Title (Z-A)</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
    </select>
  </div>

  {% if unique_topics.size > 0 %}
  <div class="filter-section">
    <h4>Filter by Topic</h4>
    <div class="filter-tags">
      {% for topic in unique_topics %}
        <button class="topic-tag" data-topic="{{ topic | slugify }}">{{ topic }}</button>
      {% endfor %}
    </div>
  </div>
  {% endif %}

  {% if unique_languages.size > 0 %}
  <div class="filter-section">
    <h4>Filter by Programming Language</h4>
    <div class="filter-tags">
      {% for language in unique_languages %}
        <button class="language-tag" data-language="{{ language | slugify }}">{{ language }}</button>
      {% endfor %}
    </div>
  </div>
  {% endif %}

  <div id="results-count" class="results-count">Showing all {{ site.books.size }} books</div>
</div>

<div id="no-results" class="no-results">
  <p>No books match your current filters. Try adjusting your selections.</p>
</div>
{% endif %}

<section class="books-collection">
  {% assign sorted_books = site.books | sort: 'publication_date' | reverse %}

  {% if site.books.size > 0 %}
    <div class="books-grid">
      {% for book in sorted_books %}
        <article class="book-card"
          data-topics="{{ book.topics | join: ',' | downcase | replace: ' ', '-' }}"
          data-languages="{{ book.programming_languages | join: ',' | downcase | replace: ' ', '-' }}"
          data-difficulty="{{ book.difficulty_level | downcase | replace: ' ', '-' }}"
          data-price="{{ book.price }}"
          data-date="{{ book.publication_date }}"
          data-title="{{ book.title | downcase }}"
          data-featured="{{ book.featured }}">
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
            <h2><a href="{{ book.url }}">{{ book.title }}</a></h2>
            {% if book.subtitle %}
              <p class="book-subtitle">{{ book.subtitle }}</p>
            {% endif %}
            
            <p class="book-author">by {{ book.author }}</p>
            
            <p class="book-description">{{ book.description | truncatewords: 30 }}</p>
            
            <div class="book-meta">
              {% if book.difficulty_level %}
                <span class="difficulty">{{ book.difficulty_level }}</span>
              {% endif %}
              
              {% if book.programming_languages %}
                <div class="languages">
                  {% for lang in book.programming_languages limit: 3 %}
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
              <a href="{{ book.url }}" class="btn btn-primary">View Book</a>
              {% if book.purchase_links.amazon %}
                <a href="{{ book.purchase_links.amazon }}" class="btn btn-secondary" target="_blank" rel="noopener">Buy Now</a>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="coming-soon-notice">
      <p><em>Our first technical programming books are currently in development. Check back soon for our inaugural releases.</em></p>
    </div>
  {% endif %}
</section>

<section class="update-cta">
  <h3>Stay Updated</h3>
  <p>Be the first to know about new releases, or inquire about manuscript submissions and publishing opportunities.</p>
  <a href="/contact" class="btn btn-primary">Contact Us</a>
</section>