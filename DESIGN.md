---
name: Donde Kike
description: A bold neighborhood fast-food counter built from sign-painted fields and direct ordering controls.
colors:
  tomato-red: "oklch(0.54 0.225 29)"
  mustard-yellow: "oklch(0.82 0.16 84)"
  deli-paper-cream: "oklch(0.965 0.025 86)"
  near-black-ink: "oklch(0.17 0.035 44)"
  toasted-hover: "oklch(0.92 0.075 84)"
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
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
rounded:
  none: "0"
  action: "999px"
  circle: "50%"
spacing:
  page-min: "22px"
  page-max: "96px"
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
  category-tab-selected:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.deli-paper-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 20px"
    height: "46px"
  cart-fab:
    backgroundColor: "{colors.mustard-yellow}"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.circle}"
    size: "62px"
---

# Design System: Donde Kike

## Overview

**Creative North Star: "The Sign-Painted Order Counter"**

Donde Kike translates a familiar neighborhood fast-food counter into broad tomato, mustard, cream, and ink fields. One burger dominates the opening view; Archivo Black declarations feel like storefront signage, while Manrope keeps the large menu, cart, and WhatsApp ordering flow practical.

The system moves from appetite to category choice, product selection, cart editing, promotions, and WhatsApp handoff without inventing prices or claims. Photography supplies the only texture; the interface remains flat, typographic, and tactile.

**Key Characteristics:**

- Full-bleed brand-color sections and hard ink rules.
- Oversized Archivo Black declarations with compressed leading.
- Horizontal pill tabs for menu categories.
- Ruled add-to-cart menu rows.
- Persistent mustard cart button and cream side drawer.
- WhatsApp as the final ordering action.

## Colors

### Primary

- **Tomato Red** (`colors.tomato-red`): Hero fallback, manifesto field, add labels, destructive controls, and cart badge.

### Secondary

- **Mustard Yellow** (`colors.mustard-yellow`): Primary actions, mobile navigation, contact field, emphasis, and selection.

### Neutral

- **Deli-Paper Cream** (`colors.deli-paper-cream`): Menu canvas, drawer, and light text.
- **Near-Black Ink** (`colors.near-black-ink`): Copy, dividers, selected tabs, promotion/footer fields, and inverse actions.
- **Toasted Hover** (`colors.toasted-hover`): Temporary menu-item feedback only.

**The Four-Pot Rule.** Tomato, mustard, cream, and ink own the brand; state tints never introduce a new hue family.

## Typography

**Display Font:** Archivo Black
**Body Font:** Manrope

Archivo Black is reserved for short, uppercase declarations, category headings, and the cart title. Manrope handles descriptions, tabs, item names, quantities, navigation, and actions.

**The Painted Declaration Rule.** Never use Archivo Black for paragraphs or dense operational text.

## Layout

Full-width sections use fluid 22–96px gutters and 80–180px vertical rhythm. Desktop introductions use unequal two-column grids; the manifesto adds an emblem column. Category tabs form one horizontally scrollable row above a single active panel. Menu items use a two-column ruled grid with 94px minimum rows. The fixed cart opens a cream, right-aligned drawer capped at 480px over a dark scrim.

At 760px, navigation becomes a full-screen mustard dialog, section grids collapse, and menu items become 82px single-column rows. Tabs remain one scrolling row and extend to the right edge. The 760px hero places photography in the upper 66% and anchors copy below it. The cart button shrinks from 62px to 56px and sits 16px from the lower-right edges; the drawer fills available width.

**The Browse-Then-Build Rule.** Show one category panel at a time rather than the entire catalog.

## Elevation & Depth

The site is flat except where layering is functional. The cart button alone uses `0 12px 30px rgb(28 12 8 / 25%)`; the open drawer uses `rgb(28 12 8 / 55%)` behind it. Ordinary sections, tabs, rows, and buttons have no shadow.

## Shapes

Sections, panels, rows, and the drawer are square. Primary actions and tabs are pills; cart, close, quantity, badge, and flame controls are circles. Avoid intermediate card radii.

## Components

### Buttons

Primary actions are 52px mustard pills with heavy ink labels and optional 18px icons. Fine-pointer hover lifts 2px and turns cream; press scales to 0.97. Dark inverse pills appear on mustard fields and in the cart. Focus uses a 3px outline with 5px offset.

### Category Navigation

Tabs are 46px pills with 2px ink borders, 20px horizontal padding, and 10px gaps. The selected tab is ink with cream text; other tabs turn mustard on hover. Arrow Left/Right, Home, and End update the active tab through a roving tab index.

### Menu Items

Each product is a full-width button with mixed-ink rules, a weight-800 name, and a tomato uppercase “Agregar” label with plus icon. Hover adds the toasted wash and lifts 2px. Activation adds or increments the contextualized item in the cart.

### Cart

The persistent mustard circle shows total quantity in a tomato badge. Adding an item triggers a bordered cream status toast above it with a tomato checkmark, while the cart performs a 420ms scale-and-rotate bump. The toast is an `aria-live` status and clears automatically. The cream drawer has a ruled header, circular close control, centered empty state, ruled cart items, 36px circular quantity controls, tomato removal, and a full-width WhatsApp checkout action. Opening either modal locks document scrolling; mobile navigation additionally traps focus, closes on Escape, and restores focus.

### Promotions

The promotion band is an ink field with a mustard uppercase eyebrow, oversized cream declaration, explanatory copy, and WhatsApp consultation action. Promotions and prices are framed as current information to confirm, never fixed claims.

### Location Map

The mustard contact section ends with a full-width, two-pixel ink divider and a two-column Google Maps block. A compact “Visítanos” eyebrow, Archivo location heading, and underlined external link occupy the narrow column; the embedded map occupies the wide column at 420px high with restrained saturation and slightly raised contrast. On mobile the block stacks, the map becomes 340px high, and the top margin tightens.

### Motion

Color states use 160ms; spatial feedback uses 180ms with `cubic-bezier(0.23, 1, 0.32, 1)`. The add confirmation toast fades and rises into place; the cart bump peaks at 1.12 scale with a -5deg rotation over 420ms. Reduced motion removes smooth scrolling, toast transitions, and the cart bump animation.

## Do's and Don'ts

### Do:

- **Do** lead with the burger and a direct WhatsApp action.
- **Do** preserve one active category panel and keyboard tab behavior.
- **Do** keep the cart persistent, quantity-aware, and editable.
- **Do** preserve modal focus, Escape, scroll-lock, and visible-focus behavior.
- **Do** phrase prices and promotions as information confirmed through WhatsApp.

### Don't:

- **Don't** publish unverified prices, addresses, partners, or fixed promotions.
- **Don't** expose every category at once or wrap mobile tabs.
- **Don't** add generic product cards, gradients, glass, or decorative shadows.
- **Don't** remove persistent cart access or the multi-item WhatsApp summary.
