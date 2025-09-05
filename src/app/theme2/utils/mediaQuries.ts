// Centralized breakpoints
const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
};

export const media = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
};
