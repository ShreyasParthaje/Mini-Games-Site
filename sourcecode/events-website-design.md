# AI/ML College Club - Events Website Design

## Overview
A responsive events showcase website for the AI/ML college club featuring 8 different events with detailed descriptions accessible through interactive popups.

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

2. **Event Title**
   - Font: Bold, white text
   - Size: 24-28px (mobile-responsive)
   - Alignment: Center

3. **Image Placeholder**
   - Aspect ratio: 16:9 or similar
   - Background: Darker gray (#2a2a30 / similar)
   - Border radius: 4-8px
   - Margin: 16px 0

4. **About Section**
   - Label: "About the event"
   - Text: Brief description (2-3 lines)
   - Font: Regular, light gray/white
   - Size: 14-16px

5. **CTA Button**
   - Text: "View details"
   - Background: Vibrant purple/blue (#5b4cff / similar)
   - Color: White
   - Padding: 12px 24px
   - Border radius: 4-6px
   - Hover state: Slightly lighter/darker shade
   - Full width on mobile

### Page Header
- Title: "Event descriptions"
- Font: Bold, extra large
- Color: White
- Alignment: Center
- Margin bottom: 32-40px

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