---
name: Brasa Brava
description: A loud neighborhood burger counter built from flat sign-painted fields and appetite-first photography.
colors:
  tomato-red: "oklch(0.54 0.225 29)"
  mustard-yellow: "oklch(0.82 0.16 84)"
  deli-paper-cream: "oklch(0.965 0.025 86)"
  near-black-ink: "oklch(0.17 0.035 44)"
  menu-row-hover: "oklch(0.92 0.075 84)"
typography:
  display:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(3.375rem, 7.2vw, 6.75rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(4rem, 6.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(2.125rem, 4vw, 3.875rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  none: "0"
  action: "999px"
  circle: "50%"
spacing:
  page-min: "22px"
  page-max: "96px"
  action-x: "28px"
  section-min: "80px"
  section-max: "180px"
components:
  button-primary:
    backgroundColor: "{colors.mustard-yellow}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 28px"
    height: "52px"
  button-dark:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.deli-paper-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 28px"
    height: "52px"
  icon-action:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.deli-paper-cream}"
    rounded: "{rounded.circle}"
    size: "58px"
---

# Design System: Brasa Brava

## Overview

**Creative North Star: "The Sign-Painted Burger Counter"**

Brasa Brava feels like a neighborhood burger counter translated into crisp digital fields. Tomato red, deli-paper cream, mustard yellow, and near-black ink behave like sign paint: broad, blunt, and highly legible. Product photography is the only source of physical texture; the interface itself remains typographic, flat, and direct.

The system is appetite-first and deliberately loud without becoming busy. Oversized condensed-looking display forms carry the attitude, while compact Manrope copy keeps menu details practical. Density loosens around declarations and tightens around ordering decisions. The visual world supports the product promise: show the food immediately, name the choice concretely, and never manufacture social proof or operational certainty.

**Key Characteristics:**

- Flat, full-bleed color fields with near-black divider lines.
- Oversized Archivo Black declarations with very tight leading and tracking.
- Mustard pill actions and circular near-black utility controls.
- Food photography as the sole textured material.
- Direct Spanish copy with no decorative claims or filler UI.

## Colors

The palette behaves like four pots of sign paint: hot tomato, warm mustard, pale deli paper, and dense ink, with one restrained mustard-tinted hover surface.

### Primary

- **Tomato Red** (`colors.tomato-red`): Owns the hero fallback field, manifesto, interactive hover accents, scrollbar, and contextual focus rings.

### Secondary

- **Mustard Yellow** (`colors.mustard-yellow`): Marks the primary order action, emphasized words, flame details, selection, and the full-screen mobile navigation.

### Neutral

- **Deli-Paper Cream** (`colors.deli-paper-cream`): The base canvas, light text on dark fields, and scrollbar track.
- **Near-Black Ink** (`colors.near-black-ink`): Body text, rules, dark actions, footer field, and circular controls.
- **Toasted Mustard Wash** (`colors.menu-row-hover`): Appears only as the desktop menu-row hover response.

### Named Rules

**The Four-Pot Rule.** Build the interface from tomato, mustard, cream, and ink; the hover wash is a state, not a fifth brand color.

**The Texture Belongs to Food Rule.** Keep UI surfaces flat and clean. Texture comes from burger photography, never from decorative grain, gradients, or faux paper effects.

## Typography

**Display Font:** Archivo Black (with sans-serif fallback)  
**Body Font:** Manrope (with sans-serif fallback)

**Character:** Archivo Black turns headlines into painted signage: broad, compressed through tight tracking, and intentionally blunt. Manrope provides a clear, contemporary countervoice for navigation, descriptions, prices, and actions.

### Hierarchy

- **Display** (`typography.display`): Section declarations such as the menu heading; use very tight leading and uppercase copy.
- **Headline** (`typography.headline`): Hero and location statements, capped at 6rem in the first viewport so type never overpowers the burger.
- **Title** (`typography.title`): Burger names and other item-level declarations.
- **Body** (`typography.body`): Descriptions and explanatory copy, generally held between 34ch and 58ch.
- **Label** (`typography.label`): Navigation, prices, buttons, cues, and compact utility language.

### Named Rules

**The Painted Declaration Rule.** Use Archivo Black for short declarations, never for explanatory paragraphs.

**The Tight-at-Scale Rule.** Large type earns its force from compact line-height and negative tracking; do not loosen it into generic marketing typography.

## Layout

The page uses full-width horizontal fields with fluid gutters from `spacing.page-min` to `spacing.page-max`. Major section padding expands from `spacing.section-min` toward `spacing.section-max`, while the header uses a three-column grid that balances the wordmark, navigation, and order action.

Desktop layouts favor strong asymmetry: the hero image fills the viewport behind a left-side copy column; menu and location introductions split into unequal columns; the manifesto uses an icon, declaration, and copy column. Menu items are horizontal rows with a minimum height of 220px and hard ink dividers.

At 760px and below, every multi-column section collapses to one column. The burger image occupies the upper 66% of a 760px hero and copy anchors to the bottom; menu rows stack; manifesto and location content become vertical; the footer becomes a left-aligned stack. Mobile gutters remain 22px, controls stretch when a full-width action improves reach, and horizontal overflow is never permitted.

**The Appetite-First Viewport Rule.** The first screen belongs to one life-size burger, one product name, and one mustard action. Supporting explanation stays subordinate.

## Elevation & Depth

The system is flat by design and uses no box shadows. Depth comes from photographic lighting, overlapping hero copy, alternating full-bleed color fields, strong two-pixel rules, and small motion responses. Focus is expressed with a three-pixel outline and five-pixel offset rather than glow or elevation.

### Named Rules

**The No-Shadow Rule.** Never add card shadows, ambient glows, or floating panels. Use color adjacency, rules, and scale to establish hierarchy.

## Shapes

The dominant form language is a contrast between hard-edged page fields and fully rounded actions. Sections, rows, and content blocks have square corners (`rounded.none`); order actions use the pill radius (`rounded.action`); icon controls and the flame mark use circles (`rounded.circle`). Borders are structural and confident—two-pixel ink or mustard strokes—not fine decorative outlines.

**The Ends-or-Edges Rule.** A shape is either square and architectural or fully rounded and actionable. Avoid intermediate card radii.

## Components

### Buttons

Buttons feel compact, tactile, and decisive.

- **Shape:** Fully rounded pill (`rounded.action`) with a minimum height of 52px.
- **Primary:** Mustard field, ink text, heavy label type, and 28px horizontal padding (`components.button-primary`).
- **Hover / Focus:** On fine pointers, lift two pixels and turn cream over 160ms; keyboard focus uses the global three-pixel outline. Active state scales to 0.97.
- **Dark:** Ink field with cream text (`components.button-dark`), used on mustard surfaces.

### Cards / Containers

Menu entries are not floating cards; they are ruled list rows.

- **Corner Style:** Square (`rounded.none`).
- **Background:** Cream at rest; toasted mustard wash on desktop hover.
- **Shadow Strategy:** None.
- **Border:** Two-pixel ink rules above the list and below every row.
- **Internal Padding:** Mobile rows use 34px vertically; desktop rows rely on a 220px minimum height.

### Navigation

Desktop navigation is centered in the absolute hero header with 14px, weight-700 Manrope links; links turn mustard on fine-pointer hover. The brand is a stacked 22px, weight-900 wordmark with BRAVA in mustard. At 760px, links and compact order action disappear in favor of a menu icon. The opened navigation becomes a full-viewport mustard field with Archivo Black links and an ink circular close control.

### Menu Order Control

The menu-row arrow is a 58px ink circle with cream icon (`components.icon-action`). On fine-pointer hover it rotates eight degrees and turns tomato; on press it scales to 0.95. This control carries the list's strongest local action cue without becoming a second pill button.

### Flame Mark

The manifesto emblem is an 86px mustard-outlined circle with a 40px flame icon; on mobile it reduces to 66px. It acts as a compact stamp, not a logo replacement.

### Motion

State transitions use 160–180ms. Transform-heavy responses use the exponential-feeling ease-out curve (`cubic-bezier(0.23, 1, 0.32, 1)`); simple color changes use standard ease. The mobile navigation arrives over 180ms from 12px above while fading in. Reduced-motion mode removes smooth scrolling and action/link transition duration.

## Do's and Don'ts

### Do:

- **Do** let one appetite image dominate the first viewport.
- **Do** use full-bleed tomato, mustard, cream, or ink fields to separate major sections.
- **Do** reserve Archivo Black for short, high-impact declarations and Manrope for useful detail.
- **Do** use hard rules and color changes instead of card chrome or shadows.
- **Do** preserve the 760px single-column collapse and 22px mobile gutter.
- **Do** pair every motion response with a reduced-motion-safe result.

### Don't:

- **Don't** introduce gradients, decorative texture, glass effects, or shadowed cards.
- **Don't** add intermediate corner radii; use square fields, pill actions, or circles.
- **Don't** expand hero display text beyond 6rem or let copy compete with the burger.
- **Don't** dilute the palette with extra accents or use the hover wash as a resting surface.
- **Don't** add feature-card grids, badges, testimonials, statistics, or unverified operational claims.
