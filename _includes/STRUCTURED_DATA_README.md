# Structured Data Implementation

This directory contains JSON-LD structured data templates for enhanced SEO and rich search results.

## Files

### schema-organization.html
- **Type**: Organization schema
- **Purpose**: Defines the company information for search engines
- **Included on**: All pages
- **Benefits**:
  - Enhanced knowledge graph in search results
  - Better business information display
  - Social profile linking

### schema-book.html
- **Type**: Book schema with Product offers
- **Purpose**: Detailed book metadata for individual book pages
- **Included on**: Book detail pages (layout: book)
- **Benefits**:
  - Rich snippets in search results showing price, ratings, availability
  - Better product discovery
  - Integration with Google Shopping and other product search engines
- **Features**:
  - Author information
  - ISBN
  - Pricing and availability
  - Aggregate ratings from reviews
  - Individual reviews
  - Topics and keywords

### schema-breadcrumbs.html
- **Type**: BreadcrumbList schema
- **Purpose**: Navigation breadcrumb trail
- **Included on**: Book pages and catalog
- **Benefits**:
  - Breadcrumb display in search results
  - Better site navigation understanding for search engines

### schema-itemlist.html
- **Type**: ItemList schema
- **Purpose**: Complete catalog of books
- **Included on**: Books catalog page (/books.html)
- **Benefits**:
  - Collection/catalog recognition
  - Better indexing of all books
  - Carousel-eligible in search results

## Testing Structured Data

You can test the structured data implementation using these tools:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Paste the URL or HTML
   - Check for Book, Organization, and Breadcrumb schemas

2. **Schema.org Validator**: https://validator.schema.org/
   - More comprehensive validation
   - Shows all detected schemas

3. **Google Search Console**:
   - After deployment, monitor "Enhancements" section
   - Track rich results performance

## Maintenance

When adding new book fields:
1. Update the book frontmatter in `_books/`
2. Update `schema-book.html` if the field should be in structured data
3. Rebuild and test with validation tools

## Key Schema Properties

### Book Schema
- `@type: Book` - Core book type
- `author` - Author as Person
- `publisher` - Publisher as Organization
- `isbn` - International Standard Book Number
- `offers` - Price and availability (Product offer)
- `aggregateRating` - Average of all reviews
- `review` - Individual reviews array

### Organization Schema
- `@type: Organization` - Company type
- `name`, `url`, `logo` - Basic identity
- `sameAs` - Social profile URLs
- `contactPoint` - Contact information

## SEO Benefits

This implementation provides:
- ✅ Enhanced search result display (rich snippets)
- ✅ Product information in search engines
- ✅ Better indexing and categorization
- ✅ Eligibility for special search features (carousels, knowledge panels)
- ✅ Improved click-through rates from search results
- ✅ Integration with shopping comparison engines
