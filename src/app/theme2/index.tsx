export * from "./tokens";
export * from "./themes";


// src/
// └── theme/
//     ├── tokens/                      # Design tokens (base system)
//     │   ├── color.ts                 # Neutral/base colors (non-theme-specific)
//     │   ├── spacing.ts               # Spacing scale
//     │   ├── font-size.ts             # Font sizes
//     │   ├── font-weight.ts           # Font weights
//     │   ├── border.ts                # Border radius, width, etc.
//     │   ├── z-index.ts               # Z-index tokens
//     │   ├── elevation.ts             # Shadow system
//     │   └── index.ts                 # Aggregates all tokens
//     │
//     ├── themes/
//     │   ├── common.ts                # Shared theme logic (applied to both light/dark)
//     │   ├── light.ts                 # Light theme specific overrides
//     │   ├── dark.ts                  # Dark theme specific overrides
//     │   └── index.ts                 # Combines common + light/dark + tokens
//     │
//     ├── utils/
//     │   ├── theme-utils.ts           # Helpers: spacing(), rem(), etc.
//     │   └── media-queries.ts         # Centralized breakpoints
//     │
//     ├── global-style.ts             # Global styles with `createGlobalStyle`
//     └── index.ts                    # Exports final theme objects


