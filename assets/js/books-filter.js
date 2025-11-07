// Books Filtering and Sorting JavaScript

(function() {
  'use strict';

  // State management
  const state = {
    activeTopics: new Set(),
    activeLanguages: new Set(),
    sortBy: 'date-desc'
  };

  // DOM elements
  const elements = {
    bookCards: null,
    topicTags: null,
    languageTags: null,
    sortSelect: null,
    clearButton: null,
    resultsCount: null,
    noResults: null,
    toggleButton: null,
    filterControls: null
  };

  // Initialize
  function init() {
    // Cache DOM elements
    elements.bookCards = document.querySelectorAll('.book-card');
    elements.topicTags = document.querySelectorAll('.topic-tag');
    elements.languageTags = document.querySelectorAll('.language-tag');
    elements.sortSelect = document.getElementById('sort-select');
    elements.clearButton = document.getElementById('clear-filters');
    elements.resultsCount = document.getElementById('results-count');
    elements.noResults = document.getElementById('no-results');
    elements.toggleButton = document.getElementById('toggle-filters');
    elements.filterControls = document.querySelector('.filter-sort-controls');

    if (!elements.bookCards.length) return;

    // Attach event listeners
    attachEventListeners();

    // Initial filter and sort
    filterAndSort();
  }

  // Attach event listeners
  function attachEventListeners() {
    // Topic filter tags
    elements.topicTags.forEach(tag => {
      tag.addEventListener('click', function(e) {
        e.preventDefault();
        const topic = this.getAttribute('data-topic');
        toggleFilter(state.activeTopics, topic, this);
        filterAndSort();
        collapseFilters();
      });
    });

    // Language filter tags
    elements.languageTags.forEach(tag => {
      tag.addEventListener('click', function(e) {
        e.preventDefault();
        const language = this.getAttribute('data-language');
        toggleFilter(state.activeLanguages, language, this);
        filterAndSort();
        collapseFilters();
      });
    });

    // Sort select
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', function() {
        state.sortBy = this.value;
        filterAndSort();
      });
    }

    // Clear filters button
    if (elements.clearButton) {
      elements.clearButton.addEventListener('click', clearAllFilters);
    }

    // Toggle filters button
    if (elements.toggleButton) {
      elements.toggleButton.addEventListener('click', toggleFilters);
    }
  }

  // Toggle filters visibility
  function toggleFilters() {
    if (!elements.filterControls || !elements.toggleButton) return;

    const isCollapsed = elements.filterControls.classList.toggle('collapsed');
    elements.toggleButton.setAttribute('aria-expanded', !isCollapsed);

    const toggleText = elements.toggleButton.querySelector('.toggle-text');
    if (toggleText) {
      toggleText.textContent = isCollapsed ? 'Show Filters' : 'Hide Filters';
    }
  }

  // Collapse filters (called after user makes a selection)
  function collapseFilters() {
    if (!elements.filterControls || !elements.toggleButton) return;

    // Only collapse if currently expanded
    if (!elements.filterControls.classList.contains('collapsed')) {
      elements.filterControls.classList.add('collapsed');
      elements.toggleButton.setAttribute('aria-expanded', 'false');

      const toggleText = elements.toggleButton.querySelector('.toggle-text');
      if (toggleText) {
        toggleText.textContent = 'Show Filters';
      }
    }
  }

  // Toggle filter (add/remove from active set)
  function toggleFilter(filterSet, value, element) {
    if (filterSet.has(value)) {
      filterSet.delete(value);
      element.classList.remove('active');
    } else {
      filterSet.add(value);
      element.classList.add('active');
    }
    updateClearButton();
  }

  // Clear all filters
  function clearAllFilters() {
    state.activeTopics.clear();
    state.activeLanguages.clear();

    elements.topicTags.forEach(tag => tag.classList.remove('active'));
    elements.languageTags.forEach(tag => tag.classList.remove('active'));

    updateClearButton();
    filterAndSort();
  }

  // Update clear button state
  function updateClearButton() {
    if (!elements.clearButton) return;

    const hasActiveFilters = state.activeTopics.size > 0 || state.activeLanguages.size > 0;
    elements.clearButton.disabled = !hasActiveFilters;
  }

  // Main filter and sort function
  function filterAndSort() {
    const visibleCards = [];

    // Filter cards
    elements.bookCards.forEach(card => {
      if (matchesFilters(card)) {
        card.classList.remove('hidden');
        visibleCards.push(card);
      } else {
        card.classList.add('hidden');
      }
    });

    // Sort visible cards
    sortCards(visibleCards);

    // Update results count
    updateResultsCount(visibleCards.length);

    // Show/hide no results message
    toggleNoResults(visibleCards.length === 0);
  }

  // Check if card matches active filters
  function matchesFilters(card) {
    const cardTopics = card.getAttribute('data-topics').split(',').filter(t => t);
    const cardLanguages = card.getAttribute('data-languages').split(',').filter(l => l);

    // If no filters active, show all
    if (state.activeTopics.size === 0 && state.activeLanguages.size === 0) {
      return true;
    }

    // Check topic filters (OR logic within topics)
    const topicMatch = state.activeTopics.size === 0 ||
      [...state.activeTopics].some(topic => cardTopics.includes(topic));

    // Check language filters (OR logic within languages)
    const languageMatch = state.activeLanguages.size === 0 ||
      [...state.activeLanguages].some(lang => cardLanguages.includes(lang));

    // Both must match if both filter types are active (AND logic between filter types)
    return topicMatch && languageMatch;
  }

  // Sort cards
  function sortCards(cards) {
    const grid = document.querySelector('.books-grid');
    if (!grid) return;

    // Sort array of cards
    cards.sort((a, b) => {
      switch (state.sortBy) {
        case 'title-asc':
          return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
        case 'title-desc':
          return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
        case 'price-asc':
          return parseFloat(a.getAttribute('data-price') || 0) - parseFloat(b.getAttribute('data-price') || 0);
        case 'price-desc':
          return parseFloat(b.getAttribute('data-price') || 0) - parseFloat(a.getAttribute('data-price') || 0);
        case 'date-asc':
          return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        case 'date-desc':
        default:
          return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
      }
    });

    // Reorder DOM elements
    cards.forEach(card => {
      grid.appendChild(card);
    });
  }

  // Update results count
  function updateResultsCount(count) {
    if (!elements.resultsCount) return;

    const total = elements.bookCards.length;
    if (count === total) {
      elements.resultsCount.textContent = `Showing all ${total} books`;
    } else {
      elements.resultsCount.textContent = `Showing ${count} of ${total} books`;
    }
  }

  // Toggle no results message
  function toggleNoResults(show) {
    if (!elements.noResults) return;

    if (show) {
      elements.noResults.classList.add('show');
    } else {
      elements.noResults.classList.remove('show');
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
