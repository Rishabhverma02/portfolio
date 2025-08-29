export const generateShades = (baseHue: number, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const lightness = 40 + i * (50 / count);
    return `hsl(${baseHue}, 70%, ${lightness}%)`;
  });
};
