# Foundation CSS

[![npm version](https://badge.fury.io/js/@enodo%2Ffoundation-css.svg)](https://badge.fury.io/js/@enodo%2Ffoundation-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@enodo/foundation-css)](https://bundlephobia.com/package/@enodo/foundation-css)
[![Build Status](https://github.com/enodo-io/foundation-css/workflows/CI/badge.svg)](https://github.com/enodo-io/foundation-css/actions)

A lightweight, atomic-first CSS framework for building **fast**, **accessible**, and **maintainable** web interfaces. Created in 2019 and now open source, Foundation CSS provides utility classes for rapid prototyping and consistent design systems.

**[View Documentation](https://enodo-io.github.io/foundation-css)**

## Features

- **Lightweight**: Only **19.8KB gzipped** (156KB minified)
- **Mobile-first**: Responsive by default with consistent breakpoints
- **Accessible**: Built with accessibility in mind
- **Customizable**: Easy to customize with SCSS variables
- **Modular**: Import only what you need
- **Fast**: Optimized for performance and developer experience

## Installation

### NPM
```bash
npm install @enodo/foundation-css
```

### CDN
```html
<!-- Latest version -->
<link rel="stylesheet" href="https://unpkg.com/@enodo/foundation-css@latest/dist/index.min.css">

<!-- Specific version -->
<link rel="stylesheet" href="https://unpkg.com/@enodo/foundation-css@1.0.0/dist/index.min.css">

<!-- jsDelivr alternative -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@enodo/foundation-css@latest/dist/index.min.css">
```

### SCSS
```scss
// Import everything
@use "@enodo/foundation-css";

// Or import specific modules (short aliases)
@use "@enodo/foundation-css/typographies";
@use "@enodo/foundation-css/spacing-units";
@use "@enodo/foundation-css/colors";

// Variables and functions
@use "@enodo/foundation-css/variables/colors";
@use "@enodo/foundation-css/functions";
```

## Project Structure

```
src/
├── atomic/           # Atomic utility classes
│   ├── _backgrounds.scss
│   ├── _borders.scss
│   ├── _colors.scss
│   ├── _displays.scss
│   ├── _spacing-units.scss
│   └── ...
├── variables/        # Customizable variables
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   └── ...
├── functions/        # SCSS utility functions
│   ├── _forge.scss
│   ├── _px2rem.scss
│   └── ...
└── index.scss        # Main entry point
```

## Features

### Atomic Classes
Foundation CSS provides utility classes for:

- **Colors** : `.fc-*`, `.bg-*`, `.bc-*`
- **Display** : `.d-flex`, `.d-grid`, `.d-none`, ...
- **Spacing** : `.p*`, `.m*`, `.g*`
- **Typography** : Classes for sizes, weights, alignment optimized for reading on all devices
- **Positions** : `.ps-*`, `.t*`, `.l*`, ...
- **Visibility** : `.visibility-*`, `.opacity-*`
- **And much more...**

### Spacing Units & Typography

Foundation CSS implements a systematic approach to sizing through **Spacing Units** and **Typography Scale**, inspired by [BBC GEL guidelines](https://www.bbc.com/gel).

- **16 Spacing Units** (1 SU to 16 SU) for consistent margins, padding, and gaps
- **15 Typography Sizes** (atlas, elephant, canon, body-copy, etc.) with semantic naming
- **Responsive by default** with automatic scaling across breakpoints
- **Accessibility-focused** using rem units for browser text resizing compatibility

For detailed explanations and usage guidelines, see our [Sizing Concepts documentation](docs/sizing.njk).

### Responsive Breakpoint System
```scss
$breakpoints: (
  sm: 600px,
  md: 1008px,
  lg: 1280px,
);
```

### Utility Functions
- `px2rem()` : Convert px to rem
- `responsify()` : Built-in responsive support

## Available Scripts

```bash
# Build everything (CSS + docs)
npm run build

# Build only CSS
npm run build:css

# Build documentation
npm run build:docs

# Development with watch
npm run dev

# Check bundle size
npm run size

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Serve documentation
npm run serve
```

## Documentation

Complete documentation is available locally:

```bash
npm run serve
```

Then visit `http://localhost:8080` to browse all components and examples.

## Usage Examples

### Flexbox Layout
```html
<div class="d-flex fd-column g4 p4">
  <header class="bg-light-900 fc-light p4">Header</header>
  <main class="d-flex fl1 fd-column p4">Main content</main>
  <footer class="bg-green p4">Footer</footer>
</div>
```

### Responsive Grid
```html
<!-- Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="d-grid grid__1 sm:grid__2 md:grid__3 g4">
  <div class="bg-light p4">Card 1</div>
  <div class="bg-light p4">Card 2</div>
  <div class="bg-light p4">Card 3</div>
</div>
```

### Typography
```html
<h1 class="fs-canon fw-bold mb4">Main title</h1>
<p class="fs-paragon fc-light-700">Paragraph with good line spacing.</p>
```

### Conditional Classes
```html
<!-- Responsive classes -->
<div class="d-block sm:d-flex md:d-grid">
  <!-- Block on mobile, flex on tablet, grid on desktop -->
</div>

<!-- Hover effects -->
<button class="bg-blue fc-white h:bg-green h:fc-dark t">
  Hover me
</button>

<!-- Focus states -->
<input class="bc-light f:bc-blue f:bs-sm" type="text">
```

## Customization

### SCSS Variables
Customize the framework by redefining variables:

```scss
@use "@enodo/foundation-css" with (
  // Breakpoints for responsive design
  $breakpoints: (
    sm: 768px,
    md: 1024px,
    lg: 1440px,
  ),

  // Color palette with variations
  $colors: (
    primary: (
      main: #your-color, /* generate var(--primary) */
      100: #your-color, /* generate var(--primary-100) color variation */
    ),
    secondary: (
      main: #your-color, /* generate var(--secondary) */
    ),
  ),

  // Spacing units for consistent spacing (margin, padding, gap, positioning, ...)
  $spacing-units: (
    1: 4px,
    2: 8px,
    3: 12px,
    4: 16px,
    5: 20px,
    6: 24px,
    7: 32px,
    8: 40px,
    9: 48px,
    10: 56px,
    11: 64px,
    12: 72px,
    13: 80px,
    14: 120px,
    15: 160px,
    16: 200px,
  ),

  // Border radius values
  $borders: (
    xs: 3px,
    sm: 5px,
    md: 8px,
    lg: 16px,
    xl: 24px,
  ),

  // Box shadow definitions
  $box-shadows: (
    none: none,
    sm: (0 1px 2px hsla(0deg, 0%, 0%, 0.05)),
    md: (0 1px 3px hsla(0deg, 0%, 0%, 0.06)),
    lg: (0 1px 4px hsla(0deg, 0%, 0%, 0.09)),
    xl: (0 10px 24px hsla(0deg, 0%, 0%, 0.05)),
  ),

  // Generated background properties
  $backgrounds: (
    size: (auto, cover, contain),
    repeat: (repeat, no-repeat, repeat-x, repeat-y),
    position: (center, top, bottom, left, right),
  ),

  // Generated cursor types
  $cursors: auto, default, pointer, wait, move, not-allowed, help, text, grab, grabbing,

  // Generated display values
  $displays: block, grid, inline-grid, inline, inline-block, flex, inline-flex, none, table, table-cell, table-row, unset,

  // Generated interactivity properties
  $pointer-events: auto, none,
  $user-selects: auto, none,
  $user-drags: auto, none,

  // Generated list styling
  $list-styles: disc, decimal, inherit,
  $list-positions: inside, outside,

  // Generated object fit values
  $object-fit: contain, cover, fill, none,

  // Generated opacity values
  $opacities: (0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100),
  $opacities-hover: (0, 5, 50, 80, 100),
  $opacities-focus: (100),

  // Generated position values
  $positions: absolute, fixed, relative, static, sticky, unset,

  // Generated typography settings
  $font-families: (
    brand: "My funky font family",
    sans: (system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif),
    serif: ("Times New Roman", "Times", "Georgia", serif),
    mono: ("SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", monospace),
  ),
  // Generated font sizes
  // Visit https://github.com/enodo-io/foundation-css/blob/main/src/variables/_typographies.scss
  // for complete definition of corresponding font-size and line-height
  $font-sizes: (
    atlas,
    elephant,
    imperial,
    royal,
    foolscap,
    canon,
    trafalgar,
    paragon,
    double-pica,
    great-primer,
    body-copy,
    pica,
    long-primer,
    brevier,
    minion,
  ),
  // Generated font weight values
  $font-weights: (100, 200, 300, 400, 500, 600, 700, 800, 900),

  // Vertical alignment
  $vertical-aligns: baseline, bottom, middle, sub, super, text-bottom, text-top, top, unset,

  // Z-index scale
  $z-indexes: (
    hide: -1,
    base: 0,
    selected: 25,
    active: 50,
    dropdown: 1000,
    popover: 2000,
    tooltip: 3000,
    banner: 4000,
    nav: 5000,
    nav-fixed: 5050,
    modal-bg: 9000,
    modal: 9050,
  )
);
```

### Selective Import
Import only the modules you need:

```scss
@use "@enodo/foundation-css/backgrounds";
@use "@enodo/foundation-css/spacing-units";
@use "@enodo/foundation-css/typographies";
```

### Component creation with Foundation CSS variables
Create custom components using Foundation CSS variables:

```scss
@use "sass:map";
@use "@enodo/foundation-css/variables/spacing-units" as *;
@use "@enodo/foundation-css/variables/borders" as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: map.get($borders, sm);
  cursor: pointer;
  transition: all 0.2s ease;

  // Use spacing units for padding
  padding:
    map.get($spacing-units, 3)
    map.get($spacing-units, 5);

  // Different button sizes
  &__small {
    padding:
      map.get($spacing-units, 2)
      map.get($spacing-units, 3);
    font-size: 0.875rem;
  }

  &__large {
    padding:
      map.get($spacing-units, 4)
      map.get($spacing-units, 7);
    font-size: 1.125rem;
  }

  // Button variants
  &__primary {
    background-color: var(--green);
    color: var(--light);

    &:hover {
      opacity: 0.8;
    }
  }

  &__secondary {
    background-color: var(--light-500);
    color: var(--light);

    &:hover {
      opacity: 0.8;
    }
  }
}
```

This approach ensures consistency with your design system's spacing scale while creating reusable components.

## Architecture

Foundation CSS follows Atomic CSS principles:

- **Atomicity** : Each class has a single responsibility
- **Composability** : Classes combine to create complex layouts
- **Performance** : Optimized size and automatic CSS purging
- **Maintainability** : Modular and well-structured SCSS code

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## TODO

- Complete examples in the documentation
- Add conditional classes for print media
- Expose reusable variables for components as CSS variables (--myvar): spacing units, breakpoints, box-shadows
- Refactor documentation generation to use loops and variables instead of hardcoded HTML (reduce code duplication in the repo)
- Improve documentation
- Create a better design or UI for the documentation using only Foundation CSS tools
- Make a better default color palette
- Check color palette contrast WCAG compatibility in documentation
- Facilitate dark mode creation

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to:

- The **BBC UX&D team** for their pioneering work on the [BBC GEL (Global Experience Language) guidelines](https://www.bbc.com/gel). The spacing unit and typography concepts in Foundation CSS are directly inspired by their systematic, accessibility-focused approach to design systems.

- The **Stack Overflow team** for their excellent [Stacks design system](https://stackoverflow.design/product/develop/using-stacks/). Foundation CSS's atomic naming conventions and conditional class system draw inspiration from their thoughtful, developer-friendly approach to utility-first CSS.
