// Convert px → rem
export const rem = (px: number, base = 16): string => `${px / base}rem`;

// Get spacing (shortcut function)
export const spacing = (factor: number): string => `${factor * 8}px`;
