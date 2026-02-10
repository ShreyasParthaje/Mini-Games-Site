# AI/ML College Club - Events Website Design

## Layout Specifications

### Mobile Layout (< 768px)
- **Grid Structure**: 1x8 (single column, 8 rows)
- **Card Arrangement**: Vertical stack of 8 event cards

### Desktop/Laptop Layout (≥ 768px)
- **Grid Structure**: 2x4 (2 columns, 4 rows)
- **Card Arrangement**: Grid layout with even spacing

## Design Elements

### Event Card Component
Each event card includes:

1. **Card Container**
   - Background: Dark gray (#3d3d4a / similar)
   - Border radius: Medium (8-12px)
   - Padding: 20-24px
   - Box shadow: Subtle elevation
   - **Layout**: CSS Flexbox for proper content flow
   - **Display**: `flex; flex-direction: column;`
   - **Height**: 100% to maintain consistent card heights
   - **Purpose**: Ensures image and text don't overlap, content stays contained

2. **Event Title**
   - Font: Bold, white text
   - Size: 24-28px (mobile-responsive)
   - Alignment: Center
   - **Flex property**: `flex-shrink: 0` (prevents title compression)
   - **Margin bottom**: 20px to separate from image

3. **Image Placeholder**
   - Aspect ratio: 16:9 (maintained responsively across all screen sizes)
   - Background: Darker gray (#2a2a30 / similar)
   - Border radius: 4-8px
   - **Responsive sizing**: Uses CSS `aspect-ratio: 16/9` property
   - **Width**: 100% of card width (automatically scales)
   - **Height**: Automatically calculated from aspect ratio
   - **Object-fit**: `cover` to prevent distortion
   - **Flex property**: `flex-shrink: 0` (prevents image compression)
   - **Overflow**: `hidden` on wrapper to prevent image bleed
   - **Margin bottom**: 16px spacing
   - **Behavior**: Repositions automatically on window resize without layout shift

4. **About Section**
   - Label: "About the event"
   - Text: Brief description (2-3 lines)
   - Font: Regular, light gray/white
   - Size: 14-16px
   - **Text overflow prevention**: 
     - Line clamping: `-webkit-line-clamp: 3` enforces max 3 lines
     - Display method: `-webkit-box; -webkit-box-orient: vertical`
     - Overflow handling: `overflow: hidden` clips excess text
     - Ensures text never overlaps or bleeds into image area
   - **Flex property**: `flex-grow: 1` (fills available space)
   - **Container CSS**: `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical;`

5. **CTA Button**
   - Text: "View details"
   - Background: Vibrant purple/blue (#5b4cff / similar)
   - Color: White
   - Padding: 12px 24px
   - Border radius: 4-6px
   - Hover state: Slightly lighter/darker shade
   - Full width on mobile
   - **Flex property**: `flex-shrink: 0; margin-top: auto` (always at card bottom)
   - **Behavior**: Button positioned at card bottom regardless of content length

### Responsive Image and Text Behavior
**Image Repositioning on Resize:**
- Desktop (≥768px): Image scales proportionally with card
- Mobile (<768px): Image maintains 16:9 ratio, full card width
- Mechanism: Intrinsic aspect-ratio CSS property handles automatic resizing
- Result: No layout shift, no distortion, smooth responsiveness

**Text Overflow Prevention:**
- Method: Combined flexbox + line-clamp strategy
- Description text: Clamped to 3 lines maximum
- Content container: `overflow: hidden` prevents spillover
- Spacing discipline: Fixed gaps keep text away from image
- Button positioning: `margin-top: auto` prevents overlap with content
- Result: All content stays contained, image never obscured

### Page Header
- Title: "Event descriptions"
- Font: Bold, extra large
- Color: White
- Alignment: Center
- Margin bottom: 32-40px

## Hero Section Design

### Hero Section Container
- **Position**: `relative` (for logo positioning context)
- **Background**: Dark color (#0a0a0a) or gradient
- **Padding**: 64px top/bottom (desktop), 40px (mobile)
- **Min-height**: 400px (desktop), 350px (mobile)
- **Overflow**: `hidden` to contain background elements
- **Z-index layering**: Ensures proper stacking context

### Background Logo Positioning
**Logo Image (.hero__logo-corner)**
- **Position**: `absolute` (positioned within hero container)
- **Top**: 20px (desktop), 10px (mobile) - positioned near top, not outside viewport
- **Left**: 20px (desktop), 50% with transform for center (mobile) - positioned to left on desktop, centered on mobile
- **Transform**: `translateX(-50%)` on mobile to center the logo
- **Width**: 200px (desktop), 150px (mobile), 120px (small mobile) - restored to earlier, reasonable size
- **Height**: `auto` (maintains aspect ratio)
- **Opacity**: 0.4-0.5 (subtle, non-intrusive background element)
- **Z-index**: 0 or 1 (stays behind text)
- **Pointer-events**: `none` (doesn't interfere with user interactions)
- **Object-fit**: `contain` (preserves full logo visibility)

**Logo CSS Implementation:**
```css
.hero__logo-corner {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: auto;
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
  object-fit: contain;
}

/* Mobile: Center the logo */
@media (max-width: 767px) {
  .hero__logo-corner {
    width: 150px;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
  }
}

/* Small Mobile: Further reduce size but keep visible */
@media (max-width: 479px) {
  .hero__logo-corner {
    width: 120px;
    top: 10px;
  }
}
```

### Text Content Container (.container)
- **Position**: `relative` (positions above logo, z-index higher than 0)
- **Z-index**: 10 (ensures text is above logo)
- **Max-width**: 600px (constrains text width)
- **Margin**: 0 auto (centers container)
- **Padding**: 0 20px (horizontal padding on mobile)
- **Display**: `flex` or block (allows proper text centering)
- **Flex-direction**: `column` (if using flexbox)
- **Align-items**: `center` (centers content horizontally)
- **Text-align**: `center` (centers all text)
- **Top spacing (mobile)**: Add top margin to push text below logo - approximately 140px on mobile

**Content Container CSS:**
```css
.hero .container {
  position: relative;
  z-index: 10;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

/* Mobile: Add top margin to push text below centered logo */
@media (max-width: 767px) {
  .hero .container {
    margin-top: 120px;
  }
}

/* Small Mobile: Adjust top margin for smaller logo */
@media (max-width: 479px) {
  .hero .container {
    margin-top: 100px;
  }
}
```

### Hero Title (.hero__title)
- **Font size**: 56px (desktop), 48px (tablet), 36px (mobile)
- **Font weight**: 700 (bold)
- **Line height**: 1.2
- **Margin bottom**: 24px (desktop), 16px (mobile)
- **Color**: Gradient (purple: #7c5cff → #6b4ce6 → #5a3ccc)
- **Word-wrap**: `break-word` (prevents text overflow on small screens)
- **Overflow-wrap**: `break-word` (forces word breaks if needed)
- **Hyphens**: `auto` (optional: enables hyphenation)

**Title CSS:**
```css
.hero__title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  background: linear-gradient(135deg, #7c5cff, #6b4ce6, #5a3ccc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 1023px) {
  .hero__title {
    font-size: 48px;
  }
}

@media (max-width: 767px) {
  .hero__title {
    font-size: 36px;
    margin-bottom: 16px;
  }
}
```

### Hero Subtitle (.hero__subtitle)
- **Font size**: 16px (desktop/tablet), 14px (mobile)
- **Font weight**: 400 (regular)
- **Line height**: 1.6
- **Color**: #e0e0e0
- **Max-width**: 550px (constrains text width)
- **Margin**: 0 auto (centers container)
- **Word-wrap**: `break-word` (prevents overflow)
- **Overflow-wrap**: `break-word`

**Subtitle CSS:**
```css
.hero__subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 550px;
  margin: 0 auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 767px) {
  .hero__subtitle {
    font-size: 14px;
    line-height: 1.5;
  }
}
```

### Mobile Responsive Adjustments (< 768px)
- **Hero padding**: Reduce to 40px top/bottom (from 64px)
- **Logo position**: Center logo with `left: 50%; transform: translateX(-50%)`
- **Logo width**: Reduce to 150px (smaller but visible)
- **Logo opacity**: Keep at 0.4 (maintains visibility)
- **Logo placement**: Near top of hero section (top: 15px)
- **Title size**: 36px (from 56px)
- **Subtitle size**: 14px (from 16px)
- **Container padding**: 0 16px (horizontal padding for safety)
- **Container margin-top**: 120px (pushes text below centered logo)
- **Container max-width**: 90vw (responsive to viewport)

**Mobile Layout Strategy:**
1. Logo centered at top of hero
2. Text pushed down below logo with margin-top
3. All elements centered and stacked vertically
4. Logo remains visible and doesn't disappear

### Small Mobile Adjustments (< 480px)
- **Logo visibility**: ALWAYS visible (no `display: none`)
- **Logo width**: 120px (further reduced but maintained)
- **Hero padding**: 32px top/bottom
- **Title size**: 28px (further reduced)
- **Subtitle size**: 13px
- **Line height**: Reduce slightly for compact fit
- **Container padding**: 0 12px (tighter margins)
- **Container margin-top**: 100px (adjusted for smaller logo)

**Small Mobile CSS:**
```css
@media (max-width: 479px) {
  .hero {
    padding: 32px 0;
  }
  
  .hero__logo-corner {
    width: 120px;
    top: 10px;
    /* Logo remains visible - NO display:none */
  }
  
  .hero .container {
    margin-top: 100px;
    padding: 0 12px;
  }
  
  .hero__title {
    font-size: 28px;
    margin-bottom: 12px;
  }
  
  .hero__subtitle {
    font-size: 13px;
    line-height: 1.4;
  }
}
```

### Mobile Logo Positioning Strategy (UPDATED)
1. **Desktop (≥768px)**: Logo positioned to left at original size (200px)
2. **Mobile (< 768px)**: Logo centered and sized at 150px, text pushed below with margin
3. **Small Mobile (< 480px)**: Logo size reduced to 120px, text still below, logo always visible
4. **Key principle**: Logo NEVER disappears on any screen size
5. **Text always below logo**: Achieved through top margin on container
6. **Logo always accessible**: Maintains visibility and doesn't get cut off

## Events List

### Event 1: Neural Network Human Chain
**Brief Description**: "Your team becomes a living neural network, learning to hit a target number through feedback."

**Detailed Description**: [To be provided]

---

### Event 2: Optimizers dilemma
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 3: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 4: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 5: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 6: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 7: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

### Event 8: [Event Name]
**Brief Description**: [To be provided]

**Detailed Description**: [To be provided]

---

## Popup/Modal Component

### Structure
- **Overlay**: Semi-transparent dark background (rgba(0,0,0,0.7))
- **Modal Container**: 
  - Max width: 600px (mobile: 90% width)
  - Background: Dark gray matching card design
  - Border radius: 12px
  - Padding: 32px

### Content Elements
1. **Event Title**: Large, bold, centered
2. **Event Image**: Full width within modal
3. **Detailed Description**: 
   - Multiple paragraphs
   - Rules and instructions
   - Team requirements
   - Judging criteria
   - Any special notes
4. **Close Button**: 
   - Position: Top right corner
   - Icon: X or close symbol
   - Color: White/light gray

### Interaction
- **Trigger**: Click on "View details" button
- **Animation**: Fade in with scale effect
- **Close methods**: 
  - Click close button
  - Click outside modal
  - Press ESC key

## Color Palette

### Primary Colors
- **Background**: Very dark gray (#1a1a1f or similar)
- **Card Background**: Dark gray (#3d3d4a)
- **Image Placeholder**: Darker gray (#2a2a30)
- **Primary Accent**: Vibrant purple/blue (#5b4cff)
- **Text Primary**: White (#ffffff)
- **Text Secondary**: Light gray (#b0b0b0)

### Interactive States
- **Hover**: 10% lighter/darker shade of base color
- **Active**: 15% change from base color

## Typography

### Font Families
- **Primary**: Inter, Segoe UI, or similar modern sans-serif
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes
- **Page Title**: 40-48px (mobile: 32-36px)
- **Event Title**: 24-28px (mobile: 20-24px)
- **Body Text**: 16px (mobile: 14-16px)
- **Button Text**: 16px
- **Small Text**: 14px

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Technical Notes
- Use CSS Grid for layout flexibility
- Implement smooth transitions for hover states (0.2-0.3s)
- Ensure accessibility with proper ARIA labels
- Mobile-first approach recommended
- Consider lazy loading for event images

## Next Steps
1. Provide detailed descriptions for all 8 events
2. Finalize event names and brief descriptions
3. Gather/create event images
4. Implement frontend code (HTML/CSS/JS or React)
5. Test responsive behavior across devices
6. Add great animations that work very smooth

---