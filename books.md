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

<section class="books-collection">
  {% assign sorted_books = site.books | sort: 'publication_date' | reverse %}
  
  {% if site.books.size > 0 %}
    <div class="books-grid">
      {% for book in sorted_books %}
        <article class="book-card">
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

<section class="book-categories">
  <h2>Browse by Topic</h2>
  
  {% comment %} Collect all unique topics from books {% endcomment %}
  {% assign all_topics = '' | split: '' %}
  {% for book in site.books %}
    {% if book.topics %}
      {% assign all_topics = all_topics | concat: book.topics %}
    {% endif %}
  {% endfor %}
  {% assign unique_topics = all_topics | uniq | sort %}
  
  {% if unique_topics.size > 0 %}
    <div class="topic-tags">
      {% for topic in unique_topics %}
        <a href="#" class="topic-tag" data-topic="{{ topic | slugify }}">{{ topic }}</a>
      {% endfor %}
    </div>
  {% else %}
    <p>Our upcoming releases will span several key areas including programming languages, system design, software development, and professional development.</p>
  {% endif %}
</section>

{% comment %} Programming Languages Filter {% endcomment %}
{% assign all_languages = '' | split: '' %}
{% for book in site.books %}
  {% if book.programming_languages %}
    {% assign all_languages = all_languages | concat: book.programming_languages %}
  {% endif %}
{% endfor %}
{% assign unique_languages = all_languages | uniq | sort %}

<section class="programming-languages">
  <h2>Programming Languages</h2>
  {% if unique_languages.size > 0 %}
    <div class="language-filter">
      {% for language in unique_languages %}
        <a href="#" class="language-tag" data-language="{{ language | slugify }}">{{ language }}</a>
      {% endfor %}
    </div>
  {% else %}
    <p>Our upcoming books will cover multiple programming languages including Python, Go, Rust, and more.</p>
  {% endif %}
</section>

<section class="update-cta">
  <h3>Stay Updated</h3>
  <p>Be the first to know about new releases, or inquire about manuscript submissions and publishing opportunities.</p>
  <a href="/contact" class="btn btn-primary">Contact Us</a>
</section>