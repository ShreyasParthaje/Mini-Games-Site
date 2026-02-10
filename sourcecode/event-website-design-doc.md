# Event Descriptions Website - Design Document

## Project Overview

**Project Type:** Single-page event listing website  
**Target Devices:** Desktop and mobile responsive  
**Design Approach:** Professional, structured, non-vibe-coded aesthetic with strong visual hierarchy

---

## 1. Design Philosophy

### Core Principles
- **Clarity over creativity**: Information should be immediately accessible
- **Structured hierarchy**: Clear visual organization of content
- **Professional aesthetic**: Corporate-friendly while remaining engaging
- **Accessibility-first**: WCAG 2.1 AA compliant
- **Performance-oriented**: Fast loading, minimal dependencies

### Visual Direction
- Clean, grid-based layouts
- Ample whitespace for breathing room
- Consistent spacing system
- Purposeful use of color (not decorative)
- Typography that enhances readability

---

## 2. Layout Structure

### Desktop Layout (≥1024px)

```
┌─────────────────────────────────────────────────┐
│  HEADER                                         │
│  - Logo/Site Title (centered or left)           │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  HERO SECTION                                   │
│  - Page Title: "Event Descriptions"             │
│  - Optional subtitle/description                │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  EVENT GRID (2-column)                          │
│  ┌──────────────┐  ┌──────────────┐            │
│  │  Event Card  │  │  Event Card  │            │
│  │  1           │  │  2           │            │
│  └──────────────┘  └──────────────┘            │
│  ┌──────────────┐  ┌──────────────┐            │
│  │  Event Card  │  │  Event Card  │            │
│  │  3           │  │  4           │            │
│  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  FOOTER                                         │
│  - Copyright only                               │
└─────────────────────────────────────────────────┘
```

### Tablet Layout (768px - 1023px)
- 2-column grid maintained
- Reduced margins and padding
- Slightly smaller typography scale

### Mobile Layout (<768px)
- Single column layout
- Stacked event cards
- Full-width cards with consistent padding
- Larger touch targets (min 44x44px)

---

## 3. Component Specifications

### Event Card

**Dimensions:**
- Desktop: Max-width 500px, min-height 400px
- Mobile: Full width minus 24px margin on each side

**Structure:**
```
┌─────────────────────────────────┐
│  Event Title                    │
│  (H2, 24px/28px)                │
├─────────────────────────────────┤
│                                 │
│  Image/Visual Area              │
│  (16:9 aspect ratio)            │
│  Background: #1a1a1a            │
│                                 │
├─────────────────────────────────┤
│  About the event                │
│  (H3, 16px/20px, bold)          │
│                                 │
│  Description text               │
│  (14px/22px, max 2-3 lines)     │
│                                 │
├─────────────────────────────────┤
│  [View details] Button          │
│  (Full width or centered)       │
└─────────────────────────────────┘
```

**Spacing:**
- Padding: 24px all sides (desktop), 20px (mobile)
- Gap between title and image: 20px
- Gap between sections: 16px
- Card border-radius: 8px

**Visual Treatment:**
- Background: #1e1e1e (dark gray)
- Border: 1px solid #333333
- Box-shadow: 0 2px 8px rgba(0,0,0,0.3)
- Hover state: subtle lift (0 4px 12px rgba(0,0,0,0.5))

---

## 4. Typography System

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 36px/32px* | 700 | 1.2 | Page title |
| H2 | 24px/20px* | 600 | 1.3 | Event card title |
| H3 | 16px/15px* | 600 | 1.4 | Section headers |
| Body | 14px/14px* | 400 | 1.6 | Descriptions |
| Button | 15px/15px* | 500 | 1 | CTA text |

*Desktop/Mobile sizes

### Text Colors
- Primary text: #e0e0e0
- Secondary text: #a0a0a0
- Tertiary text: #666666

---

## 5. Color Palette

### Primary Colors
```css
--primary-600: #7c5cff      /* Main brand color (buttons, accents) */
--primary-700: #6b4ce6      /* Hover states */
--primary-800: #5a3ccc      /* Active states */
```

### Neutral Colors (Dark Theme)
```css
--neutral-50: #0a0a0a       /* Page background (darkest) */
--neutral-100: #1a1a1a      /* Card backgrounds */
--neutral-200: #2a2a2a      /* Subtle backgrounds */
--neutral-300: #3a3a3a      /* Borders, dividers */
--neutral-700: #a0a0a0      /* Secondary text */
--neutral-900: #e0e0e0      /* Primary text (lightest) */
```

### Background Strategy
- Page background: #0a0a0a (dark black)
- Card background: #1a1a1a (dark gray)
- Image placeholder: #0f0f0f (very dark)
- Header: #1a1a1a
- Footer: #0a0a0a

---

## 6. Spacing System

Using 4px base unit:

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

### Application
- Container padding: 24px (desktop), 16px (mobile)
- Section margins: 48px (desktop), 32px (mobile)
- Card gaps: 24px (desktop), 16px (mobile)
- Element spacing: 16px default

---

## 7. Interactive Elements

### Primary Button (View details)

**Default State:**
```css
background: #7c5cff
color: #ffffff
padding: 12px 24px
border-radius: 6px
font-size: 15px
font-weight: 500
border: none
min-height: 44px
```

**Hover State:**
```css
background: #6b4ce6
transform: translateY(-1px)
box-shadow: 0 4px 8px rgba(123, 92, 255, 0.35)
```

**Active State:**
```css
background: #5a3ccc
transform: translateY(0)
```

**Focus State:**
```css
outline: 2px solid #7c5cff
outline-offset: 2px
```

### Button Sizing
- Desktop: Full width within card
- Mobile: Full width, min-height 48px for better touch targets

---

## 8. Grid System

### Desktop Grid (≥1024px)
```css
.event-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Tablet Grid (768px - 1023px)
```css
.event-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 0 20px;
}
```

### Mobile Grid (<768px)
```css
.event-grid {
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 16px;
}
```

---

## 9. Image Specifications

**Event Card Images**
- Aspect ratio: 16:9
- Recommended size: 640x360px (for retina: 1280x720px)
- Format: WebP with JPEG fallback
- Placeholder color: #0f0f0f
- Object-fit: cover
- Border-radius: 4px (within card)

### Loading Strategy
- Lazy loading for below-fold images
- Low-quality placeholder (LQIP) optional
- Alt text required for accessibility

---

## 10. Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### Container Max-Widths
- Mobile: 100% (with 16px padding)
- Tablet: 100% (with 20px padding)
- Desktop: 1200px centered
- Large Desktop: 1200px (doesn't expand further)

---

## 11. Header Design

### Structure
```
┌──────────────────────────────────────┐
│     [Logo/Title]                     │
│     16px/20px padding                 │
└──────────────────────────────────────┘
```

### Specifications
- Height: 64px (desktop), 56px (mobile)
- Background: #1a1a1a
- Logo/Title: 20px font size, 600 weight, #e0e0e0 color
- Position: Static (scrolls with page) or sticky
- Border-bottom: 1px solid #333333

---

## 12. Footer Design

### Structure
```
┌────────────────────────────────────┐
│  Copyright © 2026 Company Name     │
│  Padding: 32px vertical            │
└────────────────────────────────────┘
```

### Specifications
- Background: #0a0a0a
- Text color: #a0a0a0
- Font size: 14px
- Centered text alignment
- Border-top: 1px solid #333333

---

## 13. Hero Section

### Desktop Version
```
┌────────────────────────────────────┐
│         Event descriptions         │
│         (H1, 36px, centered)       │
│                                    │
│    Discover upcoming events and    │
│    learning opportunities          │
│    (16px, centered, max-width)     │
│                                    │
│    Padding: 64px vertical          │
└────────────────────────────────────┘
```

### Specifications
- Background: Linear gradient or solid dark color (#0a0a0a)
- Text alignment: Center
- Max-width for text: 600px
- Padding: 64px top/bottom (desktop), 40px (mobile)
- Text color: #e0e0e0

### Hero Title Font Sizing

**Primary Title (H1 "Pebble's play time")**
- Desktop font size: 56px
- Tablet font size: 48px
- Mobile font size: 36px
- Font weight: 700 (bold)
- Line height: 1.2
- Letter spacing: -0.02em (optional, for tighter spacing on large text)

This is significantly larger than the standard page title to create visual emphasis and immediately capture user attention.

### Hero Title Gradient

**Primary Title (H1 "Pebble's play time")**
- Effect: Linear gradient background with background-clip to text
- Gradient direction: 135deg (top-left to bottom-right)
- Gradient colors: 
  - Start: #7c5cff (Primary accent purple)
  - Middle: #6b4ce6 (Primary-700)
  - End: #5a3ccc (Primary-800)

**CSS Implementation:**
```css
.hero__title {
  background: linear-gradient(135deg, #7c5cff, #6b4ce6, #5a3ccc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
}

/* Optional: Animated gradient for enhanced visual effect */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero__title--animated {
  animation: gradientShift 6s ease infinite;
}
```

**Alternative Static Gradient:**
If animation is not desired, use the static version without animation keyframes. The gradient will remain fixed at the 135deg angle with smooth purple transitions suited to the dark theme.

---

## 14. Accessibility Requirements

### Contrast Ratios
- Normal text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators (2px outline)
- Logical tab order
- Skip to main content link

### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels where needed
- Alt text for all images
- Proper heading hierarchy (H1 → H2 → H3)

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum

---

## 15. Performance Targets

### Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Optimization Strategies
- Minified CSS/JS
- Optimized images (WebP, lazy loading)
- Critical CSS inline
- Minimal dependencies
- No render-blocking resources

---

## 16. Content Guidelines

### Event Card Titles
- Length: 3-6 words ideal
- Capitalize major words
- Descriptive and specific
- Example: "Neural Network Human Chain"

### Event Descriptions
- Length: 50-100 characters
- 2-3 lines maximum
- Clear and concise
- Action-oriented when possible
- Example: "Your team becomes a living neural network, learning to hit a target number through feedback."

### Button Text
- Keep consistent: "View details"
- Alternative options: "Learn more", "See details", "Read more"
- Action-oriented and clear

---

## 17. Visual Hierarchy Principles

### Priority Levels

**Level 1 (Highest):** Event card titles
- Largest text, bold weight
- High contrast color

**Level 2:** Section headers, CTA buttons
- Medium-large text, bold/semi-bold
- Contrasting background (buttons)

**Level 3:** Body text, descriptions
- Standard size, regular weight
- Readable but not dominant

**Level 4 (Lowest):** Meta information, footer text
- Smallest size, lighter color
- Supporting information

---

## 18. Animation & Transitions

### Hover Effects
```css
transition: all 0.2s ease-in-out;
```

**Card hover:**
- Transform: translateY(-4px)
- Shadow increase (darker shadow for dark theme)
- No color change

**Button hover:**
- Background color change
- Subtle lift (1px)
- Shadow addition (purple-tinted)

### Loading States
- Skeleton screens for cards
- Fade-in for images (0.3s)
- No spinners unless necessary

### Scroll Behavior
- Smooth scrolling enabled
- Subtle fade-in on scroll (optional)
- No parallax effects

---

## 19. States & Feedback

### Loading State
- Skeleton cards with pulsing animation
- Preserve layout (no shifting)
- Gray background placeholders

### Empty State
- Centered message
- Optional illustration
- Clear messaging

### Error State
- Red border on affected card
- Error message below
- Retry option

---

## 20. Browser Support

### Target Browsers
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 13+
- Chrome Android (last 2 versions)

### Graceful Degradation
- CSS Grid with flexbox fallback
- Modern CSS with fallbacks
- Progressive enhancement approach

---

## 21. Development Notes

### HTML Structure
```html
<header>
  <div class="container">
    <h1>Logo/Title</h1>
  </div>
</header>

<main>
  <section class="hero">
    <div class="container">
      <h1>Event descriptions</h1>
      <p>Subtitle text</p>
    </div>
  </section>
  
  <section class="events">
    <div class="container">
      <div class="event-grid">
        <article class="event-card">
          <h2>Event Title</h2>
          <div class="event-image"></div>
          <div class="event-content">
            <h3>About the event</h3>
            <p>Description text</p>
          </div>
          <button>View details</button>
        </article>
        <!-- Repeat cards -->
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>Copyright info</p>
  </div>
</footer>
```

### CSS Organization
1. Reset/Normalize
2. CSS Custom Properties (variables)
3. Base styles (typography, body)
4. Layout (grid, containers)
5. Components (cards, buttons)
6. Utilities
7. Responsive overrides

### Naming Convention
- BEM (Block Element Modifier) methodology
- Example: `.event-card`, `.event-card__title`, `.event-card--featured`

---

## 22. Asset Requirements

### Images Needed
- Event card images: 640x360px minimum
- Logo (if applicable): SVG preferred
- Favicon: 32x32px, 192x192px

### Icon System (Optional)
- Use system: Heroicons, Feather Icons, or similar
- Consistent size: 20px or 24px
- Stroke width: 2px
- Usage: Arrow icons, UI elements

---

## 23. Future Enhancements

### Phase 2 Considerations
- Search/filter functionality
- Category tags on cards
- Date/time information
- Registration status indicators
- Modal for detail view
- Social sharing buttons

### Scalability
- Design accommodates 10+ events
- Pagination or "Load more" if needed
- Filter sidebar for large catalogs

---

## 24. Design Checklist

**Before Development:**
- [ ] All breakpoints defined
- [ ] Color contrast verified (WCAG AA)
- [ ] Typography scale finalized
- [ ] Component states documented
- [ ] Assets prepared and optimized

**During Development:**
- [ ] Semantic HTML structure
- [ ] Responsive at all breakpoints
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Performance benchmarked

**Before Launch:**
- [ ] Cross-browser testing complete
- [ ] Mobile device testing complete
- [ ] Accessibility audit passed
- [ ] Performance targets met
- [ ] Content reviewed and approved

---

## 25. References & Resources

### Design Inspiration Sources
- Corporate event platforms (not consumer apps)
- University course listings
- Professional conference sites
- B2B SaaS marketing pages

### Tools for Implementation
- CSS Grid Generator
- Contrast checker (WebAIM)
- Responsive image breakpoint calculator
- Performance testing (Lighthouse)

---

## Appendix: Example CSS Variables

```css
:root {
  /* Colors - Dark Theme */
  --primary-600: #7c5cff;
  --primary-700: #6b4ce6;
  --primary-800: #5a3ccc;
  --neutral-50: #0a0a0a;
  --neutral-100: #1a1a1a;
  --neutral-200: #2a2a2a;
  --neutral-300: #3a3a3a;
  --neutral-700: #a0a0a0;
  --neutral-900: #e0e0e0;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 36px;
  
  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  
  /* Layout */
  --container-max: 1200px;
  --border-radius: 8px;
  --border-radius-sm: 6px;
  
  /* Effects */
  --transition: all 0.2s ease-in-out;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.5);
}
```

---

**Document Version:** 1.1  
**Last Updated:** February 2026  
**Status:** Ready for development